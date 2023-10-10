import logo from './logo.svg';
import './App.css';
import {Routes, route} from 'react-router-dom'

import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
        <Home/>
        <Routes>
          <Route />
        </Routes>
    </div>
  );
}

export default App;
