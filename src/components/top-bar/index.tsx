import { Box, ListItem, ListItemButton, Typography } from "@mui/material";
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
      <ListItem>
        <ListItemButton onClick={() => navigate('/1')}>
          <Typography className={classes.root} variant="h3" >Button 1</Typography>
        </ListItemButton>
      </ListItem>
      <Box sx={{border: 1}}></Box>
      <ListItem>
        <ListItemButton onClick={() => navigate('/2')}>
            <Typography className={classes.root} variant="h3" >Button 2</Typography>
        </ListItemButton>
      </ListItem>
      <Box sx={{border: 1}}></Box>
      <ListItem>
        <ListItemButton onClick={() => navigate('/3')}>
            <Typography className={classes.root} variant="h3" >Button 3</Typography>
        </ListItemButton>
      </ListItem>
      <Box sx={{border: 1}}></Box>     
      <ListItem>
        <ListItemButton  onClick={() => navigate('/4')}>
            <Typography className={classes.root} variant="h3" >Button 4</Typography>
        </ListItemButton>
      </ListItem>
      <Box sx={{border: 1}}></Box>    
      <ListItem>
        <ListItemButton onClick={() => navigate('/5')}>
            <Typography className={classes.root} variant="h3" >Button 5</Typography>
        </ListItemButton>
      </ListItem>
      <Box sx={{border: 1}}></Box>
      <ListItem>
        <ListItemButton onClick={() => navigate('/6')}>
          <Typography className={classes.root} variant="h3" >Button 6</Typography>
        </ListItemButton>
      </ListItem>
      <Box sx={{border: 1}}></Box>
      <ListItem>
        <ListItemButton  onClick={() => navigate('/7')}>
            <Typography className={classes.root} variant="h3" >Button 7</Typography>
        </ListItemButton>
      </ListItem>
    </Box>
  )
}

export default TopBarComponent