import React from 'react';
import Page1 from "./components/page1";
import Page2 from "./components/page2";
import Page3 from "./components/page3";
import Page4 from "./components/page4";
import Page5 from "./components/page5";
import Page6 from "./components/page6";
import Page7 from "./components/page7";
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
          <Route path="/1" element={<Page1 />} /> {/*в приватный маршрут*/}
          <Route path="/2" element={<Page2 />} /> {/*в приватный маршрут*/}
          <Route path="/3" element={<Page3 />} /> {/*в приватный маршрут*/}
          <Route path="/4" element={<Page4 />} /> {/*в приватный маршрут*/}
          <Route path="/5" element={<Page5 />} /> {/*в приватный маршрут*/}
          <Route path="/6" element={<Page6 />} /> {/*в приватный маршрут*/}
          <Route path="/7" element={<Page7 />} /> {/*в приватный маршрут*/}
          <Route path="login" element={<AuthRootComponent />} />
          <Route path="register" element={<AuthRootComponent />} />
        </Routes>
      </div>
    </LayoutComponent>
  );
}

export default App;