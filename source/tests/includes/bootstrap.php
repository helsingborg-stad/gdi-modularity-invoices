<?php

// Get around direct access blockers.
if (!defined('ABSPATH')) {
    define('ABSPATH', __DIR__ . '/../../../');
}

define('GDI_INVOICES_PATH', __DIR__ . '/../../../');
define('GDI_INVOICES_URL', 'https://example.com/wp-content/plugins/' . 'modularity-gdi-modularity-invoices');
define('GDI_INVOICES_TEMPLATE_PATH', GDI_INVOICES_PATH . 'templates/');


// Register the autoloader
$loader = require __DIR__ . '/../../../vendor/autoload.php';
$loader->addPsr4('GdiInvoices\\Test\\', __DIR__ . '/../php/');

require_once __DIR__ . '/PluginTestCase.php';
