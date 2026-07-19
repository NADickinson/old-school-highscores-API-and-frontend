import type { ApiResponse } from '../../types/api';
import { BossTable } from './BossTable';
import { PlayerTable } from './PlayerTable';
export const PlayerStatsCollapsable = ({
  playerData,
}: {
  playerData: ApiResponse;
}) => {
  return (
    <div className="flex flex-col items-center w-full">
      <div className=" w-full overflow-x-auto flex justify-center ">
        <PlayerTable playerData={playerData} />
      </div>
      <div className="w-full overflow-x-auto flex">
        <BossTable
          playerDataBosses={playerData.allBosses}
          title={'All Bosses'}
        />
      </div>
      <div className="w-full overflow-x-auto flex">
        <BossTable
          playerDataBosses={playerData.recommendedBosses}
          title={'Recommended Bosses'}
        />
      </div>
    </div>
  );
};
