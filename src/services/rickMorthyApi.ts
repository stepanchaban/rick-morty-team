import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Character, AllCharactersResponse } from './types';

export const rickMorthyApi = createApi({
  reducerPath: 'rickMorthyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: endpointsBuilder => ({
    getCharacters: endpointsBuilder.query<AllCharactersResponse, string>({
      query: () => `character`,
    }),
    getFilteredCharacters: endpointsBuilder.query<AllCharactersResponse, string>({
      query: name => `character/?name=${name}`,
    }),
    getCharacter: endpointsBuilder.query<Character, string>({
      query: id => `character/${id}`,
    }),
  }),
});