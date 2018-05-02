/**
*  Global values are defined as constants at the outset.
*  All task-specific variables are included in the task itself.
*  Keeps things scalable and makes it easier to read.
*
*  Each task is self-contained.
*
*  `const` and `var` defined individually.
*  No bugs with mistakes over `,` and `;`.
**/

const gulp = require('gulp');
const concat = require('gulp-concat');
const rename = require('gulp-rename');

// PostCSS parsing of scss partials for vendor prefixes, style and flexbox fixes

gulp.task('postcss', function () {
	var postcss = require('gulp-postcss');
	var scss = require('postcss-scss');
	var flexbugs = require('postcss-flexbugs-fixes');
	var autoprefixer = require('autoprefixer');
	var stylelint = require('stylelint');
	var stylefmt = require('stylefmt');

	var plugins = [flexbugs(), autoprefixer(), stylelint(), stylefmt()];

	return gulp.src('_sass/**/*.scss')
		.pipe(postcss(plugins, {syntax: scss}))
		.pipe(gulp.dest('_sass'));
});

// Prepare JS

gulp.task('js', function() {
	var jshint = require('gulp-jshint');
	var uglify = require('gulp-uglify');

	return gulp.src('_assets/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'))
		.pipe(uglify())
		.pipe(concat('main.js'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('js'));
});

// Prepare Webfonts CSS

gulp.task('webfonts', function() {
	var cleanCSS = require('gulp-clean-css');

	return gulp.src('_assets/css/**/*.css')
		.pipe(cleanCSS({compatibility: 'ie8'}))
		.pipe(concat('webfonts.css'))
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('css'));
});

// Minify images

gulp.task('img', function() {
	var imagemin = require('gulp-imagemin');
	var pngquant = require('imagemin-pngquant');

	return gulp.src('images/**/*')
		.pipe(imagemin([
			imagemin.jpegtran({progressive: true}),
			imagemin.optipng({optimizationLevel: 5}),
			imagemin.svgo({
				plugins: [
					{removeViewBox: true},
					{cleanupIDs: false}
				]
			})
		]))
		.pipe(gulp.dest('images'));
});
