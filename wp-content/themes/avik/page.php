<?php

/**
 * page.php
 *
 * @author    Denis Franchi
 * @package   Avik
 */

if (is_page()) {
  get_header('post');
} else {
  get_header();
} ?>
<div id="primary" class="content-area">
  <main id="main" class="site-main">
    <div class="container mt-5">
      <div class="row">
        <div class="<?php if (false == get_theme_mod('avik_enable_sidebar_page_default', false)) : ?>col-sm-9<?php endif; ?> <?php if (true == get_theme_mod('avik_enable_sidebar_page_default')) : ?>col-md-12<?php endif; ?> avik-img-article">
          <?php
          while (have_posts()) :
            the_post();
            get_template_part('template-parts/content', 'page');
            // If comments are open or we have at least one comment, load up the comment template.
            if (comments_open() || get_comments_number()) :
              comments_template();
            endif;
          endwhile; // End of the loop.
          ?>
        </div>
        <?php if (false == get_theme_mod('avik_enable_sidebar_page_default', false)) :
          get_sidebar();
        endif; ?>
      </div>
    </div>
  </main>
</div>
<?php
get_footer();
