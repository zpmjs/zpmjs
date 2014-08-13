
var path = require("path");
var gulp = require("gulp");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var beautify = require("gulp-jsbeautify");
var replace = require("gulp-replace");
var zip = require("gulp-zip");
var del = require("del");

var pkg = require("./package.json");

var dist_dir = "dist";
var pkg_name = pkg.name;
var pkg_version = pkg.version;
var pkg_main = pkg.spm.main;
var debug_file = pkg_main + "-debug.js"

gulp.task('build', function() {

  // build
  gulp.src(pkg_main)
    .pipe(uglify())
    .pipe(gulp.dest([dist_dir, pkg_name, pkg_version].join("/")));

  // build-debug
  gulp.src(pkg_main)
    .pipe(concat(debug_file))
    .pipe(beautify({indent_size: 2}))
    .pipe(gulp.dest([dist_dir, pkg_name, pkg_version].join("/")));

});

// 默认任务
gulp.task("default", ["build"]);
