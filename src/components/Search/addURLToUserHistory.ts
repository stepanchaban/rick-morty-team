import { UserLS } from '@projectTypes/UserLS';
import { parseDate } from '@utils/parseData';

export function addURLToUserHistory(search: string): void {
  if (search === '') {
    return;
  }
  const currentUser = localStorage.getItem('currentUser');
  const usersStr = localStorage.getItem('users');
  const users = usersStr ? JSON.parse(usersStr) : [];
  const currentUserInfo = users.find(
    (user: UserLS) => user.userID === currentUser,
  );
  const history = {
    search: search,
    date: parseDate(new Date().toISOString()),
    url: window.location.href,
  };
  currentUserInfo.history.push(history);
  localStorage.setItem('users', JSON.stringify(users));
}