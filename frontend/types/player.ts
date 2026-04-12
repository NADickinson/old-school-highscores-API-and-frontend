export type Skill = {
  name: string;
  level: number;
  xp: number;
};

export type Player = {
  username: string;
  skills: Skill[];
};
