import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { 
    CannastoreLogo,
    Close, 
} from './jsx/'

import Sensiseeds from './jsx/Sensiseeds'
import IconPrivacy from '@material-ui/icons/Security'
import IconFullscreen from '@material-ui/icons/Fullscreen'
import IconSearch from '@material-ui/icons/Search'
import IconCart from '@material-ui/icons/ShoppingCart'
import IconLeft from '@material-ui/icons/ArrowLeft'


const styles = theme => ({
    iconButton: {
        width: 24,
        height: 24,
    },
    white: {
        color: 'white',
    }
})

class Icon extends Component {

    render() {
        const {
            icon,
            color,
            classes,
        } = this.props
        let iconColor = `inherit`
        if (color) {
            iconColor = color
        }
        switch (icon) {

            case `none`:
                return null

            case 'cannastore': 
                return <CannastoreLogo className={classes.iconButton} color={ iconColor } />

            case 'sensiseeds': 
                return <Sensiseeds className={classes.iconButton} color={ iconColor } />

            case `fullscreen`:
                return (<IconFullscreen color={ iconColor } />)

            case `search`:
                return (<IconSearch color={ iconColor } />)

            case `cart`:
                return (<IconCart color={ iconColor } />)
                

            case `privacy`:
                return (<IconPrivacy color={ iconColor}  />)

            case `left`:
                return (<IconLeft color={ iconColor}  />)

            case `close`:
                return (<Close className={classes.iconButton} color={ iconColor }  />)
   
            default: {
                return ( null )
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
)
