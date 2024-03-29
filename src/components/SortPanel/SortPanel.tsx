import { ReactElement } from 'react';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';
import useDefineCharacterPageParams from '@hooks/useDefineCharacterPageParams';
import { setFirstGroup } from '@store/slice/sortSlice';

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

const sortInfo: { text: string; firstGroup: string }[] = [
  { text: 'Reset sorting', firstGroup: '' },
  {
    text: 'Show female characters first',
    firstGroup: 'Female',
  },
  { text: 'Show male characters first', firstGroup: 'Male' },
  { text: 'Show alive characters first', firstGroup: 'Alive' },
  { text: 'Show dead characters first', firstGroup: 'Dead' },
];

function SortPanel(): ReactElement {
  const dispatch = useAppDispatch();
  const firstGroup = useAppSelector(state => state.sort.firstGroup);
  const navigateToURLWithParams = useDefineCharacterPageParams();

  function inputHandler(firstGroup: string): void {
    navigateToURLWithParams('sort', firstGroup);
    dispatch(setFirstGroup(firstGroup));
  }

  const radioInputs = sortInfo.map((sort, index) => {
    const inputHandlerWrapper = (): void => {
      inputHandler(sort.firstGroup);
    };
    return (
      <label key={index}>
        <SortPanelInput
          type="radio"
          name="sort"
          onChange={inputHandlerWrapper}
          checked={firstGroup === sort.firstGroup}
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
