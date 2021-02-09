import React from 'react'
import clsx from 'clsx'
import { useSelector } from 'react-redux'
import {    
	makeStyles,
	// CardHeader,
	CardContent,
	Typography,
} from '@material-ui/core/'
// import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	device: {
		width: '100%',
	},
}))

export default function Device() {
	
	const classes = useStyles()
	const p2TSlice = useSelector(state => state.p2T)
	const {
		// fingerprint,
		osName,
		browserName,
		browserMajor, 
		deviceVendor,
		deviceModel,
		deviceType,
	} = p2TSlice.ting

	return	<div className={ clsx( classes.device ) }>
				
				<CardContent>
					<Typography variant={`body2`}>
						{ osName } { browserName } { browserMajor } { deviceVendor } { deviceModel } { deviceType }
					</Typography>
				</CardContent>
			</div>
}

/*

<CardHeader 
					disableTypography
					avatar={ <Icon icon={`device`} /> }
					title={	<Typography variant={`h6`} color={ `error` }>
								Device
							</Typography>}
				/>

<pre>
					{ JSON.stringify ( p2TSlice.ting, null, 2 ) }
					</pre>
*/