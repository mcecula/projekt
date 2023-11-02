import axios from 'axios'
import config from '../config'
import { useState } from 'react'

const AddCustomer = (props) => {
    const [name, setName] = useState('')
    const [street, setStreet] = useState('')
    const [postCode, setPostCode] = useState('')
    const [city, setCity] = useState('')
    const [nip, setNip] = useState('')
    const [errors, setErrors] = useState([])

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

    const resetForm = () => {
        setName('')
        setStreet('')
        setPostCode('')
        setCity('')
        setNip('')
        setErrors([])
    }

    const validateForm = (e) => {
        e.preventDefault()
        let errorsValidate = []
        if (name.trim() === '') {
            errorsValidate.push('Wpisz Imie ')
        }
        if (street.trim() === '') {
            errorsValidate.push('Wpisz ulice')
        }
        if (postCode.trim() === '') {
            errorsValidate.push('Wpisz kod pocztowy')
        }
        if (city.trim() === '') {
            errorsValidate.push('Wpisz miasto')
        }
        if (nip.trim() === '') {
            errorsValidate.push('Wpisz NIP')
        }
        if (errorsValidate.length > 0) {
            setErrors(
                errorsValidate.map((errorText, index) => {
                    return <li key={index}>{errorText}</li>
                })
            )
            return false
        }

        const newCustomer = {
            name: name,
            address: {
                street: street,
                postCode: postCode,
                city: city,
            },
            nip: nip
        }
        saveCustomer(newCustomer)
        resetForm()
    }

    const handleChangeName = (e) => {
        setName(e.target.value)
    }

    const handleChangeStreet = (e) => {
        setStreet(e.target.value)
    }

    const handleChangePostCode = (e) => {
        setPostCode(e.target.value)
    }

    const handleChangeCity = (e) => {
        setCity(e.target.value)
    }

    const handleChangeNip = (e) => {
        setNip(e.target.value)
    }



    return (
        <div className="formWrapper">
            <form action="#" onSubmit={validateForm}>

                <div className="wrapper">
                    <label className="name">Nazwa klienta</label>
                    <input type="text" id="name" value={name} onChange={handleChangeName} placeholder="Nazwa klienta" />
                </div>

                <strong>Adres:</strong> <br></br>

                <div className="wrapper">
                    <label className="street">Ulica numer</label>
                    <input type="text" id="street" value={street} onChange={handleChangeStreet} placeholder="Ulica numer" />
                </div>

                <div className="wrapper">
                    <label className="postcode">Kod pocztowy</label>
                    <input type="text" id="postcode" value={postCode} onChange={handleChangePostCode} placeholder="Kod pocztowy" />
                </div>

                <div className="wrapper">
                    <label className="city">Miasto</label>
                    <input type="text" id="city" value={city} onChange={handleChangeCity} placeholder="Miasto" />
                </div>

                <div className="wrapper">
                    <label className="nip">NIP</label>
                    <input type="text" id="nip" value={nip} onChange={handleChangeNip} placeholder="NIP" />
                </div>

                <div className="wrapper">
                    <button className="submit" type='submit'>Dodaj</button>
                </div>

            </form>

            <div className='errors'>
                <ul className='errors'>
                    {errors}
                </ul>
            </div>
        </div>
    )
}


export default AddCustomer;