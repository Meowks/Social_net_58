import { configureStore } from '@reduxjs/toolkit'
import { authApi } from './API/authApi'
import userSlice from './userSlice'

export const store = configureStore({
  reducer: {
    user: userSlice,
    [authApi.reducerPath]: authApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;