import { createAction } from '@reduxjs/toolkit'
import { getP2TStore } from '../../Push2Talk'
import FingerprintJS from '@fingerprintjs/fingerprintjs'
import axios from 'axios'
import parseUa from 'ua-parser-js'

export const error = createAction(`P2T/ERROR`)
export const ting = createAction(`P2T/TING`)
export const block = createAction(`P2T/BLOCK`)

export const fetchIpgeo = () => {
	const store = getP2TStore()
	const endpoint = `https://api.ipgeolocation.io/ipgeo?apiKey=${process.env.REACT_APP_API_IPGEO}`
	axios.get(endpoint)
		.then(function(response) {
			// console.log ('fetchIpgeo response', response.data)
			updateTing(`callingCode`, response.data.calling_code)
			updateTing(`city`, response.data.city)
			updateTing(`continentCode`, response.data.continent_code)
			updateTing(`continentName`, response.data.continent_name)
			updateTing(`countryName`, response.data.country_name)
			updateTing(`countryCapital`, response.data.country_capital)
			updateTing(`countryCode2`, response.data.country_code2)
			updateTing(`countryCode3`, response.data.country_code3)
			updateTing(`countryTld`, response.data.country_tld)
			updateTing(`currencyCode`, response.data.currency.code)
			updateTing(`currencyName`, response.data.currency.name)
			updateTing(`currencySymbol`, response.data.currency.symbol)
			updateTing(`district`, response.data.district)
			updateTing(`geonameId`, response.data.geoname_id)
			updateTing(`ip`, response.data.ip)
			updateTing(`isEu`, response.data.is_eu)
			updateTing(`isp`, response.data.isp)
			updateTing(`languages`, response.data.languages)
			updateTing(`lat`, response.data.latitude)
			updateTing(`lng`, response.data.longitude)
			updateTing(`organization`, response.data.organization)
			updateTing(`stateProv`, response.data.state_prov)
			updateTing(`timeZone`, response.data.time_zone.name)
			updateTing(`timeZoneUnix`, response.data.time_zone.current_time_unix)
			updateTing(`zipcode`, response.data.zipcode)
			store.dispatch({type: `P2T/BLOCK`, block: false })
		})
		.catch(function(error) {
			store.dispatch({type: `P2T/ERROR`, error})
		})
	return true
}

export const makeFingerprint = () => {
	const store = getP2TStore()
	store.dispatch({type: `P2T/BLOCK`, block: true })
	const ua = parseUa()
	updateTing(`osName`, ua.os.name)
	updateTing(`osVersion`, ua.os.version)
	updateTing(`browserName`, ua.browser.name)
	updateTing(`browserVersion`, ua.browser.version)
	updateTing(`browserMajor`, ua.browser.major)
	updateTing(`deviceVendor`, ua.device.vendor ? ua.device.vendor : null )
	updateTing(`deviceModel`, ua.device.model ? ua.device.model : null )
	updateTing(`deviceType`, ua.device.type ? ua.device.type : null )
	
	FingerprintJS.load().then(fp => {
	      fp.get().then(result => {
	      	updateTing(`fingerprint`, result.visitorId)
	      	fetchIpgeo()
	      })
	    })
	return true
}

export const throwError = error => {
	const store = getP2TStore()
	store.dispatch({type: `P2T/ERROR`, error })
	return true
}

export const updateTing = (key, value) => {
	const store = getP2TStore()
	let ting = store.getState().p2T.ting
	ting = {
		...ting,
		updated: Date.now(),
		[key]: value,
	}
	store.dispatch({type: `P2T/TING`, ting })
	return true
}
