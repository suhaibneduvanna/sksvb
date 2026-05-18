<?= $this->extend('layout') ?>

<?= $this->section('content') ?>

<div class="mb-8 flex items-center justify-between">
    <div class="flex items-center gap-4">
        <a href="<?= base_url('manage/' . $module) ?>" class="p-2 bg-white border border-gray-200 rounded-md hover:bg-gray-50 text-gray-600">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
        </a>
        <h1 class="text-2xl font-bold text-gray-900"><?= $item ? 'Edit' : 'Create' ?> <?= esc($config['singular']) ?></h1>
    </div>
</div>

<div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6 max-w-3xl">
    <form action="<?= base_url('manage/' . $module . '/' . ($item ? 'update/' . $item['id'] : 'store')) ?>" method="POST" class="space-y-6">
        
        <?php foreach ($config['fields'] as $key => $field): ?>
            <div>
                <label class="block text-sm font-medium text-gray-700 mb-1"><?= esc($field['label']) ?></label>
                
                <?php if ($field['type'] == 'textarea'): ?>
                    <textarea name="<?= esc($key) ?>" rows="4" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none"><?= esc($item[$key] ?? '') ?></textarea>
                
                <?php elseif ($field['type'] == 'select'): ?>
                    <select name="<?= esc($key) ?>" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none">
                        <?php foreach ($field['options'] as $option): ?>
                            <option value="<?= esc($option) ?>" <?= ($item[$key] ?? '') == $option ? 'selected' : '' ?>><?= esc($option) ?></option>
                        <?php endforeach; ?>
                    </select>
                
                <?php else: ?>
                    <input type="text" name="<?= esc($key) ?>" value="<?= esc($item[$key] ?? '') ?>" class="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:ring-1 focus:ring-blue-500 focus:border-blue-500 outline-none" required>
                <?php endif; ?>
            </div>
        <?php endforeach; ?>

        <div class="pt-4 border-t border-gray-200 flex justify-end gap-3">
            <a href="<?= base_url('manage/' . $module) ?>" class="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-50 transition-colors">Cancel</a>
            <button type="submit" class="px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium hover:bg-blue-700 transition-colors shadow-sm">
                Save <?= esc($config['singular']) ?>
            </button>
        </div>
    </form>
</div>

<?= $this->endSection() ?>
