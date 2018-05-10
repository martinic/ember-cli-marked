'use strict';

var path = require('path');
var stew = require('broccoli-stew');

module.exports = {
  name: 'ember-cli-marked',

  treeForVendor: function() {
    var marked = stew.find(path.join(path.dirname(require.resolve('marked')), '.'), {
      destDir: 'marked',
      files: ['marked.js']
    });

    var shims = stew.find(__dirname + '/vendor/marked', {
      destDir: 'marked',
      files: ['shims.js']
    });

    return stew.find([
      marked,
      shims
    ]);
  },

  included(app) {
    this._super.included.apply(this, arguments);

    app.import('vendor/marked/marked.js');
    app.import('vendor/marked/shims.js', {
      exports: { 'marked': [ 'default' ]}
    });
  }
};
