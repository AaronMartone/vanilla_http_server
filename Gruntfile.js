module.exports = function(grunt) {

     // configure the project.
    grunt.initConfig({
        // allows template variable references of the metadata in the package.json file.
        pkg: grunt.file.readJSON('package.json'),
        // this property name should match the respective grunt plugin. it is the task name.
        jshint: {
            options: {
                force: false,
                node: true
            },
            // under the task name are the 'targets'. They can be called directly from CLI via: grunt <task>:<target>.
            // you can provide an 'options' property at task AND target level (it provides overriding options for that
            // respective object).
            target1: {
                src: ['*.js', 'tests/**/*.js'],
                options: {
                    curly: true,
                    eqeqeq: true,
                    eqnull: true,
                    browser: true,
                    globals: {
                        jQuery: true,
                        console: true
                    },
                }
            }
        },
        // values specified at this hierarchy, if not tasks defined below, are otherwise ignored.
        my_property: 'applesauce'
    });

    // load grunt plugins. these specify plugins that any given running task may need access to in order to execute.
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // create tasks.
    // if we run 'grunt' (w/o specifyin a task), it runs the 'default', which defined here, runs initConfig's 'jshint'.
    // when a task is run, grunt looks for an initConfig property of the same name.
    grunt.registerTask('default', ['jshint']);

};