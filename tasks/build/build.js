'use strict';

var pathUtil = require('path');
var Q = require('q');
var gulp = require('gulp');
var gutil = require('gulp-util');
var less = require('gulp-less');
var watch = require('gulp-watch');
var batch = require('gulp-batch');
var plumber = require('gulp-plumber');
var ts = require('gulp-typescript');
var livereload = require('gulp-livereload');
var babel = require('gulp-babel');
var jetpack = require('fs-jetpack');

var generateSpecImportsFile = require('./generate_spec_imports');
var utils = require('../utils');

var projectDir = jetpack;
var srcDir = projectDir.cwd('./app');
var destDir = projectDir.cwd('./build');

var paths = {
    copyFromAppDir: [
        './node_modules/**',
        './helpers/**',
        './templates/**',
        './**/*.html',
        './**/*.+(jpg|png|svg)',
        '!./**/*.ts',
    ],
};

var errorHandler = function(title) {
    return function(err) {
        gutil.log(gutil.colors.red('[' + title + ']'), err.toString());
        this.emit('end');
    };
};

// -------------------------------------
// Tasks
// -------------------------------------

gulp.task('clean', function() {
    return destDir.dirAsync('.', {
        empty: true
    });
});


var copyTask = function() {
    projectDir.copy('app/systemjs.config.js', destDir.path('systemjs.config.js'));
    return projectDir.copyAsync('app', destDir.path(), {
        overwrite: true,
        matching: paths.copyFromAppDir
    });
};
gulp.task('copy', ['clean'], copyTask);
gulp.task('copy-watch', copyTask);

var react = function() {
    var tsProject = ts.createProject(projectDir.path("tsconfig.json"));

    return gulp.src(['app/**/*.jsx', 'app/*.jsx', "!app/node_modules", "!app/node_modules/**"])
        .pipe(babel({
            plugins: ['transform-react-jsx']
        }))
        .on('error', errorHandler('Babel'))
        .pipe(gulp.dest(function() {
            return destDir.path();
        }));
};
gulp.task('react', ['clean'], react);

var typescriptTask = function() {
    var tsProject = ts.createProject(projectDir.path("tsconfig.json"));

    return gulp.src(['app/**/*.ts', 'app/*.ts', "!app/node_modules", "!app/node_modules/**"])
        .pipe(ts(tsProject))
        .on('error', errorHandler('TypeScript'))
        .pipe(gulp.dest(function() {
            return destDir.path();
        }));
};
gulp.task('typescript', ['clean'], typescriptTask);

var lessTask = function() {
    return gulp.src('app/stylesheets/main.less')
        .pipe(plumber())
        .pipe(less())
        .pipe(gulp.dest(destDir.path('stylesheets')));
};
gulp.task('less', ['clean'], lessTask);
gulp.task('less-watch', lessTask);


gulp.task('environment', ['clean'], function() {
    var configFile = 'config/env_' + utils.getEnvName() + '.json';
    projectDir.copy(configFile, destDir.path('env.json'));
});


gulp.task('package-json', ['clean'], function() {
    var manifest = srcDir.read('package.json', 'json');

    // Add "dev" suffix to name, so Electron will write all data like cookies
    // and localStorage in separate places for production and development.
    if (utils.getEnvName() === 'development') {
        manifest.name += '-dev';
        manifest.productName += ' Dev';
    }

    destDir.write('package.json', manifest);
});


gulp.task('watch', function() {
    watch(paths.copyFromAppDir, {
        cwd: 'app'
    }, batch(function(events, done) {
        gulp.start('copy-watch', done);
    }));
    watch('app/**/*.less', batch(function(events, done) {
        gulp.start('less-watch', done);
    }));
});


gulp.task('build', ['less', 'typescript', 'react', 'copy', 'environment', 'package-json']);