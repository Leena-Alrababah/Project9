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
define( 'DB_NAME', 'project9' );

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
define( 'AUTH_KEY',         '_>PMw-Jij)bI+XbIqHWF8(g1BT#w&pJA-O%Y+GvMTxF@QIw15hj[=de&*.vlIwIO' );
define( 'SECURE_AUTH_KEY',  '(9S}A[vT},{]0ArKu+ K3g{COuwNRH?Z^)QA/ZsKV>FNB{RrSi%NO9$5`4~EVhYZ' );
define( 'LOGGED_IN_KEY',    '9#&m1d>]LROaO?MFd1Yt`x$z4qa&i&1>KQs-!^!&sE:8_,BJ|oF/-`xg7&x-<)*x' );
define( 'NONCE_KEY',        '=-e3o4[FQjiNBOx@QW(}AyA])>+4XM;wZT$Ff{pP$abybRI/!t,CR18Y1Y0.ne8G' );
define( 'AUTH_SALT',        'm8(t fF`W<?~FmN~TA=5kzMc(*L(--xUNpFGNw?4&-.-KeL&<E,6b[xhjq9X;C9U' );
define( 'SECURE_AUTH_SALT', '%7A?$t]|B&z/GacX3|S6*lVL.BIf!!_*xVu=Tbwb(IU8yea*qNqzc#q:[|J7c6-;' );
define( 'LOGGED_IN_SALT',   'p)SE6p|U<rL-a[P:GdQ`ny`OxZ&<Zt%hIl&Y$Juc.!9KJjI9Cw%`*rYek v|FhRB' );
define( 'NONCE_SALT',       'U<=wd6IPgjH7hqT i+~:bS(hP{T~zYRDrKtum$Q>4VCkN>CG@}/&PpG%8=V1;D3C' );

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
