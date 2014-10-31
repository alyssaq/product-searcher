module.exports = {
    options: {
        cache: false
    },
    dist: {
        files: [{
            expand: true,
            cwd: 'src/',
            src: ['**/*.{gif,jpg,png,svg}'],
            dest: 'dist/'
        }]
    }
};
