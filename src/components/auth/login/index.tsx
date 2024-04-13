import React, { Fragment } from 'react';
import { TextField, Button, Typography } from "@mui/material";
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { setEmail, setPassword, navigate } = props
  return (
    <>
      <Typography variant="h2" margin='normal' fontFamily='Poppins' textAlign='center'>Авторизация</Typography>
      <Typography variant="body1" margin='normal' fontFamily='Poppins' textAlign='center'>Введите Ваш логин и пароль</Typography>
      <TextField fullWidth={true} margin='normal' label="Логин" variant="outlined" placeholder="Введите email" onChange={(e) => setEmail(e.target.value)} />
      <TextField type="password" fullWidth={true} margin='normal' label="Пароль" variant="outlined" placeholder="Введите пароль" onChange={(e) => setPassword(e.target.value)} />
      <Button type="submit" sx={{fontFamily:'Poppins', margin: 2, width: '60%'}} variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>Нет аккаунта? <span className='incitingText' onClick={() => navigate('/register')}>Регистрация</span></Typography>
    </>
  );
};

export default LoginPage;