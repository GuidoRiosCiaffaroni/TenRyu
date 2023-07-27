/* CUSTOM VARS START */
/* REAL_TABLE_NAME: `wp_usermeta`; */
/* PRE_TABLE_NAME: `1690483670_wp_usermeta`; */
/* CUSTOM VARS END */

CREATE TABLE IF NOT EXISTS `1690483670_wp_usermeta` ( `umeta_id` bigint unsigned NOT NULL AUTO_INCREMENT, `user_id` bigint unsigned NOT NULL DEFAULT '0', `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL, `meta_value` longtext COLLATE utf8mb4_unicode_520_ci, PRIMARY KEY (`umeta_id`), KEY `user_id` (`user_id`), KEY `meta_key` (`meta_key`(191))) /*!50100 TABLESPACE `tenten322_ei` */ ENGINE=InnoDB AUTO_INCREMENT=52 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
INSERT INTO `1690483670_wp_usermeta` (`umeta_id`, `user_id`, `meta_key`, `meta_value`) VALUES (1,1,'nickname','tenten322'),(2,1,'first_name',''),(3,1,'last_name',''),(4,1,'description',''),(5,1,'rich_editing','true'),(6,1,'syntax_highlighting','true'),(7,1,'comment_shortcuts','false'),(8,1,'admin_color','fresh'),(9,1,'use_ssl',0),(10,1,'show_admin_bar_front','true'),(11,1,'locale',''),(12,1,'wp_capabilities','a:1:{s:13:\"administrator\";b:1;}'),(13,1,'wp_user_level',10),(14,1,'dismissed_wp_pointers','theme_editor_notice'),(15,1,'show_welcome_panel',1),(17,1,'wp_user-settings','libraryContent=browse'),(18,1,'wp_user-settings-time',1690224476),(19,1,'wp_dashboard_quick_press_last_post_id',4),(20,1,'community-events-location','a:1:{s:2:\"ip\";s:12:\"186.10.247.0\";}'),(21,1,'odp_cfs_shield_notice','Y'),(22,1,'session_tokens','a:2:{s:64:\"3cd846dc36c5c3e40c27220f767221542a7ebc36225e215374220c3e29c51cfe\";a:4:{s:10:\"expiration\";i:1690641511;s:2:\"ip\";s:15:\"141.101.100.177\";s:2:\"ua\";s:111:\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\";s:5:\"login\";i:1690468711;}s:64:\"3d9841b0db4a9ba58a46fd513760986400a82a22001e540aede3cb816a96431f\";a:4:{s:10:\"expiration\";i:1690651178;s:2:\"ip\";s:15:\"141.101.100.137\";s:2:\"ua\";s:111:\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36\";s:5:\"login\";i:1690478378;}}'),(23,1,'managenav-menuscolumnshidden','a:5:{i:0;s:11:\"link-target\";i:1;s:11:\"css-classes\";i:2;s:3:\"xfn\";i:3;s:11:\"description\";i:4;s:15:\"title-attribute\";}'),(24,1,'metaboxhidden_nav-menus','a:1:{i:0;s:12:\"add-post_tag\";}'),(25,1,'managepluginscolumnshidden','a:0:{}'),(26,1,'plugins_per_page',999),(27,2,'nickname','guido'),(28,2,'first_name','Guido'),(29,2,'last_name','Rios Ciaffaroni'),(30,2,'description',''),(31,2,'rich_editing','true'),(32,2,'syntax_highlighting','true'),(33,2,'comment_shortcuts','false'),(34,2,'admin_color','fresh'),(35,2,'use_ssl',0),(36,2,'show_admin_bar_front','true'),(37,2,'locale',''),(38,2,'wp_capabilities','a:1:{s:10:\"subscriber\";b:1;}'),(39,2,'wp_user_level',0),(40,2,'dismissed_wp_pointers',''),(42,2,'account_status','approved'),(43,2,'um_member_directory_data','a:5:{s:14:\"account_status\";s:8:\"approved\";s:15:\"hide_in_members\";b:0;s:13:\"profile_photo\";b:0;s:11:\"cover_photo\";b:0;s:8:\"verified\";b:0;}'),(44,1,'account_status','approved'),(45,1,'um_member_directory_data','a:5:{s:14:\"account_status\";s:8:\"approved\";s:15:\"hide_in_members\";b:0;s:13:\"profile_photo\";b:0;s:11:\"cover_photo\";b:0;s:8:\"verified\";b:0;}'),(46,1,'um_user_profile_url_slug_user_login','tenten322'),(47,1,'wp_persisted_preferences','a:2:{s:14:\"core/edit-post\";a:2:{s:26:\"isComplementaryAreaVisible\";b:1;s:12:\"welcomeGuide\";b:0;}s:9:\"_modified\";s:24:\"2023-07-27T18:34:29.018Z\";}'),(48,1,'nav_menu_recently_edited',2),(49,2,'um_user_profile_url_slug_user_login','guido'),(50,2,'session_tokens','a:1:{s:64:\"c1269be07f8ff9f7fa2d5fd1ebac7212681fd3a5e1a342889a0f3952127f19d8\";a:4:{s:10:\"expiration\";i:1690655907;s:2:\"ip\";s:15:\"141.101.100.207\";s:2:\"ua\";s:125:\"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.0.0.0 Safari/537.36 OPR/100.0.0.0\";s:5:\"login\";i:1690483107;}}'),(51,2,'_um_last_login',1690483107);
