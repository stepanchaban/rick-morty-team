import { UserLS } from '@projectTypes/UserLS';

export function findCurrentUserInfo(): {
  users: UserLS[];
  currentUserInfo: UserLS;
} {
  const currentUser = localStorage.getItem('currentUser');
  const usersStr = localStorage.getItem('users');
  const users = usersStr ? JSON.parse(usersStr) : [];
  const currentUserInfo = users.find(
    (user: UserLS) => user.userID === currentUser,
  );
  return { users, currentUserInfo };
}

export function findUserInfo<T>(infoType: string): T[] {
  const currentUser = localStorage.getItem('currentUser');
  const usersStr = localStorage.getItem('users');
  const users = usersStr ? JSON.parse(usersStr) : [];
  const currentUserInfo = users.find(
    (user: UserLS) => user.userID === currentUser,
  );
  const info = currentUserInfo[infoType];
  return info;
}
