<?php

namespace GdiInvoices\Modules\MyInvoices;

use Exception;
use GdiInvoices\Helper\CacheBust;

class MyInvoices extends \Modularity\Module
{
    public $slug = 'mod-my-invoices';
    public $supports = array();

    public function init()
    {
        $this->nameSingular = __('My Invoices', GDI_INVOICES_TEXT_DOMAIN);
        $this->namePlural = __('My Invoices', GDI_INVOICES_TEXT_DOMAIN);
        $this->description = __('Modularity Module', GDI_INVOICES_TEXT_DOMAIN);
    }

    public function getMockJson(?callable $onError): string
    {
        if (get_field('mock_invoices', $this->ID)) {
            $mockJson = get_field('json_mock_data', $this->ID);
            try {
                return base64_encode(
                    json_encode(
                        json_decode($mockJson, true, 512, JSON_THROW_ON_ERROR)
                    )
                );
            } catch (\JsonException $e) {
                if ($onError) {
                    $onError($e);
                }
            }
        }

        return '';
    }

    public function data(): array
    {
        $jsonErrorHandler = function (\JsonException $e) {
            if (is_user_logged_in()) {
                echo __('Failed to parse mock JSON', GDI_INVOICES_TEXT_DOMAIN) . ': ' . $e->getMessage();
            }
        };

        return [
            'aboutMeGraphQLUri' => get_field('invoices_api_uri', 'options') . '/graphql',
            'aboutMeGraphQLJson' => $this->getMockJson($jsonErrorHandler),
        ];
    }

    public function template(): string
    {
        return 'my-invoices.blade.php';
    }

    public function script()
    {
        wp_enqueue_script(
            'gdi-modularity-my-invoices-js',
            GDI_INVOICES_URL . '/dist/' . CacheBust::name('js/gdi-modularity-invoices.js'),
            null
        );
        wp_enqueue_style(
            'gdi-modularity-my-invoices-css',
            GDI_INVOICES_URL . '/dist/' . CacheBust::name('js/gdi-modularity-invoices.css'),
            null
        );
    }
}
