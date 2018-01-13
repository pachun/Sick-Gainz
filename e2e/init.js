const detox = require('detox');
const config = require('../package.json').detox;

before(async () => {
  await detox.init(config);
  await device.reloadReactNative()
});

after(async () => {
  await detox.cleanup();
});
