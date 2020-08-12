const gulp = require('gulp'),
      concat = require('gulp-concat');
      autoprefixer = require('gulp-autoprefixer');
      cleanCSS = require('gulp-clean-css');
      uglify = require('gulp-uglify');


const cssFiles = [
	'css/fonts.css',
	'css/normalize.css',
	'css/modal.css',
	'css/styles.css',
	'css/swiper.min.css',
	'css/swiper-main.css',
	'css/main.css',
	'css/icofont.css',
	'css/media.css',
	'css/fly-elements.css',
	
];

function styles() {
    return gulp.src(cssFiles)
        .pipe(concat('all.css'))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 4 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('./build/css'))

}

const scriptsFiles = [
	'js/swiper-main.js',
	'js/main.js',
	'js/modal.js',
];

function scripts() {
	return gulp.src(scriptsFiles)
		.pipe(concat('all-main.js'))
		.pipe(uglify({
			toplevel: true,
		}))
		.pipe(gulp.dest('./build/js'))
}


gulp.task('styles', styles);
gulp.task('scripts', scripts);