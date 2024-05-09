import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useStyles } from './styles';
import DataLoaderDropdown from '../../components/dropMenu';


const Page1 = ()=> {
  
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [serial, setSerial] = useState({})
  const [formData, setFormData] = useState({
    'Время работы без изменения интенсивности': '', //result[0].serialNumber
    'Напряжение': '',
    'Общая наработка лазера Не': '',
    'Общее число заправок Не': '',
    'Динамический ресурс в режиме стабилизаци': '',
    'Энергия стабилизации': '',
    'Общая наработка лазера РС': '',
    'Общее число заправок РС': '',
  });
  
  const handleSerial = (serialNum: any) => {
      setSerial(serialNum)
  }

  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts'); //URL
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            setItems(data);
        } catch (error) {
            console.error('There was a problem with fetch operation:', error);
        }
    };
    fetchData();
  }, []);

  const handleDateChange = (e: any) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const fetchData = async () => {
    try { 
      const response = await fetch (`https://jsonplaceholder.typicode.com/posts?id=${serial}`) //url
      if (!response.ok) {
        console.error('Something went wrong')
      }
      const result = await response.json();
      setFormData({
        'Время работы без изменения интенсивности': result[0].title, //result[0].serialNumber
        'Напряжение': result[0].title,
        'Общая наработка лазера Не': result[0].body,
        'Общее число заправок Не': result[0].passivationStart,
        'Динамический ресурс в режиме стабилизаци': result[0].passivationStart,
        'Энергия стабилизации': result[0].stabenergy,
        'Общая наработка лазера РС': result[0].workTimeRS,
        'Общее число заправок РС': result[0].refielCountRS,
      })
    } catch (error) { 
      console.error('Error sending data:', error)
    }
  }

  const handleSubmit = async () => {
    try {
      const response = await fetch('', { //URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
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

  return (
    <Box className={classes.root}>
      <Typography variant='h3' padding='10px' alignSelf='center'>Калибровка</Typography>
      <Box className={classes.navItem}>
        <DataLoaderDropdown onSendData={handleSerial}/>
      </Box>
      <Box className={classes.navItem}>
        <Typography>Ресурсные характеристики (HeF2)</Typography>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='300px' alignContent='center'>Время работы без изменения интенсивности</Typography>
        <TextField name='Время работы без изменения интенсивности' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Время работы без изменения интенсивности']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='300px' alignContent='center'>Напряжение</Typography>
        <TextField name='Напряжение' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Напряжение']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='300px' alignContent='center'>Общая наработка лазера</Typography>
        <TextField name='Общая наработка лазера Не' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Общая наработка лазера Не']} onChange={handleDateChange}></TextField>        
      </Box>
      <Box className={classes.navItem}>
        <Typography width='300px' alignContent='center'>Общее число заправок</Typography>
        <TextField name='Общее число заправок Не' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Общее число заправок Не']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Typography>Ресурсные характеристики ("рабочая смесь")</Typography>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='300px' alignContent='center'>Динамический ресурс в режиме стабилизации</Typography>
        <TextField name='Динамический ресурс в режиме стабилизаци' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Динамический ресурс в режиме стабилизаци']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='300px' alignContent='center'>Энергия стабилизации</Typography>
        <TextField name='Энергия стабилизации' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Энергия стабилизации']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='300px' alignContent='center'>Общая наработка лазера</Typography>
        <TextField name='Общая наработка лазера РС' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Общая наработка лазера РС']} onChange={handleDateChange}></TextField>        
      </Box>
      <Box className={classes.navItem}>
        <Typography width='300px' alignContent='center'>Общее число заправок</Typography>
        <TextField name='Общее число заправок РС' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Общее число заправок РС']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Button variant="contained" fullWidth onClick={fetchData}>Загрузить из БД</Button>
        <Button variant="contained" fullWidth onClick={handleSubmit}>Сохранить в БД</Button>
      </Box>
    </Box>
  );
};

export default Page1;