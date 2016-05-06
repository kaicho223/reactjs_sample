var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');

gulp.task('buildAll', function() {
	for (var i = 1; i < 10; i++) {
		gulpTaskBrowserify(i);
	}
	
});
gulp.task('build1', function() {
	gulpTaskBrowserify(1);
});
gulp.task('build2', function() {
	gulpTaskBrowserify(2);
});
gulp.task('build3', function() {
	gulpTaskBrowserify(3);
});
gulp.task('build4', function() {
	gulpTaskBrowserify(4);
});
gulp.task('build5', function() {
	gulpTaskBrowserify(5);
});
gulp.task('build6', function() {
	gulpTaskBrowserify(6);
});
gulp.task('build7', function() {
	gulpTaskBrowserify(7);
});
gulp.task('build8', function() {
	gulpTaskBrowserify(8);
});
gulp.task('build9', function() {
	gulpTaskBrowserify(9);
});

gulp.task('watchAll', function() {
	for (var i = 1; i < 10; i++) {
		gulpTaskWatch(i);
	}
});
gulp.task('watch1', function() {
	gulpTaskWatch(1);
});
gulp.task('watch2', function() {
	gulpTaskWatch(2);
});
gulp.task('watch3', function() {
	gulpTaskWatch(3);
});
gulp.task('watch4', function() {
	gulpTaskWatch(4);
});
gulp.task('watch5', function() {
	gulpTaskWatch(5);
});
gulp.task('watch6', function() {
	gulpTaskWatch(6);
});
gulp.task('watch7', function() {
	gulpTaskWatch(7);
});
gulp.task('watch8', function() {
	gulpTaskWatch(8);
});
gulp.task('watch9', function() {
	gulpTaskWatch(9);
});

gulp.task('default', ['buildAll', 'watchAll']);

function gulpTaskBrowserify(index) {
	browserify('./' + index + '/jsx/main.jsx', { debug: true })
			.transform(babelify, {presets: ["es2015", "react"]})
			.bundle()
			.on("error", function (err) {
				console.log("Error : " + err.message);
				console.log("Error stack : " + err.stack);
			})
			.pipe(source('./' + index + '/js/main.js'))
			.pipe(gulp.dest('./'))
}

function gulpTaskWatch(index) {
	gulp.watch('./' + index + '/*.jsx', ['browserify'])
}