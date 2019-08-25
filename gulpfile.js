var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var sass = require('gulp-sass');

gulp.task('js', function () {
  return browserify('./src/js/sonnet.js')
  .transform(babelify, {
    presets: ['es2015']
  })
  .bundle()
  .pipe(source('bundle.js'))
  .pipe(gulp.dest('./build'))
  .pipe(connect.reload())
});


gulp.task('webserver', function() {
  connect.server({
    livereload: true
  });
});

gulp.task('sass', function() {
  gulp.src('./src/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['js']);
  gulp.watch('./src/**/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'js', 'webserver', 'watch']);
