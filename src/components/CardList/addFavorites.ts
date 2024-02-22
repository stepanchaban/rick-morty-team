import { findCurrentUserInfo } from '@utils/findUserInfo';

export function addFavorites(characterId: string): void {
  const { users, currentUserInfo } = findCurrentUserInfo();
  currentUserInfo.favorites.push(characterId);
  localStorage.setItem('users', JSON.stringify(users));
}
