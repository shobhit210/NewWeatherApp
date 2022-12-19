import { Box } from '@mui/material'
import React, { useState } from 'react'
import Main from './Main'
import Sidebar from './Sidebar'
import useStyles from '../Styles/sharedStyles'

const Dashboard = () => {
  const classes = useStyles()
  const [weatherData, setWeatherData] = useState('')
  return (
    <Box className={classes.appParent}>
      <Box className={classes.sidebarBox}>
        <Sidebar setWeatherData={setWeatherData}/>
      </Box>
      <Main weatherData={weatherData}/>
    </Box>
  )
}

export default Dashboard