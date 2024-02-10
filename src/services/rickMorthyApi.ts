import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, AllCharactersResponse } from './types';
import { Card } from 'types/Card';

export const rickMorthyApi = createApi({
  reducerPath: 'rickMorthyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: endpointsBuilder => ({
    getCharacters: endpointsBuilder.query<Card[], void>({
      query: () => `character`,
      transformResponse: (response: AllCharactersResponse) => {
        return response.results.map((item) => {
          return {
            src: item.image,
            name: item.name,
            species: item.species,
            gender: item.gender,
            status: item.status,
          }
        })
      }
    }),
    getFilteredCharacters: endpointsBuilder.query<
      AllCharactersResponse,
      string
    >({
      query: name => `character/?name=${name}`,
    }),
    getCharacter: endpointsBuilder.query<Character, string>({
      query: id => `character/${id}`,
    }),
  }),
});

export const {
  useGetCharactersQuery,
  useGetFilteredCharactersQuery,
  useGetCharacterQuery,
} = rickMorthyApi;
