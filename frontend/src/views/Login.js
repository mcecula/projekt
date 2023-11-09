import './Login.css'
import { Navigate } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios'

const Login = (props) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;

        setFormData({
            ...formData,
            [name]: target.value,
        });
    };

    const [loginMessage, setLoginMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post('http://localhost:3000/login', {
                username: formData.username,
                password: formData.password,
            })
            .then((res) => {
                console.log(res.data)

                if (Array.isArray(res.data.username)) {
                    setLoginMessage(res.data.username[0])
                } else if (Array.isArray(res.data.password)) {
                    setLoginMessage(res.data.password[0])
                } else if (res.data.error) {
                    setLoginMessage('Incorrect user name or password!')
                } else {
                    setLoginMessage('');
                    props.setCustomer(res.data);
                    localStorage.setItem('customer', JSON.stringify(res.data));
                }
            })
            .catch((error) => {
                console.error(error);
            });
    }

    return (
        <div className="login">
            {props.customer && <Navigate to='/' />}
            <form onSubmit={handleSubmit}>
                {loginMessage && <h2>{loginMessage}</h2>}
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