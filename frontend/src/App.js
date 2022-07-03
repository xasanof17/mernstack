import React from 'react'
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home';
import Error from './components/Error';
import News from './components/News';
import CreateNews from './components/CreateNews';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/news' element={<News />} />
        <Route path='/create' element={<CreateNews />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </div>
  );
}


export default App;
