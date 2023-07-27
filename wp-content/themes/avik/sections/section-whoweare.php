<?php

/**
 * section-whoweare.php
 *
 * @author    Denis Franchi
 * @package   Avik
 */


$avik_image_who_two = get_theme_mod('avik_second_img_who_section');
$avik_whowearecontent = esc_attr(get_theme_mod('avik_page_id_whoweare'));
$avik_whoweare_count = 1;
$avik_mod = new WP_Query(array('page_id' => $avik_whowearecontent, 'showposts' => $avik_whoweare_count));
while ($avik_mod->have_posts()) : $avik_mod->the_post(); { ?>
    <?php $avik_image_attributes = wp_get_attachment_image_src(get_post_thumbnail_id($post->ID), 'avik_big'); ?>
    <section id="who-we-are" class="avik-who-we-are">
      <div class="container">
        <div class="row m-0">
          <div class="col col-md-4">
            <!-- Title who-we-are -->
            <h3><?php the_title(); ?></h3>
            <div><?php the_excerpt(); ?></div>
            <div class="avik-btn-who-we-are">
              <a href="<?php the_permalink(); ?>" class="btn btn-avik" role="button" aria-pressed="true" data-aos="zoom-in" data-aos-duration="2000"><?php echo esc_html(get_theme_mod('avik_title_button_services', __('Read more...', 'avik'))); ?></a>
            </div>
          </div>
          <div class="col who-we-are-image-frame">


            <div class="row">
              <!-- Image 1 who we are -->
              <?php if (false == esc_html(get_theme_mod('avik_enable_second_image_whoweare', false))) : ?>
                <div class="first-image-who-we-are col-md-6 col-xs-12" data-aos="fade-right" data-aos-duration="2000">
                  <img src="<?php echo esc_url($avik_image_who_two); ?>" />
                </div>
              <?php endif; ?>
              <!-- Image 2 who we are -->
              <div class="second-image-who-we-are col-md-6 col-xs-12" data-aos="zoom-in" data-aos-duration="2000">
                <img class="img-who-we-are border-who-we-are" src="<?php if ($avik_image_attributes[0]) {
                                                                      echo esc_url($avik_image_attributes[0]);
                                                                    } else {
                                                                      echo esc_url(get_template_directory_uri()) . '/images/avik-default.jpg';
                                                                    }
                                                                    ?>" />
              </div>
            </div>



          </div>
        </div>
      </div>
    </section>
    <div class="clear"></div>
<?php }
endwhile;
wp_reset_query(); ?>