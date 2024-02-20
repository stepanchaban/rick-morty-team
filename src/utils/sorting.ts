import { Card } from '@projectTypes/Card';

export function helperSort(
  sortType: keyof Card,
  firstGroup: string,
  data: Card[],
): Card[] {
  const copyData = [...data];
  copyData.sort((a: Card, b: Card) => {
    if (a[sortType] === firstGroup && b[sortType] !== firstGroup) {
      return -1;
    } else if (a[sortType] !== firstGroup && b[sortType] === firstGroup) {
      return 1;
    } else {
      return 0;
    }
  });
  return copyData;
}
