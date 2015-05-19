var gulp = require('gulp'),
    sass = require('gulp-ruby-sass');

// config
cfg = {
  css: {
    path: './scss/**/*.scss',
    dest: './dist/css'
  }
};

// SASS related tasks
gulp.task('sass', function() {
  sass(cfg.css.path, { style: 'expanded' })
    .pipe(gulp.dest(cfg.css.dest));
});

// magic watch :)
gulp.task('watch', function(){
    gulp.watch(cfg.css.path, ['sass']);
});
gulp.task('default', ['sass', 'watch']);