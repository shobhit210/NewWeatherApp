import React, { useContext } from 'react'
import useStyles from '../Styles/sharedStyles'
import { Card, Box } from '@mui/material'
import CardHeader from './Common/CardHeader'
import { WeatherData } from './Main'
import { RiWindyLine } from 'react-icons/ri'

const WindStatus = () => {
  const classes = useStyles()
  const weatherData = useContext(WeatherData)
  return (
    <>
      <Card className={classes.card}>
        <Box className={classes.cardParent}>
          <CardHeader text="Wind Status" />
          <h3><span className={classes.cardBody}>{weatherData && weatherData.wind && weatherData.wind.speed}</span> km/h</h3>
          <h5 className={classes.cardFooter}>Normal</h5>
          <Box sx={{width: '100%', display: 'flex', justifyContent: 'space-evenly'}}>
            <RiWindyLine size="35px" color="orange" />
            <RiWindyLine size="35px" color="orange" />
            <RiWindyLine size="35px" color="orange" />
          </Box>
        </Box>
      </Card>
    </>
  )
}

export default WindStatus