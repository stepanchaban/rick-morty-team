import { findCurrentUserInfo } from '@utils/findUserInfo';
import { parseDate } from '@utils/parseData';
import { generateID } from '@utils/generateID';
import { HistoryInfo } from '@projectTypes/HistoryInfo';

export function addURLToUserHistory(search: string, sortType: string): void {
  if (search === '') {
    return;
  }
  const { users, currentUserInfo } = findCurrentUserInfo();
  const history = {
    search: search,
    date: parseDate(new Date().toISOString()),
    url: window.location.hash,
    id: generateID(),
    sortType: sortType,
  };
  currentUserInfo.history.push(history);
  localStorage.setItem('users', JSON.stringify(users));
}

export function deleteItemFronUserHistory(historyId: string): void {
  const { users, currentUserInfo } = findCurrentUserInfo();
  const filteredHistory = currentUserInfo.history.filter(
    (historyItem: HistoryInfo) => historyItem.id !== historyId,
  );

  currentUserInfo.history = filteredHistory;
  localStorage.setItem('users', JSON.stringify(users));
}
