'use strict';

var gulp        = require('gulp'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload,
    SSI         = require('browsersync-ssi'),
    concat      = require('gulp-concat'),
    minify      = require('gulp-minify'),
    uglify      = require('gulp-uglify'),
    plumber     = require('gulp-plumber'),
    sass        = require('gulp-sass'),
    zip         = require('gulp-zip'),
    postcss      = require('gulp-postcss'),
    autoprefixer = require('gulp-autoprefixer'),
    pump         = require('pump'),
    traceur = require('gulp-traceur'); // ES6转ES5

// 端口为3000的本地服务
gulp.task('serve', function() {
    browserSync.init({
        server: {
            baseDir:["./dist"],
            middleware:SSI({
                baseDir:'./dist',
                ext:'.shtml',
                version:'2.10.0'
            })
        }
    });

    gulp.watch("app/css/**/*.scss", ['sass']);
    gulp.watch("app/js/**/*.js", ['js']);
    gulp.watch("app/**/*.html", ['html']);
}); 

// 处理sass成css并自动添加兼容 Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function(){
  return gulp.src('app/css/*.scss')
    .pipe(sass({
        outputStyle: 'expanded'
    }))
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream:true }));
});

// 处理css 自动添加兼容 
gulp.task('css', function(){
  return gulp.src('app/css/*.css')
    // css文件用sublime的alt+shift+ctrl+p 自动补全 不需要自动补全
    // .pipe(autoprefixer({
    //         browsers: ['last 2 versions'],
    //         cascade: false
    //     }))
    .pipe(gulp.dest('dist/css'))
    .pipe(reload({ stream:true }));
});


// 处理js javscript files operate
gulp.task('js', function() {
   var jsSrc = ['app/js/*.js', '!app/js/jquery1.10.2.js'];

   return gulp.src(jsSrc)
       // .pipe(uglify())    //压缩
       .pipe(traceur()) // ES6转换
       .pipe(gulp.dest('dist/js'))
       .pipe(reload({ stream:true }));  //输出
});

// 处理jquery(因为jquery出现编译错误 所以jquery不执行ES6编译)
gulp.task('jquery', function() {
   var jsSrc = ['app/js/jquery1.10.2.js'];

   return gulp.src(jsSrc)
       // .pipe(uglify())    //压缩
       .pipe(gulp.dest('dist/js'))
       .pipe(reload({ stream:true }));  //输出
});

// 处理 html 文件
gulp.task('html', function() {
    
    return gulp.src("app/*.html")
        .pipe(plumber())        
        .pipe(gulp.dest("dist/"))
        .pipe(browserSync.stream());
});

// 处理图片
gulp.task('img', function() {
    
    return gulp.src("app/img/*.*")
        .pipe(gulp.dest("dist/img/"))
        .pipe(browserSync.stream());
});

// 处理字体
gulp.task('fonts', function() {
    
    return gulp.src("app/fonts/*.*")
        .pipe(gulp.dest("dist/fonts/"))
        .pipe(browserSync.stream());
});

// 处理layer
gulp.task('layer', function() {
    
    return gulp.src("app/layer/**")
        .pipe(gulp.dest("dist/layer/"))
        .pipe(browserSync.stream());
});

// publish (未测试 无此需求)
// gulp.task('publish', function(){
//     return gulp.src('dist/**/*')
//         .pipe(plumber())
//         .pipe(zip('publish.zip'))
//         .pipe(gulp.dest('release'))
// });

// 编辑默认任务
gulp.task('default', ['sass', 'css', 'js','jquery', 'html', 'img', 'fonts', 'serve', 'layer']);