import { ReactElement } from 'react';
import styled from 'styled-components';
import { setData } from '@store/slice/storageDataSlice';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import { Card } from '@projectTypes/Card';
import useDefineCharacterPageParams from '@hooks/useDefineCharacterPageParams';

const SortPanelWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 30px 0 40px 0;
`;

const SortPanelForm = styled.form`
  display: flex;
  gap: 30px;
`;
const SortPanelInput = styled.input`
  margin-right: 5px;
`;

const sortInfo: { text: string; type: keyof Card; firstGroup: string }[] = [
  {
    text: 'Show female characters first',
    type: 'gender',
    firstGroup: 'Female',
  },
  { text: 'Show male characters first', type: 'gender', firstGroup: 'Male' },
  { text: 'Show alive characters first', type: 'status', firstGroup: 'Alive' },
  { text: 'Show dead characters first', type: 'status', firstGroup: 'Dead' },
];

function SortPanel(): ReactElement {
  const dispatch = useAppDispatch();
  const data = useAppSelector(state => state.storageData.data);
  const navigateToURLWithParams = useDefineCharacterPageParams();

  function inputHandler(type: keyof Card, firstGroup: string): void {
    dispatch(setData(helperSort(type, firstGroup, data)));
    navigateToURLWithParams('sort', firstGroup);
  }

  const radioInputs = sortInfo.map((sort, index) => {
    const inputHandlerWrapper = (): void => {
      inputHandler(sort.type, sort.firstGroup);
    };
    return (
      <label key={index}>
        <SortPanelInput
          type="radio"
          name="sort"
          onClick={inputHandlerWrapper}
        ></SortPanelInput>
        {sort.text}
      </label>
    );
  });

  return (
    <SortPanelWrap>
      <SortPanelForm>{radioInputs}</SortPanelForm>
    </SortPanelWrap>
  );
}

export default SortPanel;

function helperSort(
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
