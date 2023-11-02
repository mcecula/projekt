import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import AddCustomer from '../views/AddCustomer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../config';
import CustomerData from '../views/CustomerData';

/* all customers */
const AppRoutes = () => {
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    getCustomers()
  }, [])

  const getCustomers = () => {
    axios
      .get(config.api.url + '/customers')
      .then((res) => {
        setCustomers(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }


/* one customer */
  const [customer, setCustomer] = useState({
    name: "",
    address: {
      street: "",
      postCode: "",
      city: "",
    },
    nip: "",
    
  });


  const getCustomer = () => {
    axios
      .get(config.api.url + `/customers`)
      .then((res) => {
        setCustomer(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getCustomer()
  }, [])





  return (

    <Routes>
      <Route path='/' element={<Home customers={customers} />} />
      <Route path='/customer' element={<AddCustomer getCustomers={getCustomers} />} />
      <Route path='/login' element={<Login />} />
      <Route path='/customerData' element={<CustomerData customer={customer} />} />
    </Routes>

  )
}

export default AppRoutes;