import './AppNav.css'
import {Link} from 'react-router-dom';
import axios from 'axios'

const AppNav = (props) => {

    const handleLogout = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:3000/logout')
        .then((res) => {
            console.log(res.data)
            if (res.data.message) {
                props.setCustomer(null);
                localStorage.setItem('customer', null)
            }
        })
        .catch((error) => {
            props.setCustomer(null);
            localStorage.setItem('customer', null)
            console.error(error);
        });
    }

    return (
        <nav className="mainNav">
            <ul>
                <li> <Link to='/'>Home</Link></li>
                {!props.user &&<li> <Link to='/login'>Login</Link></li>}
                <li> <Link to='/customer'>Dodaj klienta</Link></li>
                {props.user &&<li> <Link to='/customer' onClick={handleLogout}>Logout</Link></li>}
            </ul>
        </nav>
    )
}

export default AppNav;