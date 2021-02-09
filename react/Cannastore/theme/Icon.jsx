import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Cannastore from './jsx/Cannastore'

import IconPrivacy from '@material-ui/icons/Security'

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
                return <Cannastore className={classes.iconButton} color={iconColor} />

            case `privacy`:
                return (<IconPrivacy color={iconColor} />)
   
            default: {
                return ( null )
            }
        }
    }
}

export default (
    withStyles(styles, { withTheme: true })(Icon)
)
