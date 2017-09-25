var EXPERIENCE_ID = 'my-experience';
var HAPYAK_API_KEY = 'abcdef0123456789';  // Your HapYak API key

var experience = window.parent.bcov.gal.getEmbed(EXPERIENCE_ID);

function viewerLoaded() {
  // This will be setup and listening for every video viewed AFTER the first.
  this.on('loadedmetadata', function handleLoadedMetadata() {
    this.hapyak({
      apiKey: HAPYAK_API_KEY
    });
    this.trigger('loadstart');
  });
}

experience.on('player_init', function handlePlayerInit() {
  var player = experience.api.player;

  // Wait until the viewer instance is loaded. This only needs to happen for the
  // first video in the experience.
  if (!player.hapyakViewer) {
    player.one('hyViewerLoaded', viewerLoaded);
    return;
  }

  viewerLoaded.call(player);
});
