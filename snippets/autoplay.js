var EXPERIENCE_ID = 'my-experience';

var experience = window.parent.bcov.gal.getEmbed(EXPERIENCE_ID);
experience.on('player_init', function handlePlayerInit(player) {
  player.on('ready', function handlePlayerReady() {
    experience.store.dispatch({
      type: 'SET_ACTIVE_VIEW',
      view: 'during'
    });
  });
});
