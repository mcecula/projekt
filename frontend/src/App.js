import './App.css';
import AppNav from './components/AppNav';
import AppRoutes from './routs/AppRoutes';
import { useState } from 'react'
import axios from 'axios'

function App() {

  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  axios.defaults.headers.common['Authorization'] = 'Bearer' + (user ? user.jwt_token : '');

  return (
    <div className="App">
      <AppNav user={user} setUser={setUser} />
      <AppRoutes user={user} setUser={setUser} />
    </div>
  );
}

export default App;
