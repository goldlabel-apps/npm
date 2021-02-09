import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  ting,
} from "./actions"

export const p2TSlice = {
  error: null,
  block: false,
  ting: {
  	fingerprint: null,
  },
}

const p2TReducer = createReducer(p2TSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

  [ting]: (state, action) => {
    state.ting = action.ting
    return state
  },

})

export { p2TReducer }
