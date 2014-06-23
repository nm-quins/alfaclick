var make     = require('./make.json'),
    dirs     = make.directories,
    gulp     = require('gulp'),
    gif      = require('gulp-if'),
    csso     = require('gulp-csso'),
    concat   = require('gulp-concat'),
    notify   = require('gulp-notify'),
    jslint   = require('gulp-jslint'),
    uglify   = require('gulp-uglify'),
    sass     = require('gulp-ruby-sass'),
    prefix   = require('gulp-autoprefixer'),
    path     = require('path'),
    join     = path.join,
    ngmin    = require('gulp-ngmin'),
    minify   = require('gulp-csso'),

    DNAME    = make.name + '_v' + make.version;

gulp.task('styles', function() {
    gulp.src(
            make.styles.plugins
            .concat(make.styles.variables)
            .concat(make.styles.proto)
            .concat(make.styles.corporate)
            .concat(make.styles.project)
        )
        .pipe(concat(dirs.assets.application + '.min.css'))
        .pipe(sass())
        .pipe(prefix(make.prefixes))
        .pipe(minify())
        .pipe(gulp.dest(dirs.assets.directory));
});

gulp.task('application', function() {
    gulp.src(make.scripts.application)
        .pipe(concat(dirs.assets.application + '.min.js'))
        // .pipe(ngmin())
        //.pipe(uglify())
        .pipe(gulp.dest(dirs.assets.directory));
});

gulp.task('views', function(){
    make.views.modules.forEach(function(item) {
        item.views.forEach(function(view) {
            gulp.src(join(dirs.app, item.module, 'views', view + '.html'))
                .pipe(gulp.dest(join(dirs.assets.views, item.module)));
        });
    });
});

gulp.task('plugins', function() {
    gulp.src(make.scripts.plugins)
        .pipe(concat(dirs.assets.plugins + '.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(dirs.assets.directory))
});

gulp.task('watch', function() {
    gulp.watch(make.styles.project, ['styles']);
    gulp.watch(make.scripts.application, ['application']);
    gulp.watch(make.views.directory, ['views']);
    gulp.watch('./make.json', ['default']);
});

gulp.task('scripts', ['application', 'plugins'])

gulp.task('assets', ['styles', 'scripts']);

gulp.task('default', ['views', 'assets']);

gulp.task('dev', ['default', 'watch']);


/*var pkg      = require('./package.json'),
    dirs     = pkg._directories,
    bem      = require('bem').api,
    gulp     = require('gulp'),
    gif      = require('gulp-if'),
    csso     = require('gulp-csso'),
    concat   = require('gulp-concat'),
    notify   = require('gulp-notify'),
    rename   = require('gulp-rename'),
    path     = require('path'),
    join     = path.join,

    PLATFORM = 'desktop',      // folders with bundles
    ASSETS   = 'assets',       // merged bundle name, united css ans js
    ANAME    = 'application',  // assets filename for minified css and js
    VNAME    = 'plugins',      // vendors filename for minified css and js

    APATH     = join(PLATFORM + '.bundles', ASSETS),
    ACSS      = join(APATH, '_' + ASSETS + '.css'),
    AJS       = join(APATH, '_' + ASSETS + '.js'),
    BUNDLES   = ['index'].map(function(bundle){ return join(PLATFORM + '.bundles', bundle, bundle + '.html')}),
    TEMPLATES = [
        {
            module: 'system',
            templates: ['index']
        }
    ],

    PCSS     = join(dirs.public, dirs.styles),
    PJS      = join(dirs.public, dirs.scripts),

    V        = pkg.version,
    DNAME    = pkg.name + '_v' + V;

gulp.task('styles', function() {
    gulp.src(ACSS)
        .pipe(csso())
        .pipe(rename(ANAME + '.min.css'))
        .pipe(gulp.dest(PCSS));
});

gulp.task('plugins', function() {
    gulp.src(AJS)
        .pipe(rename(VNAME + '.min.js'))
        .pipe(gulp.dest(PJS))
});

gulp.task('bundles', function(){
    gulp.src(BUNDLES)
        .pipe(gulp.dest(dirs.public));
});

gulp.task('application', function() {

    // Uncomment this if you want use AngularJS MVC
    // gulp.src([
    //         join(dirs.app, 'init.js'),
    //         join(dirs.app, '**', '*.js'),
    //         join(dirs.app, '**', 'routes', '*.js'),
    //         join(dirs.app, '**', 'services', '*.js'),
    //         join(dirs.app, '**', 'directives', '*.js'),
    //         join(dirs.app, '**', 'controllers', '*.js')
    //     ])
    //     .pipe(concat(ANAME + '.min.js'))
    //     .pipe(gulp.dest(PJS));
});

gulp.task('templates', function(){

    // Uncomment this if you want use AngularJS MVC
    // TEMPLATES.forEach(function(item) {
    //     item.templates.forEach(function(template) {
    //         var src = [item.module, template].join('.');
    //
    //         gulp.src(join(PLATFORM + '.bundles', src, src + '.html'))
    //             .pipe(rename(template + '.html'))
    //             .pipe(gulp.dest(join(dirs.public, 'templates', item.module)));
    //     });
    // });

});


gulp.task('views', ['bundles', 'templates']);
gulp.task('assets', ['styles', 'plugins', 'application']);

gulp.task('default', ['views', 'assets']);
*/