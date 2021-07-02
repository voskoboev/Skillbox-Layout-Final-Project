const { src, dest, parallel, series, watch } = require('gulp')
const browserSync = require('browser-sync').create()
const concat = require('gulp-concat')
const uglify = require('gulp-uglify-es').default
const sass = require('gulp-sass')(require('sass'))
const autoprefixer = require('gulp-autoprefixer')
const cleancss = require('gulp-clean-css')
const imagemin = require('gulp-imagemin')
const newer = require('gulp-newer')
const del = require('del')

const browsersync = () => {
  browserSync.init({
    server: { baseDir: 'src/' },
    notify: false,
    online: false
  })
}

const scripts = () => {
  return src([
    'node_modules/swiper/swiper-bundle.min.js',
    'src/js/index.js'
  ])
    .pipe(concat('bundle.min.js'))
    .pipe(uglify())
    .pipe(dest('src/js/'))
    .pipe(browserSync.stream())
}

const php = () => {
  return src([
    'src/php/**/*'
  ])
    .pipe(dest('dist/php/'))
  // .pipe(browserSync.stream())
}

const styles = () => {
  return src([
    'node_modules/reset-css/reset.css',
    'node_modules/swiper/swiper-bundle.min.css',
    'src/scss/bundle.scss'
  ])
    .pipe(sass())
    .pipe(concat('bundle.min.css'))
    .pipe(
      autoprefixer({
        overrideBrowserslist: ['last 10 versions'],
        grid: true
      })
    )
    .pipe(
      cleancss({
        level: { 1: { specialComments: 0 } }
      })
    )
    .pipe(dest('src/css/'))
    .pipe(browserSync.stream())
}

const libs = () => {
  return src([
    'src/libs/**/*'
  ])
    .pipe(dest('dist/libs/'))
    .pipe(browserSync.stream())
}

const images = () => {
  return src('src/images/**/*')
    .pipe(newer('src/images/'))
    .pipe(imagemin())
    .pipe(dest('src/images/'))
}

const cleanimg = () => {
  return del('src/images/**/*', { force: true })
}

const fonts = () => {
  return src('src/fonts/**/*')
    .pipe(dest('src/fonts/'))
}

const cleandist = () => {
  return del('dist/**/*', { force: true })
}

const buildcopy = () => {
  return src(
    [
      'src/css/**/*.min.css',
      'src/js/**/*.min.js',
      'src/images/**/*',
      'src/fonts/**/*',
      'src/**/*.html'
    ],
    { base: 'src/' }
  )
    .pipe(dest('dist'))
}

const startWatch = () => {
  watch('src/**/*.html').on('change', browserSync.reload)
  watch(['src/**/*.js', '!src/**/*.min.js'], scripts)
  watch('src/php/**/*', php)
  watch('src/**/*.scss', styles)
  watch('src/libs/**/*', libs)
  watch('src/images/**/*', images)
  watch('src/fonts/**/*', fonts)
}

exports.browsersync = browsersync
exports.scripts = scripts
exports.php = php
exports.styles = styles
exports.libs = libs
exports.images = images
exports.fonts = fonts
exports.cleanimg = cleanimg
exports.cleandist = cleandist

exports.build = series(
  cleandist,
  scripts,
  php,
  styles,
  libs,
  images,
  fonts,
  buildcopy
)
exports.default = parallel(
  scripts,
  php,
  styles,
  libs,
  browsersync,
  startWatch
)
