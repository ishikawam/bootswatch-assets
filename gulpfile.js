var gulp = require('gulp');

gulp.task('default', function () {
    gulp.src('node_modules/bootswatch/assets/**')
        .pipe(gulp.dest('./'));
});

