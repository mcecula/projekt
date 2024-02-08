import axios from "axios";
import { useState } from "react";
import config from '../config'

const EditEvent = (props) => {
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

    const editSubmit = (e) => {
        e.preventDefault();

        const newEvent = {
            description: formData.description,
            type: formData.type,
            date: formData.date,
        }

        axios
            .put(config.api.url + `/events/edit/${props.editId}`, newEvent, { mode: 'cors' })
            .then((res) => {
                console.log(res);
                props.getEvent(res.data.customer)
                props.setShowModalEdit(false)
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
            <form className='akcja' onSubmit={editSubmit} >
                <span onClick={() => { props.setShowModalEdit(false) }}><strong>X</strong></span>
                <h3>Edytuj akcję</h3>
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
                    <input name="date" type="date" placeholder="Data" value={formData.date} onChange={handleInputData} ></input>
                </div>

                <button type="submit" className="btn" >Zapisz edycje</button>
            </form>
        </div>
    )

}
export default EditEvent;