import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.css'
import { Box } from '@mui/system';
import { useAppDispatch } from '../../utils/hook';
import { useForm } from 'react-hook-form';
import { loginUser, registerUser } from '../../store/thunk/auth';

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
        await dispatch(loginUser(data))
        console.log(data)
        navigate('/1')
      }catch (e){
        return e
      }
    } else {
        try {
          if (data.password === data.repeatPassword) {
          await dispatch(registerUser(data))
          console.log(data)
          navigate('/1')
          } else {
            alert('Пароли не совпадают')
          }
        }catch (e) {
          return e
        }
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