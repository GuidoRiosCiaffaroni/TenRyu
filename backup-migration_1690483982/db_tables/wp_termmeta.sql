/* CUSTOM VARS START */
/* REAL_TABLE_NAME: `wp_termmeta`; */
/* PRE_TABLE_NAME: `1690483670_wp_termmeta`; */
/* CUSTOM VARS END */

CREATE TABLE IF NOT EXISTS `1690483670_wp_termmeta` ( `meta_id` bigint unsigned NOT NULL AUTO_INCREMENT, `term_id` bigint unsigned NOT NULL DEFAULT '0', `meta_key` varchar(255) COLLATE utf8mb4_unicode_520_ci DEFAULT NULL, `meta_value` longtext COLLATE utf8mb4_unicode_520_ci, PRIMARY KEY (`meta_id`), KEY `term_id` (`term_id`), KEY `meta_key` (`meta_key`(191))) /*!50100 TABLESPACE `tenten322_ei` */ ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;
