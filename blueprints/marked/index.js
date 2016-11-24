/*jshint node:true*/
module.exports = {
  description: 'Install marked.js dep via bower',
  normalizeEntityName: function() {},

  afterInstall: function() {
    return this.addBowerPackagesToProject([
      { name: 'marked', target: '^0.3.6' },
    ]);
  }
};
