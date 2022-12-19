import { Card, IconButton, Box } from '@mui/material'
import React, { useContext } from 'react'
import useStyles from '../Styles/sharedStyles'
import CardHeader from './Common/CardHeader'
import { WeatherData } from './Main'
import { BsSunriseFill, BsSunsetFill } from 'react-icons/bs'

const SunriseSunset = () => {
  const classes = useStyles()
  const weatherData = useContext(WeatherData)
  return (
    <>
      <Card className={classes.card}>
        <CardHeader text="Sunrise & Sunset" />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton disabled={true}>
            <BsSunriseFill size="50px" color="orange" />
          </IconButton>
          <p>{(weatherData && weatherData.sys && weatherData.sys.sunrise) || `---`}</p>
        </Box>
        <br />
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <IconButton disabled={true}>
            <BsSunsetFill size="50px" color="orange" />
          </IconButton>
          <p>{(weatherData && weatherData.sys && weatherData.sys.sunset) || `---`}</p>
        </Box>
      </Card>
    </>
  )
}

export default SunriseSunset