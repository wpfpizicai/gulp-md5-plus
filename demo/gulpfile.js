var gulp = require('gulp');
var md5 = require("../index");
var del = require('del');

gulp.task('clean', function(){
	return del(['./output','./manifest.json'])
});

gulp.task('html',function(){
	return gulp.src('./source/*.html')
		.pipe(gulp.dest('./output/'))
})

gulp.task('css',['html'],function(){
	return gulp.src("./source/css/*.css")
		.pipe(md5(10,'./output/*.html',{
			mappingFile: 'manifest.json'
		}))
		.pipe(gulp.dest("./output/css/"));
})


gulp.task('img' , ['css'],function() {
    gulp.src('./source/img/**/*')
        .pipe(md5(10 ,'./output/css/*.css',{
        	dirLevel : 1,
        	mappingFile: 'manifest.json',
        	connector: '.'
        }))
        .pipe(gulp.dest('./output/img/'));
});

gulp.task('default',['clean'],function(){
	gulp.start('html','css','img');
})