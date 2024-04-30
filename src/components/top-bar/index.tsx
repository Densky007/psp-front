import { Box, Button, ListItem } from "@mui/material";
import { useEffect, useState } from "react";
import { useStyles } from "./styles";
import { useLocation } from "react-router-dom";

const TopBarComponent = () => {
  const [active, setActive] = useState('')
  const classes = useStyles()
  const {pathname} = useLocation()

  useEffect(() => {
    setActive(pathname.substring(1))
  }, [pathname])

  return (
    <Box className={classes.root}>
      <ListItem>
        <Button variant="contained" fullWidth size="large" href="/1">Изделие</Button>
      </ListItem>
      <ListItem>
        <Button variant="contained" fullWidth size="large" href="/2">Вакуум и печь</Button>
      </ListItem>
      <ListItem>
        <Button variant="contained" fullWidth size="large" href="/3">Калибровка</Button>
      </ListItem>    
      <ListItem>
        <Button variant="contained" fullWidth size="large" href="/4">Пассивация</Button>
      </ListItem>  
      <ListItem>
        <Button variant="contained" fullWidth size="large" href="/5">Журнал</Button>
      </ListItem>
      <ListItem>
        <Button variant="contained" fullWidth size="large" href="/6">Инструкция</Button>
      </ListItem>
      <ListItem>
        <Button variant="contained" fullWidth size="large" href="/login">Выход</Button>
      </ListItem>
    </Box>
  )
}

export default TopBarComponent