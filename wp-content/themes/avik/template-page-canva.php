<?php
/*
Template Name: Avik Canva
Template Post Type: Page, Post
*/
/**
*
* @author    Denis Franchi
* @package   Avik
*/
?>

<div class="avik-canva-header">
    <?php
        get_header(esc_html( get_theme_mod('avik_header_canva_page','post') )); 
    ?>
</div>
<?php
    while ( have_posts() ) :
        the_post();
        the_content();
    endwhile; // End of the loop.
    if ( false == get_theme_mod( 'avik_enable_footer_page_canva',false) ) :
        get_footer();
    endif;
    ?>

