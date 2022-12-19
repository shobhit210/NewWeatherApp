import { Avatar, Box, Button, InputAdornment, TextField } from '@mui/material'
import React, { useState } from 'react'
import useStyles from '../Styles/sharedStyles'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import axios from 'axios';
import sideImage from '../images/side_img.webp'

const Sidebar = ({ setWeatherData }) => {
  const classes = useStyles()
  const [location, setLocation] = useState('')
  const [weatherDetails, setWeatherDetails] = useState('')

  const handleLocationChange = (e) => {
    setLocation(e.target.value)
  }

  const fetchCityWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=585212d9807bccd7476fabd764cebead`)
      .then(resp => {
        setWeatherData(resp.data)
        setWeatherDetails(resp.data)
      })
  }

  return (
    <Box className={classes.sidebarParent}>

      <TextField
        variant="outlined"
        name="location"
        fullWidth
        autoFocus={true}
        size="small"
        value={location}
        onChange={handleLocationChange}
        placeholder="Search for places"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon />
            </InputAdornment>
          ),
        }}
      />

      <Box className={classes.submitButtonParent} sx={{mt:3}}>
        <Button variant="contained" className={classes.submitButton} onClick={fetchCityWeather}>Get Details</Button>
      </Box>

      <Box sx={{ mt: 5, mb: 5 }}>
        <Avatar
          alt="weather img"
          variant="square"
          src={sideImage}
          sx={{ width: '100%', height: '35vh' }}
        />
      </Box>

      <Box sx={{ mb: 5 }}>
        <h3 style={{ fontSize: '25px' }}><span style={{ fontSize: '65px' }}>{(weatherDetails && weatherDetails.main && weatherDetails.main.temp) || `--`}</span> K</h3>
      </Box>

      <hr />

      <Box sx={{ mt: 3 }}>
        <h5 style={{ padding: '10px' }}>Sea Level: {(weatherDetails && weatherDetails.main && weatherDetails.main.sea_level) || `--`}</h5>
        <h5 style={{ padding: '10px' }}>Ground Level: {(weatherDetails && weatherDetails.main && weatherDetails.main.grnd_level) || `--`}</h5>
      </Box>

    </Box>
  )
}

export default Sidebar