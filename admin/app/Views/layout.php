<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Panel - Islamic Educational Board</title>
    <!-- Tailwind CSS -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Alpine.js -->
    <script defer src="https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js"></script>
    <style>
        [x-cloak] { display: none !important; }
    </style>
</head>
<body class="bg-gray-50 text-gray-800 font-sans antialiased h-screen flex overflow-hidden">

    <!-- Sidebar -->
    <aside class="w-64 bg-white border-r border-gray-200 flex flex-col h-full shrink-0">
        <!-- Logo -->
        <div class="h-16 flex items-center px-6 border-b border-gray-200">
            <span class="font-bold text-lg text-blue-900 leading-tight">ISLAMIC EDUCATIONAL<br>BOARD</span>
        </div>

        <!-- Navigation -->
        <nav class="flex-1 overflow-y-auto py-4 px-3 space-y-1">
            <a href="<?= base_url('dashboard') ?>" class="flex items-center gap-3 px-3 py-2 rounded-md <?= current_url() == base_url('dashboard') ? 'bg-gray-100 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900' ?>">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                Dashboard
            </a>

            <!-- Manage Accordion -->
            <div x-data="{ open: true }">
                <button @click="open = !open" class="w-full flex items-center justify-between px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
                    <div class="flex items-center gap-3">
                        <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
                        <span>Manage</span>
                    </div>
                    <svg class="w-4 h-4 text-gray-400 transition-transform" :class="open ? 'rotate-180' : ''" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                </button>
                
                <div x-show="open" x-collapse class="mt-1 space-y-1">
                    <?php
                    $manageLinks = [
                        ['url' => 'manage/publications', 'label' => 'Publications'],
                        ['url' => 'manage/news', 'label' => 'News'],
                        ['url' => 'manage/gallery', 'label' => 'Gallery'],
                        ['url' => 'manage/videos', 'label' => 'Videos'],
                        ['url' => 'manage/downloads', 'label' => 'Downloads'],
                        ['url' => 'manage/circulars', 'label' => 'Circulars'],
                        ['url' => 'manage/results', 'label' => 'Result Links'],
                    ];
                    foreach ($manageLinks as $link):
                        $isActive = strpos(current_url(), $link['url']) !== false;
                    ?>
                    <a href="<?= base_url($link['url']) ?>" class="block pl-11 pr-3 py-2 text-sm rounded-md <?= $isActive ? 'bg-gray-50 text-blue-900 font-medium' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900' ?>">
                        <?= $link['label'] ?>
                    </a>
                    <?php endforeach; ?>
                </div>
            </div>
            
            <a href="#" class="flex items-center gap-3 px-3 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md">
                <svg class="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Reports
            </a>
        </nav>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 flex flex-col h-full overflow-hidden">
        <!-- Top Header -->
        <header class="h-16 bg-white border-b border-gray-200 flex items-center justify-end px-6 shrink-0 gap-4">
            <div class="w-8 h-8 rounded-full border-2 border-gray-800 flex items-center justify-center font-bold text-xs text-gray-800">
                IE
            </div>
            <a href="<?= base_url('logout') ?>" class="text-sm font-medium text-red-600 hover:text-red-800">Logout</a>
        </header>

        <!-- Page Content -->
        <div class="flex-1 overflow-y-auto p-8">
            <?= $this->renderSection('content') ?>
        </div>
    </main>

</body>
</html>
