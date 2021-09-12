import gulpSass from 'gulp-sass';
import dartSass from 'sass';
import gulp from 'gulp';

const sass = gulpSass(dartSass);

export const build = () =>
    gulp.src('./scss/greset.scss').pipe(sass()).pipe(gulp.dest('./dist'));

export const dev = () =>
    gulp.watch(
        './scss/**.scss',
        gulp.src('./scss/greset.scss').pipe(sass()).pipe(gulp.dest('./dist')),
    );
