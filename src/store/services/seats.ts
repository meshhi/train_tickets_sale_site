// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import type { SeatsInfoType } from './types/api_types.ts'

// Define a service using a base URL and expected endpoints
export const seatsApi = createApi({
  reducerPath: 'seatsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://students.netoservices.ru/fe-diplom/routes/' }),
  endpoints: (builder) => ({
    getSeats: builder.query<SeatsInfoType, string>({
      query: (id) => `${id}/seats`,
    }),
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetSeatsQuery } = seatsApi