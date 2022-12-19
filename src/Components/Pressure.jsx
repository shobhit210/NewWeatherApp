import React, { useContext } from 'react'
import useStyles from '../Styles/sharedStyles'
import { Box, Card } from '@mui/material'
import CardHeader from './Common/CardHeader'
import { WeatherData } from './Main'
import { WiBarometer } from 'react-icons/wi'

const Pressure = () => {
    const classes = useStyles()
    const weatherData = useContext(WeatherData)
    return (
        <>
            <Card className={classes.card}>
                <Box className={classes.cardParent}>
                    <CardHeader text="Pressure" />
                    <h3><span className={classes.cardBody}>{weatherData && weatherData.main && weatherData.main.pressure}</span> bar</h3>
                    <h5 className={classes.cardFooter}>Normal</h5>
                    <Box sx={{ position: 'absolute', top: '20%', right: '30px' }}>
                        <WiBarometer fontSize='120px' color='#71d8ef' />
                    </Box>
                </Box>
            </Card>
        </>
    )
}

export default Pressure