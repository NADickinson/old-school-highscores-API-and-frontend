import type { Player } from './player';
import type { Boss } from './boss';

export type ApiResponse = {
  player: Player;
  allBosses: Boss[];
  recommendedBosses: Boss[];
};
