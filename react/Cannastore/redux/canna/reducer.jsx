import { createReducer } from '@reduxjs/toolkit'
import {
  error,
} from "./actions"

export const cannaSlice = {
  error: null,
  dsajds:123,
}

const cannaReducer = createReducer(cannaSlice, {

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { cannaReducer }
