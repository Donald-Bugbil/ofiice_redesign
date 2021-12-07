import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Auditorium from '../desktopapp/auditorium';
import Notice from '../desktopapp/notice';
import Workspace from '../desktopapp/workspace';
import App from '../../App';

function Router() {
    return (
       
    <BrowserRouter>
    <Routes>
      <Route path="/" exact element={<App/>}/>
      <Route path="/auditorium" element={<Auditorium />} />
      <Route path="/notice" element={<Notice />} />
      <Route path="/departments" element={<Workspace />} />
    </Routes>
    </BrowserRouter> 
         
    )
}

export default Router



