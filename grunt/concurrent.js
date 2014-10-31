module.exports = {
  test: ['jshint', 'jscs', 'lintspaces'],
  build: ['browserify', 'jade', 'stylus'],
  optimize: ['exorcise', 'newer:imagemin']
};
