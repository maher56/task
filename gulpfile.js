const gulp = require("gulp");
const sass = require("gulp-sass")(require('sass'));
const prefix = require("gulp-autoprefixer")
gulp.task("sass" , ()=>{
    return gulp.src("src/*.scss")
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(prefix("last 4 versions"))
    .pipe(gulp.dest("src/"))
}) 
gulp.task("watch" , ()=> {
    gulp.watch("src/*.scss" , gulp.series("sass"))
})