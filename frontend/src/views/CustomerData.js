import './CustomerData.css'
import AddEvent from '../components/AddEvent'
import axios from "axios";
import { useParams } from "react-router-dom";
import config from '../config'
import { useEffect, useState } from 'react';

const CustomerData = ({ getEvent, customer, setCustomer }) => {

  const [showModal, setShowModal] = useState(false)

  const { id } = useParams();
  console.log(id);
  const deleteCustomerEvent = (customerEventId) => {

    axios
      .delete(`/events/delete/${id}`, {
        data: customerEventId,
      })
      .then((res) => {
        console.log(res.data);
        axios.get(config.api.url + `/customers/${id}`)
          .then((res) => {
            console.log(id);
            setCustomer(res.data);
          });
      });
  };
  useEffect(() => {
    getEvent(id)
  }, [])


  return (
    <div >
      <div className='customer' key={customer._id}>
        <h3>{customer.name}</h3>
        <strong>Adres:</strong>
        <div className='data'> {customer.address.street}</div>
        <div className='data'> {customer.address.postCode}</div>
        <div className='data'> {customer.address.city}</div><br></br>
        <div className='data'> NIP: {customer.nip}</div>
      </div>

      <div className="action" >
        <h2><strong>Akcja:</strong></h2>
        <table >
          <thead>
            <tr key={id} >
              <th>LP.</th>
              <th>Opis</th>
              <th>Rodzaj akcji</th>
              <th>Data</th>
              <th>Edycja</th>
            </tr>
          </thead>

          <tbody >
            {customer.events.map((event, index) => {
              return (
                <tr key={event._id}>
                  <td>{index + 1}.</td>
                  <td>{event.description}</td>
                  <td>{event.type}</td>
                  <td>{event.date}</td>
                  <td>
                    <button className='btn usun' onClick={() => deleteCustomerEvent(event._id)}>Usun</button>
                    <button className='btn'>Edytuj</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className='btn btn1' onClick={() => { setShowModal(true) }}>Dodaj akcje</button>
        {showModal && <AddEvent
          customerId={customer._id} setShowModal={setShowModal} clientid={id} getEvent={getEvent}
        />}
      </div>
    </div>

  )
}


export default CustomerData