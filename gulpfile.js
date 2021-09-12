import autoprefixer from 'autoprefixer';
import postcss from 'gulp-postcss';
import gulpSass from 'gulp-sass';
import cssnano from 'cssnano';
import dartSass from 'sass';
import gulp from 'gulp';

const sass = gulpSass(dartSass);

const plugins = [
    cssnano(),
    autoprefixer({ overrideBrowserslist: ['defaults and last 4 version'] }),
];

gulp.task('build', () =>
    gulp
        .src('./scss/greset.scss')
        .pipe(sass())
        .pipe(postcss(plugins))
        .pipe(gulp.dest('./dist')),
);

gulp.task('dev', () => gulp.watch('./scss/**.scss', gulp.series('build')));
