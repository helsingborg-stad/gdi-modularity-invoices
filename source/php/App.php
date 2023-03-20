<?php

namespace GdiInvoices;

class App
{
    public function __construct()
    {
        add_action('plugins_loaded', array($this, 'registerModules'));
    }

    public function registerModules()
    {
        foreach (['mod-my-invoices' => 'MyInvoices'] as $slug => $name) {
            if (function_exists('modularity_register_module')) {
                modularity_register_module(
                    GDI_INVOICES_MODULE_PATH . "/" . $name,
                    $name
                );
            }

            add_filter(
                '/Modularity/externalViewPath',
                fn (array $paths) => array_merge(
                    $paths,
                    [$slug => GDI_INVOICES_MODULE_PATH . "/" . $name . "/views"]
                ),
                1,
                3
            );
        }
    }
}
