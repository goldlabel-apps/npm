import React from "react"
import {
    makeStyles,
} from '@material-ui/core/'
import mapboxgl from 'mapbox-gl'
import '../theme/mapbox-gl.css'

const useStyles = makeStyles(theme => ({
    card: {
        border: "none",
        boxShadow: "none",
        background: "none"
    },
    map: {
        height: 200,
    }
}))

export default function Mapbox(props) {

    const {
        lat, 
        lng,
    } = props
    
    if (!lat || !lng) return null

    const classes = useStyles()
    const [map, setMap] = React.useState( null )
    const mapContainer = React.useRef( null )

    React.useEffect(() => {
        mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_KEY
        const initializeMap = ({ setMap, mapContainer }) => {
            
            const map = new mapboxgl.Map({
                container: mapContainer.current,
                style: process.env.REACT_APP_MAPBOX_STYLE,
                center: [lng, lat],
                zoom: 10
            })
            map.on(`load`, (e) => {
                setMap(map)
                map.resize()
                map.addControl( new mapboxgl.NavigationControl() )
            })
        }
        if (!map) initializeMap({ 
            setMap, 
            mapContainer 
        })
    }, [map, lat, lng])

    return (
        <div className={classes.card}>
            <div
                className={classes.map}
                ref={ el => ( mapContainer.current = el ) }
            />
        </div>
    )
}
