import React, { useState, useEffect } from 'react';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

function  DataLoaderDropdown ({onSendData} : {onSendData: any}) {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState('');
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
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
            setLoading(false);
        };
        fetchData();
    }, []);

    const handleChange = (e: any) => {
        setSelectedItem(e.target.value);
        onSendData(e.target.value)
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Серийный номер</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                value={selectedItem}
                label='Серийный номер'
                onChange={handleChange}
                disabled={loading}
                size='small'
            >
                {items.map((items: any) => (
                    <MenuItem key={items.id} value={items.id}>
                        {items.title}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

export default DataLoaderDropdown;