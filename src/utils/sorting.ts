import { Card } from '@projectTypes/Card';

type SortType = {
  [key: string]: keyof Card;
};

const sortType: SortType = {
  Alive: 'status',
  Dead: 'status',
  Male: 'gender',
  Female: 'gender',
};

export function helperSort(firstGroup: string, data: Card[]): Card[] {
  if (firstGroup === '') {
    return data;
  }
  const copyData = [...data];
  copyData.sort((a: Card, b: Card) => {
    if (
      a[sortType[firstGroup]] === firstGroup &&
      b[sortType[firstGroup]] !== firstGroup
    ) {
      return -1;
    } else if (
      a[sortType[firstGroup]] !== firstGroup &&
      b[sortType[firstGroup]] === firstGroup
    ) {
      return 1;
    } else {
      return 0;
    }
  });
  return copyData;
}
