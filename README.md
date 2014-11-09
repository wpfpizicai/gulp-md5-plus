# gulp-md5-plus

> md5 plugin for [gulp](https://github.com/wpfpizicai/gulp-md5-plus) ,md5 the static files(eg javascript style image files) ;then replace the filenames in css or the html if needed by passing the file or dir in the second parameter.

## Usage

First, install `gulp-md5-plus` as a development dependency:

```shell
npm install --save-dev gulp-md5-plus
```

Then, add it to your `gulpfile.js`:

```javascript
var md5 = require("gulp-md5-plus");

gulp.src("./src/*.ext")
	.pipe(md5(10,'./output/index.html'))
	.pipe(gulp.dest("./dist"));
```

## API

### md5(size,file)

#### size
Type: `String`  
Default: null

Optionnal: you can pass the size to limit the size of the hash that is appended.

#### file
Type: `String`  
Default: null

Optionnal: the file need to replace the file name of the md5ed files. dir is also supported

Example:
```javascript
	gulp.src('static/js/*')
        .pipe(md5(10,'./output/html'))
        .pipe(gulp.dest('./output'));
```

The sample above will append the md5 hash(length : 10) to each of the file in the static/js folder then repalce the link file name in the output/html/ using md5ed file name; at last store all of that into the *output* folder.


## License

http://en.wikipedia.org/wiki/MIT_License[MIT License]


