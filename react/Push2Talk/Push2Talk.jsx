import React from 'react'
import clsx from 'clsx'
import p2TreduxStore from './redux'
import { Provider } from 'react-redux'
import { makeFingerprint } from './redux/p2T/actions'
import {    
	makeStyles,
	Card,
	CardHeader,
	Typography,
	Grid,
} from '@material-ui/core/'
import { Icon } from './theme'
import {
	Device,
	Location,
} from './components'

const useStyles = makeStyles(theme => ({
	push2Talk: {
		// width: '100%',
		margin: theme.spacing(),
	},
}))


const store = p2TreduxStore()
export const getP2TStore = () => { return store }

export default function Push2Talk() {
	
	const classes = useStyles()
	const { p2T } = getP2TStore().getState()
    React.useEffect(() => {
    	const {
    		block,
    		ting,
    	} = p2T
    	const {
    		fingerprint,
    	} = ting
    	if ( !block && !fingerprint) makeFingerprint()
	}, [p2T])

	return	<Provider store={store}>
				<div className={ clsx( classes.push2Talk ) }>
					<Card>
						<CardHeader 
							disableTypography
							avatar={ <Icon icon={`privacy`} color={ `primary` } /> }
							title={	<Typography variant={`h6`} color={ `error` }>
										Privacy
									</Typography>}
							
						/>
						
							<Grid container>
								
								<Grid item >
									<Device />
								</Grid>
								<Grid item >
									<Location />
								</Grid>
								
							</Grid>
					</Card>
				</div>
			</Provider>
}
