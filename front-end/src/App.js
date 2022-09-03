import About from './components/About';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import { Routes, Route } from 'react-router-dom';

import New from './pages/New';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Show from './pages/Show';
import Index from './pages/Index';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/players' element={<Index />} />
        <Route path='/players/new' element={<New />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/players/:id' element={<Show />} />
        <Route path='/players/:id/edit' element={<Edit />} />
      </Routes>
      {/* <Footer /> */}
      {/* <SocialLinks /> */}
    </div>
  );
}

export default App;
