import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import Signin from './pages/signin';
import Banner from './moviespage/Banner';

function App() {
  return (
    <BrowserRouter>
    <Routes>

      <Route path="/" element={<Home/>} />
      <Route path='/signin' element={<Signin/>} />
      <Route path='/in' element={<Home/>}/>
      <Route path='/movies' element={<Banner/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
