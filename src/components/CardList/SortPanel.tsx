import { ReactElement } from 'react';
import styled from 'styled-components';
import {
  setSortDataByAlphabet,
  setSortDataGenderFemaleFirst,
  setSortDataGenderMaleFirst,
  setSortDataStatusAliveFirst,
  setSortDataStatusDeadFirst,
} from '@store/slice/manageDataSlice';
import { useAppDispatch } from '@hooks/reduxHooks';
import { PayloadAction } from '@reduxjs/toolkit';

const SortPanelWrap = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SortPanelForm = styled.form`
  display: flex;
  gap: 20px;
`;
type Character = {
  id: number;
  created: string;
  episode?: string[];
  gender: string;
  image: string;
  location: {
    name: string;
    url?: string;
  };
  name: string;
  origin?: {
    name: string;
    url: string;
  };
  species: string;
  status: string;
  type: string;
  url?: string;
};

type DataPayloadAction = PayloadAction<Character[]>;

function SortPanel(): ReactElement {
  const dispatch = useAppDispatch();

  const inputHandler = (dataAction: DataPayloadAction) => () => {
    dispatch(dataAction);
  };

  return (
    <SortPanelWrap>
      <SortPanelForm>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(setSortDataByAlphabet([]))}
          />
          Sort names by alphabet
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(setSortDataGenderFemaleFirst([]))}
          />
          Show female characters first
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(setSortDataGenderMaleFirst([]))}
          />
          Show male characters first
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(setSortDataStatusAliveFirst([]))}
          />
          Show alive characters first
        </label>
        <label>
          <input
            type="radio"
            name="sort"
            onClick={inputHandler(setSortDataStatusDeadFirst([]))}
          />
          Show dead characters first
        </label>
      </SortPanelForm>
    </SortPanelWrap>
  );
}

export default SortPanel;
