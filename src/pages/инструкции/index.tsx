import React, { useEffect, useState } from 'react';
import { Box, Button, TextField, Typography } from '@mui/material';
import { useStyles } from './styles';
import DataLoaderDropdown from '../../components/dropMenu';
import DownloadButton from '../../components/downloadButton';


const Page1 = ()=> {
  
  const classes = useStyles();
  const [items, setItems] = useState([]);
  const [serial, setSerial] = useState({})
  const [formData, setFormData] = useState({
    'Генератор водорода': '',
    'Накал катода': '',
    'ШкалаИП': '',
    'Шкала': '',
    'Смещение': '',
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
        'Генератор водорода': result[0].title, //result[0].serialNumber
        'Накал катода': result[0].title,
        'ШкалаИП': result[0].body,
        'Шкала': result[0].passivationStart,
        'Смещение': result[0].passivationStart,
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
      <Typography variant='h3' padding='10px'>Инструкции</Typography>
      <Box className={classes.navItem}>
        <DownloadButton 
          url={'https://example.com/path/to/your/file.pdf'} 
          filename={'Chamber_Prepare.pdf'} 
          text={'Подготовка разрядной камеры'} />
        <DownloadButton 
          url={'https://example.com/path/to/your/file.pdf'} 
          filename={'Calibrate.pdf'} 
          text={'Калибровка'} />
      </Box>
      <Box className={classes.navItem}>
        <DownloadButton 
          url={'https://example.com/path/to/your/file.pdf'} 
          filename={'Chamber_Prepare.pdf'} 
          text={'Пассивация (HeF2)'} />
        <DownloadButton 
          url={'https://example.com/path/to/your/file.pdf'} 
          filename={'Calibrate.pdf'} 
          text={'Пассивация (Рабочая смесь)'} /> 
      </Box>
      <Box className={classes.navItem}>
        <DownloadButton 
          url={'https://example.com/path/to/your/file.pdf'} 
          filename={'Chamber_Prepare.pdf'} 
          text={'Учет и анализ данных'} />
        <DownloadButton 
          url={'https://example.com/path/to/your/file.pdf'} 
          filename={'Calibrate.pdf'} 
          text={'Приготовление премикса'} /> 
      </Box>
    </Box>
  );
};

export default Page1;