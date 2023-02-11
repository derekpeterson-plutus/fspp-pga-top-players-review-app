import React, { useState } from 'react';

/******************** PAGES ********************/
import New from './pages/New';
import Edit from './pages/Edit';
import Show from './pages/Show';
import Index from './pages/Index';
import Home from './pages/home/Home';

/******************** COMPONENTS ********************/
import About from './components/about/About';
import Modal from './components/modal/Modal';
import Watch from './components/watch/Watch';
import ErrorPage from './components/ErrorPage';
import Navbar from './components/navbar/Navbar';
import Videos from './components/videos/Videos';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

/******************** ROUTERS ********************/
import { Routes, Route } from 'react-router-dom';

function App() {

  //const [isLoading, setIsLoading] = useState(true);
  //const [hasError, setHasError] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className='app'>
      <Navbar showModal={showModal} setShowModal={setShowModal}/>
      <Modal showModal={showModal} setShowModal={setShowModal}/>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/*' element={<ErrorPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/players' element={<Index />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/players/new' element={<New />} />
        <Route path='/players/:id' element={<Show />} />
        <Route path='/players/:id/edit' element={<Edit />} />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
