<?php

namespace App\Controllers;

class AdminController extends BaseController
{
    private $modules = [
        'publications' => [
            'title' => 'Publications', 'singular' => 'Publication',
            'fields' => [
                'title' => ['type' => 'text', 'label' => 'Title'],
                'author' => ['type' => 'text', 'label' => 'Author'],
                'description' => ['type' => 'textarea', 'label' => 'Description'],
                'cover_image' => ['type' => 'text', 'label' => 'Cover Image URL'],
                'status' => ['type' => 'select', 'label' => 'Status', 'options' => ['Active', 'Inactive']]
            ]
        ],
        'news' => [
            'title' => 'News & Updates', 'singular' => 'News Article',
            'fields' => [
                'title' => ['type' => 'text', 'label' => 'Title'],
                'content' => ['type' => 'textarea', 'label' => 'Content'],
                'image' => ['type' => 'text', 'label' => 'Image URL'],
                'status' => ['type' => 'select', 'label' => 'Status', 'options' => ['Active', 'Draft']]
            ]
        ],
        'gallery' => [
            'title' => 'Gallery Images', 'singular' => 'Image',
            'fields' => [
                'title' => ['type' => 'text', 'label' => 'Title'],
                'image_url' => ['type' => 'text', 'label' => 'Image URL'],
                'status' => ['type' => 'select', 'label' => 'Status', 'options' => ['Active', 'Inactive']]
            ]
        ],
        'videos' => [
            'title' => 'Videos', 'singular' => 'Video',
            'fields' => [
                'title' => ['type' => 'text', 'label' => 'Title'],
                'youtube_id' => ['type' => 'text', 'label' => 'YouTube ID'],
                'date' => ['type' => 'text', 'label' => 'Date (e.g., May 2024)'],
                'status' => ['type' => 'select', 'label' => 'Status', 'options' => ['Active', 'Inactive']]
            ]
        ],
        'downloads' => [
            'title' => 'Downloads', 'singular' => 'File',
            'fields' => [
                'title' => ['type' => 'text', 'label' => 'Title'],
                'file_url' => ['type' => 'text', 'label' => 'File URL'],
                'type' => ['type' => 'text', 'label' => 'Type (e.g., PDF)'],
                'size' => ['type' => 'text', 'label' => 'Size (e.g., 2 MB)'],
                'category' => ['type' => 'text', 'label' => 'Category'],
                'status' => ['type' => 'select', 'label' => 'Status', 'options' => ['Active', 'Inactive']]
            ]
        ],
        'circulars' => [
            'title' => 'Circulars', 'singular' => 'Circular',
            'fields' => [
                'title' => ['type' => 'text', 'label' => 'Title'],
                'circular_number' => ['type' => 'text', 'label' => 'Circular Number'],
                'date' => ['type' => 'text', 'label' => 'Date'],
                'file_url' => ['type' => 'text', 'label' => 'File URL'],
                'status' => ['type' => 'select', 'label' => 'Status', 'options' => ['Active', 'Inactive']]
            ]
        ],
        'results' => [
            'title' => 'Result Links', 'singular' => 'Result Link',
            'fields' => [
                'title' => ['type' => 'text', 'label' => 'Title'],
                'description' => ['type' => 'textarea', 'label' => 'Description'],
                'date' => ['type' => 'text', 'label' => 'Date'],
                'url' => ['type' => 'text', 'label' => 'Link URL'],
                'status' => ['type' => 'select', 'label' => 'Status', 'options' => ['Active', 'Inactive']]
            ]
        ],
    ];

    public function dashboard()
    {
        return view('manage_dashboard');
    }

    public function list($module)
    {
        if (!isset($this->modules[$module])) return redirect()->to('/');
        
        $db = \Config\Database::connect();
        
        try {
            $items = $db->table($module)->orderBy('id', 'DESC')->get()->getResultArray();
            $dbError = null;
        } catch (\Exception $e) {
            $items = [];
            $dbError = "Database table '{$module}' not found. Please run the SQL import first.";
        }

        return view('manage_index', [
            'module' => $module,
            'config' => $this->modules[$module],
            'items' => $items,
            'dbError' => $dbError
        ]);
    }

    public function create($module)
    {
        if (!isset($this->modules[$module])) return redirect()->to('/');
        return view('manage_form', [
            'module' => $module,
            'config' => $this->modules[$module],
            'item' => null
        ]);
    }

    public function store($module)
    {
        if (!isset($this->modules[$module])) return redirect()->to('/');
        $db = \Config\Database::connect();
        $data = $this->request->getPost();
        
        // Remove CSRF if enabled
        unset($data['csrf_test_name']);
        
        $db->table($module)->insert($data);
        return redirect()->to('/manage/' . $module)->with('success', 'Item created successfully.');
    }

    public function edit($module, $id)
    {
        if (!isset($this->modules[$module])) return redirect()->to('/');
        $db = \Config\Database::connect();
        $item = $db->table($module)->where('id', $id)->get()->getRowArray();
        
        if (!$item) return redirect()->to('/manage/' . $module);

        return view('manage_form', [
            'module' => $module,
            'config' => $this->modules[$module],
            'item' => $item
        ]);
    }

    public function update($module, $id)
    {
        if (!isset($this->modules[$module])) return redirect()->to('/');
        $db = \Config\Database::connect();
        $data = $this->request->getPost();
        
        unset($data['csrf_test_name']);
        
        $db->table($module)->where('id', $id)->update($data);
        return redirect()->to('/manage/' . $module)->with('success', 'Item updated successfully.');
    }

    public function delete($module, $id)
    {
        if (!isset($this->modules[$module])) return redirect()->to('/');
        $db = \Config\Database::connect();
        $db->table($module)->where('id', $id)->delete();
        return redirect()->to('/manage/' . $module)->with('success', 'Item deleted successfully.');
    }
}
