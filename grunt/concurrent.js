module.exports = {
  test: ['jscs', 'lintspaces'],
  build: ['browserify', 'jade', 'stylus'],
  optimize: ['exorcise', 'newer:imagemin']
};
