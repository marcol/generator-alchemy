/*global requirejs*/

requirejs.config({

    paths: {
        
        // resources
        'requirelib': '../../<%= projSource %>/bower_components/requirejs/require'<% if (includejQuery) { %>,
        'jquery': '../../<%= projSource %>/bower_components/jquery/jquery'<% } %><% if (includeHandlebars) { %>,
        'handlebars': '../../<%= projSource %>/bower_components/handlebars/handlebars.runtime'<% } %>,

        // scripts
        'main': 'main'

    },

    shim: {
        <% if (includeHandlebars) { %>'handlebars': {
           exports: 'Handlebars'
       }<% } %>
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
            ]
        },
        {
            name: 'main',
            exclude: []
        }
    ]

});