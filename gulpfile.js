var gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')
const del = require('del')
const SRC = './images/**/*.{jpg,png,svg}'
const DIST = './static/images/'

gulp.task(
  'clean-img',
  gulp.series(function() {
    return del([`${DIST}*`])
  })
)

gulp.task(
  'webp',
  gulp.parallel(function() {
    return gulp
      .src([SRC])
      .pipe(
        webp({
          quality: 100
        })
      )
      .pipe(gulp.dest(DIST))
  })
)

gulp.task(
  'img-min',
  gulp.parallel(function() {
    return gulp
      .src(SRC)
      .pipe(
        imagemin([
          imagemin.gifsicle({
            interlaced: true
          }),
          imagemin.jpegtran({
            progressive: true
          }),
          imagemin.optipng({
            quality: '65'
          }),
          imagemin.svgo({
            plugins: [
              {
                removeViewBox: true
              },
              {
                cleanupIDs: false
              }
            ]
          })
        ])
      )
      .pipe(gulp.dest(DIST))
  })
)

gulp.task('compress-img', gulp.parallel('img-min', 'webp'))
gulp.task('img', gulp.series('clean-img', 'compress-img'))
