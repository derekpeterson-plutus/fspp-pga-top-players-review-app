/******************** PAGES ********************/
import New from './pages/New';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Show from './pages/Show';
import Index from './pages/Index';

/******************** COMPONENTS ********************/
import About from './components/About';
import Watch from './components/Watch';
import Videos from './components/Videos';
import NavBar from './components/NavBar';
import Contact from './components/Contact';
//import ErrorPage from './components/ErrorPage';

/******************** ROUTERS ********************/
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='*' element={<ErrorPage />} /> */}
        <Route path='/about' element={<About />} />
        <Route path='/watch' element={<Watch />} />
        <Route path='/players' element={<Index />} />
        <Route path='/videos' element={<Videos />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/players/new' element={<New />} />
        <Route path='/players/:id' element={<Show />} />
        <Route path='/players/:id/edit' element={<Edit />} />
      </Routes>
    </div>
  );
}

export default App;
