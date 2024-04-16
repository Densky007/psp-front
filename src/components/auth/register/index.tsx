import React from 'react';
import { TextField, Button, Typography } from "@mui/material";
import { IPropsRegister } from '../../../common/types/auth';

const RegisterPage: React.FC<IPropsRegister> = (props: IPropsRegister): JSX.Element => {
  const { navigate, register, errors } = props
  return (
      <>
      <Typography variant="h2" margin='normal' fontFamily='Poppins' textAlign='center'>Регистрация</Typography>
      <Typography variant="body1" margin='normal' fontFamily='Poppins' textAlign='center'>Введите данные для регистрации</Typography>
      <TextField
        type='email'
        error={!!errors.email} 
        fullWidth={true} 
        margin='normal' 
        label="Email" 
        variant="outlined" 
        placeholder="Введите email"
        helperText={errors.email ? `${errors.email.message}` : ''}
        {...register('email',{
          required: 'Введите корректный email'
        })}
        />
      <TextField 
        error={!!errors.password} 
        type="password" 
        fullWidth={true} 
        margin='normal' 
        label="Пароль" 
        variant="outlined" 
        placeholder="Введите пароль"
        helperText={errors.password ? `${errors.password.message}` : ''} 
        {...register('password', {
          required: 'Введите пароль, состоящий минимум из 6 символов',
          minLength: 6
        })}
        />
      <TextField 
        error={!!errors.repeatPassword} 
        type="password" 
        fullWidth={true} 
        margin='normal' 
        label="Пароль" 
        variant="outlined" 
        placeholder="Повторите пароль"
        helperText={errors.repeatPassword ? `${errors.repeatPassword.message}` : ''} 
        {...register('repeatPassword', {
          required: 'Повторите пароль',
          minLength: 6
        })} 
        />
      <Button type='submit' sx={{fontFamily:'Poppins', margin: 2, width: '60%'}} variant="contained">Регистрация</Button>
      <Typography variant="body1" sx={{fontFamily: 'Poppins'}}>У вас уже есть аккаунт? <span className='incitingText' onClick={() => navigate('/login')}>Авторизация</span></Typography>
    </>
  );
};

export default RegisterPage