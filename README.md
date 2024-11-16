# Rocket Blocks

This is an experimental starter repo for scaffolding native blocks quickly.

### Getting up and running

This is meant to be run standalone in a wordpress sandbox. @wp/env is included and bootstrap is pulled in from a cdn. 

1. Clone the repo and run `npm install`
2. Run `npm env:start` to fire up docker and spin up a WP sandbox. This might take awhile...
3. Run `npm run start` or `npm run dev` to start compiling blocks in the background as you work

To access your local wordpress install admin you can use the default "admin" / "password" login. This plugin will be activated by default.

### Adding blocks

Create block is packaged with the plugin. Simply run `npm run add-block` and a wizard will guide you and place the block files in a new folder under the `src` directory.

NOTE: YOU STILL NEED TO REGISTER THE BLOCK TYPE AFTER ADDING IT!

Go into the `rocket-blocks.php` and make sure the new block is registered if it is not showing up in the admin.

### Long term goals

Ideally we can create a framework style setup that allows quick native block creation approaching the ease of ACF.

This will allow a prepackaged plugin with standalone block support where the manual process of creating custom fields and mapping them to blocks through the admin is eliminated.

### Real world use

For real world use you can fork this repo or just download as a zip.

Install in the mu-plugins folder and follow the "adding blocks" process to build up your block library.

Once development is complete you can use the plugin-zip functionality to package everything up.

It is also possible to package this functionality inside a theme with some slight modifications.

## TODO

- Plop files for more structured block starter
- Plop wizard for innerblocks, supports, etc
- Break apart field generator for easier management
- Explore more schema/typescript/autocomplete options - maybe console tool that ouputs code?
- More complex fields - multi image, focal point, color, etc
- Serverside render by default for editor