import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.css'
import { Box } from '@mui/system';
import { instance } from '../../utils/axios/intex';
import { useAppDispatch } from '../../utils/hook';
import { AppErrors } from '../../common/errors';
import { useForm } from 'react-hook-form';
import { TextField } from '@mui/material';

const AuthRootComponent: React.FC = (): JSX.Element => {
  const location = useLocation()
  const dispatch = useAppDispatch()
  const navigate = useNavigate()

  const {
    register,
    formState: {
      errors
    }, handleSubmit
  } = useForm()

  const handleSubmitForm = async (data: any) => {
    if(location.pathname === '/login') {
      try{
        const userData = {
          email: data.email,
          password: data.password
        }
        //const user = await instance.post ('auth/login', userData) //url запроса к бэку
        //await dispatch(user.data)
        console.log(data)
        navigate('/1')
      }catch (e){
        return e
      }
    } else {
        //if(data.password === data.repeatPassword) {
          try {
            const userData = {
              email: data.email,
              password: data.password
            }
            if (data.password === data.repeatPassword) {
            //const newUser = await instance.post ('auth/register', userData) //url запроса к бэку
            //await dispatch(newUser.data)
            navigate('/1')
            } else {
              alert('Пароли не совпадают')
            }
            console.log(data)
          }catch (e) {
            return e
          }
        //} else {
          //throw new Error(AppErrors.PasswordDoNotMatch)
        //}
    }
  }

  return (
    <div className='root'>
      <form className="form" onSubmit={handleSubmit(handleSubmitForm)}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          flexDirection='column'
          maxWidth={640}
          margin='auto'
          padding={5}
          borderRadius={5}
          boxShadow={'5px 5px 10px #ccc'}
        >
          {location.pathname === '/login' 
            ? <LoginPage 
              navigate={navigate} 
              register={register}
              errors={errors}
            /> : location.pathname === '/register' 
              ? <RegisterPage 
                navigate={navigate}
                register={register}
                errors={errors}
              /> : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;