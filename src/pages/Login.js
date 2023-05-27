import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {call} from "../utils/api";
import {saveToken} from "../utils/auth";

export const Login = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const navigate = useNavigate();

    const login = async e => {
        e.preventDefault();

        if (form.email === '' || form.password === '') {
            alert('Error: All fields are mandatory');
            return;
        }

        const result = await call('auth/login', 'POST', form);

        if (result.token) {
            saveToken(result.token);
            navigate('/');
        }
    }

    const change = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={login}>
                <label>Email:</label>
                <input type="email" name='email' value={form.email} onChange={change}/>
                <label>Password:</label>
                <input type="password" name='password' value={form.password} onChange={change}/>
                <button>Login</button>
            </form>
            <p>
                Didn't register yet?
            </p>
            <NavLink to="/register">Register</NavLink>
        </div>
    )
}