import { BackgroundContainer } from '../components/BackgroundContainer';
import { HeaderBar } from '../components/HeaderBar';
import { PlayerSearchBar } from '../components/PlayerSearchBar';

export default function App() {
  return (
    <BackgroundContainer>
      <HeaderBar></HeaderBar>
      <PlayerSearchBar />
    </BackgroundContainer>
  );
}
