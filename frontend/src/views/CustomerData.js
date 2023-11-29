import './CustomerData.css'

const CustomerData = ({ customer }) => {


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
            <div className="action">
                <h2><strong>Akcja:</strong></h2>
                <table>
                    <thead>
                        <tr>
                            <th>LP.</th>
                            <th>Opis</th>
                            <th>Rodzaj akcji</th>
                            <th>Data</th>
                            <th>Edycja</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1.</td>
                            <td>telefon</td>
                            <td>call</td>
                            <td>12.02.22</td>
                            
                            <td>
                                <button className='btn'>Usun</button>
                                <button className='btn'>Edytuj</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button className='btn btn1'>Dodaj akcje</button>
            </div>
        </div>

    )
}


export default CustomerData