var gulp = require('gulp'),
		minCSS = require('gulp-clean-css'),
		less = require('gulp-less'),
		bSync = require('browser-sync').create(),
		prefix = require('gulp-autoprefixer'),
		watch = require('gulp-watch');
		//uglify = require('gulp-uglify');

gulp.task('serve', ['less'], function(){
	bSync.init({
		server: "./"
	});
	gulp.watch("css/*.less",['less']);
	gulp.watch("*.html").on('change', bSync.reload);
	//gulp.watch("js/*.js", ['uglify']);
});

gulp.task('less', function(){
	return gulp.src('css/*.less')
	.pipe(less())
	.pipe(minCSS())
	.pipe(gulp.dest("./css"))
	.pipe(bSync.stream());
});

//gulp.task('uglify', function(){
//	gulp.src('js/*.js')
//		.pipe(uglify())
//		.pipe(gulp.dest('./minify/js'));
//});

gulp.task('default', ['serve']);
