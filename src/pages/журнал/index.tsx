import React, { useState, useEffect } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TextField, Button, Typography, useStepContext } from '@mui/material';
import { Box } from '@mui/system';
import DataLoaderDropdown from '../../components/dropMenu';
import { useStyles } from './styles';
import axios from 'axios';

function EditableTable() {
  const [rows, setRows] = useState([]);
  const [serial, setSerial] = useState({})
  const classes = useStyles();
  const [items, setItems] = useState()
  const handleSerial = (serialNum: any) => {
    setSerial(serialNum)
}

  // Получение данных с сервера при монтировании компонента
  useEffect(() => {
    console.log(serial)
    fetch(`https://jsonplaceholder.typicode.com/posts?id=${serial}`) // Укажите URL своего API
      .then((response) => response.json())
      .then((data) => setRows(data))
      .catch((error) => console.error('Ошибка при загрузке данных:', error));
  }, []);

  // Обработчик для изменения данных в ячейках
  const handleEdit = (event: any, rowIndex: any, column: any) => {
    const newData: any = [...rows];
    newData[rowIndex][column] = event.target.value;
    setRows(newData)
  };

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

  const loadData = () => {
    axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${serial}`) // Замените URL на адрес вашего API
        .then(response => {
            setRows(response.data); // Обновление состояния данными
        })
        .catch(error => {
            console.error('Ошибка при загрузке данных:', error);
        });
        console.log(rows)
};

  // Сохранение изменений на сервер
  const handleSubmit = async () => {
    try {
      const response = await fetch('', { //URL
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(rows),
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
    <Typography variant='h3' padding='10px' alignSelf='center'>Журнал</Typography>
    <Box className={classes.navItem}>
      <DataLoaderDropdown onSendData={handleSerial}/>
    </Box>
      <Paper>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell align='center'>Наблюдение</TableCell>
                <TableCell align='center'>Дата</TableCell>
                <TableCell align='center'>P, mB</TableCell>
                <TableCell align='center'>U, kV</TableCell>
                <TableCell align='center'>E, mJ</TableCell>
                <TableCell align='center'>Импульсы</TableCell>
                <TableCell align='center'>Частота</TableCell>
                <TableCell align='center'>Комментарий</TableCell>
                <TableCell align='center'>Заправка</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row: any, index) => (
                <TableRow key={row.id}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>
                    <TextField
                      value={row.userId}
                      onChange={(e) => handleEdit(e, index, '')}
                      size="small"
                      type='date'
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.id}
                      onChange={(e) => handleEdit(e, index, 'id')}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.title}
                      onChange={(e) => handleEdit(e, index, 'U, kV')}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.body}
                      onChange={(e) => handleEdit(e, index, 'E, mJ')}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.title}
                      onChange={(e) => handleEdit(e, index, 'Импульсы')}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.title}
                      onChange={(e) => handleEdit(e, index, 'Частота')}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.title}
                      onChange={(e) => handleEdit(e, index, 'Комментарий')}
                      size="small"
                    />
                  </TableCell>
                  <TableCell>
                    <TextField
                      value={row.title}
                      onChange={(e) => handleEdit(e, index, 'Заправка')}
                      size="small"
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <Box className={classes.navItem}>
        <Button variant="contained" fullWidth onClick={loadData}>Загрузить из БД</Button>
        <Button variant="contained" fullWidth onClick={handleSubmit}>Сохранить в БД</Button>
      </Box>
    </Box>
  );
}

export default EditableTable;
