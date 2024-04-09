import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.css'
import { Box } from '@mui/system';
import { instance } from '../../utils/axios/intex';


const AuthRootComponent = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('') 
  const location = useLocation()

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    const userData = {
      login,
      password
    }
    const user = await instance.post(url: '#', userData)
    console.log(user.data)
  }

  return (
    <div className='root'>
      <form className="form" onSubmit={handleSubmit}>
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
          {location.pathname === '/login' ? <LoginPage setLogin={setLogin} setPassword={setPassword}/> : location.pathname === '/register' ? <RegisterPage /> : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;