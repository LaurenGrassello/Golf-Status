import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editor from './Editor';
import './App.css';
import { ToastContainer } from 'react-toastify';

const App = () => (
  <>
   <Routes>
    <Route path="courses/*" element={<Editor />} />
  </Routes>
  <ToastContainer />
  </>
);

export default App;