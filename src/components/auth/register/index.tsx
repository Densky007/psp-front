import React from 'react';
import { Link } from "react-router-dom"
import { TextField, Button, Typography } from "@mui/material";

const RegisterPage = () => {
    return (
        <>
        <Typography variant="h2" margin='normal' fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
        <Typography variant="body1" margin='normal' fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
        <TextField fullWidth={true} margin='normal' label="Логин" variant="outlined" placeholder="Введите логин"/>
        <TextField type="password" fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder="Введите пароль"/>
        <TextField type="password" fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder="Повторите пароль"/>
        <Button sx={{fontFamily:'Poppins', margin: 2, width: '60%'}} variant="contained">Регистрация</Button>
        <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>У вас есть аккаунт? <Link to='../login'>Авторизация</Link></Typography>
      </>
    );
};

export default RegisterPage