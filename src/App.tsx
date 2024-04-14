import React from 'react';
import Home from "./components/home"
import './App.css';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/router/privateRoute';
import AuthRootComponent from './components/auth';
import LayoutComponent from './components/layout';


function App() {
  return (
    <LayoutComponent>
      <div className="App">
        <Routes>
          <Route element={<PrivateRoute />}>
           
          </Route>
          <Route path="/" element={<Home />} />  //в приватный маршрут 
          <Route path="login" element={<AuthRootComponent />} />
          <Route path="register" element={<AuthRootComponent />} />
        </Routes>
      </div>
    </LayoutComponent>
  );
}

export default App;