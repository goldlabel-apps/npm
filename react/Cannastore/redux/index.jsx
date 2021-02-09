import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { cannaReducer, cannaSlice } from './canna/reducer'

const cannaReduxStore = () => {
  const reducer = combineReducers({
    canna: cannaReducer,
  })

  const preloadedState = {
    canna: cannaSlice,
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

export default cannaReduxStore