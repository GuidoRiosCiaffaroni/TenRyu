<?php

/**
 * section-contact.php
 *
 * @author    Denis Franchi
 * @package   Avik
 */
$avik_image_cntact = get_theme_mod('avik_img_contact');
?>

<section class="contact" id="contact">
  <div class="container">
    <div class="row paddong-contact">
      <!-- Address -->
      <div class="col-lg-6 address">
        <h3 data-aos="fade-up"><?php echo esc_html(get_theme_mod('avik_title_contact', __('Contact', 'avik'))); ?></h3>
        <p><?php echo esc_html(get_theme_mod('avik_subtitle_contact')); ?></p>
        <!-- Social Icons Contact -->
        <?php if (false == esc_html(get_theme_mod('avik_enable_social_contact', false))) : ?>
          <div class="avik-social-icons-contact" data-aos="zoom-in">
            <ul class="avik-social-icons-contact-ul">
              <?php get_template_part('inc/social'); ?>
            </ul>
          </div>
        <?php endif; ?>
      </div>
      <!-- Widget Contact Form -->
      <div class="col-lg-6 widget-contact-contact">
        <?php dynamic_sidebar('widget_contact_form'); ?>
      </div>
    </div>
  </div>
  <!-- Map -->
  <?php if (false ==  esc_html(get_theme_mod('avik_enable_image_contact', true))) : ?>
    <div class="avik-map">
      <img src="<?php echo esc_url($avik_image_cntact); ?>" />
    </div>
  <?php endif; ?>
</section>