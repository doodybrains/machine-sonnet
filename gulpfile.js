var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var connect = require('gulp-connect');
var sass = require('gulp-sass');
var htmlmin = require('gulp-htmlmin');

gulp.task('js', function () {
  return browserify('./js/sonnet.js')
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
  gulp.src('./styles/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./build'))
    .pipe(connect.reload());
});

gulp.task('copy', function () {
    gulp.src('./index.html')
      .pipe(gulp.dest('./build/'));
});

gulp.task('watch', function() {
  gulp.watch('./*.html', ['html']);
  gulp.watch('./js/*.js', ['js']);
  gulp.watch('./styles/*.scss', ['sass']);
})

gulp.task('default', ['sass', 'js', 'webserver', 'watch']);
gulp.task('build', ['copy', 'sass', 'js']);
