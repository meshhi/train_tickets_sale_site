// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { DirectionType } from './types/api_types.ts'

// Define a service using a base URL and expected endpoints
export const directionApi = createApi({
  reducerPath: 'directionApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://students.netoservices.ru/fe-diplom/routes/' }),
  endpoints: (builder) => ({
    getLastTickets: builder.query<DirectionType, string>({
      query: () => `last`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetLastTicketsQuery } = directionApi