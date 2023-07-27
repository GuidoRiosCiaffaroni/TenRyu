<?php

/**
 * front-page.php
 *
 * @author    Denis Franchi
 * @package   Avik

 */


get_header();


// Get elements
$avik_elements = avik_home_elements_position();
// Loop through elements.
foreach ($avik_elements as $avik_element) {
    // Slider/Video/Static
    if ('page-static' === $avik_element) {
        get_template_part('template-parts/content', 'page-static');
    }
    // Section One
    if ('whoweare' === $avik_element) {
        get_template_part('sections/section', 'whoweare');
    }
    // Section Two
    if ('services' === $avik_element) {
        get_template_part('sections/section', 'services');
    }
    // Section Three
    if ('portfolio' === $avik_element) {
        get_template_part('sections/section', 'portfolio');
    }
    // Section Four
    if ('blog' === $avik_element) {
        get_template_part('sections/section', 'blog');
    }
    // Section Five
    if ('contact' === $avik_element) {
        get_template_part('sections/section', 'contact');
    }
}

get_footer();
