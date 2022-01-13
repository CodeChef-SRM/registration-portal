import React, { useState, useContext } from "react";
import AlertContext from "../Alert/AlertContext";
import UserContext from "./UserContext";

const UserState = (props) => {

    const host = 'https://codetoscore-backend.herokuapp.com';
    const [login, setLogin] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    const alertContext = useContext(AlertContext);
    const { handleAlert } = alertContext;

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
            handleAlert("User Registered Successfully!!!", "success");
            setLogin(true);
        } else {
            handleAlert("Something went wrong!!!");
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
            handleAlert("User Login Successful!!!", "success");
            localStorage.setItem('authTokenRegCCSC', json.authToken);
            setLogin(true);
        } else {
            handleAlert("Something went wrong!!!");
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

    // Change user password
    const changePass = async (currentpassword, newpassword) => {
        const response = await fetch(`${host}/api/auth/changepassword`, {
            method: 'PUT',
            headers: {
                'auth-token': localStorage.getItem('authTokenRegCCSC'),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ currentpassword, newpassword })
        })
        const json = await response.json();
        console.log(json);
        if (json) {
            handleAlert("Password Changed Successfully!!!", "success");
        } else {
            handleAlert("Something went wrong!!!");
        }
    }

    return (
        <UserContext.Provider value={{ login, setLogin, Register, Login, GetUser, userDetails, changePass }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState;