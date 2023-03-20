<?php 

if (function_exists('acf_add_local_field_group')) {
    acf_add_local_field_group(array(
    'key' => 'group_6384c29dbf81f',
    'title' => __('Plugin: My Cases', 'gdi-modularity-invoices'),
    'fields' => array(
        0 => array(
            'key' => 'field_6384c29dc30b0',
            'label' => __('Cases API Uri', 'gdi-modularity-invoices'),
            'name' => 'cases_api_uri',
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
));
}