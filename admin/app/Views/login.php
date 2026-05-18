<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login - Islamic Educational Board Admin</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gray-50 flex items-center justify-center min-h-screen font-sans antialiased px-4">

    <div class="max-w-md w-full bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div class="px-6 py-8 sm:p-10">
            <div class="text-center mb-8">
                <div class="mx-auto w-16 h-16 bg-blue-900 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">
                    IEB
                </div>
                <h2 class="text-2xl font-bold text-gray-900">Admin Login</h2>
                <p class="text-sm text-gray-500 mt-2">Sign in to manage the website content</p>
            </div>

            <?php if (session()->getFlashdata('error')): ?>
                <div class="mb-6 p-4 bg-red-50 border border-red-200 text-red-700 text-sm rounded-md text-center">
                    <?= session()->getFlashdata('error') ?>
                </div>
            <?php endif; ?>

            <form action="<?= base_url('login') ?>" method="POST" class="space-y-6">
                <div>
                    <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
                    <input type="text" id="username" name="username" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                </div>

                <div>
                    <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                    <input type="password" id="password" name="password" required class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm">
                </div>

                <div>
                    <button type="submit" class="w-full flex justify-center py-2.5 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 transition-colors">
                        Sign in
                    </button>
                </div>
            </form>
        </div>
        <div class="px-6 py-4 bg-gray-50 border-t border-gray-200 text-center text-xs text-gray-500">
            &copy; <?= date('Y') ?> Islamic Educational Board
        </div>
    </div>

</body>
</html>
