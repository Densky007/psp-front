import React from 'react';
import Изделие from "./pages/изделие";
import ВакуумИПечь from "./pages/вакуум и печь";
import Калибровка from "./pages/калибровка";
import Пассивация from "./pages/пассивация";
import Журнал from "./pages/журнал";
import Инструкция from "./pages/инструкция";
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
          <Route path="/1" element={<Изделие />} /> {/*в приватный маршрут*/}
          <Route path="/2" element={<ВакуумИПечь />} /> {/*в приватный маршрут*/}
          <Route path="/3" element={<Калибровка />} /> {/*в приватный маршрут*/}
          <Route path="/4" element={<Пассивация />} /> {/*в приватный маршрут*/}
          <Route path="/5" element={<Журнал />} /> {/*в приватный маршрут*/}
          <Route path="/6" element={<Инструкция />} /> {/*в приватный маршрут*/}
          <Route path="login" element={<AuthRootComponent />} />
          <Route path="register" element={<AuthRootComponent />} />
        </Routes>
      </div>
    </LayoutComponent>
  );
}

export default App;