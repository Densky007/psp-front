import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useStyles } from "./styles";
import DataLoaderDropdown from '../../components/dropMenu';


const Page6 = ()=> {
  
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [serial, setSerial] = useState({})
  const [formData, setFormData] = useState({
    'Серийный номер': '',
    'Дата производства': '',
    'Дата начала сборки': '',
    'Дата начала пассивации': '',
    'Дата окончания пассивации': '',
  });
  const [imageUrl, setImageUrl] = useState('')
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
      const responseUrl = await fetch(`https://jsonplaceholder.typicode.com/albums/1/photos?id=${serial}`)
      if (!response.ok) {
        console.error('Something went wrong')
      }
      const result = await response.json();
      setFormData({
        'Серийный номер': result[0].title, //result[0].serialNumber
        'Дата производства': result[0].productionDate,
        'Дата начала сборки': result[0].assembleDate,
        'Дата начала пассивации': result[0].passivationStart,
        'Дата окончания пассивации': result[0].passivationEnd
      })
      const resultUrl = await responseUrl.json()
      setImageUrl(resultUrl[0].url)
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
      <Typography variant='h3' padding='10px' alignSelf='center'>Изделие</Typography>
      <Box className={classes.navItem}>
        <DataLoaderDropdown onSendData={handleSerial}/>
        <TextField name='Серийный номер' label='Серийный номер' type='text' fullWidth InputLabelProps={{ shrink: true }} value={formData['Серийный номер']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <TextField name='Дата производства' label='Дата производства' type='date' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата производства']} onChange={handleDateChange}></TextField>
        <TextField name='Дата начала сборки' label='Дата начала сборки' type='date' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата начала сборки']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <TextField name='Дата начала пассивации' label='Дата начала пассивации' type='date' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата начала пассивации']} onChange={handleDateChange}></TextField>
        <TextField name='Дата окончания пассивации' label='Дата окончания пассивации' type='date' fullWidth InputLabelProps={{ shrink: true }} value={formData['Дата окончания пассивации']} onChange={handleDateChange}></TextField>
      </Box>
      <Box className={classes.navItem}>
        <Button variant="contained" fullWidth onClick={fetchData}>Загрузить из БД</Button>
        <Button variant="contained" fullWidth onClick={handleSubmit}>Сохранить в БД</Button>
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        {/* <img src={imageUrl}/> */}
      </Box>
      <Box sx={{display: 'flex', justifyContent: 'space-evenly'}}>
        {/* <input type="file" accept='image/*'/> */}
      </Box>
    </Box>
  );
};

export default Page6;