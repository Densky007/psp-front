import React from 'react';
import { TextField, Button, Typography } from "@mui/material";
import { IPropsLogin } from '../../../common/types/auth';

const LoginPage: React.FC<IPropsLogin> = (props: IPropsLogin): JSX.Element => {
  const { navigate, register, errors } = props
  return (
    <>
      <Typography variant="h2" margin='normal' fontFamily='Poppins' textAlign='center'>Авторизация</Typography>
      <Typography variant="body1" margin='normal' fontFamily='Poppins' textAlign='center'>Введите Ваш логин и пароль</Typography>
      <TextField
        error={!!errors.email} 
        fullWidth={true} 
        margin='normal' 
        label="Логин" 
        variant="outlined" 
        placeholder="Введите email" 
        helperText={errors.email ? 'Введите ваш email' : ''}
        {...register('email')}
        />
      <TextField
        error={!!errors.password}  
        type="password" 
        fullWidth={true} 
        margin='normal' 
        label="Пароль" 
        variant="outlined" 
        placeholder="Введите пароль"
        helperText={errors.password ? 'Пароль должен быть минимум из 6 символов' : ''} 
        {...register('password')}
        />
      <Button type="submit" sx={{fontFamily:'Poppins', margin: 2, width: '60%'}} variant="contained">Войти</Button>
      <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>Нет аккаунта? <span className='incitingText' onClick={() => navigate('/register')}>Регистрация</span></Typography>
    </>
  );
};

export default LoginPage;