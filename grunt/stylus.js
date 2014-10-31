module.exports = {
  compile: {
    files: {
      'dist/app.css': ['src/css/app.styl']
    },
    options: {
      use: [
        require('normalize')
      ],
      import: [
        'nib'
      ]
    }
  }
};
