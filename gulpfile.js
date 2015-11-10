var gulp = require('gulp');
var del = require('del');
var concat = require('gulp-concat');
var browserSync = require('browser-sync');
var sass = require('gulp-sass');
var bower = require('main-bower-files');
var normalizeBower = require('gulp-bower-normalize');
var jshint = require('gulp-jshint');
var templateCache = require('gulp-angular-templatecache');
var folders = require('gulp-folders');

gulp.task('default', ['build']);

gulp.task('clean', [], function () {
	return del('dist/*');
});

gulp.task('build:assets', [], function () {
	return gulp.src('src/assets/**/*')
		.pipe(gulp.dest('dist/assets'));
});

gulp.task('watch:assets', ['build:assets'], function () {
	gulp.watch('src/assets/**/*', ['build:assets']);
});

gulp.task('build:css', [], function () {
	return gulp.src('src/scss/**/*.scss')
		.pipe(sass())
		.on('error', function (error) {
			console.error('SASS Error:', error.message);
		})
		.pipe(gulp.dest('dist/assets/css'));
});

gulp.task('watch:css', ['build:css'], function () {
	gulp.watch('src/scss/**/*', ['build:css']);
});

gulp.task('build:bower', [], function () {
	return gulp.src(bower(), {
			base: './bower_components'
		})
		.pipe(normalizeBower({
			bowerJson: './bower.json',
			flatten: true
		}))
		.pipe(gulp.dest('dist/assets/vendor'));
});

gulp.task('watch:bower', ['build:bower'], function () {
	gulp.watch('bower.json', ['build:bower']);
});

gulp.task('check:js', [], function () {
	return gulp.src('src/js/**/*.js')
		.pipe(jshint())
		.pipe(jshint.reporter());
});

gulp.task('build:js:templates', [], folders('src/js', function (folder) {
	return gulp.src('src/js/' + folder + '/**/*.html')
		.pipe(templateCache(folder + '.templates.js', {
			module: folder,
			root: folder
		}))
		.pipe(gulp.dest('.tmp'));
}));

gulp.task('build:js', ['check:js', 'build:js:templates'], folders('src/js', function (folder) {
	return gulp.src([
			'!src/js/' + folder + '/**/*.spec.js',
			'src/js/' + folder + '/**/*.module.js',
			'src/js/' + folder + '/**/*.js',
			'.tmp/' + folder + '.templates.js'
		])
		.pipe(concat(folder + '.js'))
		.pipe(gulp.dest('dist/assets/js'));
}));

gulp.task('watch:js', ['build:js'], function () {
	gulp.watch(['src/js/**/*.js', 'src/js/**/*.html'], ['build:js']);
});

gulp.task('build:html', [], function () {
	return gulp.src('src/*.html')
		.pipe(gulp.dest('dist'));
});

gulp.task('watch:html', ['build:html'], function () {
	gulp.watch('src/*.html', ['build:html']);
});

gulp.task('build', ['build:assets', 'build:css', 'build:bower', 'build:js', 'build:html']);

gulp.task('watch', ['watch:assets', 'watch:css', 'watch:bower', 'watch:js', 'watch:html']);

gulp.task('serve', ['watch'], function () {
	browserSync({
		server: {
			baseDir: 'dist'
		},
		files: ['dist/**/*'],
		reloadDelay: 1000,
		reloadDebounce: 1000,
		open: 'local',
		startPath: '/showcase.html'
	});
});