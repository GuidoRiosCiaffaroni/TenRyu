<?php

/**
 * avik-support.php
 * @link https://www.denisfranchi.com
 *
 * @package Avik 
 *
 */

function avik_page_display()
{

	// Link to section Header Layout
	$query['autofocus[section]'] = 'header_image';
	$section_link_header = add_query_arg($query, admin_url('customize.php'));
	// Link to section Navbar Menu
	$query['autofocus[section]'] = 'avik_section_settings_navmenu';
	$section_link_header_top_bar = add_query_arg($query, admin_url('customize.php'));
	// Link to section Logo
	$query['autofocus[section]'] = 'title_tagline';
	$section_link_logo = add_query_arg($query, admin_url('customize.php'));
	// Link to section Homepage Settings
	$query['autofocus[section]'] = 'static_front_page';
	$section_link_menu = add_query_arg($query, admin_url('customize.php'));
	// Link to section Footer
	$query['autofocus[section]'] = 'avik_section_settings_footer';
	$section_link_footer = add_query_arg($query, admin_url('customize.php'));
	// Link to section Social
	$query['autofocus[section]'] = 'avik_section_settings_social';
	$section_link_social = add_query_arg($query, admin_url('customize.php'));
	// Link to section Colors
	$query['autofocus[section]'] = 'colors';
	$section_link_colors = add_query_arg($query, admin_url('customize.php'));
	// Link to section Fonts
	$query['autofocus[section]'] = 'avik_font_family_section';
	$section_link_fonts = add_query_arg($query, admin_url('customize.php'));
?>

	<div class="content-header-admin container-fluid">
		<div class="row">
			<div class="description-header-admin col text-left col-sx-12">
				<h2><?php echo esc_html__('Avik', 'avik'); ?></h2>
				<span class="version"><?php echo esc_html__('V 3.0.0', 'avik'); ?></span>
				<span class="dashicons dashicons-performance"></span>
				<span><?php echo esc_html__('Lightning Fast & Minimal & Fully Customizable WordPress theme!', 'avik'); ?></span>
			</div>
			<div class="logo-admin col text-right col-sx-12 pr-0">
				<a href="<?php echo esc_url(franchi_design_url); ?>" target="_blank">
					<img src="<?php echo esc_url(get_template_directory_uri()) . '/images/franchi-design-logo-con-bordo.png'; ?>" alt="<?php esc_html__('Avik Pro', 'avik') ?>">
				</a>
			</div>
		</div>
	</div>

	<div class="body-admin container">
		<div class="row">
			<!-- Tab links -->
			<div class="col-md-8">
				<div class="tab">
					<button class="tablinks" onclick="AvikProOpenGuide(event, 'Welcome')" id="defaultOpen"><?php esc_html_e('Welcome', 'avik'); ?></button>
					<button class="tablinks" onclick="AvikProOpenGuide(event, 'Help')"><?php esc_html_e('Help', 'avik'); ?></button>
					<button class="tablinks" onclick="AvikProOpenGuide(event, 'Options')"><?php esc_html_e('Pro Version', 'avik'); ?></button>
					<button class="tablinks" onclick="AvikProOpenGuide(event, 'Demo')"><?php esc_html_e('Demo Install', 'avik'); ?></button>
				</div>
				<!-- Tab content -->
				<!-- Demo Install -->
				<div id="Demo" class="tabcontent">
					<h3 class="avik-welkome-support-title"><?php echo esc_html__('Documentation for installing the demos', 'avik'); ?></h3>
					<p class="bubiblock-welkome-support"><?php echo esc_html__('1. Install and activate the recommended Plugin "One Click Demo Import"', 'avik'); ?></p>
					<p class="bubiblock-welkome-support"><?php echo esc_html__('2. Follow this link and download the Avik demo files for free. Press the "DOWNLOAD DEMO FREE AVIK" button.', 'avik'); ?></p>
					<a href="<?php echo esc_url(avik_url_promotion); ?>" target="_blank"><?php esc_html_e('DEMO AVIK FREE', 'avik'); ?></a>
					<p class="bubiblock-welkome-support"><?php echo esc_html__('3. Inside the downloaded zip file you will find 2 more zip files, which are 2 demos', 'avik'); ?></p>
					<p class="bubiblock-welkome-support"><?php echo esc_html__('4. Inside you will find 3 files (.dat, .xml, .wie)', 'avik'); ?></p>
					<p class="bubiblock-welkome-support"><?php echo esc_html__('5. Go to Appearance -> AVIK Import Demo and select the demo files of your choice.', 'avik'); ?></p>
					<p class="bubiblock-welkome-support"><?php echo esc_html__('Done!', 'avik'); ?></p>
				</div>
				<!-- Welcome -->
				<div id="Welcome" class="tabcontent">
					<h3 class="avik-welkome-support-title"><?php echo esc_html__('Welcome to Avik', 'avik'); ?></h3>
					<p class="bubiblock-welkome-support"><?php echo esc_html__('Thank you for choosing a Franchi Web Design product!', 'avik'); ?></p>
					<div class="container-body-admin">
						<h4><?php echo esc_html__('Link to Customizer Settings:', 'avik') ?></h4>
						<div class="row">
							<div class="col-admin-50 col-left-admin">
								<ul>
									<hr>
									<li><span class="dashicons dashicons-align-center"></span><a target="_blank" href="<?php echo esc_url($section_link_header); ?>"><?php echo esc_html__('Header Builder', 'avik') ?></a></li>
									<hr>
									<li><span class="dashicons dashicons-menu"></span><a target="_blank" href="<?php echo esc_url($section_link_header_top_bar); ?>"><?php echo esc_html__('Nav Menu Settings', 'avik') ?></a></li>
									<hr>
									<li><span class="dashicons dashicons-align-wide"></span><a target="_blank" href="<?php echo esc_url($section_link_footer); ?>"><?php echo esc_html__('Footer Builder', 'avik') ?></a></li>
									<hr>
									<li><span class="dashicons dashicons-admin-customizer"></span><a target="_blank" href="<?php echo esc_url($section_link_colors); ?>"><?php echo esc_html__('Set Colors', 'avik') ?></a></li>
									<hr class="mb-5">
								</ul>
							</div>
							<div class="col-admin-50 text-right col-right-admin">
								<ul>
									<hr>
									<li><span class="dashicons dashicons-format-image"></span><a target="_blank" href="<?php echo esc_url($section_link_logo); ?>"><?php echo esc_html__('Upload Logo&nbsp;&nbsp;&nbsp;&nbsp;', 'avik') ?></a></li>
									<hr>
									<li><span class="dashicons dashicons-admin-home"></span><a target="_blank" href="<?php echo esc_url($section_link_menu); ?>"><?php echo esc_html__('Set Homepage', 'avik') ?></a></li>
									<hr>
									<li><span class="dashicons dashicons-share"></span><a target="_blank" href="<?php echo esc_url($section_link_social); ?>"><?php echo esc_html__('&nbsp;Set Social&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', 'avik') ?></a></li>
									<hr>
									<li><span class="dashicons dashicons-editor-textcolor"></span><a target="_blank" href="<?php echo esc_url($section_link_fonts); ?>"><?php echo esc_html__('&nbsp;Set Fonts&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', 'avik') ?></a></li>
									<hr class="mb-5">
								</ul>
							</div>
						</div>
					</div>
				</div>

				<!-- Help -->
				<div id="Help" class="tabcontent">
					<div class="at-documentation">
						<div class="at-header-help">
							<h3 class="avik-welkome-support-title"><?php echo esc_html__('Documentation', 'avik'); ?></h2>
						</div>
						<div class="at-header-help-p">
							<p><?php echo esc_html__('For more, refer to our documentation site or click the links below:', 'avik') ?></p>
							<div class="at-button-documentation">
								<a class="at-read-documentation" target="_blank" href="<?php echo esc_url(avik_url_documentation_theme); ?>"><?php echo esc_html('Read Documentation', 'avik'); ?></a><br><br>
								<a class="at-theme-support" target="_blank" href="<?php echo esc_url(avik_url_support_theme); ?>"><?php echo esc_html('Theme Support', 'avik'); ?></a>
							</div>
						</div>
					</div>
					<div class="at-margin-bottom-tab"></div>
					<div class="bubiblock-clear-guide-support-admin"></div>
				</div>

				<!-- License -->
				<div id="Options" class="tabcontent">

					<h3 class="avik-welkome-support-title"><?php esc_html_e('PRO VERSION', 'avik'); ?></h3>
					<p class="avik-welkome-support">
						<?php esc_html_e('Specifications Avik theme', 'avik'); ?>
					</p>
					<div class="avik-guide-support-admin-comparison">
						<div class="comparison">
							<table>
								<thead>
									<tr>
										<th class="tl tl2"></th>
										<th class="product" style="background:#82B541;border-top-left-radius: 5px; border-left:0px;"><?php esc_html_e('FREE', 'avik'); ?></th>
										<th class="product" style="background:#82B541;"><?php esc_html_e('PRO', 'avik'); ?></th>
									</tr>
									<tr>
										<th></th>
										<th class="price-info">
											<div class="price-now"><span><?php esc_html_e('AVIK - THEME', 'avik'); ?></span><br>
												<p></p>
											</div>
										</th>
										<th class="price-info">
											<div class="price-now"><span><?php esc_html_e('AVIK - THEME', 'avik'); ?></span>
											</div>
										</th>
									</tr>
								</thead>
								<tbody>
									<!-- Logo -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Logo Upload', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Logo Upload', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span>
										</td>
										<td><span><i class="fa fa-check"></i></span></td>
										</td>
									</tr>
									<!-- Font Awesome -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Font Awesome Icons v5', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Font Awesome Icons v5', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span>
										</td>
										<td><span><i class="fa fa-check"></i></span></td>
										</td>
									</tr>
									<!-- Ready Retina -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Retina Ready', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Retina Ready', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span>
										</td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Responsive -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Responsive Design', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Responsive Design', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span>
										</td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Color Change -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Color Change', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Color Change', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span>
										</td>
										<td><span><?php esc_html_e('Live + 10 Skins', 'avik'); ?></span></td>
									</tr>
									<!-- Color Title -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Color Titles and Paragraphs', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Color Titles and Paragraphs', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span>
										</td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Font Family -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Font Family', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Font Family', 'avik'); ?></td>
										<td><span><?php esc_html_e('20', 'avik'); ?></span>
										</td>
										<td><span><?php esc_html_e('20+ Custom Font', 'avik'); ?></span></td>
									</tr>
									<!-- Layou setting -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Layout Settings', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Layout Settings', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span>
										</td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Header Spider -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Header Spider Effect', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Header Spider Effect', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- More Slides -->
									<tr>
										<td></td>
										<td colspan="4"><?php esc_html_e('More Slider', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('More Slides', 'avik'); ?></td>
										<td><span><?php esc_html_e('1', 'avik'); ?></span></td>
										<td><span><?php esc_html_e('3', 'avik'); ?></span></td>
									</tr>
									<!-- More Widgets -->
									<tr>
										<td></td>
										<td colspan="4"><?php esc_html_e('More Areas Widgets', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('More Areas Widgets', 'avik'); ?></td>
										<td><span><?php esc_html_e('5', 'avik'); ?></span></td>
										<td><span><?php esc_html_e('13', 'avik'); ?></span></td>
									</tr>
									<!-- Menu types -->
									<tr>
										<td></td>
										<td colspan="4"><?php esc_html_e('Menu Types', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Menu Types', 'avik'); ?></td>
										<td><span><?php esc_html_e('1', 'avik'); ?></span></td>
										<td><span><?php esc_html_e('3', 'avik'); ?></span></td>
									</tr>
									<!-- Page Template -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Page Templates', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Page Templates', 'avik'); ?></td>
										<td><span><?php esc_html_e('4', 'avik'); ?></span></td>
										<td><span><?php esc_html_e('16', 'avik'); ?></span></td>
									</tr>
									<!-- Post Template -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Post Templates', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Post Templates', 'avik'); ?></td>
										<td><span><?php esc_html_e('3', 'avik'); ?></span></td>
										<td><span><?php esc_html_e('5', 'avik'); ?></span></td>
									</tr>
									<!-- Blog Layout -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Blog Layouts', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Blog Layouts', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><i class="fa fa-check"></i></td>
									</tr>
									<!-- Meta Box -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Meta Box Customized', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Meta Box Customized', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><i class="fa fa-check"></i></td>
									</tr>
									<!-- Pop-ip Light Box -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Pop-up Light Box', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Pop-up Light Box', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><i class="fa fa-check"></i></td>
									</tr>
									<!-- Gutenberg -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Gutenberg Compatible', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Gutenberg Compatible', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Portfolio -->
									<tr>
										<td></td>
										<td colspan="4"><?php esc_html_e('Portfolio', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Portfolio', 'avik'); ?></td>
										<td><span><?php esc_html_e('1', 'avik'); ?></span></td>
										<td><span><?php esc_html_e('2', 'avik'); ?></span></td>
									</tr>
									<!-- Portfolio Extended -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Portfolio Layout', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Portfolio Layout', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Effect Hover Portfolio -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Effect Hover Image Portfolio', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Effect Hover Image Portfolio', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><?php esc_html_e('19', 'avik'); ?></span></td>
									</tr>
									<!-- About US -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('About US', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('About US', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Woocommerce compatible -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Woocommerce Complatible', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Woocommerce Complatible', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Woocommerce Template -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Woocommerce Templates', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Woocommerce Templates', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Woocommerce Slider -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Woocommerce Slider', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Woocommerce Slider', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Editor -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Editor Blocks', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Editor Blocks', 'avik'); ?></td>
										<td><span><i class="fas fa-check"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- BubiBlock Slider -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('BubiBlock Slider', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('BubiBlock Slider', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Dropdown Menu -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Dropdown Menu', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Dropdown Menu', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Child-Theme Included -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Child-Theme Included', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Child-Theme Included', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Transition Ready -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Transition Ready', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Transition Ready', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Language -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Language', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Language', 'avik'); ?></td>
										<td><span><?php esc_html_e('English and Italian', 'avik'); ?></span></td>
										<td><span><?php esc_html_e('English and Italian', 'avik'); ?></span></td>
									</tr>
									<!-- Full Support -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Full Support', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Full Support', 'avik'); ?></td>
										<td><span><i class="fas fa-times avik-icon-free"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<tr>
										<td></td>
									</tr>
									<tr>
										<!-- Support -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Support', 'avik'); ?></td>
									</tr>
									<tr>
										<td><?php esc_html_e('Support', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<!-- Color Navmenu -->
									<tr>
										<td></td>
										<td colspan="3"><?php esc_html_e('Color Nav Menu', 'avik'); ?></td>
									</tr>
									<tr class="compare-row">
										<td><?php esc_html_e('Color Nav Menu', 'avik'); ?></td>
										<td><span><i class="fa fa-check"></i></span></td>
										<td><span><i class="fa fa-check"></i></span></td>
									</tr>
									<tr>
										<td></td>
									</tr>
									<tr>
										<td></td>
										<td>
											<div class="avik-no-button-free"></div>
										</td>
										<td><a href="<?php echo esc_url(avik_url_promotion); ?>" class="price-buy" target="_blank"><?php esc_html_e('GO PRO', 'avik'); ?><span class="hide-mobile"></span></a></td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>


				</div>

			</div>
			<!-- Sidebar -->
			<div class="col">
				<div class="sidebar-admin">
					<div class="header-sidebar-admin">
						<span class="dashicons dashicons-admin-customizer"></span>
						<h4><?php echo esc_html__('Starter Templates', 'avik') ?></h4>
					</div>
					<hr class="mb-1">
					<div class="img-template-admin text-center">
						<img src="<?php echo esc_url(get_template_directory_uri()) . '/images/demo-1.png'; ?>" alt="<?php esc_html__('Avik Arck', 'avik') ?>">
						<img src="<?php echo esc_url(get_template_directory_uri()) . '/images/demo-2.png'; ?>" alt="<?php esc_html__('Avik Medical', 'avik') ?>">
					</div>
					<div class="body-templete-admin">
						<p class="mt-1"><?php echo esc_html__('Choose our wonderful templates, in less than 5 minutes you will have a wonderful site!', 'avik') ?></p>
						<p><a target="_blank" href="<?php echo esc_url(avik_url_promotion); ?>"><?php echo esc_html__('Demo Avik', 'avik') ?></a><span class="link-admin dashicons dashicons-external"></span></p>
					</div>
				</div>
				<div class="sidebar-admin mt-4">
					<div class="header-sidebar-admin">
						<span class="dashicons dashicons-admin-links"></span>
						<h4><?php echo esc_html__('Important Links', 'avik') ?></h4>
					</div>
					<hr>
					<ul>
						<li class="link-sidebar-admin"><span class="dashicons dashicons-admin-home"></span><a target="_blank" href="<?php echo esc_url(franchi_design_url); ?>"><?php echo esc_html__('Franchi Web Design', 'avik') ?></a></li>
						<li class="link-sidebar-admin mt-3"><span class="dashicons dashicons-book"></span><a target="_blank" href="<?php echo esc_url(avik_url_documentation_theme); ?>"><?php echo esc_html__('Documentation', 'avik') ?></a></li>
						<li class="link-sidebar-admin mt-3"><span class="dashicons dashicons-admin-tools"></span><a target="_blank" href="<?php echo esc_url(avik_url_support_theme); ?>"><?php echo esc_html__('Support', 'avik') ?></a></li>
						<li class="link-sidebar-admin mt-3"><span class="dashicons dashicons-groups"></span><a target="_blank" href="<?php echo esc_url(avik_forum_theme); ?>"><?php echo esc_html__('Community', 'avik') ?></a></li>
						<li class="link-sidebar-admin mt-3"><span class="dashicons dashicons-star-filled"></span><a target="_blank" href="<?php echo esc_url(avik_review_theme); ?>"><?php echo esc_html__('Leave a review', 'avik') ?></a></li>
					</ul>
				</div>
			</div>

		</div>
	</div>

<?php
	/* And Settings Page */
}
