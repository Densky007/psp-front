import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import LoginPage from './login';
import RegisterPage from './register';
import './style.css'
import { Box } from '@mui/system';
import { instance } from '../../utils/axios/intex';


const AuthRootComponent: React.FC = (): JSX.Element => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('') 
  const location = useLocation()

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault()
    if(location.pathname === '/login') {
      const userData = {
        login,
        password
      }
      const user = await instance.post ('auth/login', userData)
      console.log(user.data)
    } else {
        if(password === repeatPassword) {
          const userData = {
            login,
            password        
          }
          const newUser = await instance.post ('auth/register', userData)
          console.log (newUser.data) 
        } else {
          throw new Error('У вас не совпадают пароли')
        }
    }
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
          {location.pathname === '/login' 
            ? <LoginPage setLogin={setLogin} setPassword={setPassword}/> : location.pathname === '/register' 
              ? <RegisterPage setLogin={setLogin} setPassword={setPassword} setRepeatPassword={setRepeatPassword} /> : null}
        </Box>
      </form>
    </div>
  );
};

export default AuthRootComponent;