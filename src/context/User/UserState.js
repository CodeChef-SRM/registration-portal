import React, { useState } from "react";
import UserContext from "./UserContext";

const UserState = (props) => {

    const host = 'https://codetoscore-backend.herokuapp.com';
    const [login, setLogin] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    // Register
    const Register = async (name, email, registerationnumber, password, teamname, phone) => {
        const response = await fetch(`${host}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, registerationnumber, password, teamname, phone })
        })
        const json = await response.json();
        console.log(json);
        if (json.authToken) {
            localStorage.setItem('authTokenRegCCSC', json.authToken);
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    // Logging In
    const Login = async (email, password) => {
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        console.log(json);
        if (json.authToken) {
            localStorage.setItem('authTokenRegCCSC', json.authToken);
            setLogin(true);
        } else {
            setLogin(false);
        }
    }

    // Getting User
    const GetUser = async () => {
        const response = await fetch(`${host}/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            }
        })
        const json = await response.json();
        console.log(json);
        if (json) {
            setUserDetails(json);
        }
    }

    return (
        <UserContext.Provider value={{ login, setLogin, Register, Login, GetUser, userDetails }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState;