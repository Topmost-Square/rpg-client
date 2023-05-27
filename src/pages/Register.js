import {useState} from "react";
import {NavLink, useNavigate} from "react-router-dom";
import {call} from "../utils/api";
import {saveToken} from "../utils/auth";

export const Register = () => {
    const [form, setForm] = useState({
        email: '',
        password: '',
        passwordConfirm: ''
    });

    const navigate = useNavigate();

    const register = async e => {
        e.preventDefault();

        if (form.email === '' || form.password === '' || form.passwordConfirm === '') {
            alert('Error: All fields are mandatory');
            return;
        }

        if (form.password !== form.passwordConfirm) {
            alert('Error: Passwords should match');
            return;
        }

        const result = await call('auth/register', 'POST', form)

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
            <h1>Register</h1>
            <form onSubmit={register}>
                <label>Email:</label>
                <input
                    type="email"
                    name='email'
                    value={form.email}
                    onChange={change}
                />
                <label>Password:</label>
                <input
                    type="password"
                    name='password'
                    value={form.password}
                    onChange={change}
                />
                <label>Confirm Password:</label>
                <input
                    type="password"
                    name='passwordConfirm'
                    value={form.passwordConfirm}
                    onChange={change}
                />
                <button>Register</button>
            </form>
            <p>
                Have account?
            </p>
            <NavLink to="/login">Login</NavLink>
        </div>
    )
}