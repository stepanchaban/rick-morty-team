import { HistoryInfo } from './HistoryInfo';

export type UserLS = {
  email: string;
  password: string;
  userID: string;
  favorites: string[];
  history: HistoryInfo[];
};
