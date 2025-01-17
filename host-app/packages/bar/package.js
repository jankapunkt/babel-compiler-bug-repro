Package.describe({
  name: 'foo:bar',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  'babel-plugin-istanbul': '6.0.0'
})

Package.onUse(function(api) {
  api.versionsFrom('3.0.1');
  api.use('ecmascript');
  api.mainModule('bar.js');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('foo:bar');
  api.mainModule('bar-tests.js');
});
