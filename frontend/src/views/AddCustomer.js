import axios from 'axios'
import config from '../config'
import { useState } from 'react'
import './AddCustomer.css'

const AddCustomer = (props) => {
    const [clientData, setClientData] = useState({
        name: '',
        street: '',
        postCode: '',
        city: '',
        nip: '',

    })

    const [errors, setErrors] = useState([]);

    const saveCustomer = (customerObj) => {
        axios
            .post(config.api.url + '/customers/add', customerObj, { mode: 'cors' })
            .then((res) => {
                props.getCustomers()
            })
            .catch((err) => {
                console.error(err)
            })
    }

    const validateForm = (e) => {
        e.preventDefault()
        let errorsValidate = []
        if (clientData.name.trim() === '') {
            errorsValidate.push('Wpisz Imie ')
        }
        if (clientData.street.trim() === '') {
            errorsValidate.push('Wpisz ulice')
        }
        if (clientData.postCode.trim() === '') {
            errorsValidate.push('Wpisz kod pocztowy')
        }
        if (clientData.city.trim() === '') {
            errorsValidate.push('Wpisz miasto')
        }
        if (clientData.nip.trim() === '') {
            errorsValidate.push('Wpisz NIP')
        }
        if (errorsValidate.length > 0) {
            setErrors(errorsValidate)
            return false
        }

        const newCustomer = {
            name: clientData.name,
            address: {
                street: clientData.street,
                postCode: clientData.postCode,
                city: clientData.city,
            },
            nip: clientData.nip
        }
        saveCustomer(newCustomer)
        setClientData({
            name: '',
            street: '',
            postCode: '',
            city: '',
            nip: '',
        })
    }

    const handleInputChange = (e) => {
        let name = e.target.name

        setClientData({
            ...clientData,
            [name]: e.target.value
        })
    }

    return (
        <div className="formWrapper">
            <form action="#" onSubmit={validateForm}>

                <div className="wrapper">
                    <label className="name">Nazwa klienta</label>
                    <input type="text" id="name" name='name' value={clientData.name} onChange={handleInputChange} placeholder="Nazwa klienta" />
                </div>

                <strong>Adres:</strong> <br></br>

                <div className="wrapper">
                    <label className="street">Ulica numer</label>
                    <input type="text" id="street" name='street' value={clientData.street} onChange={handleInputChange} placeholder="Ulica numer" />
                </div>

                <div className="wrapper">
                    <label className="postcode">Kod pocztowy</label>
                    <input type="text" id="postcode" name='postCode' value={clientData.postCode} onChange={handleInputChange} placeholder="Kod pocztowy" />
                </div>

                <div className="wrapper">
                    <label className="city">Miasto</label>
                    <input type="text" id="city" name='city' value={clientData.city} onChange={handleInputChange} placeholder="Miasto" />
                </div>

                <div className="wrapper">
                    <label className="nip">NIP</label>
                    <input type="text" id="nip" name='nip' value={clientData.nip} onChange={handleInputChange} placeholder="NIP" />
                </div>

                <div className="wrapper">
                    <button className="submit btn" type='submit'>Dodaj</button>
                </div>
                <div className='errors'>
                    <ul className='errors'>
                        {errors.map((errorText, index) => {
                            return <strong><li key={index}>{errorText}</li></strong>
                        })}
                    </ul>
                </div>
            </form>


        </div>
    )
}


export default AddCustomer;