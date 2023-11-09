import './App.css';
import AppNav from './components/AppNav';
import AppRoutes from './routs/AppRoutes';
import { useState } from 'react'

function App() {

  const [customer, setCustomer] = useState(JSON.parse(localStorage.getItem('customer')));

  return (
    <div className="App">
      <AppNav customer={customer} setCustomer={setCustomer} />
      <AppRoutes customer={customer} setCustomer={setCustomer} />

    </div>
  );
}

export default App;
