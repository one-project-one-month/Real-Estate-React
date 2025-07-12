const baseConfig = require('../tailwind.config.js');

module.exports = {
  ...baseConfig,
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
    '../packages/ui/src/**/*.{ts,tsx,js,jsx}',
  ],
};
