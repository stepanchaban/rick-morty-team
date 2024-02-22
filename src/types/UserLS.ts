import { HistoryInfo } from './HistoryInfo';
import { Character } from './Character';

export type UserLS = {
  email: string;
  password: string;
  userID: string;
  favorites: string[];
  history: HistoryInfo[];
};
