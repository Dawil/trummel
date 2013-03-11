module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		concat: {
			scripts: {
				src: ['scripts/**/*.js'],
				dest: 'main.js'
			},
			styles: {
				src: ['styles/**/*.css'],
				dest: 'main.css'
			}
		},

		watch: {
			src: {
				files: ['scripts/**/*.js', 'styles/**/*.css', 'index.html'],
				tasks: ['concat']
			}
		}
	});

	grunt.registerTask('default', 'concat');
};
