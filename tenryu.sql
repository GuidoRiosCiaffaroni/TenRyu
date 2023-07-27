-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 27-07-2023 a las 17:53:51
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `tenryu`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_commentdata`
--

CREATE TABLE `wp_commentdata` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `comment_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_comments`
--

CREATE TABLE `wp_comments` (
  `comment_ID` bigint(20) UNSIGNED NOT NULL,
  `comment_post_ID` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `comment_author` tinytext NOT NULL,
  `comment_author_email` varchar(100) NOT NULL DEFAULT '',
  `comment_author_url` varchar(200) NOT NULL DEFAULT '',
  `comment_author_IP` varchar(100) NOT NULL DEFAULT '',
  `comment_date` datetime NOT NULL,
  `comment_date_gmt` datetime NOT NULL,
  `comment_content` text NOT NULL,
  `comment_karma` int(11) NOT NULL DEFAULT 0,
  `comment_approved` varchar(20) NOT NULL DEFAULT '1',
  `comment_agent` varchar(255) NOT NULL DEFAULT '',
  `comment_type` varchar(20) NOT NULL DEFAULT 'comment',
  `comment_parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_comments`
--

INSERT INTO `wp_comments` (`comment_ID`, `comment_post_ID`, `comment_author`, `comment_author_email`, `comment_author_url`, `comment_author_IP`, `comment_date`, `comment_date_gmt`, `comment_content`, `comment_karma`, `comment_approved`, `comment_agent`, `comment_type`, `comment_parent`, `user_id`) VALUES
(1, 1, 'A WordPress Commenter', 'wapuu@wordpress.example', 'https://wordpress.org/', '', '2023-07-24 18:47:35', '2023-07-24 18:47:35', 'Hi, this is a comment.\nTo get started with moderating, editing, and deleting comments, please visit the Comments screen in the dashboard.\nCommenter avatars come from <a href=\"https://en.gravatar.com/\">Gravatar</a>.', 0, '1', '', 'comment', 0, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_links`
--

CREATE TABLE `wp_links` (
  `link_id` bigint(20) UNSIGNED NOT NULL,
  `link_url` varchar(255) NOT NULL DEFAULT '',
  `link_name` varchar(255) NOT NULL DEFAULT '',
  `link_image` varchar(255) NOT NULL DEFAULT '',
  `link_target` varchar(25) NOT NULL DEFAULT '',
  `link_description` varchar(255) NOT NULL DEFAULT '',
  `link_visible` varchar(20) NOT NULL DEFAULT 'Y',
  `link_owner` bigint(20) UNSIGNED NOT NULL DEFAULT 1,
  `link_rating` int(11) NOT NULL DEFAULT 0,
  `link_updated` datetime NOT NULL,
  `link_rel` varchar(255) NOT NULL DEFAULT '',
  `link_notes` mediumtext NOT NULL,
  `link_rss` varchar(255) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_options`
--

CREATE TABLE `wp_options` (
  `option_id` bigint(20) UNSIGNED NOT NULL,
  `option_name` varchar(191) NOT NULL DEFAULT '',
  `option_value` longtext NOT NULL,
  `autoload` varchar(20) NOT NULL DEFAULT 'yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_options`
--

INSERT INTO `wp_options` (`option_id`, `option_name`, `option_value`, `autoload`) VALUES
(1, 'siteurl', 'http://localhost/tenryu', 'yes'),
(2, 'home', 'http://localhost/tenryu', 'yes'),
(3, 'blogname', 'Ten Ryu Dojo', 'yes'),
(4, 'blogdescription', '', 'yes'),
(5, 'users_can_register', '0', 'yes'),
(6, 'admin_email', 'tenryu.cl@gmail.com', 'yes'),
(7, 'start_of_week', '1', 'yes'),
(8, 'use_balanceTags', '0', 'yes'),
(9, 'use_smilies', '1', 'yes'),
(10, 'require_name_email', '1', 'yes'),
(11, 'comments_notify', '1', 'yes'),
(12, 'posts_per_rss', '10', 'yes'),
(13, 'rss_use_excerpt', '0', 'yes'),
(14, 'mailserver_url', 'mail.example.com', 'yes'),
(15, 'mailserver_login', 'login@example.com', 'yes'),
(16, 'mailserver_pass', 'password', 'yes'),
(17, 'mailserver_port', '110', 'yes'),
(18, 'default_category', '1', 'yes'),
(19, 'default_comment_status', 'open', 'yes'),
(20, 'default_ping_status', 'open', 'yes'),
(21, 'default_pingback_flag', '1', 'yes'),
(22, 'posts_per_page', '10', 'yes'),
(23, 'date_format', 'F j, Y', 'yes'),
(24, 'time_format', 'g:i a', 'yes'),
(25, 'links_updated_date_format', 'F j, Y g:i a', 'yes'),
(26, 'comment_moderation', '0', 'yes'),
(27, 'moderation_notify', '1', 'yes'),
(28, 'permalink_structure', '', 'yes'),
(29, 'rewrite_rules', '', 'yes'),
(30, 'hack_file', '0', 'yes'),
(31, 'blog_charset', 'UTF-8', 'yes'),
(32, 'moderation_keys', '', 'no'),
(33, 'active_plugins', 'a:4:{i:0;s:34:\"cloudflare-flexible-ssl/plugin.php\";i:2;s:27:\"bubiblock-slider/plugin.php\";i:3;s:36:\"contact-form-7/wp-contact-form-7.php\";i:4;s:47:\"one-click-demo-import/one-click-demo-import.php\";}', 'yes'),
(34, 'category_base', '', 'yes'),
(35, 'ping_sites', 'http://rpc.pingomatic.com/', 'yes'),
(36, 'comment_max_links', '2', 'yes'),
(37, 'gmt_offset', '0', 'yes'),
(38, 'default_email_category', '1', 'yes'),
(39, 'recently_edited', 'a:4:{i:0;s:52:\"/home/www/tenryu.cl/wp-content/themes/avik/style.css\";i:1;s:81:\"/home/www/tenryu.cl/wp-content/themes/avik/template-parts/content-page-static.php\";i:2;s:59:\"/home/www/tenryu.cl/wp-content/themes/avik/avik-support.php\";i:4;s:0:\"\";}', 'no'),
(40, 'template', 'avik', 'yes'),
(41, 'stylesheet', 'avik', 'yes'),
(42, 'comment_registration', '0', 'yes'),
(43, 'html_type', 'text/html', 'yes'),
(44, 'use_trackback', '0', 'yes'),
(45, 'default_role', 'subscriber', 'yes'),
(46, 'db_version', '53496', 'yes'),
(47, 'uploads_use_yearmonth_folders', '1', 'yes'),
(48, 'upload_path', '', 'yes'),
(49, 'blog_public', '1', 'yes'),
(50, 'default_link_category', '2', 'yes'),
(51, 'show_on_front', 'posts', 'yes'),
(52, 'tag_base', '', 'yes'),
(53, 'show_avatars', '1', 'yes'),
(54, 'avatar_rating', 'G', 'yes'),
(55, 'upload_url_path', '', 'yes'),
(56, 'thumbnail_size_w', '150', 'yes'),
(57, 'thumbnail_size_h', '150', 'yes'),
(58, 'thumbnail_crop', '1', 'yes'),
(59, 'medium_size_w', '300', 'yes'),
(60, 'medium_size_h', '300', 'yes'),
(61, 'avatar_default', 'mystery', 'yes'),
(62, 'large_size_w', '1024', 'yes'),
(63, 'large_size_h', '1024', 'yes'),
(64, 'image_default_link_type', 'none', 'yes'),
(65, 'image_default_size', '', 'yes'),
(66, 'image_default_align', '', 'yes'),
(67, 'close_comments_for_old_posts', '0', 'yes'),
(68, 'close_comments_days_old', '14', 'yes'),
(69, 'thread_comments', '1', 'yes'),
(70, 'thread_comments_depth', '5', 'yes'),
(71, 'page_comments', '0', 'yes'),
(72, 'comments_per_page', '50', 'yes'),
(73, 'default_comments_page', 'newest', 'yes'),
(74, 'comment_order', 'asc', 'yes'),
(75, 'sticky_posts', 'a:0:{}', 'yes'),
(76, 'widget_categories', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(77, 'widget_text', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(78, 'widget_rss', 'a:2:{i:1;a:0:{}s:12:\"_multiwidget\";i:1;}', 'yes'),
(79, 'uninstall_plugins', 'a:1:{s:31:\"backup-backup/backup-backup.php\";s:21:\"bmi_uninstall_handler\";}', 'no'),
(80, 'timezone_string', '', 'yes'),
(81, 'page_for_posts', '0', 'yes'),
(82, 'page_on_front', '0', 'yes'),
(83, 'default_post_format', '0', 'yes'),
(84, 'link_manager_enabled', '0', 'yes'),
(85, 'finished_splitting_shared_terms', '1', 'yes'),
(86, 'site_icon', '7', 'yes'),
(87, 'medium_large_size_w', '768', 'yes'),
(88, 'medium_large_size_h', '0', 'yes'),
(89, 'wp_page_for_privacy_policy', '3', 'yes'),
(90, 'show_comments_cookies_opt_in', '1', 'yes'),
(91, 'admin_email_lifespan', '1705776455', 'yes'),
(92, 'disallowed_keys', '', 'no'),
(93, 'comment_previously_approved', '1', 'yes'),
(94, 'auto_plugin_theme_update_emails', 'a:0:{}', 'no'),
(95, 'auto_update_core_dev', 'enabled', 'yes'),
(96, 'auto_update_core_minor', 'enabled', 'yes'),
(97, 'auto_update_core_major', 'enabled', 'yes'),
(98, 'wp_force_deactivated_plugins', 'a:0:{}', 'yes'),
(99, 'initial_db_version', '53496', 'yes'),
(100, 'wp_user_roles', 'a:5:{s:13:\"administrator\";a:2:{s:4:\"name\";s:13:\"Administrator\";s:12:\"capabilities\";a:61:{s:13:\"switch_themes\";b:1;s:11:\"edit_themes\";b:1;s:16:\"activate_plugins\";b:1;s:12:\"edit_plugins\";b:1;s:10:\"edit_users\";b:1;s:10:\"edit_files\";b:1;s:14:\"manage_options\";b:1;s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:6:\"import\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:8:\"level_10\";b:1;s:7:\"level_9\";b:1;s:7:\"level_8\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;s:12:\"delete_users\";b:1;s:12:\"create_users\";b:1;s:17:\"unfiltered_upload\";b:1;s:14:\"edit_dashboard\";b:1;s:14:\"update_plugins\";b:1;s:14:\"delete_plugins\";b:1;s:15:\"install_plugins\";b:1;s:13:\"update_themes\";b:1;s:14:\"install_themes\";b:1;s:11:\"update_core\";b:1;s:10:\"list_users\";b:1;s:12:\"remove_users\";b:1;s:13:\"promote_users\";b:1;s:18:\"edit_theme_options\";b:1;s:13:\"delete_themes\";b:1;s:6:\"export\";b:1;}}s:6:\"editor\";a:2:{s:4:\"name\";s:6:\"Editor\";s:12:\"capabilities\";a:34:{s:17:\"moderate_comments\";b:1;s:17:\"manage_categories\";b:1;s:12:\"manage_links\";b:1;s:12:\"upload_files\";b:1;s:15:\"unfiltered_html\";b:1;s:10:\"edit_posts\";b:1;s:17:\"edit_others_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:10:\"edit_pages\";b:1;s:4:\"read\";b:1;s:7:\"level_7\";b:1;s:7:\"level_6\";b:1;s:7:\"level_5\";b:1;s:7:\"level_4\";b:1;s:7:\"level_3\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:17:\"edit_others_pages\";b:1;s:20:\"edit_published_pages\";b:1;s:13:\"publish_pages\";b:1;s:12:\"delete_pages\";b:1;s:19:\"delete_others_pages\";b:1;s:22:\"delete_published_pages\";b:1;s:12:\"delete_posts\";b:1;s:19:\"delete_others_posts\";b:1;s:22:\"delete_published_posts\";b:1;s:20:\"delete_private_posts\";b:1;s:18:\"edit_private_posts\";b:1;s:18:\"read_private_posts\";b:1;s:20:\"delete_private_pages\";b:1;s:18:\"edit_private_pages\";b:1;s:18:\"read_private_pages\";b:1;}}s:6:\"author\";a:2:{s:4:\"name\";s:6:\"Author\";s:12:\"capabilities\";a:10:{s:12:\"upload_files\";b:1;s:10:\"edit_posts\";b:1;s:20:\"edit_published_posts\";b:1;s:13:\"publish_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_2\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;s:22:\"delete_published_posts\";b:1;}}s:11:\"contributor\";a:2:{s:4:\"name\";s:11:\"Contributor\";s:12:\"capabilities\";a:5:{s:10:\"edit_posts\";b:1;s:4:\"read\";b:1;s:7:\"level_1\";b:1;s:7:\"level_0\";b:1;s:12:\"delete_posts\";b:1;}}s:10:\"subscriber\";a:2:{s:4:\"name\";s:10:\"Subscriber\";s:12:\"capabilities\";a:2:{s:4:\"read\";b:1;s:7:\"level_0\";b:1;}}}', 'yes'),
(101, 'fresh_site', '0', 'yes'),
(102, 'user_count', '1', 'no'),
(103, 'widget_block', 'a:6:{i:2;a:1:{s:7:\"content\";s:19:\"<!-- wp:search /-->\";}i:3;a:1:{s:7:\"content\";s:154:\"<!-- wp:group --><div class=\"wp-block-group\"><!-- wp:heading --><h2>Recent Posts</h2><!-- /wp:heading --><!-- wp:latest-posts /--></div><!-- /wp:group -->\";}i:4;a:1:{s:7:\"content\";s:227:\"<!-- wp:group --><div class=\"wp-block-group\"><!-- wp:heading --><h2>Recent Comments</h2><!-- /wp:heading --><!-- wp:latest-comments {\"displayAvatar\":false,\"displayDate\":false,\"displayExcerpt\":false} /--></div><!-- /wp:group -->\";}i:5;a:1:{s:7:\"content\";s:146:\"<!-- wp:group --><div class=\"wp-block-group\"><!-- wp:heading --><h2>Archives</h2><!-- /wp:heading --><!-- wp:archives /--></div><!-- /wp:group -->\";}i:6;a:1:{s:7:\"content\";s:150:\"<!-- wp:group --><div class=\"wp-block-group\"><!-- wp:heading --><h2>Categories</h2><!-- /wp:heading --><!-- wp:categories /--></div><!-- /wp:group -->\";}s:12:\"_multiwidget\";i:1;}', 'yes'),
(104, 'sidebars_widgets', 'a:9:{s:19:\"wp_inactive_widgets\";a:0:{}s:19:\"widget_contact_form\";a:0:{}s:28:\"widget_contact_form_services\";a:0:{}s:17:\"widget_footer_one\";a:0:{}s:17:\"widget_footer_two\";a:0:{}s:19:\"widget_block_header\";a:0:{}s:9:\"sidebar-1\";a:5:{i:0;s:7:\"block-2\";i:1;s:7:\"block-3\";i:2;s:7:\"block-4\";i:3;s:7:\"block-5\";i:4;s:7:\"block-6\";}s:10:\"sidebar-40\";a:0:{}s:13:\"array_version\";i:3;}', 'yes'),
(105, 'cron', 'a:6:{i:1690476458;a:1:{s:34:\"wp_privacy_delete_old_export_files\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"hourly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:3600;}}}i:1690483658;a:5:{s:32:\"recovery_mode_clean_expired_keys\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:18:\"wp_https_detection\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:16:\"wp_version_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:17:\"wp_update_plugins\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}s:16:\"wp_update_themes\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1690483680;a:3:{s:19:\"wp_scheduled_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:25:\"delete_expired_transients\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}s:21:\"wp_update_user_counts\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:10:\"twicedaily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:43200;}}}i:1690483681;a:1:{s:30:\"wp_scheduled_auto_draft_delete\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:5:\"daily\";s:4:\"args\";a:0:{}s:8:\"interval\";i:86400;}}}i:1690915658;a:1:{s:30:\"wp_site_health_scheduled_check\";a:1:{s:32:\"40cd750bba9870f18aada2478b24840a\";a:3:{s:8:\"schedule\";s:6:\"weekly\";s:4:\"args\";a:0:{}s:8:\"interval\";i:604800;}}}s:7:\"version\";i:2;}', 'yes'),
(106, 'widget_pages', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(107, 'widget_calendar', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(108, 'widget_archives', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(109, 'widget_media_audio', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(110, 'widget_media_image', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(111, 'widget_media_gallery', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(112, 'widget_media_video', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(113, 'widget_meta', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(114, 'widget_search', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(115, 'widget_recent-posts', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(116, 'widget_recent-comments', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(117, 'widget_tag_cloud', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(118, 'widget_nav_menu', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(119, 'widget_custom_html', 'a:1:{s:12:\"_multiwidget\";i:1;}', 'yes'),
(121, '_site_transient_update_core', 'O:8:\"stdClass\":4:{s:7:\"updates\";a:1:{i:0;O:8:\"stdClass\":10:{s:8:\"response\";s:6:\"latest\";s:8:\"download\";s:59:\"https://downloads.wordpress.org/release/wordpress-6.2.2.zip\";s:6:\"locale\";s:5:\"en_US\";s:8:\"packages\";O:8:\"stdClass\":5:{s:4:\"full\";s:59:\"https://downloads.wordpress.org/release/wordpress-6.2.2.zip\";s:10:\"no_content\";s:70:\"https://downloads.wordpress.org/release/wordpress-6.2.2-no-content.zip\";s:11:\"new_bundled\";s:71:\"https://downloads.wordpress.org/release/wordpress-6.2.2-new-bundled.zip\";s:7:\"partial\";s:0:\"\";s:8:\"rollback\";s:0:\"\";}s:7:\"current\";s:5:\"6.2.2\";s:7:\"version\";s:5:\"6.2.2\";s:11:\"php_version\";s:6:\"5.6.20\";s:13:\"mysql_version\";s:3:\"5.0\";s:11:\"new_bundled\";s:3:\"6.1\";s:15:\"partial_version\";s:0:\"\";}}s:12:\"last_checked\";i:1690472814;s:15:\"version_checked\";s:5:\"6.2.2\";s:12:\"translations\";a:0:{}}', 'no'),
(125, '_site_transient_update_themes', 'O:8:\"stdClass\":5:{s:12:\"last_checked\";i:1690468712;s:7:\"checked\";a:6:{s:4:\"avik\";s:5:\"3.0.0\";s:9:\"scapeshot\";s:5:\"1.2.1\";s:7:\"signify\";s:5:\"2.2.1\";s:15:\"twentytwentyone\";s:3:\"1.8\";s:17:\"twentytwentythree\";s:3:\"1.1\";s:15:\"twentytwentytwo\";s:3:\"1.4\";}s:8:\"response\";a:0:{}s:9:\"no_update\";a:6:{s:4:\"avik\";a:6:{s:5:\"theme\";s:4:\"avik\";s:11:\"new_version\";s:5:\"3.0.0\";s:3:\"url\";s:34:\"https://wordpress.org/themes/avik/\";s:7:\"package\";s:52:\"https://downloads.wordpress.org/theme/avik.3.0.0.zip\";s:8:\"requires\";b:0;s:12:\"requires_php\";s:3:\"5.6\";}s:9:\"scapeshot\";a:6:{s:5:\"theme\";s:9:\"scapeshot\";s:11:\"new_version\";s:5:\"1.2.1\";s:3:\"url\";s:39:\"https://wordpress.org/themes/scapeshot/\";s:7:\"package\";s:57:\"https://downloads.wordpress.org/theme/scapeshot.1.2.1.zip\";s:8:\"requires\";s:3:\"5.6\";s:12:\"requires_php\";s:3:\"5.6\";}s:7:\"signify\";a:6:{s:5:\"theme\";s:7:\"signify\";s:11:\"new_version\";s:5:\"2.2.1\";s:3:\"url\";s:37:\"https://wordpress.org/themes/signify/\";s:7:\"package\";s:55:\"https://downloads.wordpress.org/theme/signify.2.2.1.zip\";s:8:\"requires\";s:3:\"5.6\";s:12:\"requires_php\";s:3:\"5.6\";}s:15:\"twentytwentyone\";a:6:{s:5:\"theme\";s:15:\"twentytwentyone\";s:11:\"new_version\";s:3:\"1.8\";s:3:\"url\";s:45:\"https://wordpress.org/themes/twentytwentyone/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/theme/twentytwentyone.1.8.zip\";s:8:\"requires\";s:3:\"5.3\";s:12:\"requires_php\";s:3:\"5.6\";}s:17:\"twentytwentythree\";a:6:{s:5:\"theme\";s:17:\"twentytwentythree\";s:11:\"new_version\";s:3:\"1.1\";s:3:\"url\";s:47:\"https://wordpress.org/themes/twentytwentythree/\";s:7:\"package\";s:63:\"https://downloads.wordpress.org/theme/twentytwentythree.1.1.zip\";s:8:\"requires\";s:3:\"6.1\";s:12:\"requires_php\";s:3:\"5.6\";}s:15:\"twentytwentytwo\";a:6:{s:5:\"theme\";s:15:\"twentytwentytwo\";s:11:\"new_version\";s:3:\"1.4\";s:3:\"url\";s:45:\"https://wordpress.org/themes/twentytwentytwo/\";s:7:\"package\";s:61:\"https://downloads.wordpress.org/theme/twentytwentytwo.1.4.zip\";s:8:\"requires\";s:3:\"5.9\";s:12:\"requires_php\";s:3:\"5.6\";}}s:12:\"translations\";a:0:{}}', 'no'),
(126, '_site_transient_timeout_browser_14d58a1ba286f087d9736249ec785314', '1690829281', 'no'),
(127, '_site_transient_browser_14d58a1ba286f087d9736249ec785314', 'a:10:{s:4:\"name\";s:6:\"Chrome\";s:7:\"version\";s:9:\"114.0.0.0\";s:8:\"platform\";s:7:\"Windows\";s:10:\"update_url\";s:29:\"https://www.google.com/chrome\";s:7:\"img_src\";s:43:\"http://s.w.org/images/browsers/chrome.png?1\";s:11:\"img_src_ssl\";s:44:\"https://s.w.org/images/browsers/chrome.png?1\";s:15:\"current_version\";s:2:\"18\";s:7:\"upgrade\";b:0;s:8:\"insecure\";b:0;s:6:\"mobile\";b:0;}', 'no'),
(128, '_site_transient_timeout_php_check_e9a080274371e157ce748ced527522b3', '1690829281', 'no'),
(129, '_site_transient_php_check_e9a080274371e157ce748ced527522b3', 'a:5:{s:19:\"recommended_version\";s:3:\"7.4\";s:15:\"minimum_version\";s:3:\"7.0\";s:12:\"is_supported\";b:1;s:9:\"is_secure\";b:1;s:13:\"is_acceptable\";b:1;}', 'no'),
(134, 'can_compress_scripts', '1', 'no'),
(135, 'theme_mods_twentytwentythree', 'a:1:{s:16:\"sidebars_widgets\";a:2:{s:4:\"time\";i:1690224489;s:4:\"data\";a:3:{s:19:\"wp_inactive_widgets\";a:0:{}s:9:\"sidebar-1\";a:3:{i:0;s:7:\"block-2\";i:1;s:7:\"block-3\";i:2;s:7:\"block-4\";}s:9:\"sidebar-2\";a:2:{i:0;s:7:\"block-5\";i:1;s:7:\"block-6\";}}}}', 'yes'),
(136, 'current_theme', 'Avik', 'yes'),
(137, 'theme_mods_avik', 'a:30:{i:0;b:0;s:18:\"nav_menu_locations\";a:0:{}s:18:\"custom_css_post_id\";i:-1;s:11:\"custom_logo\";i:5;s:23:\"avik_enable_rotate_logo\";i:0;s:15:\"avik_order_sect\";a:1:{i:0;s:11:\"page-static\";}s:19:\"avik_font_size_logo\";s:2:\"80\";s:26:\"avik_font_size_logo_mobile\";s:3:\"100\";s:16:\"header_textcolor\";s:5:\"blank\";s:22:\"avik_enable_blank_link\";i:1;s:27:\"avik_second_img_who_section\";s:55:\"http://tenryu.cl/wp-content/uploads/2023/07/Ten_Ruy.png\";s:29:\"avik_enable_header_page_canva\";i:0;s:12:\"header_image\";s:84:\"http://tenryu.cl/wp-content/uploads/2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg\";s:17:\"header_image_data\";O:8:\"stdClass\":5:{s:13:\"attachment_id\";i:17;s:3:\"url\";s:84:\"http://tenryu.cl/wp-content/uploads/2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg\";s:13:\"thumbnail_url\";s:84:\"http://tenryu.cl/wp-content/uploads/2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg\";s:6:\"height\";i:1289;s:5:\"width\";i:1920;}s:17:\"avik_position_top\";i:1;s:31:\"avik_enable_statistics_whoweare\";i:1;s:25:\"avik_enable_team_whoweare\";i:1;s:33:\"avik_enable_excpert_team_whoweare\";i:1;s:28:\"avik_enable_partner_whoweare\";i:1;s:29:\"avik_enable_footer_page_canva\";i:0;s:23:\"avik_enable_portfolio_1\";i:1;s:23:\"avik_enable_portfolio_2\";i:1;s:23:\"avik_enable_portfolio_3\";i:1;s:26:\"avik_enable_social_contact\";i:1;s:20:\"avik_enable_carousel\";i:1;s:25:\"avik_enable_sidebar_media\";i:1;s:29:\"avik_enable_tags_comment_post\";i:1;s:23:\"avik_enable_border_post\";i:1;s:18:\"avik_enable_to_top\";i:1;s:13:\"avik_resp_top\";i:1;}', 'yes'),
(138, 'theme_switched', '', 'yes'),
(142, 'site_logo', '5', 'yes'),
(145, 'recently_activated', 'a:0:{}', 'yes'),
(148, 'wpcf7', 'a:2:{s:7:\"version\";s:5:\"5.7.7\";s:13:\"bulk_validate\";a:4:{s:9:\"timestamp\";i:1690226905;s:7:\"version\";s:5:\"5.7.7\";s:11:\"count_valid\";i:1;s:13:\"count_invalid\";i:0;}}', 'yes'),
(154, '_site_transient_update_plugins', 'O:8:\"stdClass\":5:{s:12:\"last_checked\";i:1690472814;s:8:\"response\";a:0:{}s:12:\"translations\";a:0:{}s:9:\"no_update\";a:5:{s:27:\"bubiblock-slider/plugin.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:30:\"w.org/plugins/bubiblock-slider\";s:4:\"slug\";s:16:\"bubiblock-slider\";s:6:\"plugin\";s:27:\"bubiblock-slider/plugin.php\";s:11:\"new_version\";s:5:\"2.4.0\";s:3:\"url\";s:47:\"https://wordpress.org/plugins/bubiblock-slider/\";s:7:\"package\";s:59:\"https://downloads.wordpress.org/plugin/bubiblock-slider.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:69:\"https://ps.w.org/bubiblock-slider/assets/icon-256x256.png?rev=2605501\";s:2:\"1x\";s:69:\"https://ps.w.org/bubiblock-slider/assets/icon-128x128.png?rev=2605501\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:72:\"https://ps.w.org/bubiblock-slider/assets/banner-1544x500.png?rev=2605484\";s:2:\"1x\";s:71:\"https://ps.w.org/bubiblock-slider/assets/banner-772x250.png?rev=2605484\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"5.3\";}s:25:\"cloudflare/cloudflare.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:24:\"w.org/plugins/cloudflare\";s:4:\"slug\";s:10:\"cloudflare\";s:6:\"plugin\";s:25:\"cloudflare/cloudflare.php\";s:11:\"new_version\";s:6:\"4.12.2\";s:3:\"url\";s:41:\"https://wordpress.org/plugins/cloudflare/\";s:7:\"package\";s:60:\"https://downloads.wordpress.org/plugin/cloudflare.4.12.2.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:63:\"https://ps.w.org/cloudflare/assets/icon-256x256.png?rev=2471183\";s:2:\"1x\";s:63:\"https://ps.w.org/cloudflare/assets/icon-128x128.png?rev=2471183\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:66:\"https://ps.w.org/cloudflare/assets/banner-1544x500.png?rev=2471183\";s:2:\"1x\";s:65:\"https://ps.w.org/cloudflare/assets/banner-772x250.png?rev=2471183\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"3.4\";}s:36:\"contact-form-7/wp-contact-form-7.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:28:\"w.org/plugins/contact-form-7\";s:4:\"slug\";s:14:\"contact-form-7\";s:6:\"plugin\";s:36:\"contact-form-7/wp-contact-form-7.php\";s:11:\"new_version\";s:5:\"5.7.7\";s:3:\"url\";s:45:\"https://wordpress.org/plugins/contact-form-7/\";s:7:\"package\";s:63:\"https://downloads.wordpress.org/plugin/contact-form-7.5.7.7.zip\";s:5:\"icons\";a:2:{s:2:\"1x\";s:59:\"https://ps.w.org/contact-form-7/assets/icon.svg?rev=2339255\";s:3:\"svg\";s:59:\"https://ps.w.org/contact-form-7/assets/icon.svg?rev=2339255\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:69:\"https://ps.w.org/contact-form-7/assets/banner-1544x500.png?rev=860901\";s:2:\"1x\";s:68:\"https://ps.w.org/contact-form-7/assets/banner-772x250.png?rev=880427\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"6.0\";}s:34:\"cloudflare-flexible-ssl/plugin.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:37:\"w.org/plugins/cloudflare-flexible-ssl\";s:4:\"slug\";s:23:\"cloudflare-flexible-ssl\";s:6:\"plugin\";s:34:\"cloudflare-flexible-ssl/plugin.php\";s:11:\"new_version\";s:5:\"1.3.1\";s:3:\"url\";s:54:\"https://wordpress.org/plugins/cloudflare-flexible-ssl/\";s:7:\"package\";s:72:\"https://downloads.wordpress.org/plugin/cloudflare-flexible-ssl.1.3.1.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:76:\"https://ps.w.org/cloudflare-flexible-ssl/assets/icon-256x256.png?rev=2021081\";s:2:\"1x\";s:76:\"https://ps.w.org/cloudflare-flexible-ssl/assets/icon-128x128.jpg?rev=2021081\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:79:\"https://ps.w.org/cloudflare-flexible-ssl/assets/banner-1544x500.png?rev=2362309\";s:2:\"1x\";s:78:\"https://ps.w.org/cloudflare-flexible-ssl/assets/banner-772x250.png?rev=2362309\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:5:\"3.2.0\";}s:47:\"one-click-demo-import/one-click-demo-import.php\";O:8:\"stdClass\":10:{s:2:\"id\";s:35:\"w.org/plugins/one-click-demo-import\";s:4:\"slug\";s:21:\"one-click-demo-import\";s:6:\"plugin\";s:47:\"one-click-demo-import/one-click-demo-import.php\";s:11:\"new_version\";s:5:\"3.1.2\";s:3:\"url\";s:52:\"https://wordpress.org/plugins/one-click-demo-import/\";s:7:\"package\";s:70:\"https://downloads.wordpress.org/plugin/one-click-demo-import.3.1.2.zip\";s:5:\"icons\";a:2:{s:2:\"2x\";s:74:\"https://ps.w.org/one-click-demo-import/assets/icon-256x256.png?rev=2506685\";s:2:\"1x\";s:74:\"https://ps.w.org/one-click-demo-import/assets/icon-128x128.png?rev=2506685\";}s:7:\"banners\";a:2:{s:2:\"2x\";s:77:\"https://ps.w.org/one-click-demo-import/assets/banner-1544x500.png?rev=2506685\";s:2:\"1x\";s:76:\"https://ps.w.org/one-click-demo-import/assets/banner-772x250.png?rev=2506685\";}s:11:\"banners_rtl\";a:0:{}s:8:\"requires\";s:3:\"5.2\";}}s:7:\"checked\";a:5:{s:27:\"bubiblock-slider/plugin.php\";s:5:\"2.4.0\";s:25:\"cloudflare/cloudflare.php\";s:6:\"4.12.2\";s:36:\"contact-form-7/wp-contact-form-7.php\";s:5:\"5.7.7\";s:34:\"cloudflare-flexible-ssl/plugin.php\";s:5:\"1.3.1\";s:47:\"one-click-demo-import/one-click-demo-import.php\";s:5:\"3.1.2\";}}', 'no'),
(155, 'bmi_initial_installation_version', '1.2.9', 'yes'),
(157, 'analyst_cache', 's:6:\"a:0:{}\";', 'yes'),
(158, 'BMI::STORAGE::LOCAL::PATH', '/home/www/tenryu.cl/wp-content/backup-migration', 'yes'),
(159, '_irb_h_bn_review', 'a:2:{s:5:\"users\";a:0:{}s:13:\"backup-backup\";i:1690228208;}', 'yes'),
(160, 'bmi_gdrive_banner_dismissed', '1', 'yes'),
(161, 'bmi_hotfixes', 'a:2:{i:0;s:14:\"BMI_D20_M07_01\";i:1;s:18:\"BMI_D17_M12_Y21_02\";}', 'yes'),
(162, '_site_transient_timeout_browser_15c2f6f9416d00cec8b4f729460293c0', '1690855979', 'no'),
(163, '_site_transient_browser_15c2f6f9416d00cec8b4f729460293c0', 'a:10:{s:4:\"name\";s:6:\"Chrome\";s:7:\"version\";s:9:\"115.0.0.0\";s:8:\"platform\";s:7:\"Windows\";s:10:\"update_url\";s:29:\"https://www.google.com/chrome\";s:7:\"img_src\";s:43:\"http://s.w.org/images/browsers/chrome.png?1\";s:11:\"img_src_ssl\";s:44:\"https://s.w.org/images/browsers/chrome.png?1\";s:15:\"current_version\";s:2:\"18\";s:7:\"upgrade\";b:0;s:8:\"insecure\";b:0;s:6:\"mobile\";b:0;}', 'no'),
(168, '_site_transient_timeout_community-events-254373bf646ca67aff79c8d73c9fb8a3', '1690511918', 'no'),
(169, '_site_transient_community-events-254373bf646ca67aff79c8d73c9fb8a3', 'a:4:{s:9:\"sandboxed\";b:0;s:5:\"error\";N;s:8:\"location\";a:1:{s:2:\"ip\";s:12:\"186.10.247.0\";}s:6:\"events\";a:0:{}}', 'no'),
(170, '_transient_timeout_dash_v2_88ae138922fe95674369b1cb3d215a2b', '1690511918', 'no'),
(171, '_transient_dash_v2_88ae138922fe95674369b1cb3d215a2b', '<div class=\"rss-widget\"><p><strong>RSS Error:</strong> WP HTTP Error: cURL error 7: </p></div><div class=\"rss-widget\"><p><strong>RSS Error:</strong> WP HTTP Error: cURL error 7: </p></div>', 'no'),
(172, 'recovery_keys', 'a:0:{}', 'yes'),
(173, 'https_detection_errors', 'a:1:{s:23:\"ssl_verification_failed\";a:1:{i:0;s:24:\"SSL verification failed.\";}}', 'yes'),
(175, '_site_transient_timeout_theme_roots', '1690474614', 'no'),
(176, '_site_transient_theme_roots', 'a:6:{s:4:\"avik\";s:7:\"/themes\";s:9:\"scapeshot\";s:7:\"/themes\";s:7:\"signify\";s:7:\"/themes\";s:15:\"twentytwentyone\";s:7:\"/themes\";s:17:\"twentytwentythree\";s:7:\"/themes\";s:15:\"twentytwentytwo\";s:7:\"/themes\";}', 'no'),
(178, 'finished_updating_comment_type', '1', 'yes'),
(179, '_site_transient_timeout_php_check_f9b25a35946393ab2b3328e72e3e778a', '1691077615', 'no'),
(180, '_site_transient_php_check_f9b25a35946393ab2b3328e72e3e778a', 'a:5:{s:19:\"recommended_version\";s:3:\"7.4\";s:15:\"minimum_version\";s:3:\"7.0\";s:12:\"is_supported\";b:1;s:9:\"is_secure\";b:1;s:13:\"is_acceptable\";b:1;}', 'no'),
(181, '_transient_health-check-site-status-result', '{\"good\":15,\"recommended\":5,\"critical\":1}', 'yes');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_postmeta`
--

CREATE TABLE `wp_postmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `post_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_postmeta`
--

INSERT INTO `wp_postmeta` (`meta_id`, `post_id`, `meta_key`, `meta_value`) VALUES
(1, 2, '_wp_page_template', 'default'),
(2, 3, '_wp_page_template', 'default'),
(3, 5, '_wp_attached_file', '2023/07/Ten_Ruy.png'),
(4, 5, '_wp_attachment_metadata', 'a:6:{s:5:\"width\";i:1500;s:6:\"height\";i:1500;s:4:\"file\";s:19:\"2023/07/Ten_Ruy.png\";s:8:\"filesize\";i:280216;s:5:\"sizes\";a:13:{s:6:\"medium\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-300x300.png\";s:5:\"width\";i:300;s:6:\"height\";i:300;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:40457;}s:5:\"large\";a:5:{s:4:\"file\";s:21:\"Ten_Ruy-1024x1024.png\";s:5:\"width\";i:1024;s:6:\"height\";i:1024;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:221994;}s:9:\"thumbnail\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:17849;}s:12:\"medium_large\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-768x768.png\";s:5:\"width\";i:768;s:6:\"height\";i:768;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:148552;}s:12:\"carousel-pic\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-480x320.png\";s:5:\"width\";i:480;s:6:\"height\";i:320;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:58183;}s:8:\"avik_big\";a:5:{s:4:\"file\";s:21:\"Ten_Ruy-1500x1080.png\";s:5:\"width\";i:1500;s:6:\"height\";i:1080;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:205648;}s:11:\"avik_single\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-750x450.png\";s:5:\"width\";i:750;s:6:\"height\";i:450;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:76398;}s:22:\"avik_single_article_av\";a:5:{s:4:\"file\";s:21:\"Ten_Ruy-1500x1000.png\";s:5:\"width\";i:1500;s:6:\"height\";i:1000;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:194645;}s:10:\"avik_brand\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-115x100.png\";s:5:\"width\";i:115;s:6:\"height\";i:100;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:11420;}s:13:\"avik_services\";a:5:{s:4:\"file\";s:17:\"Ten_Ruy-80x80.png\";s:5:\"width\";i:80;s:6:\"height\";i:80;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:7943;}s:9:\"avik_team\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-250x310.png\";s:5:\"width\";i:250;s:6:\"height\";i:310;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:37498;}s:9:\"avik_news\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-300x220.png\";s:5:\"width\";i:300;s:6:\"height\";i:220;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:31673;}s:12:\"avik_news_av\";a:5:{s:4:\"file\";s:19:\"Ten_Ruy-600x400.png\";s:5:\"width\";i:600;s:6:\"height\";i:400;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:71820;}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(5, 6, '_wp_trash_meta_status', 'publish'),
(6, 6, '_wp_trash_meta_time', '1690224615'),
(7, 7, '_wp_attached_file', '2023/07/cropped-Ten_Ruy.png'),
(8, 7, '_wp_attachment_context', 'site-icon'),
(9, 7, '_wp_attachment_metadata', 'a:6:{s:5:\"width\";i:512;s:6:\"height\";i:512;s:4:\"file\";s:27:\"2023/07/cropped-Ten_Ruy.png\";s:8:\"filesize\";i:86596;s:5:\"sizes\";a:13:{s:6:\"medium\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-300x300.png\";s:5:\"width\";i:300;s:6:\"height\";i:300;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:51421;}s:9:\"thumbnail\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-150x150.png\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:19442;}s:12:\"carousel-pic\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-480x320.png\";s:5:\"width\";i:480;s:6:\"height\";i:320;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:73226;}s:11:\"avik_single\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-512x450.png\";s:5:\"width\";i:512;s:6:\"height\";i:450;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:76497;}s:10:\"avik_brand\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-115x100.png\";s:5:\"width\";i:115;s:6:\"height\";i:100;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:11964;}s:13:\"avik_services\";a:5:{s:4:\"file\";s:25:\"cropped-Ten_Ruy-80x80.png\";s:5:\"width\";i:80;s:6:\"height\";i:80;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:8126;}s:9:\"avik_team\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-250x310.png\";s:5:\"width\";i:250;s:6:\"height\";i:310;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:44091;}s:9:\"avik_news\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-300x220.png\";s:5:\"width\";i:300;s:6:\"height\";i:220;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:40268;}s:12:\"avik_news_av\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-512x400.png\";s:5:\"width\";i:512;s:6:\"height\";i:400;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:70891;}s:13:\"site_icon-270\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-270x270.png\";s:5:\"width\";i:270;s:6:\"height\";i:270;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:44240;}s:13:\"site_icon-192\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-192x192.png\";s:5:\"width\";i:192;s:6:\"height\";i:192;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:26953;}s:13:\"site_icon-180\";a:5:{s:4:\"file\";s:27:\"cropped-Ten_Ruy-180x180.png\";s:5:\"width\";i:180;s:6:\"height\";i:180;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:25045;}s:12:\"site_icon-32\";a:5:{s:4:\"file\";s:25:\"cropped-Ten_Ruy-32x32.png\";s:5:\"width\";i:32;s:6:\"height\";i:32;s:9:\"mime-type\";s:9:\"image/png\";s:8:\"filesize\";i:2371;}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(10, 8, '_wp_trash_meta_status', 'publish'),
(11, 8, '_wp_trash_meta_time', '1690224688'),
(12, 9, '_wp_trash_meta_status', 'publish'),
(13, 9, '_wp_trash_meta_time', '1690225162'),
(14, 10, '_wp_trash_meta_status', 'publish'),
(15, 10, '_wp_trash_meta_time', '1690225216'),
(16, 11, '_wp_trash_meta_status', 'publish'),
(17, 11, '_wp_trash_meta_time', '1690225221'),
(18, 12, '_wp_trash_meta_status', 'publish'),
(19, 12, '_wp_trash_meta_time', '1690225300'),
(20, 13, '_edit_lock', '1690225331:1'),
(21, 13, '_wp_trash_meta_status', 'publish'),
(22, 13, '_wp_trash_meta_time', '1690225356'),
(23, 14, '_wp_trash_meta_status', 'publish'),
(24, 14, '_wp_trash_meta_time', '1690225446'),
(25, 15, '_wp_trash_meta_status', 'publish'),
(26, 15, '_wp_trash_meta_time', '1690225495'),
(27, 16, '_edit_lock', '1690226376:1'),
(28, 17, '_wp_attached_file', '2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg'),
(29, 17, '_wp_attachment_metadata', 'a:6:{s:5:\"width\";i:1920;s:6:\"height\";i:1289;s:4:\"file\";s:48:\"2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg\";s:8:\"filesize\";i:702920;s:5:\"sizes\";a:14:{s:6:\"medium\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-300x201.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:201;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:17133;}s:5:\"large\";a:5:{s:4:\"file\";s:49:\"fushimi-inari-shrine-gce29e4231_1920-1024x687.jpg\";s:5:\"width\";i:1024;s:6:\"height\";i:687;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:147690;}s:9:\"thumbnail\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-150x150.jpg\";s:5:\"width\";i:150;s:6:\"height\";i:150;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:7535;}s:12:\"medium_large\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-768x516.jpg\";s:5:\"width\";i:768;s:6:\"height\";i:516;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:91486;}s:9:\"1536x1536\";a:5:{s:4:\"file\";s:50:\"fushimi-inari-shrine-gce29e4231_1920-1536x1031.jpg\";s:5:\"width\";i:1536;s:6:\"height\";i:1031;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:286629;}s:12:\"carousel-pic\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-480x320.jpg\";s:5:\"width\";i:480;s:6:\"height\";i:320;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:39699;}s:8:\"avik_big\";a:5:{s:4:\"file\";s:50:\"fushimi-inari-shrine-gce29e4231_1920-1920x1080.jpg\";s:5:\"width\";i:1920;s:6:\"height\";i:1080;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:375996;}s:11:\"avik_single\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-750x450.jpg\";s:5:\"width\";i:750;s:6:\"height\";i:450;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:78645;}s:22:\"avik_single_article_av\";a:5:{s:4:\"file\";s:50:\"fushimi-inari-shrine-gce29e4231_1920-1920x1000.jpg\";s:5:\"width\";i:1920;s:6:\"height\";i:1000;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:349598;}s:10:\"avik_brand\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-115x100.jpg\";s:5:\"width\";i:115;s:6:\"height\";i:100;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:4387;}s:13:\"avik_services\";a:5:{s:4:\"file\";s:46:\"fushimi-inari-shrine-gce29e4231_1920-80x80.jpg\";s:5:\"width\";i:80;s:6:\"height\";i:80;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:2672;}s:9:\"avik_team\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-250x310.jpg\";s:5:\"width\";i:250;s:6:\"height\";i:310;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:23818;}s:9:\"avik_news\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-300x220.jpg\";s:5:\"width\";i:300;s:6:\"height\";i:220;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:19135;}s:12:\"avik_news_av\";a:5:{s:4:\"file\";s:48:\"fushimi-inari-shrine-gce29e4231_1920-600x400.jpg\";s:5:\"width\";i:600;s:6:\"height\";i:400;s:9:\"mime-type\";s:10:\"image/jpeg\";s:8:\"filesize\";i:58124;}}s:10:\"image_meta\";a:12:{s:8:\"aperture\";s:1:\"0\";s:6:\"credit\";s:0:\"\";s:6:\"camera\";s:0:\"\";s:7:\"caption\";s:0:\"\";s:17:\"created_timestamp\";s:1:\"0\";s:9:\"copyright\";s:0:\"\";s:12:\"focal_length\";s:1:\"0\";s:3:\"iso\";s:1:\"0\";s:13:\"shutter_speed\";s:1:\"0\";s:5:\"title\";s:0:\"\";s:11:\"orientation\";s:1:\"0\";s:8:\"keywords\";a:0:{}}}'),
(30, 17, '_wp_attachment_custom_header_last_used_avik', '1690226418'),
(31, 17, '_wp_attachment_is_custom_header', 'avik'),
(32, 16, '_wp_trash_meta_status', 'publish'),
(33, 16, '_wp_trash_meta_time', '1690226418'),
(34, 18, '_wp_trash_meta_status', 'publish'),
(35, 18, '_wp_trash_meta_time', '1690226618'),
(36, 19, '_wp_trash_meta_status', 'publish'),
(37, 19, '_wp_trash_meta_time', '1690226631'),
(38, 20, '_edit_lock', '1690226676:1'),
(39, 20, '_wp_trash_meta_status', 'publish'),
(40, 20, '_wp_trash_meta_time', '1690226681'),
(41, 21, '_wp_trash_meta_status', 'publish'),
(42, 21, '_wp_trash_meta_time', '1690226716'),
(43, 22, '_wp_trash_meta_status', 'publish'),
(44, 22, '_wp_trash_meta_time', '1690226724'),
(45, 23, '_wp_trash_meta_status', 'publish'),
(46, 23, '_wp_trash_meta_time', '1690226735'),
(47, 24, '_wp_trash_meta_status', 'publish'),
(48, 24, '_wp_trash_meta_time', '1690226768'),
(49, 25, '_wp_trash_meta_status', 'publish'),
(50, 25, '_wp_trash_meta_time', '1690226792'),
(51, 26, '_wp_trash_meta_status', 'publish'),
(52, 26, '_wp_trash_meta_time', '1690226821'),
(53, 27, '_wp_trash_meta_status', 'publish'),
(54, 27, '_wp_trash_meta_time', '1690226836'),
(55, 28, '_wp_trash_meta_status', 'publish'),
(56, 28, '_wp_trash_meta_time', '1690226841'),
(57, 29, '_form', '<label> Your name\n    [text* your-name autocomplete:name] </label>\n\n<label> Your email\n    [email* your-email autocomplete:email] </label>\n\n<label> Subject\n    [text* your-subject] </label>\n\n<label> Your message (optional)\n    [textarea your-message] </label>\n\n[submit \"Submit\"]'),
(58, 29, '_mail', 'a:8:{s:7:\"subject\";s:30:\"[_site_title] \"[your-subject]\"\";s:6:\"sender\";s:35:\"[_site_title] <wordpress@tenryu.cl>\";s:4:\"body\";s:161:\"From: [your-name] [your-email]\nSubject: [your-subject]\n\nMessage Body:\n[your-message]\n\n-- \nThis e-mail was sent from a contact form on [_site_title] ([_site_url])\";s:9:\"recipient\";s:19:\"[_site_admin_email]\";s:18:\"additional_headers\";s:22:\"Reply-To: [your-email]\";s:11:\"attachments\";s:0:\"\";s:8:\"use_html\";i:0;s:13:\"exclude_blank\";i:0;}'),
(59, 29, '_mail_2', 'a:9:{s:6:\"active\";b:0;s:7:\"subject\";s:30:\"[_site_title] \"[your-subject]\"\";s:6:\"sender\";s:35:\"[_site_title] <wordpress@tenryu.cl>\";s:4:\"body\";s:105:\"Message Body:\n[your-message]\n\n-- \nThis e-mail was sent from a contact form on [_site_title] ([_site_url])\";s:9:\"recipient\";s:12:\"[your-email]\";s:18:\"additional_headers\";s:29:\"Reply-To: [_site_admin_email]\";s:11:\"attachments\";s:0:\"\";s:8:\"use_html\";i:0;s:13:\"exclude_blank\";i:0;}'),
(60, 29, '_messages', 'a:12:{s:12:\"mail_sent_ok\";s:45:\"Thank you for your message. It has been sent.\";s:12:\"mail_sent_ng\";s:71:\"There was an error trying to send your message. Please try again later.\";s:16:\"validation_error\";s:61:\"One or more fields have an error. Please check and try again.\";s:4:\"spam\";s:71:\"There was an error trying to send your message. Please try again later.\";s:12:\"accept_terms\";s:69:\"You must accept the terms and conditions before sending your message.\";s:16:\"invalid_required\";s:27:\"Please fill out this field.\";s:16:\"invalid_too_long\";s:32:\"This field has a too long input.\";s:17:\"invalid_too_short\";s:33:\"This field has a too short input.\";s:13:\"upload_failed\";s:46:\"There was an unknown error uploading the file.\";s:24:\"upload_file_type_invalid\";s:49:\"You are not allowed to upload files of this type.\";s:21:\"upload_file_too_large\";s:31:\"The uploaded file is too large.\";s:23:\"upload_failed_php_error\";s:38:\"There was an error uploading the file.\";}'),
(61, 29, '_additional_settings', ''),
(62, 29, '_locale', 'en_US'),
(63, 30, '_wp_trash_meta_status', 'publish'),
(64, 30, '_wp_trash_meta_time', '1690227250'),
(65, 31, '_wp_trash_meta_status', 'publish'),
(66, 31, '_wp_trash_meta_time', '1690227258'),
(67, 32, '_wp_trash_meta_status', 'publish'),
(68, 32, '_wp_trash_meta_time', '1690227267');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_posts`
--

CREATE TABLE `wp_posts` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `post_author` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `post_date` datetime NOT NULL,
  `post_date_gmt` datetime NOT NULL,
  `post_content` longtext NOT NULL,
  `post_title` text NOT NULL,
  `post_excerpt` text NOT NULL,
  `post_status` varchar(20) NOT NULL DEFAULT 'publish',
  `comment_status` varchar(20) NOT NULL DEFAULT 'open',
  `ping_status` varchar(20) NOT NULL DEFAULT 'open',
  `post_password` varchar(255) NOT NULL DEFAULT '',
  `post_name` varchar(200) NOT NULL DEFAULT '',
  `to_ping` text NOT NULL,
  `pinged` text NOT NULL,
  `post_modified` datetime NOT NULL,
  `post_modified_gmt` datetime NOT NULL,
  `post_content_filtered` longtext NOT NULL,
  `post_parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `guid` varchar(255) NOT NULL DEFAULT '',
  `menu_order` int(11) NOT NULL DEFAULT 0,
  `post_type` varchar(20) NOT NULL DEFAULT 'post',
  `post_mime_type` varchar(100) NOT NULL DEFAULT '',
  `comment_count` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_posts`
--

INSERT INTO `wp_posts` (`ID`, `post_author`, `post_date`, `post_date_gmt`, `post_content`, `post_title`, `post_excerpt`, `post_status`, `comment_status`, `ping_status`, `post_password`, `post_name`, `to_ping`, `pinged`, `post_modified`, `post_modified_gmt`, `post_content_filtered`, `post_parent`, `guid`, `menu_order`, `post_type`, `post_mime_type`, `comment_count`) VALUES
(1, 1, '2023-07-24 18:47:35', '2023-07-24 18:47:35', '<!-- wp:paragraph -->\n<p>Welcome to WordPress. This is your first post. Edit or delete it, then start writing!</p>\n<!-- /wp:paragraph -->', 'Hello world!', '', 'publish', 'open', 'open', '', 'hello-world', '', '', '2023-07-24 18:47:35', '2023-07-24 18:47:35', '', 0, 'http://tenryu.cl/?p=1', 0, 'post', '', 1),
(2, 1, '2023-07-24 18:47:35', '2023-07-24 18:47:35', '<!-- wp:paragraph -->\n<p>This is an example page. It\'s different from a blog post because it will stay in one place and will show up in your site navigation (in most themes). Most people start with an About page that introduces them to potential site visitors. It might say something like this:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>Hi there! I\'m a bike messenger by day, aspiring actor by night, and this is my website. I live in Los Angeles, have a great dog named Jack, and I like pi&#241;a coladas. (And gettin\' caught in the rain.)</p></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p>...or something like this:</p>\n<!-- /wp:paragraph -->\n\n<!-- wp:quote -->\n<blockquote class=\"wp-block-quote\"><p>The XYZ Doohickey Company was founded in 1971, and has been providing quality doohickeys to the public ever since. Located in Gotham City, XYZ employs over 2,000 people and does all kinds of awesome things for the Gotham community.</p></blockquote>\n<!-- /wp:quote -->\n\n<!-- wp:paragraph -->\n<p>As a new WordPress user, you should go to <a href=\"http://tenryu.cl/wp-admin/\">your dashboard</a> to delete this page and create new pages for your content. Have fun!</p>\n<!-- /wp:paragraph -->', 'Sample Page', '', 'publish', 'closed', 'open', '', 'sample-page', '', '', '2023-07-24 18:47:35', '2023-07-24 18:47:35', '', 0, 'http://tenryu.cl/?page_id=2', 0, 'page', '', 0),
(3, 1, '2023-07-24 18:47:35', '2023-07-24 18:47:35', '<!-- wp:heading --><h2>Who we are</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>Our website address is: http://tenryu.cl.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Comments</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor&#8217;s IP address and browser user agent string to help spam detection.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Media</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Cookies</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>If you visit our login page, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select &quot;Remember Me&quot;, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Embedded content from other websites</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Who we share your data with</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>If you request a password reset, your IP address will be included in the reset email.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>How long we retain your data</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.</p><!-- /wp:paragraph --><!-- wp:paragraph --><p>For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>What rights you have over your data</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.</p><!-- /wp:paragraph --><!-- wp:heading --><h2>Where your data is sent</h2><!-- /wp:heading --><!-- wp:paragraph --><p><strong class=\"privacy-policy-tutorial\">Suggested text: </strong>Visitor comments may be checked through an automated spam detection service.</p><!-- /wp:paragraph -->', 'Privacy Policy', '', 'draft', 'closed', 'open', '', 'privacy-policy', '', '', '2023-07-24 18:47:35', '2023-07-24 18:47:35', '', 0, 'http://tenryu.cl/?page_id=3', 0, 'page', '', 0),
(4, 1, '2023-07-24 18:48:01', '0000-00-00 00:00:00', '', 'Auto Draft', '', 'auto-draft', 'open', 'open', '', '', '', '', '2023-07-24 18:48:01', '0000-00-00 00:00:00', '', 0, 'http://tenryu.cl/?p=4', 0, 'post', '', 0),
(5, 1, '2023-07-24 18:49:36', '2023-07-24 18:49:36', '', 'Ten_Ruy', '', 'inherit', 'open', 'closed', '', 'ten_ruy', '', '', '2023-07-24 18:49:36', '2023-07-24 18:49:36', '', 0, 'http://tenryu.cl/wp-content/uploads/2023/07/Ten_Ruy.png', 0, 'attachment', 'image/png', 0),
(6, 1, '2023-07-24 18:50:15', '2023-07-24 18:50:15', '{\n    \"avik::custom_logo\": {\n        \"value\": 5,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 18:50:15\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', 'd231ba2e-1653-412d-83e9-5bce241e9599', '', '', '2023-07-24 18:50:15', '2023-07-24 18:50:15', '', 0, 'http://tenryu.cl/?p=6', 0, 'customize_changeset', '', 0),
(7, 1, '2023-07-24 18:51:21', '2023-07-24 18:51:21', 'https://tenryu.cl/wp-content/uploads/2023/07/cropped-Ten_Ruy.png', 'cropped-Ten_Ruy.png', '', 'inherit', 'open', 'closed', '', 'cropped-ten_ruy-png', '', '', '2023-07-24 18:51:21', '2023-07-24 18:51:21', '', 0, 'https://tenryu.cl/wp-content/uploads/2023/07/cropped-Ten_Ruy.png', 0, 'attachment', 'image/png', 0),
(8, 1, '2023-07-24 18:51:28', '2023-07-24 18:51:28', '{\n    \"site_icon\": {\n        \"value\": 7,\n        \"type\": \"option\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 18:51:28\"\n    },\n    \"avik::avik_enable_rotate_logo\": {\n        \"value\": false,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 18:51:28\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '3e25b240-8049-4458-a65f-f2b5483f385a', '', '', '2023-07-24 18:51:28', '2023-07-24 18:51:28', '', 0, 'http://tenryu.cl/?p=8', 0, 'customize_changeset', '', 0),
(9, 1, '2023-07-24 18:59:22', '2023-07-24 18:59:22', '{\n    \"blogname\": {\n        \"value\": \"Ten Ryu Dojo\",\n        \"type\": \"option\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 18:59:22\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '9baf510f-0fc2-41cb-964a-5bbd5ee6c00f', '', '', '2023-07-24 18:59:22', '2023-07-24 18:59:22', '', 0, 'http://tenryu.cl/?p=9', 0, 'customize_changeset', '', 0),
(10, 1, '2023-07-24 19:00:16', '2023-07-24 19:00:16', '{\n    \"avik::avik_order_sect\": {\n        \"value\": [\n            \"page-static\",\n            \"whoweare\"\n        ],\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:00:16\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '4556504d-16e6-4e16-b6bb-a4c9b6a2ce30', '', '', '2023-07-24 19:00:16', '2023-07-24 19:00:16', '', 0, 'http://tenryu.cl/?p=10', 0, 'customize_changeset', '', 0),
(11, 1, '2023-07-24 19:00:21', '2023-07-24 19:00:21', '{\n    \"avik::avik_order_sect\": {\n        \"value\": [\n            \"page-static\"\n        ],\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:00:21\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '8311152a-71bd-4d60-bb51-1f26f721d69e', '', '', '2023-07-24 19:00:21', '2023-07-24 19:00:21', '', 0, 'http://tenryu.cl/?p=11', 0, 'customize_changeset', '', 0),
(12, 1, '2023-07-24 19:01:40', '2023-07-24 19:01:40', '{\n    \"avik::avik_font_size_logo\": {\n        \"value\": \"50100\",\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:01:40\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '7a99b6c4-2874-4b73-b1ea-6f212102e1f0', '', '', '2023-07-24 19:01:40', '2023-07-24 19:01:40', '', 0, 'http://tenryu.cl/?p=12', 0, 'customize_changeset', '', 0),
(13, 1, '2023-07-24 19:02:36', '2023-07-24 19:02:36', '{\n    \"avik::avik_font_size_logo\": {\n        \"value\": \"100\",\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:02:11\"\n    },\n    \"avik::avik_font_size_logo_mobile\": {\n        \"value\": \"100\",\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:02:11\"\n    },\n    \"avik::header_textcolor\": {\n        \"value\": \"#000000\",\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:02:36\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '939d52cb-a80e-42de-bb28-184607acf920', '', '', '2023-07-24 19:02:36', '2023-07-24 19:02:36', '', 0, 'http://tenryu.cl/?p=13', 0, 'customize_changeset', '', 0),
(14, 1, '2023-07-24 19:04:06', '2023-07-24 19:04:06', '{\n    \"avik::avik_enable_blank_link\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:04:06\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', 'fc035063-d274-4b03-a292-b5f964856314', '', '', '2023-07-24 19:04:06', '2023-07-24 19:04:06', '', 0, 'http://tenryu.cl/?p=14', 0, 'customize_changeset', '', 0),
(15, 1, '2023-07-24 19:04:55', '2023-07-24 19:04:55', '{\n    \"avik::avik_second_img_who_section\": {\n        \"value\": \"http://tenryu.cl/wp-content/uploads/2023/07/Ten_Ruy.png\",\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:04:55\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', 'cc481f52-38db-4426-a79c-faa78e2f6743', '', '', '2023-07-24 19:04:55', '2023-07-24 19:04:55', '', 0, 'http://tenryu.cl/?p=15', 0, 'customize_changeset', '', 0),
(16, 1, '2023-07-24 19:20:18', '2023-07-24 19:20:18', '{\n    \"avik::avik_enable_header_page_canva\": {\n        \"value\": false,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:06:05\"\n    },\n    \"avik::header_image\": {\n        \"value\": \"http://tenryu.cl/wp-content/uploads/2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg\",\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:20:18\"\n    },\n    \"avik::header_image_data\": {\n        \"value\": {\n            \"url\": \"http://tenryu.cl/wp-content/uploads/2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg\",\n            \"thumbnail_url\": \"http://tenryu.cl/wp-content/uploads/2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg\",\n            \"timestamp\": 1690226410370,\n            \"attachment_id\": 17,\n            \"width\": 1920,\n            \"height\": 1289\n        },\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:20:18\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '0877c936-71dd-450e-96ab-b51f6e2924fc', '', '', '2023-07-24 19:20:18', '2023-07-24 19:20:18', '', 0, 'http://tenryu.cl/?p=16', 0, 'customize_changeset', '', 0),
(17, 1, '2023-07-24 19:19:37', '2023-07-24 19:19:37', '', 'fushimi-inari-shrine-gce29e4231_1920', '', 'inherit', 'open', 'closed', '', 'fushimi-inari-shrine-gce29e4231_1920', '', '', '2023-07-24 19:19:37', '2023-07-24 19:19:37', '', 0, 'http://tenryu.cl/wp-content/uploads/2023/07/fushimi-inari-shrine-gce29e4231_1920.jpg', 0, 'attachment', 'image/jpeg', 0),
(18, 1, '2023-07-24 19:23:38', '2023-07-24 19:23:38', '{\n    \"avik::avik_position_top\": {\n        \"value\": false,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:23:38\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '7096d749-637a-4427-bd7e-9722de3c52e5', '', '', '2023-07-24 19:23:38', '2023-07-24 19:23:38', '', 0, 'http://tenryu.cl/?p=18', 0, 'customize_changeset', '', 0),
(19, 1, '2023-07-24 19:23:51', '2023-07-24 19:23:51', '{\n    \"avik::header_textcolor\": {\n        \"value\": \"blank\",\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:23:51\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', 'dbc3cc04-20a8-4e7a-b72c-5543eb272a6f', '', '', '2023-07-24 19:23:51', '2023-07-24 19:23:51', '', 0, 'http://tenryu.cl/?p=19', 0, 'customize_changeset', '', 0),
(20, 1, '2023-07-24 19:24:41', '2023-07-24 19:24:41', '{\n    \"avik::avik_font_size_logo\": {\n        \"value\": \"80\",\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:24:41\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '58bf7eb1-f68e-493e-91f3-1b09706c2ae3', '', '', '2023-07-24 19:24:41', '2023-07-24 19:24:41', '', 0, 'http://tenryu.cl/?p=20', 0, 'customize_changeset', '', 0),
(21, 1, '2023-07-24 19:25:16', '2023-07-24 19:25:16', '{\n    \"avik::avik_enable_statistics_whoweare\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:25:16\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', 'e332234e-feaa-4475-96a6-1a65f9bd304c', '', '', '2023-07-24 19:25:16', '2023-07-24 19:25:16', '', 0, 'http://tenryu.cl/?p=21', 0, 'customize_changeset', '', 0),
(22, 1, '2023-07-24 19:25:24', '2023-07-24 19:25:24', '{\n    \"avik::avik_enable_team_whoweare\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:25:24\"\n    },\n    \"avik::avik_enable_excpert_team_whoweare\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:25:24\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', 'a4a764d4-6961-4d47-8f2b-acc35f0bf86d', '', '', '2023-07-24 19:25:24', '2023-07-24 19:25:24', '', 0, 'http://tenryu.cl/?p=22', 0, 'customize_changeset', '', 0),
(23, 1, '2023-07-24 19:25:35', '2023-07-24 19:25:35', '{\n    \"avik::avik_enable_partner_whoweare\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:25:35\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', 'be309d2e-7ec2-400d-8869-717697c7ca8a', '', '', '2023-07-24 19:25:35', '2023-07-24 19:25:35', '', 0, 'http://tenryu.cl/?p=23', 0, 'customize_changeset', '', 0),
(24, 1, '2023-07-24 19:26:08', '2023-07-24 19:26:08', '{\n    \"avik::avik_enable_footer_page_canva\": {\n        \"value\": false,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:26:08\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '79e28aec-4ba9-4d95-8121-bf984ea02ec7', '', '', '2023-07-24 19:26:08', '2023-07-24 19:26:08', '', 0, 'http://tenryu.cl/?p=24', 0, 'customize_changeset', '', 0),
(25, 1, '2023-07-24 19:26:32', '2023-07-24 19:26:32', '{\n    \"avik::avik_enable_portfolio_1\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:26:32\"\n    },\n    \"avik::avik_enable_portfolio_2\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:26:32\"\n    },\n    \"avik::avik_enable_portfolio_3\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:26:32\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '7f9be158-6ec6-481a-a558-3cbff927a00b', '', '', '2023-07-24 19:26:32', '2023-07-24 19:26:32', '', 0, 'http://tenryu.cl/?p=25', 0, 'customize_changeset', '', 0),
(26, 1, '2023-07-24 19:27:01', '2023-07-24 19:27:01', '{\n    \"avik::avik_enable_social_contact\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:27:01\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '31a0284e-c2cc-4aa2-b5fc-f37351b9c2da', '', '', '2023-07-24 19:27:01', '2023-07-24 19:27:01', '', 0, 'http://tenryu.cl/?p=26', 0, 'customize_changeset', '', 0),
(27, 1, '2023-07-24 19:27:16', '2023-07-24 19:27:16', '{\n    \"avik::avik_enable_carousel\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:27:16\"\n    },\n    \"avik::avik_enable_sidebar_media\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:27:16\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '0470f852-69de-430e-bdbd-6dbabac4d9d3', '', '', '2023-07-24 19:27:16', '2023-07-24 19:27:16', '', 0, 'http://tenryu.cl/?p=27', 0, 'customize_changeset', '', 0),
(28, 1, '2023-07-24 19:27:21', '2023-07-24 19:27:21', '{\n    \"avik::avik_enable_tags_comment_post\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:27:21\"\n    },\n    \"avik::avik_enable_border_post\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:27:21\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '3e1f3651-8b3a-4a80-baf9-4aba8c27bc57', '', '', '2023-07-24 19:27:21', '2023-07-24 19:27:21', '', 0, 'http://tenryu.cl/?p=28', 0, 'customize_changeset', '', 0),
(29, 1, '2023-07-24 19:28:25', '2023-07-24 19:28:25', '<label> Your name\n    [text* your-name autocomplete:name] </label>\n\n<label> Your email\n    [email* your-email autocomplete:email] </label>\n\n<label> Subject\n    [text* your-subject] </label>\n\n<label> Your message (optional)\n    [textarea your-message] </label>\n\n[submit \"Submit\"]\n[_site_title] \"[your-subject]\"\n[_site_title] <wordpress@tenryu.cl>\nFrom: [your-name] [your-email]\nSubject: [your-subject]\n\nMessage Body:\n[your-message]\n\n-- \nThis e-mail was sent from a contact form on [_site_title] ([_site_url])\n[_site_admin_email]\nReply-To: [your-email]\n\n0\n0\n\n[_site_title] \"[your-subject]\"\n[_site_title] <wordpress@tenryu.cl>\nMessage Body:\n[your-message]\n\n-- \nThis e-mail was sent from a contact form on [_site_title] ([_site_url])\n[your-email]\nReply-To: [_site_admin_email]\n\n0\n0\nThank you for your message. It has been sent.\nThere was an error trying to send your message. Please try again later.\nOne or more fields have an error. Please check and try again.\nThere was an error trying to send your message. Please try again later.\nYou must accept the terms and conditions before sending your message.\nPlease fill out this field.\nThis field has a too long input.\nThis field has a too short input.\nThere was an unknown error uploading the file.\nYou are not allowed to upload files of this type.\nThe uploaded file is too large.\nThere was an error uploading the file.', 'Contact form 1', '', 'publish', 'closed', 'closed', '', 'contact-form-1', '', '', '2023-07-24 19:28:25', '2023-07-24 19:28:25', '', 0, 'http://tenryu.cl/?post_type=wpcf7_contact_form&p=29', 0, 'wpcf7_contact_form', '', 0),
(30, 1, '2023-07-24 19:34:10', '2023-07-24 19:34:10', '{\n    \"avik::avik_order_sect\": {\n        \"value\": [],\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:34:10\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '7a209cb0-0209-4460-990b-11fd0c420c6e', '', '', '2023-07-24 19:34:10', '2023-07-24 19:34:10', '', 0, 'http://tenryu.cl/?p=30', 0, 'customize_changeset', '', 0),
(31, 1, '2023-07-24 19:34:18', '2023-07-24 19:34:18', '{\n    \"avik::avik_order_sect\": {\n        \"value\": [\n            \"page-static\"\n        ],\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:34:18\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', '46f87dd5-6344-42f8-9b8c-0ecf356b5d71', '', '', '2023-07-24 19:34:18', '2023-07-24 19:34:18', '', 0, 'http://tenryu.cl/?p=31', 0, 'customize_changeset', '', 0),
(32, 1, '2023-07-24 19:34:27', '2023-07-24 19:34:27', '{\n    \"avik::avik_enable_to_top\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:34:27\"\n    },\n    \"avik::avik_position_top\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:34:27\"\n    },\n    \"avik::avik_resp_top\": {\n        \"value\": true,\n        \"type\": \"theme_mod\",\n        \"user_id\": 1,\n        \"date_modified_gmt\": \"2023-07-24 19:34:27\"\n    }\n}', '', '', 'trash', 'closed', 'closed', '', 'd4bf7824-bca9-4c23-b474-4458a3d4efc7', '', '', '2023-07-24 19:34:27', '2023-07-24 19:34:27', '', 0, 'http://tenryu.cl/?p=32', 0, 'customize_changeset', '', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_termmeta`
--

CREATE TABLE `wp_termmeta` (
  `meta_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_terms`
--

CREATE TABLE `wp_terms` (
  `term_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(200) NOT NULL DEFAULT '',
  `slug` varchar(200) NOT NULL DEFAULT '',
  `term_group` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_terms`
--

INSERT INTO `wp_terms` (`term_id`, `name`, `slug`, `term_group`) VALUES
(1, 'Uncategorized', 'uncategorized', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_term_taxonomy`
--

CREATE TABLE `wp_term_taxonomy` (
  `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL,
  `term_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `taxonomy` varchar(32) NOT NULL DEFAULT '',
  `description` longtext NOT NULL,
  `parent` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `count` bigint(20) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_term_taxonomy`
--

INSERT INTO `wp_term_taxonomy` (`term_taxonomy_id`, `term_id`, `taxonomy`, `description`, `parent`, `count`) VALUES
(1, 1, 'category', '', 0, 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_usermeta`
--

CREATE TABLE `wp_usermeta` (
  `umeta_id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL DEFAULT 0,
  `meta_key` varchar(255) DEFAULT NULL,
  `meta_value` longtext DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_usermeta`
--

INSERT INTO `wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES
(1, 1, 'nickname', 'tenten322'),
(2, 1, 'first_name', ''),
(3, 1, 'last_name', ''),
(4, 1, 'description', ''),
(5, 1, 'rich_editing', 'true'),
(6, 1, 'syntax_highlighting', 'true'),
(7, 1, 'comment_shortcuts', 'false'),
(8, 1, 'admin_color', 'fresh'),
(9, 1, 'use_ssl', '0'),
(10, 1, 'show_admin_bar_front', 'true'),
(11, 1, 'locale', ''),
(12, 1, 'wp_capabilities', 'a:1:{s:13:\"administrator\";b:1;}'),
(13, 1, 'wp_user_level', '10'),
(14, 1, 'dismissed_wp_pointers', 'theme_editor_notice'),
(15, 1, 'show_welcome_panel', '1'),
(17, 1, 'wp_user-settings', 'libraryContent=browse'),
(18, 1, 'wp_user-settings-time', '1690224476'),
(19, 1, 'wp_dashboard_quick_press_last_post_id', '4'),
(20, 1, 'community-events-location', 'a:1:{s:2:\"ip\";s:12:\"186.10.247.0\";}'),
(21, 1, 'odp_cfs_shield_notice', 'Y'),
(22, 1, 'session_tokens', 'a:2:{s:64:\"3cd846dc36c5c3e40c27220f767221542a7ebc36225e215374220c3e29c51cfe\";a:4:{s:10:\"expiration\";i:1690641511;s:2:\"ip\";s:15:\"141.101.100.177\";s:2:\"ua\";s:111:\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\";s:5:\"login\";i:1690468711;}s:64:\"1e13f27369a9f6a7da119340cef8f4a5f1d597eff6e753671cb51aa55199bb01\";a:4:{s:10:\"expiration\";i:1690645629;s:2:\"ip\";s:3:\"::1\";s:2:\"ua\";s:111:\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\";s:5:\"login\";i:1690472829;}}');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `wp_users`
--

CREATE TABLE `wp_users` (
  `ID` bigint(20) UNSIGNED NOT NULL,
  `user_login` varchar(60) NOT NULL DEFAULT '',
  `user_pass` varchar(255) NOT NULL DEFAULT '',
  `user_nicename` varchar(50) NOT NULL DEFAULT '',
  `user_email` varchar(100) NOT NULL DEFAULT '',
  `user_url` varchar(100) NOT NULL DEFAULT '',
  `user_registered` datetime NOT NULL,
  `user_activation_key` varchar(255) NOT NULL DEFAULT '',
  `user_status` int(11) NOT NULL DEFAULT 0,
  `display_name` varchar(250) NOT NULL DEFAULT ''
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Volcado de datos para la tabla `wp_users`
--

INSERT INTO `wp_users` (`ID`, `user_login`, `user_pass`, `user_nicename`, `user_email`, `user_url`, `user_registered`, `user_activation_key`, `user_status`, `display_name`) VALUES
(1, 'tenten322', '$P$BYZc4dRLYt5TBG5Ys/QSXLgK5cnPXm.', 'tenten322', 'tenryu.cl@gmail.com', 'http://tenryu.cl', '2023-07-24 18:47:35', '', 0, 'tenten322');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `wp_commentdata`
--
ALTER TABLE `wp_commentdata`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `comment_id` (`comment_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indices de la tabla `wp_comments`
--
ALTER TABLE `wp_comments`
  ADD PRIMARY KEY (`comment_ID`),
  ADD KEY `comment_post_ID` (`comment_post_ID`),
  ADD KEY `comment_approved_date_gmt` (`comment_approved`,`comment_date_gmt`),
  ADD KEY `comment_date_gmt` (`comment_date_gmt`),
  ADD KEY `comment_parent` (`comment_parent`),
  ADD KEY `comment_author_email` (`comment_author_email`(10));

--
-- Indices de la tabla `wp_links`
--
ALTER TABLE `wp_links`
  ADD PRIMARY KEY (`link_id`),
  ADD KEY `link_visible` (`link_visible`);

--
-- Indices de la tabla `wp_options`
--
ALTER TABLE `wp_options`
  ADD PRIMARY KEY (`option_id`),
  ADD UNIQUE KEY `option_name` (`option_name`),
  ADD KEY `autoload` (`autoload`);

--
-- Indices de la tabla `wp_postmeta`
--
ALTER TABLE `wp_postmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `post_id` (`post_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indices de la tabla `wp_posts`
--
ALTER TABLE `wp_posts`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `post_name` (`post_name`(191)),
  ADD KEY `type_status_date` (`post_type`,`post_status`,`post_date`,`ID`),
  ADD KEY `post_parent` (`post_parent`),
  ADD KEY `post_author` (`post_author`);

--
-- Indices de la tabla `wp_termmeta`
--
ALTER TABLE `wp_termmeta`
  ADD PRIMARY KEY (`meta_id`),
  ADD KEY `term_id` (`term_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indices de la tabla `wp_terms`
--
ALTER TABLE `wp_terms`
  ADD PRIMARY KEY (`term_id`),
  ADD KEY `slug` (`slug`(191)),
  ADD KEY `name` (`name`(191));

--
-- Indices de la tabla `wp_term_taxonomy`
--
ALTER TABLE `wp_term_taxonomy`
  ADD PRIMARY KEY (`term_taxonomy_id`),
  ADD UNIQUE KEY `term_id_taxonomy` (`term_id`,`taxonomy`),
  ADD KEY `taxonomy` (`taxonomy`);

--
-- Indices de la tabla `wp_usermeta`
--
ALTER TABLE `wp_usermeta`
  ADD PRIMARY KEY (`umeta_id`),
  ADD KEY `user_id` (`user_id`),
  ADD KEY `meta_key` (`meta_key`(191));

--
-- Indices de la tabla `wp_users`
--
ALTER TABLE `wp_users`
  ADD PRIMARY KEY (`ID`),
  ADD KEY `user_login_key` (`user_login`),
  ADD KEY `user_nicename` (`user_nicename`),
  ADD KEY `user_email` (`user_email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `wp_commentdata`
--
ALTER TABLE `wp_commentdata`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `wp_comments`
--
ALTER TABLE `wp_comments`
  MODIFY `comment_ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `wp_links`
--
ALTER TABLE `wp_links`
  MODIFY `link_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `wp_options`
--
ALTER TABLE `wp_options`
  MODIFY `option_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=183;

--
-- AUTO_INCREMENT de la tabla `wp_postmeta`
--
ALTER TABLE `wp_postmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;

--
-- AUTO_INCREMENT de la tabla `wp_posts`
--
ALTER TABLE `wp_posts`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT de la tabla `wp_termmeta`
--
ALTER TABLE `wp_termmeta`
  MODIFY `meta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `wp_terms`
--
ALTER TABLE `wp_terms`
  MODIFY `term_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `wp_term_taxonomy`
--
ALTER TABLE `wp_term_taxonomy`
  MODIFY `term_taxonomy_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `wp_usermeta`
--
ALTER TABLE `wp_usermeta`
  MODIFY `umeta_id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `wp_users`
--
ALTER TABLE `wp_users`
  MODIFY `ID` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
