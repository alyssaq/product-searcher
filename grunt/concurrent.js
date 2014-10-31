module.exports = {
  test: ['lintspaces'],
  build: ['browserify', 'jade', 'stylus'],
  optimize: ['exorcise', 'newer:imagemin']
};
