var gulp = require('gulp'),
watch = require('gulp-watch');

gulp.task('default', function() {
    console.log('hooray, you created a gulp task');
});

gulp.task('html', function() {
    console.log('imagine something useful being done to your html');
});

gulp.task('styles', function() {
    console.log('imagine sass or postcss tasks running here');
});

gulp.task('watch', function() {
    watch('./app/index.html', function() {
        gulp.start('html');
    });

    watch('./app/assets/**/*.css', function() {
        gulp.start('styles');
    })
});