import IFaction from "./IFaction";

interface IUser {
  discord_id: string;
  user_id: number;
  username: string;
  role: number;
  faction?: number | IFaction;
  health: number;
  hunger: number;
  thirst: number;
  head: number;
  hair: number;
  hair_color: number;
  is_male: boolean;
  nickname: string;
  x_pos: number;
  y_pos: number;
  z_pos: number;
  rotation: number;
  xp: number;
  inventory: any[];
  xp: number;
}

export default IUser;
