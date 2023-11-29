import { Route, Routes } from 'react-router-dom';
import Home from '../views/Home';
import Login from '../views/Login';
import AddCustomer from '../views/AddCustomer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import config from '../config';
import CustomerData from '../views/CustomerData';



/* all customers */
const AppRoutes = (props) => {
  const [customers, setCustomers] = useState([])

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

  const getCustomer = (id) => {
    axios
      .get(config.api.url + `/customers/${id}`)
      .then((res) => {
        console.log(res.data);
        setCustomer(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  /*  useEffect(() => {
     getCustomer()
   }, []) */


  useEffect(() => {
    getCustomers()
  }, [])




  return (

    <Routes>
      <Route path='/' element={<Home customers={customers} getCustomer={getCustomer} />} />
      <Route path='/customer' element={<AddCustomer getCustomers={getCustomers} />} />
      <Route path='/login' element={<Login setUser={props.setUser} />} />
      <Route path='/customerData' element={<CustomerData customer={customer} />} />
    </Routes>

  )
}

export default AppRoutes;