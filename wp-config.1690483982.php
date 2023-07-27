<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/documentation/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'tenryu' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', '' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'MyTHp@H@!/FlUxuDgD5,/IlS)bwS1-Q.`O[`JYt(.j&$LcM{+nv`<^G`MC*^<Ib6' );
define( 'SECURE_AUTH_KEY',  'nV:=_y~C [/8xFI#BOHxh]nTl><XQ#oE%eVEu p,x;{Q#w,BzEyfXOsqnpSv,oB(' );
define( 'LOGGED_IN_KEY',    'MQtM ~v+X;vMlS_R/DYD6NVv+8:?{dKwpT_w~~@v0@Q ?xk,s-|m!%|-Z&3@bNP-' );
define( 'NONCE_KEY',        '-}`_1xt+)fRqN(bm,}7Mu_pmqc%N5j5c}6r^of~~{oI!Y:fm-l^!fYYW~i$}Lwxu' );
define( 'AUTH_SALT',        '&mOFiXLQH;/PgpMnnH}_qU#X})zB35) JJN2n5d+s-5A}oN{0J_f*5~xCGpA]5:S' );
define( 'SECURE_AUTH_SALT', ')cwlvrD>%4YiK#Br>Lfjl<byD,}81D1Y5gfox.rSl p%&pg5+b3pRx?!?I>@:$(2' );
define( 'LOGGED_IN_SALT',   'PozSeu)}{3q-M6:bb|.r%n$Rh0j;QYkkRLn0eWUYfMQ@JV76*-f8-Y0O1 NoU4F%' );
define( 'NONCE_SALT',       'uk=MFNha-I:kei$O =9^ivkEZV[(+5sb&W!8nW6NVe?l O(ziu1x,n2`0 :S9[js' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/documentation/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
