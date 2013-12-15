/*global requirejs*/

requirejs.config({

    paths: {
        
        'requirelib': '../../<%= projSource %>/bower_components/requirejs/require'<% if (includejQuery) { %>,
        'jquery': '../../<%= projSource %>/bower_components/jquery/jquery',<% } %><% if (includeHandlebars) { %>,
        'handlebars': '../../<%= projSource %>/bower_components/handlebars/handlebars.runtime',<% } %>
        // 'backbone': '../../<%= projSource %>/bower_components/backbone/backbone',
        // 'underscore': '../../<%= projSource %>/bower_components/underscore/underscore',

    },

    shim: {

        <% if (includeHandlebars) { %>'handlebars': {
            exports: 'Handlebars'
        },<% } %>
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
                'requirelib'<% if (includejQuery) { %>,
                'jquery'<% } %><% if (includeHandlebars) { %>,
                'handlebars'<% } %>
                // 'backbone'
            ]
        }
    ]

});