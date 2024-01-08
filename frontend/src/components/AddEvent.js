import axios from "axios";
import { useState } from "react";
import config from '../config'
import './AddEvent.css'

const AddEvent = (props) => {
    const [formData, setFormData] = useState({
        description: "",
        type: "",
        date: "",
    })

    const handleInputData = (e) => {
        const target = e.target;
        const name = target.name;

        setFormData((data) => {
            return { ...data, [name]: target.value };
        });
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            description: formData.description,
            type: formData.type,
            date: formData.date,
        }

        axios
            .post(config.api.url + `/events/add/${props.clientid}`, newEvent, { mode: 'cors' })
            .then((res) => {
                props.getEvent()
            })
            .catch((err) => {
                console.error(err)
            })

        setFormData({
            description: "",
            type: "",
            date: "",
        })
    }

    return (
        <div className='akcja' >
            <form className='akcja' method='POST' onSubmit={handleSubmit} >
                <span onClick={() => { props.setShowModal(false) }}><strong>X</strong></span>
                <h3>Dodaj akcję</h3>
                <div >
                    <label className="opis">Opis</label><br />
                    <textarea name="description" placeholder="Opis" value={formData.description} onChange={handleInputData}></textarea>
                </div><br />

                <div>
                    <label className="opis">Rodzaj akcji</label><br />
                    <select onChange={handleInputData} name="type">
                        <option value="call">Telefon</option>
                        <option value="meeting">Spotkanie</option>
                        <option value="email">Mail</option>
                    </select>
                </div><br />

                <div>
                    <label className="opis">Data</label>
                    <input name="date" type="date" placeholder="Data" value={formData.date} onChange={handleInputData}></input>
                </div>

                <button type="submit" className="btn" >Dodaj</button>
            </form>
        </div>
    )

}
export default AddEvent;