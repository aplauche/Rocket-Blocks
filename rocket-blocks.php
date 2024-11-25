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


if (! defined('ABSPATH')) {
	exit; // Exit if accessed directly.
}

/**
 * Registers all block folders found in the `build` directory.
 *
 * @return void
 */
function register_blocks()
{
	$block_folders = glob(__DIR__ . '/build/*', GLOB_ONLYDIR);
	foreach ($block_folders as $block_folder) {
		register_block_type($block_folder);
	}
}

add_action('init', __NAMESPACE__ . '\register_blocks');

function add_bootstrap()
{
	wp_enqueue_style('bootstrap5', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css', [], '5.0.2', 'all');
	wp_enqueue_script('bootstrap5js', 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js', [], '5.0.2');
}

add_action('wp_enqueue_scripts', __NAMESPACE__ . '\add_bootstrap');


/**s
 * Registers an editor stylesheet for bootstrap.
 */
function add_editor_styles()
{
	add_editor_style("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
}
add_action('after_setup_theme', __NAMESPACE__ .  '\add_editor_styles');
