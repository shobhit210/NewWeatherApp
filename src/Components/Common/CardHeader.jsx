import React from 'react'
import useStyles from '../../Styles/sharedStyles'

const CardHeader = ({ text }) => {
    const classes = useStyles()
    return (
        <>
            <h3 className={classes.cardHeaderText}>{text}</h3>
        </>
    )
}

export default CardHeader