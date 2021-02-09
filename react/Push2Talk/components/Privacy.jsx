import React from 'react'
import clsx from 'clsx'
import {    
	makeStyles,
	CardHeader,
	CardContent,
	Typography,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	location: {
		width: '100%',
	},
}))

export default function Privacy() {
	
	const classes = useStyles()
	
    React.useEffect(() => {
	}, [])

	return	<div className={ clsx( classes.location ) }>
				<CardHeader 
					disableTypography
					avatar={ <Icon icon={`privacy`} /> }
					title={	<Typography variant={`h6`} color={ `error` }>
								Privacy
							</Typography>}
				/>
				<CardContent>
					<Typography variant={`body1`}>
						As an anonymous visitor, 
						I want to be able to delete 
						my fingerprint so that 
						I can protect my privacy
					</Typography>
				</CardContent>
			</div>
}
