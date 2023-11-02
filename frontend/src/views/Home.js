import './Home.css'
import { Link } from 'react-router-dom';


const Home = ({ customers }) => {

    return (
        <div className="customers">
            <h2>Klienci:</h2>

            <div>
                {customers.map((customer) => {
                    return (
                        <div className='customer' key={customer._id}>
                            <h3>{customer.name}</h3>
                            <strong>Adres:</strong>
                            <div className='data'> {customer.address.street}</div>
                            <div className='data'> {customer.address.postCode}</div>
                            <div className='data'> {customer.address.city}</div>
                            <div className='data'> NIP: {customer.nip}</div>
                            <button className='btn' ><Link to={'customerData'}>Szczegoly</Link></button>
                        </div>

                    )
                })}
            </div>
            <button ><Link to={'customer'}>Dodaj klienta</Link></button>
        </div>
    )
}

export default Home;