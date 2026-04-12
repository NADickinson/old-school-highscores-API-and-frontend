export type Boss = {
  name: string;
  location: string;
  requirements: {
    quests: string[];
    stats: {
      attack: number;
      strength: number;
      defense: number;
      magic: number;
      ranged: number;
      prayer: number;
    };
  };
  notes: string;
};
