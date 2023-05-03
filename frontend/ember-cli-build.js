'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    sassOptions: {
      extension: 'scss',
    },
  });

  app.import('node_modules/material-design-lite/material.min.css');

  return app.toTree();
};
