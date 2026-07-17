import type { ApiResponse } from '../../types/api';
import { BossTable } from './BossTable';
import { PlayerTable } from './PlayerTable';
export const PlayerStatsCollapsable = ({
  playerData,
}: {
  playerData: ApiResponse;
}) => {
  return (
    <div className="max-h-180 overflow-y-auto">
      <PlayerTable playerData={playerData} />
      <BossTable playerDataBosses={playerData.allBosses} title={'All Bosses'} />
      <BossTable
        playerDataBosses={playerData.recommendedBosses}
        title={'Recommended Bosses'}
      />
    </div>
  );
};
