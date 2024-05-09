import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useStyles } from './styles';
import DataLoaderDropdown from '../../components/dropMenu';


const Page3 = ()=> {
  
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [serial, setSerial] = useState({})
  const [formData, setFormData] = useState({
    'Дата начала откачки': '',
    'Скорость натекания': '',
    'Время в печи': '',
    'Дата окончания процесса откачки': '',
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
        'Дата начала откачки': result[0].title, //result[0].serialNumber
        'Скорость натекания': result[0].title,
        'Время в печи': result[0].body,
        'Дата окончания процесса откачки': result[0].passivationStart,
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
      <Typography variant='h3' padding='10px' alignSelf='center'>Вакуум и печь</Typography>
      <Box className={classes.navItem}>
        <DataLoaderDropdown onSendData={handleSerial}/>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='200px'>Дата начала откачки</Typography>
        <TextField name='Дата начала откачки' type='date' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата начала откачки']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='200px'>Скорость натекания</Typography>
        <TextField name='Скорость натекания' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Скорость натекания']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='200px'>Время в печи</Typography>
        <TextField name='Время в печи' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Время в печи']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Typography width='200px'>Дата окончания процесса откачки</Typography>
        <TextField name='Дата окончания процесса откачки' type='date' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата окончания процесса откачки']} onChange={handleDateChange}></TextField>      
      </Box>

      <Box className={classes.navItem}>
        <Button variant="contained" fullWidth onClick={fetchData}>Загрузить из БД</Button>
        <Button variant="contained" fullWidth onClick={handleSubmit}>Сохранить в БД</Button>
      </Box>
    </Box>
  );
};

export default Page3;