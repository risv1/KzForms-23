import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Layouts/Home';
import ContactValues from './constants/ContactValues';
import './App.css';
import EditLayout from './components/EditComponent';

export interface AppProps {}

function App() {

  let ContactValuesItem = new ContactValues();

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/contacts/list' element={<Home item={ContactValuesItem}/>}/>
          <Route path='contacts/new' element={<EditLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
