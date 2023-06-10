import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Editor from './Editor';
import './App.css';

const App = () => (
  <Routes>
    <Route path="courses/*" element={<Editor />} />
  </Routes>
);

export default App;