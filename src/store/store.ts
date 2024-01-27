import { configureStore } from '@reduxjs/toolkit'
// Or from '@reduxjs/toolkit/query/react'
import { setupListeners } from '@reduxjs/toolkit/query'

// api queries
import { cityApi } from './services/city'

// local states
import ticketReducer from './slices/ticketSlice'



export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [cityApi.reducerPath]: cityApi.reducer,
    tickets: ticketReducer,
  },
  // Adding the api middleware enables caching, invalidation, polling,
  // and other useful features of `rtk-query`.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(cityApi.middleware),
})

// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch)