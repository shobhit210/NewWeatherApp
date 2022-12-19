import React, { useState, createContext } from 'react'
import { Box, Grid } from '@mui/material'
import useStyles from '../Styles/sharedStyles'
import Humidity from './Humidity'
import Pressure from './Pressure'
import SunriseSunset from './SunriseSunset'
import Temperature from './Temperature'
import Visibility from './Visibility'
import WindStatus from './WindStatus'

const WeatherData = createContext()

const Main = ({weatherData}) => {

    const classes = useStyles()
    const day = new Date().getDay()
    const presentDay = (day === 0) ? 'Sunday'
        : (day === 1) ? 'Monday'
            : (day === 2) ? 'Tuesday'
                : (day === 3) ? 'Wednesday'
                    : (day === 4) ? 'Thursday'
                        : (day === 5) ? 'Friday'
                            : 'Saturday'


    const [time, setTime] = useState()
    const getTime = () => {
        const currTime = new Date().toLocaleTimeString();
        setTime(currTime)
    }
    setInterval(getTime, 1000);

    return (
        <Box className={classes.mainParent}>
        
            <Box className={classes.header}>
                <h2>Today's Highlights</h2>
                <h3>{presentDay}, {time}</h3>
            </Box>

            <WeatherData.Provider value={weatherData}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={4}>
                        <SunriseSunset />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <WindStatus />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Temperature />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Visibility />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Humidity />
                    </Grid>
                    <Grid item xs={12} md={4}>
                        <Pressure />
                    </Grid>
                </Grid>
            </WeatherData.Provider>
        </Box>
    )
}

export default Main
export {WeatherData}