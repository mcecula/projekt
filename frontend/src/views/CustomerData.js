

const CustomerData = ({ customer }) => {


    return (
        <div>
            
               
                    <div className='customer' key={customer._id}>
                        <h3>{customer.name}</h3>
                        <strong>Adres:</strong>
                        <div className='data'> {customer.address.street}</div>
                        <div className='data'> {customer.address.postCode}</div>
                        <div className='data'> {customer.address.city}</div>
                        <div className='data'> NIP: {customer.nip}</div>
                        <button className='btn' ></button>
                    </div>
        </div>

    )
}


export default CustomerData