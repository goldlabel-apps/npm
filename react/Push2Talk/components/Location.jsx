import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {    
	makeStyles,
	// CardHeader,
	CardContent,
	Typography,
} from '@material-ui/core/'
// import { Mapbox } from './'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	location: {
		width: '100%',
	},
}))

export default function Location() {
	
	const classes = useStyles()
	const p2TSlice = useSelector(state => state.p2T)
	const {
		city,
		countryName,
		district,
		stateProv, 
		continentName,
		// lat,
		// lng,
	} = p2TSlice.ting

	return	<div className={ clsx( classes.location ) }>
				
				<CardContent>
					<Typography variant={`body2`}>
						{ city } { district !== city ? district : null } { stateProv } { countryName } { continentName } 
					</Typography>
					
				</CardContent>
			</div>
}

/*


<CardHeader 
					disableTypography
					avatar={ <Icon icon={`location`} /> }
					title={	<Typography variant={`h6`} color={ `error` }>
								Location
							</Typography>}
				/>

				
<pre>
					{ JSON.stringify ( p2TSlice.ting, null, 2 ) }
					</pre>
					
<Mapbox lat={ parseFloat( lat ) } lng={ parseFloat( lng ) }/>

*/
