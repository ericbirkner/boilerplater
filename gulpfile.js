'use strict';

// npm init to create package.json file
// don't forget to install gulp as a dev dependency for this project, and also globally

var   gulp = require('gulp'),
      concat = require('gulp-concat'),
      del = require('del'),
      sass = require('gulp-sass'),
      browserSync = require('browser-sync').create();

gulp.task('compileSass', function() {
  return gulp.src("scss/minimal.scss")
      .pipe(sass())
      .pipe(gulp.dest('css'))
      .pipe(browserSync.stream());
});

gulp.task("concatIndex", function() {
  gulp.src(['partials/header.html', 'partials/indexbody.html', 'partials/footer.html'])
  .pipe(concat("index.html"))
  .pipe(gulp.dest("public"))
  .pipe(browserSync.stream());
});

gulp.task("concatAbout", function() {
  gulp.src(['partials/header.html', 'partials/aboutbody.html', 'partials/footer.html'])
  .pipe(concat("about.html"))
  .pipe(gulp.dest("public"))
  .pipe(browserSync.stream());
});

gulp.task("concatContact", function() {
  gulp.src(['partials/header.html', 'partials/contactbody.html', 'partials/footer.html'])
  .pipe(concat("contact.html"))
  .pipe(gulp.dest("public"))
  .pipe(browserSync.stream());
});

gulp.task("concatHola", function() {
  gulp.src(['partials/header.html', 'partials/holamundobody.html', 'partials/footer.html'])
  .pipe(concat("holamundo.html"))
  .pipe(gulp.dest("public"))
  .pipe(browserSync.stream());
});

gulp.task("watch", function() {
  browserSync.init({
      server: {
          baseDir: "./public"
      }
  });

  return gulp.watch(['partials/*.html', 'scss/*', 'img/*', 'js/*'], ['build'])

})

gulp.task('clean', function() {
  del(['public'])
});

gulp.task("build", ['compileSass', 'concatIndex', 'concatAbout', 'concatContact','concatHola'], function() {
  return gulp.src(["css/*", "img/*", "js/*"], { base: './'})
  .pipe(gulp.dest('public'))
  .pipe(browserSync.stream());
});




gulp.task("default", ["watch"]);
