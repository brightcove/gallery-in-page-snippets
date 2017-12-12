var experience = window.bcov.gal.getEmbed();
experience.on('player_init', function handlePlayerInit(player) {
  player.on('ready', function handlePlayerReady() {
    experience.store.dispatch({
      type: 'SET_ACTIVE_VIEW',
      view: 'during'
    });
  });
});
