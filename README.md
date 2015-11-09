# Angular Starter Normal

Angular JS project starter template for slightly more scalable cases

# Installation

`npm install`

Along with normal installation, also generates build artifacts.

# Usage

`npm start`

Starts web server hosting build artifacts, opens browser with live reloading, and watches files for changes.

# Source Files and Build Artifacts

* `src/*.html` and `src/assets/**/*` are copied to `dist`
* `src/js/**/*.js` are concatenated to create `dist/assets/js/*.js`
** Each directory `src/js/{name}` maps to `dist/assets/js/{name}.js`
** The templates `src/js/**/*.html` are put in $templateCache
* `src/scss/**/*.scss` are concatenated to create `dist/assets/css/*.css`
* All Bower components are normalized and copied to `dist/assets/vendor`
