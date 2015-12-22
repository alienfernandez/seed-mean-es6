var compilerOptions = {
    modules: 'system',
    moduleIds: false,
    externalHelpers: true,
    comments: true,
    compact: false,
};

var path = {
    source: ['src/**/*.js', '!src/**/server/**/*.js', '!src/**/web/**/highlight/*.js'],
    allJsSource: ['src/**/*.js'],
    sourceES5: ['src/**/server/**/*.js', 'src/**/web/**/highlight/*.js'],
    html: '**/*.html',
    json: 'src/**/*.json',
    templates: ['src/**/*.html', '!src/**/web/**/highlight/*.html'],
    templatesHighlight: ['src/**/web/**/highlight/*.html'],
    less: 'src/assets/less/*.less',
    sass: 'src/assets/sass/main.scss',
    themes: ['app/assets/dark.css', 'app/assets/light.css'],
    themesOutput: 'public/assets/',
    output: 'public/app',
    outputConfig: 'public/app/packages/common/config/env',
    outputCss: 'public/assets/css/',
    css: ['src/**/*.css', '!app/assets/**/*.css'],
};

var serve = {
    port: 9001,
    rootPath: './public'
}

module.exports = {
    path: path,
    compilerOptions: compilerOptions,
    serve: serve
}
