import React from 'react'
import clsx from 'clsx'
import { useDebounce } from '../lib'
import { useSelector } from 'react-redux'
import { 
	fetchAlgolia,
	selectItem,
	toggleAbout,
	gotoAffiliate,
	viewAll,
	makeDirty,
} from './redux/actions'
import {    
	makeStyles,
    TextField,
    Grid,
    Typography,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    ListItemSecondaryAction,
    Avatar,
    Chip,
    Link,
    Tooltip,
} from '@material-ui/core/'
import {
	// Icon,
	Sensiseeds,
	CannastoreLogo,
} from './theme'
import { 
	FullscreenDialog,
	About,
} from './components'

const useStyles = makeStyles(theme => ({
	cannastore:{
	},
	imageAvatar:{
		// backgroundColor: 'rgba(255,255,255, 0.25)',
		marginRight: theme.spacing(2),
		width: 60,
		height: 60,
	},
	viewAllBtn:{
		margin: theme.spacing(),
	},
	menuGrid:{
		paddingTop: theme.spacing(2),
		margin: 'auto',
	},
	hitCount:{
		padding: theme.spacing(1),
		margin: theme.spacing(1),
	},
	hits: {
		marginTop: theme.spacing(5),
	},
	pullRight: {
		textAlign: 'center',
	},
	logo: {
		width: 60,
		height: 60,
		cursor: 'pointer',
		marginLeft: theme.spacing(2.5),
		marginRight: theme.spacing(2),
	},
	sensiLogo:{
		width: 60,
		height: 60,
		cursor: 'pointer',
		// marginTop: theme.spacing(2),
		marginLeft: theme.spacing(2),
		marginRight: theme.spacing(2),
	},
	grow:{
		flexGrow: 1,
	},
	link: {
		cursor: 'pointer',
	},
	searchField: {
		// marginTop: theme.spacing(),
		minWidth: 250,
	},
	white: {
		color: 'white',
	},
}))

export default function Cannastore() {
	const classes = useStyles()
	const showAffiliateLogo = true
	const showCannastoreLogo = false
    const cannaSlice = useSelector( state => state.canna )
    const { 
    	hits, 
    	selected,
    	about,
    	showMax,
    	searchPristine,
    } = cannaSlice
    
    const appSlice = useSelector( state => state.app )
    const { 
    	customisedTheme,
    	userLocale,
    	urlParams,
    } = appSlice

    let initialSearchTerm = `Northern Lights Auto Whitelabel`
    if ( urlParams.seed ){
    	initialSearchTerm = urlParams.seed
    	viewAll()
    }
    
	const [searchTerm, setSearchTerm] = React.useState( initialSearchTerm )
	const debouncedSearchTerm = useDebounce( searchTerm, 500 )

	React.useEffect(() => {
		if (debouncedSearchTerm) {
			fetchAlgolia( debouncedSearchTerm )
		}
	}, [ debouncedSearchTerm ] )


	return	<div className={ clsx ( classes.cannastore ) }>	

				{ selected ? <FullscreenDialog /> : null }
				{ about ? <About /> : null }

				<Grid container className={clsx( classes.menuGrid )}>
					
					<Grid item className={ clsx( classes.grow) }>
						<div className={ clsx( classes.none ) }>
					    <form
					    	autoComplete={ `false` } 
					    	noValidate
					    	onSubmit={(e) => {
					    		e.preventDefault()
					    	}}>

					    	{ showCannastoreLogo ? <CannastoreLogo
								className={ clsx( classes.logo ) }
					    		color={ customisedTheme.darkText }
					    		onClick={ (e) => {
					            	e.preventDefault()
					            	toggleAbout(true)
					            }}/> : null }

					    		{ showAffiliateLogo ? <Tooltip title={ `Sensiseeds.com` }>
					    			<React.Fragment><Sensiseeds
									className={ clsx( classes.sensiLogo ) }
						    		color={ customisedTheme.darkText }
						    		onClick={ (e) => {
						            	e.preventDefault()
						            	gotoAffiliate(`https://sensiseeds.com/userLocale/`)
						            }}/></React.Fragment>
						            </Tooltip> : null  }
			      				<TextField 
			      					className={ clsx( classes.searchField )} 
			      					variant={ `standard` }
			      					label={ `Search Sensiseeds` }
			      					value={ searchTerm }
			      					id={ `cannastore-search` }
							        onChange={ (e) => {
							        	e.preventDefault()
							        	setSearchTerm( e.target.value )
							        	if ( searchPristine ) makeDirty()
							        }}
							     />
					    	</form>
					    </div>
			    	</Grid>

			    	<Grid item xs={12}>

			    		{ hits.length ? <React.Fragment>

			    			<List dense>
			    			
			    			{ hits.map( (item, i) => {
			    				
			    				if ( i >= showMax && searchPristine) return null

			    				const {
			    					price,
			    					numberSeeds,
			    				} = item
			    				const {
			    					title,
			    					image,
			    					url,
			    				} = item.locale[userLocale]
			    				let displayPrice = `€${ Math.floor(price) }/${ numberSeeds }`
			    				if ( !numberSeeds ) {
			    					displayPrice = `€${ Math.floor(price) }`
			    				}

			    				return <ListItem 
			    							button
			    							key={ `item_${i}` } 
			    							onClick={ (e) => {
			    								e.preventDefault()
			    								selectItem( item )
			    							}}>
			    							<ListItemIcon>
			    								<Avatar 
			    									className={ clsx ( classes.imageAvatar ) }
			    									src={ image } 
			    								/>
			    							</ListItemIcon>
			    							<ListItemText 
			    								disableTypography
			    								primary={ <Typography 
			    												variant={ `h6` } 
			    												className={ clsx ( classes.white ) }>
			    												{ title }
			    											</Typography> }
			    							/>
			    							<ListItemSecondaryAction>
								            	<Chip
													label={ displayPrice }
													edge={ `end` }
													size={ `small` }
													clickable
													color={ `primary` }
													onClick={(e) => {
									              		e.preventDefault()
									              		gotoAffiliate(url)
									              	}}	
												/>
								            </ListItemSecondaryAction>
			    						</ListItem>
			    			})}
			    			</List>
			    		</React.Fragment> : null }

						<Typography 
		    				className={ clsx( classes.hitCount ) }
		    				variant={ `body2` } 
		    				color={ `textSecondary` }>
				    		{ hits.length ? 
				    				<React.Fragment>
				    				{ hits.length > showMax ? `Showing ${showMax} of ${ hits.length } seeds ` 
				    				: `${hits.length} seeds found ` }
									matching "<b>{ searchTerm }</b>"
									&nbsp;	
						    </React.Fragment>: null }
						    		
				    		{ searchPristine && hits.length ? <Link
								className={ clsx( classes.link ) }
								color={ `primary` }
								onClick={(e) => {
									e.preventDefault()
									viewAll()
									makeDirty()
								}}>
								Show all { hits.length }
							</Link> : null  }
								
						</Typography> 
							
			    	</Grid>
				</Grid>
			</div>
}

