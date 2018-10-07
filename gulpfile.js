var gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const webp = require('gulp-webp')

gulp.task('webp', () =>
  gulp
    .src(['./images/**/*.{jpg,png}'])
    .pipe(
      webp({
        quality: 100
      })
    )
    .pipe(gulp.dest('./static/images/'))
)

gulp.task('img-min', function() {
  return gulp
    .src('./images/**/*.{jpg,png,svg}')
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
    .pipe(gulp.dest('./static/images/'))
})

gulp.task('img', ['webp', 'img-min'])
