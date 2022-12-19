import React, { useContext } from 'react'
import useStyles from '../Styles/sharedStyles'
import { Box, Card } from '@mui/material'
import CardHeader from './Common/CardHeader'
import { WeatherData } from './Main'

const Visibility = () => {
  const classes = useStyles()
  const weatherData = useContext(WeatherData)
  return (
    <>
      <Card className={classes.card}>
      <Box className={classes.cardParent}>
        <CardHeader text="Visibility" />
        <h3><span className={classes.cardBody}>{weatherData && weatherData.visibility}</span> m</h3>
        <h5 className={classes.cardFooter}>Average</h5>
      </Box>
      </Card>
    </>
  )
}

export default Visibility