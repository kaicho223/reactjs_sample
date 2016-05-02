var gulp = require('gulp');
var node = require('node-dev');
var browserSync = require('browser-sync');

// ローカルサーバー起動
gulp.task('server', function() {
	node('./server.js',[],[],[]);
});

// 自動ブラウザリロード
gulp.task('browser-sync', function() {
	browserSync({
		proxy: {
			target: 'http://localhost:3000'
		},
		port: 8080
	});
});

gulp.task('default', ['server', 'browser-sync']);