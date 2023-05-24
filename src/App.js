import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Admin from './routes/admin/Admin';
import Login from './routes/login/Login' 
import PrivateRoute from './components/private/PrivateRoute';
// import CheckCrm from './checkCrm/CheckCrm';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin/*' element={<PrivateRoute> <Admin/> </PrivateRoute>}/>
        <Route path='/login' element={<Login/>}/>
        {/* <Route path='/check-certificate/:id' element={<CheckCrm/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
