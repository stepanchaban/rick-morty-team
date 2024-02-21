import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Card } from '@projectTypes/Card';
import { Character } from '@projectTypes/Character';

export const rickMorthyApi = createApi({
  reducerPath: 'rickMorthyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  keepUnusedDataFor: 0,
  endpoints: endpointsBuilder => ({
    getCharacters: endpointsBuilder.query<Card[], string>({
      query: characterName => ({
        url: '/character',
        params: {
          name: characterName,
        },
      }),
      transformResponse: filterResponse,
    }),
    getFilteredCharacters: endpointsBuilder.query<Card[], string>({
      query: name => `character/?name=${name}`,
      transformResponse: filterResponse,
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

function filterResponse(response: AllCharactersResponse): Card[] {
  return response.results.map(item => {
    return {
      image: item.image,
      name: item.name,
      species: item.species,
      gender: item.gender,
      status: item.status,
      id: item.id,
    };
  });
}

type AllCharactersResponse = {
  info: {
    count: number;
    next: string | null;
    pages: number;
    prev: string | null;
  };
  results: Character[];
};
