var templateCache = require('gulp-angular-templatecache');
var gulp = require('gulp');

gulp.task('template', function () {
  return gulp.src('src/**/templates/*.tpl.html')
      .pipe(templateCache())
      .pipe(gulp.dest('public/assets/templates/'));
});
