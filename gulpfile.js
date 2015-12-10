'use strict'
var gulp = require('gulp')
var del = require('del')
var $ = require('gulp-load-plugins')()

var paths = {
  jsx: "./src/jsx/*jsx",
  dest: "./public/javascripts/dest/"
}

gulp.task('jsCompile', function () {
  return gulp.src(paths.jsx)
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe($.react())
  .pipe($.babel({
    presets: ['es2015']
  }))
  .pipe($.sourcemaps.write('./maps'))
  .pipe(gulp.dest(paths.dest))
})

gulp.task('clean-js-dest', function (cb) {
  del([paths.dest + '*'], cb)
})


gulp.task('watch', function () {
  var watcher = gulp.watch('./src/**/*', ['compile'])
  watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...')
  })
})

gulp.task('clean', ['clean-js-dest'])
gulp.task('compile', ['jsCompile'])
gulp.task('dist', ['clean', 'compile'])
gulp.task('default', ['compile', 'watch'])
