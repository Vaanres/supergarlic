var gulp = require('gulp')
const imagemin = require('gulp-imagemin')

gulp.task('img-min', function() {
  return gulp
    .src('./static/images/**/*.{jpg,png,svg}')
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
    .pipe(gulp.dest('./static/images-min/'))
})
