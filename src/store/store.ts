import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'

// api queries
import { cityApi } from './services/city'
import { directionApi } from './services/direction'
import { seatsApi } from './services/seats'

// local states
import filterReducer from './slices/filterSlice'

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [cityApi.reducerPath]: cityApi.reducer,
    [directionApi.reducerPath]: directionApi.reducer,
    [seatsApi.reducerPath]: seatsApi.reducer,
    filter: filterReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(cityApi.middleware)
      .concat(directionApi.middleware)
      .concat(seatsApi.middleware)
      ,
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)