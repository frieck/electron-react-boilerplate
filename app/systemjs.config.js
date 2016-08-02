/**
 * System configuration for Angular 2 samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
    // map tells the System loader where to look for things
    var map = {
        'main': '.',
        '*.scss': '*.scss',
        'react': 'node_modules/react',
        'react-dom': 'node_modules/react-dom',
        'react-toolbox/lib': 'node_modules/react-toolbox/lib',
        'traceur': "node_modules/traceur",
        'react-css-themr': 'node_modules/react-css-themr',
    };
    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'main': {
            main: 'app.js',
            defaultExtension: 'js'
        },
        'react': {
            main: 'react.js',
            defaultExtension: 'js'
        },
        'react-dom': {
            main: 'index.js',
            defaultExtension: 'js'
        },
        "traceur": {
            main: 'bin/traceur.js',
            defaultExtension: 'js'
        },
        "react-css-themr": {
            main: 'lib/index.js',
            defaultExtension: 'js'
        }
    };

    var toolBoxPackages = [
        'button',
        'ripple',
    ]

    var reactDependencies = [
        'object-assign',
        'fbjs',
    ];

    function packIndex(pkgName) {
        packages[pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
        map[pkgName] = 'node_modules/' + pkgName;
    }

    function packToolboxIndex(pkgName) {
        packages['react-toolbox/lib/' + pkgName] = {
            main: 'index.js',
            defaultExtension: 'js'
        };
        //map[pkgName] = 'node_modules/react-toolbox/lib/' + pkgName;
    }

    // load react dependencies
    reactDependencies.forEach(packIndex);
    toolBoxPackages.forEach(packToolboxIndex);
    var config = {
        map: map,
        packages: packages,
        meta: {
            '*.scss': {
                loader: scss
            }
        }
    };
    System.config(config);
})(this);