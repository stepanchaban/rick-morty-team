import { ReactElement } from 'react';
import styled from 'styled-components';
import { setData } from '@store/slice/storageDataSlice';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';

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

function SortPanel(): ReactElement {
  const dispatch = useAppDispatch();

  const data = useAppSelector(state => state.storageData.data);

  function inputHandler(): void {
    dispatch(setData(data));
  }

  const labels = [
    'Sort names by alphabet',
    'Show female characters first',
    'Show male characters first',
    'Show alive characters first',
    'Show dead characters first',
  ];

  const radioInputs = labels.map((label, index) => {
    return (
      <label key={index}>
        <SortPanelInput
          type="radio"
          name="sort"
          onClick={inputHandler}
        ></SortPanelInput>
        {label}
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
