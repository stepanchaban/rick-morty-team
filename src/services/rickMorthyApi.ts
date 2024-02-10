import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Card } from '@projectTypes/Card';

export const rickMorthyApi = createApi({
  reducerPath: 'rickMorthyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: endpointsBuilder => ({
    getCharacters: endpointsBuilder.query<Card[], void>({
      query: () => `character`,
      transformResponse: filterResponse,
    }),
    getFilteredCharacters: endpointsBuilder.query<Card[], string>({
      query: name => `character/?name=${name}`,
      transformResponse: filterResponse,
    }),
    getCharacter: endpointsBuilder.query<Card[], string>({
      query: id => `character/${id}`,
      transformResponse: filterResponse,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetFilteredCharactersQuery,
  useGetCharacterQuery,
} = rickMorthyApi;

function filterResponse (response: AllCharactersResponse): Card[] {
  return response.results.map(item => {
    return {
      src: item.image,
      name: item.name,
      species: item.species,
      gender: item.gender,
      status: item.status,
    };
  });
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

type AllCharactersResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
};