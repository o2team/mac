'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var cssnano = require('cssnano');

var htmlMinifierOptions = {
  removeComments: true,
  collapseWhitespace: true,
  collapseBooleanAttributes: true,
  removeScriptTypeAttributes: true,
  removeStyleLinkTypeAttributes: true,
  removeOptionalTags: true,
  minifyJS: true,
  minifyCSS: true
};

var dirs = {
  public: 'public',
  revSrc: 'public/build',
  revDist: 'public/dist',
  fonts: 'public/fonts',
  screenshots: 'public/dist/screenshots'
};

gulp.task('useref', function(){

  return gulp.src('public/**/*.html')
    .pipe($.useref({searchPath:'public'}))
    .pipe($.if('*.css', $.postcss([
      cssnano()
    ])))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe($.if('*.js', $.uglify()))
    .pipe($.if('*.html', $.htmlMinifier(htmlMinifierOptions)))
    .pipe(gulp.dest('public'));
});

gulp.task('fonts', function(){


    return gulp.src([dirs.fonts + '/**/*'], {base: dirs.public})
        .pipe($.rev())
        .pipe(gulp.dest(dirs.revDist))
        .pipe($.rev.manifest('rev-fonts.json'))
        .pipe(gulp.dest(dirs.revDist));

});


gulp.task('rev', ['useref', 'fonts'], function(){

    var basePath = dirs.revSrc,
        distPath = dirs.revDist;

    return gulp.src([basePath+'/css/*.css', basePath + '/js/*.js'], {base: basePath})
        .pipe($.rev())
        .pipe(gulp.dest(distPath))
        .pipe($.rev.manifest())
        .pipe(gulp.dest(distPath));

});

gulp.task("revreplace", ["rev"], function(){

  return gulp.src([dirs.public + '/**/rev-manifest.json', "public/**/*.html", "public/dist/**/*.css"])
	.pipe($.revCollector({
		replaceReved:true,
		dirReplacements: {
			'build/':'dist/'
		}
	}))
	.pipe($.ignore.exclude('./**/rev-*.json'))
    .pipe(gulp.dest(dirs.public));
});

gulp.task('screenshot:rev', function(){
  return gulp.src('public/themes/screenshots/*.png')
    .pipe($.rev())
    .pipe(gulp.dest(dirs.screenshots))
    .pipe($.rev.manifest())
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('screenshot:resize', ['screenshot:rev'], function(){
  var resizeOptions = {
    width: 400,
    height: 250,
    crop: true
  };

  return gulp.src('public/dist/screenshots/*.png')
    // Append "@2x" to the original images
    .pipe($.rename({
      suffix: '@2x'
    }))
    // Copy original images
    .pipe(gulp.dest(dirs.screenshots))
    // Resize images
    .pipe($.imageResize(resizeOptions))
    // Remove "@2x" in filename
    .pipe($.rename(function(path){
      path.basename = path.basename.replace('@2x', '');
      return path;
    }))
    // Save resized images
    .pipe(gulp.dest(dirs.screenshots));
});

gulp.task('screenshot:revreplace', ['screenshot:rev'], function(){
  return gulp.src([dirs.screenshots + '/rev-manifest.json', 'public/themes/index.html'])
    .pipe($.revCollector({
      replaceReved: true,
      dirReplacements: {
        '/themes/screenshots': '/dist/screenshots'
      }
    }))
    .pipe(gulp.dest('public/themes'));
});

gulp.task('screenshot', ['screenshot:rev', 'screenshot:resize', 'screenshot:revreplace']);
gulp.task('default', ['revreplace', 'screenshot']);
