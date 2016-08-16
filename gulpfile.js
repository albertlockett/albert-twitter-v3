var gulp = require("gulp");
var gulpBabel = require("gulp-babel");
var gulpConcat = require("gulp-concat");
var gulpConnect = require("gulp-connect");
var gulpWebpack = require("gulp-webpack");


// start local dev server
gulp.task("connect", function() {
  gulpConnect.server({
    root: ['dist'],
    port: 9005,
    base: "http://localhost",
    livereload: true
  });
});

// copy html to location where can be served locally
gulp.task("html", function() {
  gulp.src("index.html").pipe(gulp.dest("./dist"));
});

// copy css to dist directory
gulp.task("css", function() {
  gulp.src([
      "style.css"
     ])
    .pipe(gulp.dest("./dist"));
});

gulp.task("fonts", function() {
  gulp.src("node_modules/security-components/dist/fonts/**")
    .pipe(gulp.dest("./dist/fonts"));
});

// build js
gulp.task("js", ["webpack"], function() {
  gulp.src("node_modules/prismjs/prism.js")
    .pipe(gulp.dest("./dist"));
});

gulp.task("webpack", function() {
  gulp.src("src/js/app.js")
    .pipe(gulpWebpack(require("./webpack.config.js")))
    .pipe(gulp.dest("./dist"));
});

// watch for file changes
gulp.task("watch", function() {
  gulp.watch("index.html", ["html"]);
  gulp.watch("style.css", ["css"]);
  gulp.watch("src/js/**", ["js"]);
});

gulp.task("default", ["html", "css", "js", "fonts", "connect", "watch"]);
