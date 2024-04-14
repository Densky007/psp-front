import { Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { useLocation, useNavigate } from "react-router-dom";

const TopBarComponent = () => {
  const [active, setActive] = useState('')
  const classes = useStyles()
  const {pathname} = useLocation()
  const navigate = useNavigate()

  useEffect(() => {
    setActive(pathname.substring(1))
  }, [pathname]) 

  return (
    <Box component='nav' display='flex' justifyContent='space-between'>
      <Typography className={classes.root} variant="h3">Button 1</Typography>
      <Typography variant="h3">Button 2</Typography>
      <Typography variant="h3">Button 3</Typography>
      <Typography variant="h3">Button 4</Typography>
      <Typography variant="h3">Button 5</Typography>
      <Typography variant="h3">Button 6</Typography>
      <Typography variant="h3">Button 7</Typography>
    </Box>
  )
}

export default TopBarComponent