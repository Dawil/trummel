module.exports = function(grunt) {
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');

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
	});

	grunt.registerTask('default', 'concat');
};
