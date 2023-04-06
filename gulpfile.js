const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function buildStyles() {
    return gulp.src('./src/**/*.scss')
        .pipe(sass())
        .pipe(cleanCSS())
        .pipe(gulp.dest('./dist'));
}

exports.default = gulp.series(buildStyles);
