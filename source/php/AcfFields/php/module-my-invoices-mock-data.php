<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_64185083841af',
    'title' => __('My Invoices: Mock Data', 'gdi-modularity-invoices'),
    'fields' => array(
        0 => array(
            'key' => 'field_6418508389bcd',
            'label' => __('Mock Invoices', 'gdi-modularity-invoices'),
            'name' => 'mock_invoices',
            'type' => 'true_false',
            'instructions' => '',
            'required' => 0,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'message' => '',
            'default_value' => 0,
            'ui_on_text' => __('Enabled', 'gdi-modularity-invoices'),
            'ui_off_text' => __('Disabled', 'gdi-modularity-invoices'),
            'ui' => 1,
        ),
        1 => array(
            'key' => 'field_6418508389bd5',
            'label' => __('JSON Mock Data', 'gdi-modularity-invoices'),
            'name' => 'json_mock_data',
            'type' => 'textarea',
            'instructions' => __('Example:

[
                {
                    "invoiceId": "invoices-0001",
                    "description": "Avgift för barnomsorg - Februari",
                    "label": "Avgift för barnomsorg - Februari",
                    "organization": "Skol - och fritidsförvaltningen",
                    "invoiceDate": "2023-03-01",
                    "dueDate": "2023-03-13",
                    "amount": "55000",
                    "ocrNumber": "123456789101112",
                    "autoGiro": "1234-1234",
                    "isPaid": true,
                    "actions": [
                        {
                            "label": "Gå till faktura",
                            "url": "https://www.example.com",
                            "typeHint": "link"
                        }
                    ],
                    "payments": [
                        {
                            "amount": "55000",
                            "date": "2021-03-03"
                        }
                    ]
                },
                {
                    "invoiceId": "invoices-0002",
                    "description": "Tomtköavgift - Februari",
                    "label": "Tomtköavgift - Februari",
                    "organization": "Stadsledningförvaltningen",
                    "invoiceDate": "2023-03-01",
                    "dueDate": "2023-03-30",
                    "amount": "23000",
                    "ocrNumber": "123456789101112",
                    "autoGiro": "1234-1234",
                    "isPaid": false,
                    "actions": [
                        {
                            "label": "Gå till faktura",
                            "url": "https://www.example.com",
                            "typeHint": "link"
                        }
                    ],
                    "payments": []
                },
                {
                    "invoiceId": "invoices-003",
                    "description": "Tomtköavgift - Januari",
                    "label": "Tomtköavgift - Januari",
                    "organization": "Stadsledningförvaltningen",
                    "invoiceDate": "2023-02-01",
                    "dueDate": "2023-02-30",
                    "amount": "23000",
                    "ocrNumber": "123456789101112",
                    "autoGiro": "1234-1234",
                    "isPaid": true,
                    "actions": [
                        {
                            "label": "Gå till faktura",
                            "url": "https://www.example.com",
                            "typeHint": "link"
                        }
                    ],
                    "payments": [
                        {
                            "amount": "23000",
                            "date": "2021-02-03"
                        }
                    ]
                }
            ]', 'gdi-modularity-invoices'),
            'required' => 1,
            'conditional_logic' => array(
                0 => array(
                    0 => array(
                        'field' => 'field_6418508389bcd',
                        'operator' => '==',
                        'value' => '1',
                    ),
                ),
            ),
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'acfe_textarea_code' => 0,
            'maxlength' => '',
            'rows' => '',
            'placeholder' => '',
            'new_lines' => '',
        ),
    ),
    'location' => array(
        0 => array(
            0 => array(
                'param' => 'post_type',
                'operator' => '==',
                'value' => 'mod-my-invoices',
            ),
        ),
        1 => array(
            0 => array(
                'param' => 'block',
                'operator' => '==',
                'value' => 'acf/my-invoices',
            ),
        ),
    ),
    'menu_order' => 0,
    'position' => 'normal',
    'style' => 'default',
    'label_placement' => 'top',
    'instruction_placement' => 'label',
    'hide_on_screen' => '',
    'active' => true,
    'description' => '',
    'show_in_rest' => 0,
    'acfe_display_title' => '',
    'acfe_autosync' => '',
    'acfe_form' => 0,
    'acfe_meta' => '',
    'acfe_note' => '',
));
}