/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-marked',
  included(app) {
    const bowerDir = app.bowerDirectory;

    app.import(bowerDir + '/marked/lib/marked.js');
    app.import('vendor/shims/marked.js', {
      exports: { 'marked': [ 'default' ]}
    });
  }
};
