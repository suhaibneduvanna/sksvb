<?= $this->extend('layout') ?>

<?= $this->section('content') ?>

<div class="mb-8 flex items-center justify-between">
    <h1 class="text-2xl font-bold text-gray-900">Dashboard</h1>
</div>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
    <!-- Stat Card 1 -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div class="text-gray-500 text-sm font-medium mb-1">Total Publications</div>
        <div class="text-3xl font-bold text-gray-900">Manage Content</div>
        <div class="text-blue-600 text-sm mt-4 font-medium"><a href="<?= base_url('manage/publications') ?>">View details &rarr;</a></div>
    </div>
    
    <!-- Stat Card 2 -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div class="text-gray-500 text-sm font-medium mb-1">Active News</div>
        <div class="text-3xl font-bold text-gray-900">Manage Content</div>
        <div class="text-blue-600 text-sm mt-4 font-medium"><a href="<?= base_url('manage/news') ?>">View details &rarr;</a></div>
    </div>

    <!-- Stat Card 3 -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div class="text-gray-500 text-sm font-medium mb-1">Downloads</div>
        <div class="text-3xl font-bold text-gray-900">Manage Content</div>
        <div class="text-blue-600 text-sm mt-4 font-medium"><a href="<?= base_url('manage/downloads') ?>">View details &rarr;</a></div>
    </div>

    <!-- Stat Card 4 -->
    <div class="bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
        <div class="text-gray-500 text-sm font-medium mb-1">Circulars</div>
        <div class="text-3xl font-bold text-gray-900">Manage Content</div>
        <div class="text-blue-600 text-sm mt-4 font-medium"><a href="<?= base_url('manage/circulars') ?>">View details &rarr;</a></div>
    </div>
</div>

<?= $this->endSection() ?>
