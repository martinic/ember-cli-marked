/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');

module.exports = {
  name: 'ember-cli-marked',

  treeForVendor: function() {
    var markedLib = path.join(path.dirname(require.resolve('marked')), '.');
    var cliMarkedVendor = path.join(__dirname, 'vendor');
    return mergeTrees([markedLib, cliMarkedVendor]);
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/marked.js');
    app.import('vendor/shims/marked.js', {
      exports: { 'marked': [ 'default' ]}
    });
  }
};
