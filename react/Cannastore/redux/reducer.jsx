import { createReducer } from '@reduxjs/toolkit'
import {
  error,
  selected,
  searchTerm,
  hits,
  about,
  userLocale,
  showMax,
  searchPristine,
} from "./actions"

export const cannaSlice = {
  error: null,
  about: false,
  selected: null,
  searchPristine: true,
  searchTerm: ``,
  showMax: 1,
  hits: [],
  userLocale: `en`,
}

const cannaReducer = createReducer(cannaSlice, {

  [searchPristine]: (state, action) => {
    state.searchPristine = action.searchPristine
    return state
  },
  
  [showMax]: (state, action) => {
    state.showMax = action.showMax
    return state
  },
  
  [userLocale]: (state, action) => {
    state.userLocale = action.userLocale
    return state
  },
  
  [about]: (state, action) => {
    state.about = action.about
    return state
  },
  
  [hits]: (state, action) => {
    state.hits = action.hits
    return state
  },

  [searchTerm]: (state, action) => {
    state.searchTerm = action.searchTerm
    return state
  },
  
  [selected]: (state, action) => {
    state.selected = action.selected
    return state
  },

  [error]: (state, action) => {
    state.error = action.error
    return state
  },

})

export { cannaReducer }
