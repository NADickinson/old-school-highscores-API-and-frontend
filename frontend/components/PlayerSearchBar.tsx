import { useRef } from 'react';

export const PlayerSearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <input
        type="text"
        placeholder="Search your OSRS username"
        ref={inputRef}
      />
      <button
        onClick={async () => {
          if (inputRef.current?.value && inputRef.current.value.trim()) {
            const res = await fetch(
              `http://localhost:5200/player/${inputRef.current.value}`,
            );
            const data = await res.json();
            console.log(data);
          }
        }}
      >
        {'hello'}
      </button>
    </div>
  );
};
