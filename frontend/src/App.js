import './App.css';
import AppNav from './components/AppNav';
import AppRoutes from './routs/AppRoutes';
import { useState } from 'react'

function App() {

  /* const [customer, setCustomer] = useState(JSON.parse(localStorage.getItem('customer'))); */
  const [user, setUser] =useState(JSON.parse(localStorage.getItem('user')));
  
  return (
    <div className="App">
      <AppNav /* customer={customer} setCustomer={setCustomer} */ />
      <AppRoutes user={user} /* setCustomer={setCustomer} */ setUser={setUser}/>

    </div>
  );
}

export default App;
