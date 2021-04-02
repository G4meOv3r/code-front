import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from './redusers'
import { httpApi, wsApi } from './middlewares/api'

export const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware => [...getDefaultMiddleware(), httpApi, wsApi]
})
