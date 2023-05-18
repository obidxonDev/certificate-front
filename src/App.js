import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './routes/home/Home'
import Admin from './routes/admin/Admin';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
