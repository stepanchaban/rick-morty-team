import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const pageQuery = '/?page=1';
// api не имеет функционала по ограничению количества персонажей. можно либо запросить всех (более 800), либо запросить страницу (20 персонажей на страницу)
// запрос за персонажами сделан с query-параметром страницы, чтобы не тащить большой объем данных.

export const rickMorthyApi = createApi({
  reducerPath: 'rickMorthyApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://rickandmortyapi.com/api' }),
  endpoints: endpointsBuilder => ({
    getCharactersData: endpointsBuilder.query({
      query: () => `character${pageQuery}`,
    }),
  }),
});
