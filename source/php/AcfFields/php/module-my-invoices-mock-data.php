<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_6405f86fe7e4c',
    'title' => __('My Cases: Mock Data', 'gdi-modularity-invoices'),
    'fields' => array(
        0 => array(
            'key' => 'field_6405f870fcf37',
            'label' => __('Mock Cases', 'gdi-modularity-invoices'),
            'name' => 'mock_cases',
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
            'key' => 'field_6405f8e1fcf38',
            'label' => __('JSON Mock Data', 'gdi-modularity-invoices'),
            'name' => 'json_mock_data',
            'type' => 'textarea',
            'instructions' => __('Example:

[
                {
                    "caseId": "case-2684",
                    "description": "Anmälan om ändrade förhållanden",
                    "label": "Anmälan om ändrade förhållanden",
                    "statusHint": "incomplete",
                    "subjectId": "19710101",
                    "updateTime": "2021-04-17",
                    "status": "incomplete",
                    "organization": "Miljöförvaltningen",
                    "events": [
                        {
                            "description": "Handläggarens notering 2020-11-22",
                            "status": "Closed",
                            "statusHint": "closed",
                            "updateTime": "2020-11-22",
                            "actions": []
                        },
                        {
                            "description": "Handläggarens notering 2021-01-27",
                            "status": "Incomplete",
                            "statusHint": "incomplete",
                            "updateTime": "2021-01-27",
                            "actions": [
                                {
                                    "label": "E-tjänst 0",
                                    "url": "https://www.example.com",
                                    "typeHint": "link"
                                }
                            ]
                        },
                        {
                            "description": "Handläggarens notering 2021-02-20",
                            "status": "Approved",
                            "statusHint": "approved",
                            "updateTime": "2021-02-20",
                            "actions": []
                        },
                        {
                            "description": "Handläggarens notering 2021-03-27",
                            "status": "Approved",
                            "statusHint": "approved",
                            "updateTime": "2021-03-27",
                            "actions": [
                                {
                                    "label": "E-tjänst 0",
                                    "url": "https://www.example.com",
                                    "typeHint": "link"
                                }
                            ]
                        },
                        {
                            "description": "Handläggarens notering 2021-04-14",
                            "status": "Closed",
                            "statusHint": "closed",
                            "updateTime": "2021-04-14",
                            "actions": [
                                {
                                    "label": "E-tjänst 0",
                                    "url": "https://www.example.com",
                                    "typeHint": "link"
                                }
                            ]
                        },
                        {
                            "description": "Handläggarens notering 2021-04-16",
                            "status": "",
                            "statusHint": null,
                            "updateTime": "2021-04-16",
                            "actions": []
                        }
                    ],
                    "actions": []
                }
]', 'gdi-modularity-invoices'),
            'required' => 1,
            'conditional_logic' => array(
                0 => array(
                    0 => array(
                        'field' => 'field_6405f870fcf37',
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
));
}