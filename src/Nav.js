import React,{useState,useEffect} from 'react';
import {Link,useHistory } from 'react-router-dom';
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import './Nav.css';

function Nav() {
    const history=useHistory();
    const [{  user }, dispatch] = useStateValue();
    const[show,handleShow]=useState(false);
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);
            }else handleShow(false);
        })
        return () => {
            window.removeEventListener("scroll",()=>{
                if(window.scrollY>100){
                    handleShow(true);
                }else handleShow(false);
            });
        };
    }, []);
    
  
  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
    history.push('/');
  }


    return (
        <div className={`nav ${show && "nav__black"}`}>
            <img
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo"
            />
        
        <figure onClick={handleAuthenticaton}>
            <img
            
            className="nav__avatar"

            src="https://i.pinimg.com/564x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.jpg"
            alt="Netflix Logo"
            
             
            />
            <figcaption className="nav__fig">Sign out</figcaption>
            </figure>
            
       
            
        </div>
    )
}

export default Nav
