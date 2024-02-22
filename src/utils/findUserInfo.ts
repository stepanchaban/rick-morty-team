import { UserLS } from '@projectTypes/UserLS';

export function findUserInfo(infoType: string): string[] {
  const currentUser = localStorage.getItem('currentUser');
  const usersStr = localStorage.getItem('users');
  const users = usersStr ? JSON.parse(usersStr) : [];
  const currentUserInfo = users.find(
    (user: UserLS) => user.userID === currentUser,
  );
  const info = currentUserInfo[infoType];
  return info;
}
