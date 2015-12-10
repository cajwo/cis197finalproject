/* RequireJS path configuration file */
require.config({

  paths: {
    underscore: 'vendor/underscore',
    react: 'vendor/react.min',
    jquery: 'vendor/jquery/dist/jquery.min',
    JSXTransformer: 'vendor/JSXTransformer',
    jsx: 'vendor/jsx',
    text: 'vendor/text'
  },
  shim: {
    'bootstrap': {
      deps:['jquery']
    }
  }
});

// Underscore is first required
// then main.js is loaded using the JSX compiler plugin
// NOTE: as you will see, any file containing JSX code will be loaded via the jsx plugin
require(['underscore', 'jsx!main'])
