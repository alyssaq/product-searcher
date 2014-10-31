module.exports = {
  options: {
    config: '.jscs.json',
    esnext: true
  },
  js: {
    files: {
      src: 'src/**/*.js'
    }
  },
  grunt: {
    files: {
      src: 'grunt/*.js'
    }
  }
};
