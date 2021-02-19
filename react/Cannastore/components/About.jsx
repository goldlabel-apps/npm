import React from 'react'
import { 
	toggleAbout,
} from '../redux/actions'
import clsx from 'clsx'
import {
    makeStyles,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Button,
    Typography,
    CardHeader,
    CardMedia,
    Grid,
} from '@material-ui/core/'
import { Icon } from '../theme'

const useStyles = makeStyles(theme => ({
	okBtn: {
		margin: theme.spacing(),
	},
	media: {
		marginBottom: theme.spacing(),
		height: 0,
		paddingTop: '56.25%', // 16:9
	},
	white:{
		color: 'white',
	}
}))

export default function About( props ) {
	
	const classes = useStyles()

	return	<Dialog 
				open
				fullWidth
				maxWidth={ `md` }>
				<DialogTitle>
	                <CardHeader 
	                  disableTypography
	                  title={ <Typography variant={ `h6` } className={ clsx( classes.white )}>
	                            { `Cannastore.app` }
	                          </Typography> }
	                  avatar={ <Icon icon={ `cannastore` } color={ `white` } /> }
	                />
	            </DialogTitle>

	            <DialogContent>

	            	<Grid container>

	            		<Grid item xs={ 12 } md={ 6 }>
	            			<Typography variant={ `body1` } gutterBottom>
	            				Why are there no apps for the Cannabis business? Because the App 
	            				stores won't allow anything related to Cannabis for legacy reasons. 
	            				Remind me why we need App stores again?
	            			</Typography>
	            		</Grid>

	            		<Grid item xs={ 12 } md={ 6 }>

	            			<CardMedia
						        className={ clsx( classes.media )}
						        image={ `https://cannastore.app/wp-content/uploads/2021/02/popeye.jpg` }
						        title={ `Popeye` }
						      />

	            		</Grid>
	            	</Grid>

	            </DialogContent>

	            <DialogActions>

	              <Button
	              	autoFocus
	              	className={ clsx( classes.okBtn )}
	                color={ `primary` }
	                variant={ `contained` }
	                onClick={ (e) => {
	                  e.preventDefault()
	                  toggleAbout( false )
	                }}>
	                Close
	              </Button>

	            </DialogActions>
			</Dialog>
}

/*
*/