<?php
/**
 * Plugin name: Bubiblock Slider
 * Plugin uri: https://bubiblock.com/
 * Description: Slider plugin for Gutenberg. Create a image slider, color slider, fullscreen slider with this powerful and simple slider block.
 * Author: Franchi Design
 * Version:2.4.0
 * Author uri: https://www.denisfranchi.com/
 * Plugin URI:   https://bubiblock.com/
 * License:      GPLv2 or later
 * License URI:  https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:  bubiblock-slider
 * Copyright 2021 BubiBlock (email: info@bubiblock.com)
 * Requires at least: 5.3
 * Tested up to: 5.8
 * Requires PHP: 7.3
 */


if( ! defined( 'ABSPATH') ) {
    exit;
}

// Url Admin Page
define('bubiblock_slider_documentation','https://bubiblock.com/2021/08/28/bubiblock-slider-tutorial-how-to-add-sliders-to-your-wordpress-site/'); // Documentation
define('bubiblock_slider_support','https://bubiblock.com/community/index.php'); // Support
define('bubiblock_slider_upgrade','https://bubiblock.com/pricing/'); // Upgrade
define('bubiblock_slider_faq','https://bubiblock.com/faq/'); // FAQ
define('bubiblock_slider_contact','https://bubiblock.com/faq/#bubicontact'); // Contact
define('bubiblock_slider_customize','https://bubiblock.com/2021/07/20/customize/'); // Customize
define('bubiblock_slider_setting','https://bubiblock.com/2021/08/24/setting/'); // Settings
define('bubiblock_slider_responsive','https://bubiblock.com/2021/08/24/responsive/'); // Responsive
define('bubiblock_slider_trial','https://bubiblock.com/product/bubiblock-slider-pro-free-trial/'); // Free Trial
define('bubiblock_slider_review','https://wordpress.org/support/plugin/bubiblock-slider/reviews/#new-post'); // Review


// Register Block
function bubiblock_slider_register_block_type($block, $options = array()) {
        register_block_type(
            'bubiblock-slider/' . $block,
            array_merge(
                array(
                    'editor_script' => 'bubiblock-slider-editor-script', // Include only editor
                    'editor_style' =>'bubiblock-slider-editor-style' ,   // Include only editor
                    'script' => 'bubiblock-slider-script', // Include editor and frontend
                    'style' => 'bubiblock-slider-style', // Include editor and frontend
                ),
                $options
            )
        );
}

// Register script
function bubiblock_slider_enqueue_assets() {
    wp_enqueue_script(
        'bubiblock-slider-editor-js',
        plugins_url( 'dist/editor_script.js', __FILE__ ),
        array('wp-blocks','wp-editor','wp-element','wp-data', 'wp-plugins','wp-edit-post', 'wp-i18n', 'wp-components', 'wp-date', 'wp-compose','wp-blob','wp-html-entities')
    );

}

add_action( 'enqueue_block_editor_assets', 'bubiblock_slider_enqueue_assets' );

function bubiblock_slider_assets() {
    // Bootstrap css
    wp_enqueue_style(
        'bubiblock-slider-bootstrap-css',
        plugins_url( 'src/assets/bootstrap/css/bootstrap.min.css', __FILE__ ),
        array()
    );
    // Bootstrap js
    wp_enqueue_script(
        'bubiblock-slider-bootstrap-js',
        plugins_url( 'src/assets/bootstrap/js/bootstrap.min.js', __FILE__ ),
        ['jquery'],
        '',
        true
    );
    // myscrit js
    wp_enqueue_script(
        'bubiblock-slider-myscript-js',
        plugins_url( 'src/blocks/slider/myscript.js', __FILE__ ),
        ['jquery'],
        '',
        true
    );
    // Animate css
    wp_enqueue_style(
        'bubiblock-slider-animate-css',
        plugins_url( 'src/assets/animate/animate.min.css', __FILE__ ),
        array()
    );
    // Dashicons
    wp_enqueue_style('dashicons');
    // Font Family
     wp_enqueue_style( 'bubiblcok-slider-custom-google-fonts', 'https://fonts.googleapis.com/css2?family=Anton&family=Dancing+Script:wght@400;500;600;700&family=IBM+Plex+Sans:wght@200;300;400;500;600;700&family=Inconsolata:wght@200;300;400;500;600;700;800;900&family=Karla:wght@200;300;400;500;600;700;800&family=Major+Mono+Display&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&family=Odibee+Sans&family=Oxygen:wght@300;400;700&family=Playfair+Display:wght@400;500;600;700;800&family=Poppins:wght@100;200;300;400;500;700;900&family=Roboto:wght@300;400;500;700;900&family=Sigmar+One&family=Space+Grotesk:wght@300;400;500;600;700&family=Source+Code+Pro:wght@200;300;400;500;600;700;900&family=Orbitron:wght@500;600;700;800;900&family=Rajdhani:wght@300;400;500;600;700&family=Rubik:wght@300;400;500;600;700;800;900&family=Balsamiq+Sans:wght@400;700&family=Special+Elite&family=Russo+One&family=ZCOOL+KuaiLe&display=swap',array(), null );

}
add_action( 'enqueue_block_assets', 'bubiblock_slider_assets' );

function bubiblock_slider_register() {
    wp_register_script(
        'bubiblock-slider-editor-script',
        plugins_url( 'dist/editor.js', __FILE__ ),
        array('wp-blocks','wp-i18n','wp-element','wp-editor','wp-block-editor','wp-components','wp-blob', 'wp-data','wp-html-entities','wp-compose')
    );
    wp_register_script(
        'bubiblock-slider-script',
        plugins_url( 'dist/script.js', __FILE__ ),
        array('jquery')
    );
    wp_register_style(
        'bubiblock-slider-editor-style',
        plugins_url( 'dist/editor.css', __FILE__ ),
        array('wp-edit-blocks')
    );
    wp_register_style(
        'bubiblock-slider-style',
        plugins_url( 'dist/style.css', __FILE__ )
    );

    bubiblock_slider_register_block_type('slider');

}

add_action( 'init', 'bubiblock_slider_register' );

// Register a custom menu page
function bubiblock_slider_menu_page() {
	add_menu_page(
		__('Bubiblock Slider','bubiblock-slider'), // page <title>Title</title>
		__('Bubiblock Slider','bubiblock-slider'), // menu link text
		'manage_options', // capability to access the page
		'bubiblock-slider', // page URL slug
		'bubiblock_slider_page_content', // callback function /w content
		'dashicons-embed-photo', // menu icon
		500 // priority
	);
}

add_action( 'admin_menu', 'bubiblock_slider_menu_page' );

//Admin Page
function bubiblock_slider_page_content(){
    include( plugin_dir_path( __FILE__ ) . 'src/assets/admin/admin.php');
}

// Style Admin Page
function bubiblock_slider_admin_style($hook){

    $current_screen = get_current_screen();

    if ( strpos($current_screen->base, 'bubiblock-slider') === false) {
        return;
    } else {

    wp_enqueue_style('admin_css', plugins_url('src/assets/admin/admin.css',__FILE__ ));
    }
}

add_action('admin_enqueue_scripts', 'bubiblock_slider_admin_style');


register_activation_hook( __FILE__, 'bubiblock_slider_admin_notice_activation_hook' );
function bubiblock_slider_admin_notice_activation_hook() {
    set_transient( 'bubiblock_slider_admin_notice', true, 5 );
}

// Admin Notice
function bubiblock_slider_admin_notice_notice(){

    /* Check transient, if available display notice */
    if( get_transient( 'bubiblock_slider_admin_notice' ) ){
        ?>
        <div class="updated notice is-dismissible bubiblock-notice-community" style="padding:30px;text-align:center" >
            <h4><?php echo esc_html('Thank you for choosing one of our blocks. Remember that you can get completely free support and a Bubiblcok Coupon for a future purchase by registering with our ','bubiblock')?><a style="color:#8321D1;text-decoration:underline" href="<?php echo esc_url(bubiblock_slider_support);?>"><?php echo esc_html('Community here.','bubiblock')?></a></h4>
        </div>
        <?php
        /* Delete transient, only display this notice once. */
        delete_transient( 'bubiblock_slider_admin_notice' );
    }
}

add_action( 'admin_notices', 'bubiblock_slider_admin_notice_notice' );

// Admin settings page direct
function bubiblock_slider_activation_redirect( $plugin ) {
    if( $plugin == plugin_basename( __FILE__ ) ) {
        exit( wp_redirect( admin_url( 'admin.php?page=bubiblock-slider' ) ) );
    }
}
add_action( 'activated_plugin', 'bubiblock_slider_activation_redirect' );
// Translations
function bubiblock_slider_set_script_translations() {
    wp_set_script_translations( 'bubiblock_slider-script', 'bubiblock-slider' );
}
add_action( 'init', 'bubiblock_slider_set_script_translations' );