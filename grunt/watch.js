module.exports = {
  js: {
    files: ['src/**/*.js'],
    tasks: ['jshint:js', 'jscs:js', 'lintspaces:js', 'browserify']
  },
  css: {
    files: ['src/**/*.styl'],
    tasks: ['lintspaces:css', 'stylus']
  },
  html: {
    files: ['src/**/*.jade'],
    tasks: ['lintspaces:html', 'jade']
  },
  grunt: {
    files: ['grunt/*.{js,yml}'],
    tasks: ['jshint:grunt', 'jscs:grunt', 'lintspaces:grunt']
  },
  meta: {
    files: ['*.{json,js,yml}'],
    tasks: ['lintspaces:meta']
  },
  dev: {
    files: ['dist/**/*'],
    options: {
      livereload: true
    }
  }
};
