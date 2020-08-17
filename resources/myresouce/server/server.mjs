import * as alt from 'alt';

alt.on('playerConnect', (player) => {
  player.model = 'mp_m_freemode_01';
  // -275.522 Y:6635.835 Z:7.425
  player.spawn(-275.522, 6635.835, 7.425, 0);
});
