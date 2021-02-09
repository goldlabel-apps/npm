import React from 'react'
import clsx from 'clsx'
import cannaReduxStore from './redux'
import { Provider } from 'react-redux'
import {    
	makeStyles,
	useTheme,
	Card,
	CardHeader,
	Typography,
} from '@material-ui/core/'
import { Icon } from './theme'

const useStyles = makeStyles(theme => ({
	cannastore: {
		// width: '100%',
		margin: theme.spacing(),
	},
}))

const store = cannaReduxStore()
export const getCannastoreStore = () => { return store }

export default function Cannastore() {
	
	const classes = useStyles()
	const theme = useTheme()
	const primary = theme.palette.primary.main
	const { canna } = getCannastoreStore().getState()
    
    React.useEffect(() => {
    	// console.log ( 'canna', canna )
	}, [canna])

	return	<Provider store={store}>
				<div className={ clsx( classes.cannastore ) }>
					<Card>
						<CardHeader 
							disableTypography
							avatar={ <Icon icon={`cannastore`} color={ primary }  /> }
							title={	<Typography variant={`h6`} color={ `error` }>
										Cannastore
									</Typography>}/>
					</Card>
				</div>
			</Provider>
}
