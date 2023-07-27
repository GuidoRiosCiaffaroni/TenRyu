<?php

/**
 * footer.php
 *
 * @author    Denis Franchi
 * @package   Avik
 */
?>
</div>
<!--Content -->
<footer class="title-power-df">
  <div class="jumbotron">
    <!-- Social Icons Contact -->
    <div class="container-fluid">
      <div class="row">
        <div class="col footer-widget">
          <?php dynamic_sidebar('widget_footer_one'); ?>
        </div>
        <div class="col footer-widget">
          <?php dynamic_sidebar('widget_footer_two'); ?>
        </div>
      </div>
      <?php if (false == esc_html(get_theme_mod('avik_enable_social_footer', false))) : ?>
        <div class="row text-center">
          <div class="col-md-2"></div>
          <div class="col-md-8 avik-social-icons-footer">
            <?php get_template_part('inc/social'); ?>
          </div>
          <div class="col-md-2"></div>
        </div>
      <?php endif; ?>
    </div>
    <?php if (false == esc_html(get_theme_mod('avik_enable_div_footer', false))) : ?>
      <hr class="my-4 avik-footer">
    <?php endif; ?>
    <div class="text-center mt-4">
      <?php if (false == esc_html(get_theme_mod('avik_enable_copyright_footer', false))) : ?>
        <p>
          &copy; <?php echo esc_html(date("Y"));
                  echo " ";
                  echo bloginfo('name'); ?>
        </p>
      <?php endif; ?>
      <p class="title-power-df">
        <?php echo esc_html(get_theme_mod('avik_title_power', __('Power by:', 'avik'))); ?>
        <a <?php if (false == esc_attr(get_theme_mod('avik_enable_blank_link_power', false))) : ?> target="_blank" <?php endif; ?> class="ml-1" href="<?php echo esc_url(get_theme_mod('avik_link_power')); ?>"> <?php echo esc_html(get_theme_mod('avik_title_au', __('Franchi Web Design', 'avik'))); ?></a>
      </p>
    </div>
  </div>
</footer>
</div><!-- #page -->
<?php if (false == esc_html(get_theme_mod('avik_enable_to_top', false))) : ?>
  <div id="avik-scrol-to-top">
    <p><?php esc_html_e('BACK TO TOP', 'avik') ?></p>
  </div>
<?php endif; ?>
<?php wp_footer(); ?>
</body>

</html>