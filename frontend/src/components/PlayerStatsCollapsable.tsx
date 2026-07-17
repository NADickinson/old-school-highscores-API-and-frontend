import type { ApiResponse } from '../../types/api';
import { BossTable } from './BossTable';
import { PlayerTable } from './PlayerTable';
export const PlayerStatsCollapsable = ({
  playerData,
}: {
  playerData: ApiResponse;
}) => {
  return (
    <div>
      <PlayerTable playerData={playerData} />
      <BossTable playerDataBosses={playerData.allBosses} title={'All Bosses'} />
      <BossTable
        playerDataBosses={playerData.recommendedBosses}
        title={'Recommended Bosses'}
      />
    </div>
  );
};
