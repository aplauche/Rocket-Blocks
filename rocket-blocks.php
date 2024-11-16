<?php
/**
 * Plugin Name:       Rocket Blocks
 * Description:       Starter set up for rapidly developing native Gutenberg blocks
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            Anton Plauche
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       rktblk
 *
 */


namespace RKTBLK;


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function init() {
	register_block_type( __DIR__ . '/build/auto-gen' );
}
add_action( 'init', '\RKTBLK\init' );

function add_bootstrap(){
	wp_enqueue_style( 'bootstrap5', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', [], '5.0.2', 'all' );
	wp_enqueue_script( 'bootstrap5js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', [], '5.0.2' );
}

add_action('wp_enqueue_scripts', '\RKTBLK\add_bootstrap');


