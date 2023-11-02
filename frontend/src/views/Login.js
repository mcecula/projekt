import './Login.css'
import { Link } from 'react-router-dom';

const Login = () => {


    return (
        <div className="login">
            <form >
                <label className="login">Login</label>
                <input type="text" name="username" placeholder="Login" />
                <label className="password">Hasło</label>
                <input type="password" name="password" placeholder="Password" />
                <button className="btn"><Link to={'/'}>Zaloguj</Link></button>
            </form>
        </div>
    )
}

export default Login;