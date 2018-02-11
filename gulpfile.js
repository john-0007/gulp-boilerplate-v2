const gulp       =require('gulp'),
      uglify     =require('gulp-uglify'),
      livereload =require('gulp-livereload');



// File paths
const SCRIPTS_PATH='public/scripts/**/*.js';

// Styles

gulp.task('styles',()=>{
  console.log("here we go");
});

// Scripts

gulp.task('scripts',()=>{
  return gulp.src( SCRIPTS_PATH)
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'))
        .pipe(livereload());
});


// Images
gulp.task('images',()=>{
  console.log("here we go");
});

// Default 

gulp.task('default',()=>{
  console.log("jfdsajflkd")
});

// Watch
gulp.task('watch',()=>{
  require('./server');
  livereload.listen();
  gulp.watch( SCRIPTS_PATH,['scripts']);
});