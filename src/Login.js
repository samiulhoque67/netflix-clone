import React, { useState } from 'react';
import './Login.css'
import { Link, useHistory,useLocation } from "react-router-dom";
import bgimg from './bg.jpg'
import { auth } from "./firebase";

function Login() {
    const history = useHistory();
    const location=useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push(from)
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <header className='login'
        style={{
            backgroundSize:"cover",
            backgroundImage:`url(${bgimg})`,
            backgroundPosition:"center center",
            opacity:0.8
        }}
        
        >
            
                <img
                    className="login__logo"
                    src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"                
                    />
            

            <div className='login__container'>
                <h1 style={{color:"white",
                textAlign:"center"
            
            }}>Sign-in</h1>

                <form>
                    <h5 style={{color:"red"}}>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5 style={{color:"red"}}>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    
                </p>

                <button onClick={register} className='login__registerButton'>Create your Netflix Account</button>
            </div>
            
        </header>
    )
}

export default Login
