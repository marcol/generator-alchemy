/*global requirejs*/

requirejs.config({

    paths: {
        
        // resources
        'requirelib': '../bower_components/requirejs/require',
        // 'jquery': 'bower_components/jquery/jquery',
        // 'backbone': 'bower_components/backbone/backbone',
        // 'handlebars': 'bower_components/handlebars/handlebars.runtime',
        // 'underscore': 'bower_components/underscore/underscore',

        // scripts
        // 'start': 'start'

    },

    shim: {

        // 'handlebars': {
        //     exports: 'Handlebars'
        // },
        // 'underscore': {
        //     exports: '_'
        // },
        // 'backbone': {
        //     deps: ['jquery', 'underscore', 'handlebars'],
        //     exports: 'Backbone'
        // }
        
    },

    modules: [
        {
            namespace: 'resources',
            name: 'resources',
            create: true,
            include: [
                'requirelib'
                // 'backbone'
            ]
        }
        // {
        //     name: 'start',
        //     exclude: [
        //         'backbone'
        //     ]
        // }
    ]

});