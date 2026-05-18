<?= $this->extend('layout') ?>

<?= $this->section('content') ?>

<div x-data="{
    showFormModal: false,
    showDeleteModal: false,
    isEdit: false,
    formData: {},
    deleteId: null,
    
    openAddModal() {
        this.isEdit = false;
        this.formData = {};
        this.showFormModal = true;
    },
    
    openEditModal(item) {
        this.isEdit = true;
        this.formData = item;
        this.showFormModal = true;
    },
    
    openDeleteModal(id) {
        this.deleteId = id;
        this.showDeleteModal = true;
    }
}">

    <div class="mb-8 flex items-center justify-between">
        <h1 class="text-2xl font-bold text-gray-900"><?= esc($config['title']) ?></h1>
        <button @click="openAddModal()" class="px-4 py-2 bg-gray-900 text-white rounded-md text-sm font-medium hover:bg-gray-800 transition-colors flex items-center gap-2 shadow-sm">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path></svg>
            New <?= esc($config['singular']) ?>
        </button>
    </div>

    <?php if (session()->getFlashdata('success')): ?>
        <div class="mb-4 p-4 bg-green-50 border border-green-200 text-green-700 rounded-md">
            <?= session()->getFlashdata('success') ?>
        </div>
    <?php endif; ?>

    <?php if (isset($dbError) && $dbError): ?>
        <div class="mb-4 p-4 bg-red-50 border border-red-200 text-red-700 rounded-md">
            <?= esc($dbError) ?>
        </div>
    <?php endif; ?>

    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
        <div class="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-200">
            <div class="flex items-center gap-2">
                <select class="border border-gray-300 rounded-md text-sm px-3 py-1.5 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                </select>
                <button class="p-1.5 border border-gray-300 rounded-md text-gray-500 hover:bg-gray-50">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path></svg>
                </button>
            </div>
            <div class="relative">
                <input type="text" placeholder="Search..." class="w-full sm:w-64 pl-3 pr-10 py-1.5 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none">
            </div>
        </div>

        <div class="overflow-x-auto">
            <table class="w-full text-left text-sm text-gray-600">
                <thead class="bg-gray-50 text-xs text-gray-500 uppercase tracking-wider border-b border-gray-200">
                    <tr>
                        <th class="px-6 py-4 font-semibold">Title</th>
                        <th class="px-6 py-4 font-semibold">Status</th>
                        <th class="px-6 py-4 font-semibold text-right">Actions</th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-gray-100">
                    <?php if (empty($items)): ?>
                    <tr>
                        <td colspan="3" class="px-6 py-8 text-center text-gray-500">No items found.</td>
                    </tr>
                    <?php else: ?>
                        <?php foreach ($items as $item): ?>
                        <tr class="hover:bg-gray-50 transition-colors">
                            <td class="px-6 py-4 font-medium text-gray-900"><?= esc($item['title'] ?? 'Untitled') ?></td>
                            <td class="px-6 py-4">
                                <?php $status = $item['status'] ?? 'Active'; ?>
                                <?php if ($status == 'Active'): ?>
                                    <span class="inline-flex px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-medium">Active</span>
                                <?php else: ?>
                                    <span class="inline-flex px-2 py-1 bg-gray-100 text-gray-800 rounded text-xs font-medium"><?= esc($status) ?></span>
                                <?php endif; ?>
                            </td>
                            <td class="px-6 py-4 text-right space-x-3">
                                <button @click="openEditModal(<?= htmlspecialchars(json_encode($item), ENT_QUOTES, 'UTF-8') ?>)" class="text-blue-600 hover:text-blue-800 font-medium">Edit</button>
                                <button @click="openDeleteModal(<?= $item['id'] ?>)" class="text-red-500 hover:text-red-700 font-medium">Delete</button>
                            </td>
                        </tr>
                        <?php endforeach; ?>
                    <?php endif; ?>
                </tbody>
            </table>
        </div>
        
        <div class="p-4 border-t border-gray-200 flex items-center justify-between text-sm text-gray-500">
            <div>Showing <?= count($items) ?> entries</div>
        </div>
    </div>

    <!-- Form Modal -->
    <div x-show="showFormModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div x-show="showFormModal" x-transition.opacity class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="showFormModal = false" aria-hidden="true"></div>

            <!-- This element is to trick the browser into centering the modal contents. -->
            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div x-show="showFormModal" x-transition class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg w-full">
                <form :action="isEdit ? '<?= base_url('manage/' . $module . '/update/') ?>' + formData.id : '<?= base_url('manage/' . $module . '/store') ?>'" method="POST">
                    <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <h3 class="text-lg leading-6 font-medium text-gray-900 mb-4" id="modal-title" x-text="isEdit ? 'Edit <?= esc($config['singular']) ?>' : 'New <?= esc($config['singular']) ?>'"></h3>
                        
                        <div class="space-y-4">
                            <?php foreach ($config['fields'] as $key => $field): ?>
                                <div>
                                    <label class="block text-sm font-medium text-gray-700 mb-1"><?= esc($field['label']) ?></label>
                                    
                                    <?php if ($field['type'] == 'textarea'): ?>
                                        <textarea name="<?= esc($key) ?>" x-model="formData.<?= esc($key) ?>" rows="3" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"></textarea>
                                    
                                    <?php elseif ($field['type'] == 'select'): ?>
                                        <select name="<?= esc($key) ?>" x-model="formData.<?= esc($key) ?>" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none">
                                            <option value="">Select...</option>
                                            <?php foreach ($field['options'] as $option): ?>
                                                <option value="<?= esc($option) ?>"><?= esc($option) ?></option>
                                            <?php endforeach; ?>
                                        </select>
                                    
                                    <?php else: ?>
                                        <input type="text" name="<?= esc($key) ?>" x-model="formData.<?= esc($key) ?>" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" required>
                                    <?php endif; ?>
                                </div>
                            <?php endforeach; ?>
                        </div>
                    </div>
                    <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="submit" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-600 text-base font-medium text-white hover:bg-blue-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                            Save
                        </button>
                        <button type="button" @click="showFormModal = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                            Cancel
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>

    <!-- Delete Confirmation Modal -->
    <div x-show="showDeleteModal" x-cloak class="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        <div class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            
            <div x-show="showDeleteModal" x-transition.opacity class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" @click="showDeleteModal = false" aria-hidden="true"></div>

            <span class="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>

            <div x-show="showDeleteModal" x-transition class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-md w-full">
                <div class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                        <div class="mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                            <svg class="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                        </div>
                        <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                            <h3 class="text-lg leading-6 font-medium text-gray-900" id="modal-title">Delete <?= esc($config['singular']) ?></h3>
                            <div class="mt-2">
                                <p class="text-sm text-gray-500">Are you sure you want to delete this item? This action cannot be undone.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                    <a :href="'<?= base_url('manage/' . $module . '/delete/') ?>' + deleteId" class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none sm:ml-3 sm:w-auto sm:text-sm">
                        Delete
                    </a>
                    <button type="button" @click="showDeleteModal = false" class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>

</div>

<?= $this->endSection() ?>
