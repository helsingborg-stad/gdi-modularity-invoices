<?php

/**
 * Plugin Name:       GDI Modularity Invoices
 * Plugin URI:        https://github.com/nramstedt/gdi-modularity-invoices
 * Description:       GDI Invoices Module
 * Version: 1.0.6
 * Author:            Nikolas Ramstedt @ Helsingborg Stad
 * Author URI:        https://github.com/helsingborg-stad
 * License:           MIT
 * License URI:       https://opensource.org/licenses/MIT
 * Text Domain:       gdi-modularity-invoices
 * Domain Path:       /languages
 */

// Protect agains direct file access
if (!defined('WPINC')) {
    die;
}

define('GDI_INVOICES_PATH', plugin_dir_path(__FILE__));
define('GDI_INVOICES_URL', plugins_url('', __FILE__));
define('GDI_INVOICES_TEMPLATE_PATH', GDI_INVOICES_PATH . 'templates/');
define('GDI_INVOICES_TEXT_DOMAIN', 'gdi-modularity-invoices');
define('GDI_INVOICES_MODULE_PATH', GDI_INVOICES_PATH . 'source/php/Modules/');

load_plugin_textdomain(GDI_INVOICES_TEXT_DOMAIN, false, plugin_basename(dirname(__FILE__)) . '/languages');

require_once GDI_INVOICES_PATH . 'Public.php';

// Register the autoloader
if (file_exists(__DIR__ . '/vendor/autoload.php')) {
    require __DIR__ . '/vendor/autoload.php';
}

// Acf auto import and export
add_action('acf/init', function () {
    $acfExportManager = new \AcfExportManager\AcfExportManager();
    $acfExportManager->setTextdomain(GDI_INVOICES_TEXT_DOMAIN);
    $acfExportManager->setExportFolder(GDI_INVOICES_PATH . 'source/php/AcfFields/');
    $acfExportManager->autoExport(array(
        'invoices-options' => 'group_641850aab2e31',
        'module-my-invoices-mock-data' => 'group_64185083841af',
    ));
    $acfExportManager->import();
});


// Start application
new GdiInvoices\App();
