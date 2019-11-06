const {src, task, dest, parallel, series} = require('gulp');
const eslint = require('gulp-eslint');
const zip = require('gulp-zip');
const fi = require('gulp-if');
const fs = require('fs');

const path = {
	out: {
		js: 'media/js/'
	},
	src: {
		dependencies: [
			// webcomponentsjs
			'node_modules/@webcomponents/webcomponentsjs/**/*.js{,.map}',
			'!node_modules/@webcomponents/webcomponentsjs/src{,/**/*}',
			//intersection-observer
			'node_modules/intersection-observer/intersection-observer.js',
			//resize-observer
			'node_modules/resize-observer-polyfill/dist/ResizeObserver.js',
			//fullscreen-polyfill
			'node_modules/fullscreen-polyfill/dist/fullscreen.polyfill.js',
			//focus-visible
			'node_modules/focus-visible/dist/focus-visible.min.js',
			//model-viewer files
			'node_modules/@google/model-viewer/dist/model-viewer{,-legacy}.js'
		],
		script: [
			'src/js/script.js'
		]
	}
};

task('copy-dependencies', () => {
	return src(path.src.dependencies)
		.pipe(dest(path.out.js));
});

task('copy-script', () => {
	return src(path.src.script)
		.pipe(eslint({
			fix: true,
		}))
		.pipe(eslint.format())
		.pipe(fi(isFixed, dest(path.out.js)))
		.pipe(eslint.failAfterError());
});

const isFixed = (file) => {
	return file.eslint !== null && file.eslint.fixed;
};


task('release', () => {
	const package = JSON.parse(fs.readFileSync('package.json'));
	return src(['**/*', '!.*', '!node_modules{,/*,/**}', '!src{,/*,/**}', '!gulpfile*', '!LICENSE', '!package{,-lock}.json', '!releases{,/*,/**}'])
		.pipe(zip(package.name + '_' + package.version + '.zip'))
		.pipe(dest('releases'));
});


task('default', series('copy-dependencies', 'copy-script'), () => {
	console.log('done!');
});