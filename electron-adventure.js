const electronAdventure = require('workshopper-adventure')({
  name   : 'electron-adventure',
  title  : 'Electron Adventure',
  appDir : __dirname,
  header : require('workshopper-adventure/default/header'),
  footer : require('workshopper-adventure/default/footer')
});

electronAdventure.addAll([
  "HELLO_ELECTRON"
]);

module.exports = electronAdventure;
