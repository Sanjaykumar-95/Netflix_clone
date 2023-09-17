import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./components/netflix.css"
// import './App.css';
import Home from './components/home';
import Signin from './pages/signin';

function App() {
  return (
    <BrowserRouter> 

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path='/signin' element={<Signin/>} />
    </Routes>

    </BrowserRouter>
  );
}

export default App;
