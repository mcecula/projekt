import './CustomerData.css'
import AddEvent from '../components/AddEvent'
import axios from "axios";
import { useParams } from "react-router-dom";
import config from '../config'
import { useEffect, useState } from 'react';
import EditEvent from '../components/EditEvent';

const CustomerData = ({ customer, getCustomer }) => {

  const [showModal, setShowModal] = useState(false)
  const [events, setEvents] = useState([])
  const [showModalEdit, setShowModalEdit] = useState(false)
  const [editId, seteditId] = useState('')

  const { id } = useParams();

  const deleteCustomerEvent = (customerEventId) => {

    axios
      .delete(config.api.url + `/events/delete/${customerEventId}`)
      .then((res) => {
        getEvent(id);
      });
  };
 
  const getEvent = (id) => {
    axios
      .get(config.api.url + `/events/${id}`)
      .then((res) => {
        setEvents(res.data)
      })
      .catch((err) => {
        console.error(err)
      })
  }

  useEffect(() => {
    getEvent(id)
    getCustomer(id)
  }, [])

  useEffect(() => {
    setShowModalEdit(true)
  }, [editId])

  return (
    <div className='wrap' >
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
            {events && events !== null && events.map((event, index) => {
              return (
                <tr key={event._id}>
                  <td>{index + 1}.</td>
                  <td>{event.description}</td>
                  <td>{event.type}</td>
                  <td>{event.date !== null && (event.date).substring(0, 10)}</td>
                  <td>
                    <button className='btn usun' onClick={() => deleteCustomerEvent(event._id)}>Usun</button>

                    <button className='btn' onClick={() => { seteditId(event._id) }}>Edytuj</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <button className='btn btn1' onClick={() => { setShowModal(true) }}>Dodaj akcje</button>

        {showModal && <AddEvent customerId={customer._id} setShowModal={setShowModal} clientid={id} getEvent={getEvent} />}
        {editId !== '' && showModalEdit && <EditEvent customerId={customer._id} setShowModalEdit={setShowModalEdit} getEvent={getEvent} editId={editId} />}

      </div>
    </div>

  )
}


export default CustomerData