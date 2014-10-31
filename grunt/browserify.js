var mold = require('mold-source-map');
var jsRoot = __dirname + '/src';

module.exports = {
  js: {
    files: {
      'dist/app.js': ['src/js/app.js']
    },
    options: {
      transform: ['es6ify'],
      browserifyOptions: {
        debug: true
      },
      // Voodoo
      postBundleCB: function(err, src, cb) {
        var through = require('through');
        var stream = through().pause().queue(src).end();
        var buffer = '';
        stream
          .pipe(mold.transformSourcesRelativeTo(jsRoot))
          .pipe(through(function(chunk) {
            buffer += chunk.toString();
          }, function() {
            cb(err, buffer);
          }));
        stream.resume();
      }
    }
  }
};
