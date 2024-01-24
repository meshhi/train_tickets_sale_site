// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type City from './types/city.ts'

// Define a service using a base URL and expected endpoints
export const cityApi = createApi({
  reducerPath: 'cityApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://students.netoservices.ru/fe-diplom/routes/' }),
  endpoints: (builder) => ({
    getCityByName: builder.query<City, string>({
      query: (name) => `cities/?name=${name}`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetCityByNameQuery } = cityApi