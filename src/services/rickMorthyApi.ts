import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const rickMorthyApi = createApi({
  reducerPath: 'rickMorthyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: endpointsBuilder => ({
    getCharactersData: endpointsBuilder.query({
      query: () => `character`,
    }),
    getFilteredCharactersData: endpointsBuilder.query({
      query: name => `character/?name=${name}`,
    }),
    getCharacterData: endpointsBuilder.query({
      query: id => `character/${id}`,
    }),
  }),
});
