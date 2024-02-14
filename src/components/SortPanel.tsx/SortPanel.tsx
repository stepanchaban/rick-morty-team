import { ReactElement } from 'react';
import styled from 'styled-components';
import { setData } from '@store/slice/manageDataSlice';
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';

const SortPanelWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SortPanelForm = styled.form`
  display: flex;
  gap: 20px;
`;

function SortPanel(): ReactElement {
  const dispatch = useAppDispatch();

  const data = useAppSelector(state => state.manageData.data);

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
        <input type="radio" name="sort" onClick={inputHandler}></input>
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
