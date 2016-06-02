var gulp = require('gulp');
var del = require('del');
var md5 = require('../index.js');

gulp.task('clean', function(){
	return del(['./output'])
});

gulp.task('html',function(){
	return gulp.src('./source/*.html')
		.pipe(gulp.dest('./output/'))
})

gulp.task('css',['html'],function(){
	return gulp.src("./source/css/*.css")
		.pipe(md5(10,'./output/*.html'))
		.pipe(gulp.dest("./output/css/"));
})


gulp.task('img' , ['css'],function() {
    gulp.src('./source/img/**/*')
        .pipe(md5(10 ,'./output/css/*.css'))
        .pipe(gulp.dest('./output/img/'));
});

gulp.task('default',['clean'],function(){
	gulp.start('html','css','img');
})