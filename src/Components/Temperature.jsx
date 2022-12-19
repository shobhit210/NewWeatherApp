import React, { useContext } from 'react'
import useStyles from '../Styles/sharedStyles'
import { Box, Card, IconButton } from '@mui/material'
import CardHeader from './Common/CardHeader'
import { WeatherData } from './Main'
import { BiUpArrowCircle, BiDownArrowCircle } from 'react-icons/bi'

const Temperature = () => {
    const classes = useStyles()
    const weatherData = useContext(WeatherData)
    return (
        <>
            <Card className={classes.card}>
                <CardHeader text="Temperature" />

                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton disabled={true}>
                        <BiUpArrowCircle size="50px" color="orange" />
                    </IconButton>
                    <p>{(weatherData && weatherData.main && weatherData.main.temp_max) || `---`}</p>
                </Box>
                <br />
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton disabled={true}>
                        <BiDownArrowCircle size="50px" color="orange" />
                    </IconButton>
                    <p>{(weatherData && weatherData.main && weatherData.main.temp_min) || `---`}</p>
                </Box>
            </Card>
        </>
    )
}

export default Temperature