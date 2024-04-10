import React from 'react';
import { Link } from "react-router-dom"
import { TextField, Button, Typography } from "@mui/material";
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { setLogin, setPassword, setRepeatPassword } = props 
    return (
        <>
        <Typography variant="h2" margin='normal' fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
        <Typography variant="body1" margin='normal' fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
        <TextField fullWidth={true} margin='normal' label="Логин" variant="outlined" placeholder="Введите логин" onChange={(e) => setLogin(e.target.value)}/>
        <TextField type="password" fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder="Введите пароль" onChange={(e) => setPassword(e.target.value)}/>
        <TextField type="password" fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder="Повторите пароль" onChange={(e) => setRepeatPassword(e.target.value)}/>
        <Button type='submit' sx={{fontFamily:'Poppins', margin: 2, width: '60%'}} variant="contained">Регистрация</Button>
        <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>У вас уже есть аккаунт? <Link to='../login'>Авторизация</Link></Typography>
      </>
    );
};

export default RegisterPage