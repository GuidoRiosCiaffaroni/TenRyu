<?php

/**
 * 404.php
 *
 * @author    Denis Franchi
 * @package   Avik
 */

get_header('av');
$avik_image_404 = get_theme_mod('avik_img_404');
?>
<section class="four-page-section" style="background-image:url(<?php echo esc_url($avik_image_404); ?>); background-size: cover; background-position: center center;">
  <main class="container mt-5 main-content">
    <div class="row">
      <div class="col-sm-8 ml-sm-auto mr-sm-auto">
        <article class="mb-5">
          <h1 class="text-center display-4 bold-number-404"><?php echo esc_html(get_theme_mod('avik_title_404', __('404', 'avik'))); ?></h1>
          <h5 class="display-6 mb-4 text-center bold-text-404"><?php echo esc_html(get_theme_mod('avik_subtitle_404', __('Oops! The page you are looking for does not exist or has been moved!', 'avik'))); ?></h5>
          <?php if (false == esc_html(get_theme_mod('avik_enable_button_404', false))) : ?>
            <div class="button-404 text-center">
              <button type="button" class="btn btn-avik page-404">
                <a href="<?php echo esc_url(home_url('/')); ?>"><?php esc_html_e('Go Back To Home', 'avik'); ?></a>
              </button>
            </div>
          <?php endif; ?>
        </article>
      </div>
      <div class="col-md-12">
        <?php dynamic_sidebar('sidebar-40'); ?>
      </div>
    </div>
  </main>
</section>
<?php
get_footer(); ?>