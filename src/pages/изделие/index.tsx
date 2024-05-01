import React, { useEffect, useState } from 'react';
import { useAppDispatch } from '../../utils/hook';
import { getProduct } from '../../store/thunk/assets';
import { Box, Button, IconButton, InputBase, TextField, Typography } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useStyles } from "./styles";

const Page1 = () => {
  
  const dispatch = useAppDispatch()
  const classes = useStyles()

  const [formData, setFormData] = useState({
    'Серийный номер': '',
    'Дата производства': '',
    'Дата начала сборки': '',
    'Дата начала пассивации': '',
    'Дата окончания пассивации': ''
  })

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

const handleSubmit = async () => {
    try {
      const response = await fetch('', { //URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(formData)
      if (response.ok) {
        const result = await response.json();
        console.log('Data sent successfully:', result);
      } else {
        console.error('Failed to send data:', response.status);
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };


  useEffect (() => {
    dispatch(getProduct('')) //запрос изделия
  }, [])

  return (
    <Box className={classes.root}>
      <Typography variant='h3' padding='10px'>Изделие</Typography>
      <Box className={classes.navItem}>
        <Box display='flex' flexDirection='row' width='100%'>
          <IconButton>
            <SearchIcon />
          </IconButton>
          <InputBase size='small' placeholder="Поиск изделия" fullWidth/>
        </Box>
        <TextField label='Серийный номер'  size='small' disabled fullWidth InputLabelProps={{ shrink: true }}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <TextField name='Дата производства' label='Дата производства' type='date' size='small' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата производства']} onChange={handleChange}></TextField>
        <TextField name='Дата начала сборки' label='Дата начала сборки' type='date' size='small' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата производства']} onChange={handleChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <TextField name='Дата начала пассивации' label='Дата начала пассивации' type='date' size='small' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата производства']} onChange={handleChange}></TextField>
        <TextField name='Дата окончания пассивации' label='Дата окончания пассивации' type='date' size='small' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата производства']} onChange={handleChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Button variant="contained" fullWidth>Загрузить из БД</Button>
        <Button variant="contained" fullWidth onClick={handleSubmit}>Сохранить в БД</Button>
      </Box>
    </Box>
  );
};

export default Page1;