"use strict";

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const cleanCss = require('gulp-clean-css');
const order = require('gulp-order');

// concat, babelify, and minify js
gulp.task("babel", () => {
  return gulp.src("src/js/*.js")
    .pipe(order([
      "gmap.js",
      "index.js",
      "eventlisteners.js"
    ]))
    .pipe(concat('scripts.min.js'))
    .pipe(babel())
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});

// concat, compile, and minify sass to css
gulp.task('sass', () => {
  return gulp.src('src/sass/*.scss')
    .pipe(concat('styles.min.css'))
    .pipe(sass())
    .pipe(cleanCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('build/css'));
});

// handle watchers
gulp.task('watch', () => {
  gulp.watch('src/sass/*.scss', ['sass']);
  gulp.watch('src/js/*.js', ['babel']);
})

// main task
gulp.task("default", ['babel','sass','watch']);
