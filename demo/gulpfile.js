var gulp = require('gulp');
var md5 = require("gulp-md5-plus");
var del = require('del');

gulp.task('clean', function(){
	del(['./output/*'])
});

gulp.task('css',function(){
	return gulp.src("./source/css/*.css")
		.pipe(md5(10,'./index.html'))
		.pipe(gulp.dest("./output/css/"));
})


gulp.task('img' , ['css'],function() {
    gulp.src('./source/img/*')
        .pipe(md5(10 ,'./output/css/*.css'))
        .pipe(gulp.dest('./output/img/'));
});

gulp.task('default',['clean'],function(){
	gulp.start('css','img');
})