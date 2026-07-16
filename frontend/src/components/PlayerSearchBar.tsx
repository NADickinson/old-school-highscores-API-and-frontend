import { useRef } from 'react';
import type { ApiResponse } from '../../types/api';

export const PlayerSearchBar = ({
  setPlayerData,
}: {
  setPlayerData: (playerData: ApiResponse) => void;
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        type="text"
        placeholder="Search your OSRS username"
        ref={inputRef}
      />
      <button
        className="bg-white text-black px-4 py-2 rounded-lg shadow hover:cursor-pointer"
        onClick={async () => {
          if (inputRef.current?.value && inputRef.current.value.trim()) {
            const res = await fetch(
              `http://localhost:5200/player/${inputRef.current.value}`,
            );
            const data: ApiResponse = await res.json();
            setPlayerData(data);
            console.log(data);
          }
        }}
      >
        {'Search'}
      </button>
    </div>
  );
};
