import React, { useContext } from 'react'
import useStyles from '../Styles/sharedStyles'
import { Card, Box } from '@mui/material'
import CardHeader from './Common/CardHeader'
import { WeatherData } from './Main'
import { WiHumidity } from 'react-icons/wi'

const Humidity = () => {
  const classes = useStyles()
  const weatherData = useContext(WeatherData)
  return (
    <>
      <Card className={classes.card}>
        <Box className={classes.cardParent}>
          <CardHeader text="Humidity" />
          <h3><span className={classes.cardBody}>{weatherData && weatherData.main && weatherData.main.humidity}</span> %</h3>
          <h5 className={classes.cardFooter}>Normal</h5>
        </Box>
        <Box sx={{position: 'absolute', top: '20%', right: '50px'}}>
          <WiHumidity fontSize='120px' color='#71d8ef' />
        </Box>
      </Card>
    </>
  )
}

export default Humidity