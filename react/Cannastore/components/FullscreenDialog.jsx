import React from 'react'
import { useSelector } from 'react-redux'
import clsx from 'clsx'
import {
  exitFullscreen,
  gotoAffiliate,
} from '../redux/actions'
import {
    makeStyles,
    // useTheme,
    Avatar,
    IconButton,
    Dialog,
    DialogTitle,
    DialogActions,
    DialogContent,
    Button,
    Typography,
    CardHeader,
    Grid,
    List,
    ListItem,
    ListItemText,
} from '@material-ui/core/'
import { Icon } from '../theme'
import { SwitchLocale } from '../../components'

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  flex: {
    display: 'flex',
  },
  productBtns:{
    // margin: theme.spacing(3),
  },
  description:{
    
  },
  descriptionBtn:{
    marginBottom: theme.spacing(3),
    cursor: 'pointer',
    borderTop: '1px solid' + theme.palette.secondary.main,
    borderBottom: '1px solid' + theme.palette.secondary.main,
    padding: theme.spacing(3),
  },
  linkBtn:{
    // width: '100%',
    cursor: 'pointer',
    // textAlign: 'left',
    // borderTop: '1px solid' + theme.palette.secondary.main,
    borderBottom: '1px solid' + theme.palette.secondary.main,
  },
  actionBar: {
   background: 'none',
   // color: 'white',
  },
  productImage: {
    width: 150,
    height: 150,
    marginBottom: theme.spacing(3),
    cursor: 'pointer',
  },
  imageGridItem: {
    // border: '1px solid red',
    textAlign: 'right',
  },
}))

export default function FullscreenDialog() {

  const classes = useStyles()
  // const theme = useTheme()
  // const primary = theme.palette.primary.main
  const cannaSlice = useSelector(state => state.canna)
  const { 
    selected,
  } = cannaSlice

  const appSlice = useSelector( state => state.app )
  const { 
    userLocale,
  } = appSlice
  const {
    numberSeeds,
    price,
    strainType,
    image,
  } = selected

  if ( !selected.locale ) return null
  const userLocaleData = selected.locale[userLocale]
  
  const {
    title,
    url,
    // description,
    meta_description,
    heigh_gain,
    climate_zone,
    category,
  } = userLocaleData


  const plantYield = selected.locale[userLocale][`yield`]
  // console.log (`selected.locale[userLocale]`, selected.locale[userLocale] )
  return <Dialog 
            open 
            fullScreen
            onClose={ (e) => {
              e.preventDefault()
              exitFullscreen()
          }}>
            
            <DialogTitle>    
              
              

                <CardHeader 
                  disableTypography
                  title={ <Typography variant={ `h6` } color={ `textSecondary` } >
                            { title }
                          </Typography> }
                  action={ <React.Fragment>
                            <IconButton
                                color={ `secondary` }
                                onClick={ (e) => {
                                  e.preventDefault()
                                  exitFullscreen()
                                }}>
                                <Icon icon={ `close` } color={ `primary` } />
                              </IconButton>
                          </React.Fragment> }

                  avatar={ <React.Fragment>
                            <div className={ clsx( classes.flex ) }>
                              <SwitchLocale />
                            </div>
                          </React.Fragment> }
                />

                   
              
            </DialogTitle>
              
             <DialogContent>

               <Grid container>

                 

                  <Grid item xs={12} className={ clsx( classes.gridItem ) }>
                     <Grid container>
                       <Grid item className={ clsx( classes.imageGridItem ) }>
                         <Avatar 
                           src={ image } 
                           className={ clsx( classes.productImage ) }
                           onClick={ (e) => {
                              e.preventDefault()
                              gotoAffiliate( url )
                            }}
                         />
                       </Grid>
                       
                       <Grid item xs={12} sm={6} className={ clsx( classes.productBtns ) }>

                         <List dense>
                            <ListItem 
                              // button
                              // onClick={ (e) => {
                              //   e.preventDefault()
                              //   gotoAffiliate( 
                              //     `https://sensiseeds.com/${userLocale}/cannabis-seeds#sqr:(q[${category}])`, 
                              //     `_blank`
                              //   )
                              // }}
                          >
                              <ListItemText primary={ category } />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={ plantYield } />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={ climate_zone } />
                            </ListItem>

                            <ListItem>
                              <ListItemText primary={ heigh_gain } />
                            </ListItem>

                         </List>
                    
                       </Grid>
                     </Grid>
                  </Grid>
                 
                  

                 
                </Grid>

                <div 
               className={ clsx( classes.descriptionBtn ) }
               onClick={ (e) => {
                e.preventDefault()
                gotoAffiliate( url )
              }}>
                { meta_description }
              </div> 

              
              </DialogContent>

            <DialogActions className={ clsx( classes.actionBar ) } >

              <Grid container>

                <Grid item className={ clsx( classes.grow ) } />

                <Grid item>
                  <Button
                    size={ `large` }
                    color={ `secondary` }
                    variant={ `contained` }
                    onClick={ (e) => {
                      e.preventDefault()
                      gotoAffiliate( url )
                    }}>
                    Buy { numberSeeds } {strainType} seeds for €{ price }
                  </Button>
                </Grid>

                <Grid item className={ clsx( classes.grow ) } />

              </Grid>

            </DialogActions>
         </Dialog>
}

/*


<Grid item xs={12} md={ 6 } className={ clsx( classes.description ) }>
                    <Typography variant={ `body1` } gutterBottom>
                        { description }
                      </Typography>
                  </Grid>

<Typography variant={ `h6` } color={ `textSecondary` } gutterBottom>
                      { flowering_min }-{ flowering_max } Days
                    </Typography>
*/