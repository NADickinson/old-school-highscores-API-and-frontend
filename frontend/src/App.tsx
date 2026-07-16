import { useState } from 'react';
import { BackgroundContainer } from './components/BackgroundContainer';
import { HeaderBar } from './components/HeaderBar';
import { PlayerSearchBar } from './components/PlayerSearchBar';
import type { ApiResponse } from '../types/api';
import { PlayerStatsCollapsable } from './components/PlayerStatsCollapsable';

export default function App() {
  const [playerData, setPlayerData] = useState<ApiResponse>();

  return (
    <BackgroundContainer>
      <HeaderBar></HeaderBar>
      <PlayerSearchBar setPlayerData={setPlayerData} />
      {playerData && <PlayerStatsCollapsable playerData={playerData} />}
    </BackgroundContainer>
  );
}
