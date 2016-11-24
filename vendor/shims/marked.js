(function() {
  function vendorModule() {
    'use strict';

    return { 'default': self['marked'] };
  }

  define('marked', [], vendorModule);
})();
