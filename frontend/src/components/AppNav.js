import './AppNav.css'
import { Link } from 'react-router-dom';
import axios from 'axios'
import config from '../config';

const AppNav = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();
        axios
            .post(config.api.url + '/user/login')
            .then((res) => {
                console.log(res.data)
                if (res.data.message) {
                    props.setUser(null);
                    localStorage.setItem('user', null)
                }
            })
            .catch((error) => {
                props.setUser(null);
                localStorage.setItem('user', null)
                console.error(error);
            });
    }

    return (
        <nav className="mainNav">
            <strong> <ul>
                <li> <Link to='/'>Home</Link></li>

                {!props.user && <li> <Link to='/login'>Login</Link></li>}

                {props.user && <li> <Link to='/customer'>Dodaj klienta</Link></li>}

                {props.user && <li> <Link to='/' onClick={handleLogout}>Logout</Link></li>}
            </ul></strong>
        </nav>
    )
}

export default AppNav;