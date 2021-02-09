import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { p2TReducer, p2TSlice } from './p2T/reducer'

const p2TreduxStore = () => {
  const reducer = combineReducers({
    p2T: p2TReducer,
  })

  const preloadedState = {
    p2T: p2TSlice,
  }
  
  const middleware = [
    ...getDefaultMiddleware({
      serializableCheck: false
    })
  ]
  const store = configureStore({
    devTools: process.env.NODE_ENV !== 'production',
    reducer,
    middleware,
    preloadedState,
    enhancers: []
  })
  return store
}

export default p2TreduxStore