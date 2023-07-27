<?php

/**
 * content-page-static.php
 *
 * @author    Denis Franchi
 * @package   Avik
 */
?>

<section class="avik-version-static">
  <?php if (false == esc_html(get_theme_mod('avik_enable_social_header', false))) : ?>
    <div class="avik-social-icons-video">
      <ul class="avik-social-icons" data-aos="zoom-in">
        <?php get_template_part('inc/social'); ?>
      </ul>
    </div>
  <?php endif; ?>
  <div class="header-static img-fluid">
    <?php the_custom_header_markup() ?>
    <div class="filter-header avik-static-filter">
      <div class="text-image-static">
        <div id="avikservices-strings">
          <p><?php echo esc_html(get_theme_mod('avik_title_cursor', __('Bienvenido a ', 'avik'))); ?><i> <?php echo esc_html(get_theme_mod('avik_subtitle_cursor', __('Ten Ryu Dojo', 'avik'))); ?></i></p>
        </div>
        <span id="avikservices"></span>
      </div>
      <!-- Angle scroll -->
      <?php if (false == esc_html(get_theme_mod('avik_enable_angle_scroll', false))) : ?>
        <div class="down-video avik-animation-bounce">
          <a href="#who-we-are"><i class="fas fa-angle-down"></i></a>
        </div>
      <?php endif; ?>
    </div>
  </div>
</section>