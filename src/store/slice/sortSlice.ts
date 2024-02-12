import { createSlice } from '@reduxjs/toolkit';

const mockData = {
  results: [
    {
      id: 2,
      name: 'Morty Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/1'],
      url: 'https://rickandmortyapi.com/api/character/2',
      created: '2017-11-04T18:50:21.651Z',
    },
    {
      id: 3,
      name: 'Summer Smith',
      status: 'Alive',
      species: 'Human',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/3.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/6',
        'https://rickandmortyapi.com/api/episode/7',
        'https://rickandmortyapi.com/api/episode/8',
      ],
      url: 'https://rickandmortyapi.com/api/character/3',
      created: '2017-11-04T19:09:56.428Z',
    },
    {
      id: 6,
      name: 'Abadango Cluster Princess',
      status: 'Alive',
      species: 'Alien',
      type: '',
      gender: 'Female',
      origin: {
        name: 'Abadango',
        url: 'https://rickandmortyapi.com/api/location/2',
      },
      location: {
        name: 'Abadango',
        url: 'https://rickandmortyapi.com/api/location/2',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/6.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/27'],
      url: 'https://rickandmortyapi.com/api/character/6',
      created: '2017-11-04T19:50:28.250Z',
    },
    {
      id: 7,
      name: 'Abradolf Lincler',
      status: 'unknown',
      species: 'Human',
      type: 'Genetic experiment',
      gender: 'Male',
      origin: {
        name: 'Earth (Replacement Dimension)',
        url: 'https://rickandmortyapi.com/api/location/20',
      },
      location: {
        name: 'Testicle Monster Dimension',
        url: 'https://rickandmortyapi.com/api/location/21',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/7.jpeg',
      episode: [
        'https://rickandmortyapi.com/api/episode/10',
        'https://rickandmortyapi.com/api/episode/11',
      ],
      url: 'https://rickandmortyapi.com/api/character/7',
      created: '2017-11-04T19:59:20.523Z',
    },
    {
      id: 8,
      name: 'Adjudicator Rick',
      status: 'Dead',
      species: 'Human',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/8.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/28'],
      url: 'https://rickandmortyapi.com/api/character/8',
      created: '2017-11-04T20:03:34.737Z',
    },
    {
      id: 15,
      name: 'Alien Rick',
      status: 'unknown',
      species: 'Alien',
      type: '',
      gender: 'Male',
      origin: {
        name: 'unknown',
        url: '',
      },
      location: {
        name: 'Citadel of Ricks',
        url: 'https://rickandmortyapi.com/api/location/3',
      },
      image: 'https://rickandmortyapi.com/api/character/avatar/15.jpeg',
      episode: ['https://rickandmortyapi.com/api/episode/10'],
      url: 'https://rickandmortyapi.com/api/character/15',
      created: '2017-11-04T20:56:13.215Z',
    },
  ],
};

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

const initialState = mockData.results;

function helperSort(
  sortType: keyof Character,
  firstGroup: string,
): (a: Character, b: Character) => number {
  return (a: Character, b: Character) => {
    if (a[sortType] === firstGroup && b[sortType] !== firstGroup) {
      return -1;
    } else if (a[sortType] !== firstGroup && b[sortType] === firstGroup) {
      return 1;
    } else {
      return 0;
    }
  };
}

const sortSlice = createSlice({
  name: 'sort',
  initialState,
  reducers: {
    sortNamesByAlphabet: () => {
      return initialState.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
    },
    sortGenderFemaleFirst: () => {
      return initialState.slice().sort(helperSort('gender', 'Female'));
    },
    sortGenderMaleFirst: () => {
      return initialState.slice().sort(helperSort('gender', 'Male'));
    },
    sortStatusAliveFirst: () => {
      return initialState.slice().sort(helperSort('status', 'Alive'));
    },
    sortStatusDeadFirst: () => {
      return initialState.slice().sort(helperSort('status', 'Dead'));
    },
  },
});

export const {
  sortNamesByAlphabet,
  sortGenderFemaleFirst,
  sortGenderMaleFirst,
  sortStatusAliveFirst,
  sortStatusDeadFirst,
} = sortSlice.actions;

export default sortSlice.reducer;
