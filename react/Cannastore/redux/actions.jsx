import { createAction } from '@reduxjs/toolkit'
import { getStore } from '../../'
import algoliasearch from 'algoliasearch/lite'
import { toggleFetching } from '../../redux/app/actions'

export const error = createAction(`CANNA/ERROR`)
export const ting = createAction(`CANNA/TING`)
export const fullScreen = createAction(`CANNA/FULLSCREEN`)
export const searchTerm = createAction(`CANNA/SEARCHTERM`)
export const hits = createAction(`CANNA/HITS`)
export const selected = createAction(`CANNA/SELECTED`)
export const about = createAction(`CANNA/ABOUT`)
export const userLocale = createAction(`CANNA/USERLOCALE`)
export const showMax = createAction(`CANNA/SHOWMAX`)
export const searchPristine = createAction(`CANNA/SEARCHPRISTINE`)

export const gotoAffiliate = (url, target) => {
	let targ = `_self`
	if (target) targ = target
	const state = getStore().getState()
	const { isLive } = state.app
	const affiliateEndpoint = `${ url }?a_aid=${ process.env.REACT_APP_CANNASTORE_AID}`
	if( !isLive ) {
		alert (`${targ}\n${ affiliateEndpoint }`)
		return true
	}
	window.open( affiliateEndpoint, targ)
}

export const makeDirty = () => {
	const store = getStore()
	store.dispatch({ type: `CANNA/SEARCHPRISTINE`, searchPristine: false })
	return true
}

export const viewAll = () => {
	const store = getStore()
	store.dispatch({ type: `CANNA/SHOWMAX`, showMax: 100 })
	return true
}

export const toggleAbout = bool => {
	const store = getStore()
	store.dispatch({type: `CANNA/ABOUT`, about: bool })
	return true
}

export const selectItem = selected => {
	const store = getStore()
	store.dispatch({ type: `CANNA/SELECTED`, selected })
	return true
}

export const exitFullscreen = () => {
	const store = getStore()
	store.dispatch({ type: `CANNA/SELECTED`, selected: null })
	return true
}

const client = algoliasearch(
        process.env.REACT_APP_ALGOLIA_APP_ID, 
        process.env.REACT_APP_ALGOLIA_SEARCH,
)
const index = client.initIndex( `canna` )
export const fetchAlgolia = term => {
	// console.log ( 'fetchAlgolia', index )
	const store = getStore()
	store.dispatch({ type: `CANNA/FULLSCREEN`, fullScreen: true })
	toggleFetching( true )
	index.search( term, {
		hitsPerPage: 100,
	}).then(({ hits }) => {
		store.dispatch({ type: `CANNA/HITS`, hits })
		toggleFetching( false )
		return true
	})
}

export const throwError = error => {
	const store = getStore()
	store.dispatch({ type: `CANNA/ERROR`, error })
	return true
}

export const toggleFullScreen = bool => {
	const store = getStore()
	store.dispatch({type: `CANNA/FULLSCREEN`, fullScreen: bool })
	return true
}