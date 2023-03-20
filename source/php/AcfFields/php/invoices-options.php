<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_641850aab2e31',
    'title' => __('Plugin: My invoices', 'gdi-modularity-invoices'),
    'fields' => array(
        0 => array(
            'key' => 'field_641850aab7b99',
            'label' => __('Invoices API Uri', 'gdi-modularity-invoices'),
            'name' => 'invoices_api_uri',
            'type' => 'url',
            'instructions' => '',
            'required' => 1,
            'conditional_logic' => 0,
            'wrapper' => array(
                'width' => '',
                'class' => '',
                'id' => '',
            ),
            'default_value' => '',
            'placeholder' => __('http://example/api/v1/aboutme', 'gdi-modularity-invoices'),
        ),
    ),
    'location' => array(
        0 => array(
            0 => array(
                'param' => 'options_page',
                'operator' => '==',
                'value' => 'my-pages-settings',
            ),
        ),
    ),
    'menu_order' => 100,
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