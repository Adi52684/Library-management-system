import './App.css';
import LandingPage from './screens/LandingPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './screens/HomePage';
import Sregister from './screens/Sregister'
import AddBook from './screens/AddBook'
import Slogin from './screens/Slogin';
import Alogin from './screens/Alogin';
import Aregister from './screens/Aregister';
import Lregister from './screens/Lregister';
import Llogin from './screens/Llogin';
import Viewbook from './screens/Viewbook';
import Viewlibrarian from './screens/Viewlibrarian';
import Viewstudents from './screens/Viewstudents';
import Login from './screens/Login';
import Register from './screens/Register';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />}></Route>
          <Route path='/home' element={<HomePage />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/slogin' element={<Slogin />}></Route>
          <Route path='/sregister' element={<Sregister />}></Route>
          <Route path='/alogin' element={<Alogin />}></Route>
          <Route path='/aregister' element={<Aregister />}></Route>
          <Route path='/lregister' element={<Lregister />}></Route>
          <Route path='/llogin' element={<Llogin />}></Route>
          <Route path='/addbook' element={<AddBook />}></Route>
          <Route path='/viewbook' element={<Viewbook />}></Route>
          <Route path='/viewlibrarian' element={<Viewlibrarian />}></Route>
          <Route path='/viewstudents' element={<Viewstudents />}></Route>
        </Routes>
      </Router>

      {/* <LandingPage /> */}
    </>
  );
}

export default App;
