module.exports = {
  options: {
    base: 'dist'
  },
  prod: {
    port: process.env.PORT
  },
  dev: {
    options: {
      livereload: true,
      open: true,
      useAvailablePort: true
    }
  }
};
