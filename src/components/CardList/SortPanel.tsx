import { ReactElement } from 'react';
import styled from 'styled-components';
import {
  sortGenderFemaleFirst,
  sortNamesByAlphabet,
  sortGenderMaleFirst,
  sortStatusAliveFirst,
  sortStatusDeadFirst,
} from '@store/slice/sortSlice';
import { useAppDispatch } from '@hooks/reduxHooks';

const SortPanelWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SortPanelForm = styled.form`
  display: flex;
  gap: 20px;
`;

type SortAction = {
  ():
    | ReturnType<typeof sortNamesByAlphabet>
    | ReturnType<typeof sortGenderFemaleFirst>
    | ReturnType<typeof sortGenderMaleFirst>
    | ReturnType<typeof sortStatusAliveFirst>
    | ReturnType<typeof sortStatusDeadFirst>;
};

function SortPanel(): ReactElement {
  const dispatch = useAppDispatch();

  const inputHandler = (sortAction: SortAction) => () => dispatch(sortAction());

  return (
    <SortPanelWrap>
      <SortPanelForm>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(sortNamesByAlphabet)}
          />
          Sort names by alphabet
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(sortGenderFemaleFirst)}
          />
          Show female characters first
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(sortGenderMaleFirst)}
          />
          Show male characters first
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(sortStatusAliveFirst)}
          />
          Show alive characters first
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(sortStatusDeadFirst)}
          />
          Show dead characters first
        </label>
      </SortPanelForm>
    </SortPanelWrap>
  );
}

export default SortPanel;
