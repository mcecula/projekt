import './Login.css'
import { Navigate, useNavigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'
import config from '../config';

const Login = (props) => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    /* const [loginMessage, setLoginMessage] = useState(''); */

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: target.value,
        });
    };

    console.log(formData)



    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post(config.api.url + '/user/login', {
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                console.log(res.data)
                props.setUser(res.data)
                localStorage.setItem('user', JSON.stringify(res.data)) 
                navigate('/')  
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="login">
            {props.customer && <Navigate to='/' />}
            <form action='/login' method='POST' onSubmit={handleSubmit}>
               {/*  {loginMessage && <h2>{loginMessage}</h2>} */}
                <label className="login">Login</label>
                <input type="text" name="username" placeholder="Login" value={formData.username} onChange={handleInputChange} />
                <label className="password">Hasło</label>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} />
                <button className="btn">Zaloguj</button>
            </form>

        </div>
    )
}

export default Login;