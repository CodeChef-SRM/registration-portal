import React, { useState, useContext } from "react";
import AlertContext from "../Alert/AlertContext";
import LoadingContext from "../Loading/LoadingContext";
import UserContext from "./UserContext";

const UserState = (props) => {

    const host = 'https://codetoscore-backend.herokuapp.com';
    const [login, setLogin] = useState(false);
    const [userDetails, setUserDetails] = useState({});

    const alertContext = useContext(AlertContext);
    const { handleAlert } = alertContext;
    const loadingContext = useContext(LoadingContext);
    const { showLoader, closeLoader } = loadingContext;
    // Register


    // Send Mail
    const sendMail = async (email_id, teamname) => {
        const html = `<!DOCTYPE html><html lang='en'><head><meta charset='UTF-8'><meta http-equiv='X-UA-Compatible' content='IE=edge'><meta name='viewport' content='width=device-width, initial-scale=1.0'><title>Document</title><link rel='preconnect' href='https://fonts.googleapis.com'><link rel='preconnect' href='https://fonts.gstatic.com' crossorigin><link href='https://fonts.googleapis.com/css2?family=Roboto&display=swap' rel='stylesheet'><style>
        * {
            padding: 0;
            margin: 0;
            font-family: 'Roboto', sans-serif;
        }
        .main {
            padding: 20px;
        }
        .main h3 {
            margin: 20px 0;
        }
        .header {
            width: 80%;
            height: 100px;
            background: #17233F;
            color: #E7BB41;
            padding: 10%;
        }
    </style></head><body><div class='header'><h1>CodeToScore</h1></div><div class='main'><br /><h1>Hi !! 👋</h1><br /><p>Thank you 🙏 <b>${email_id}</b> for registering in CodeToScore.</p><p>Your team <b>${teamname}</b> has been registered successfully for the event.</p><h3>Best of Luck for the contest</h3><p>Regards, <br>CCSC KTR Team</p></div></body></html>`;

        const response = await fetch('https://codechefemailer.herokuapp.com/send', {
            method: 'POST',
            headers: {
                'Authorization': 'Bearer ' + process.env.REACT_APP_AUTHORIZATION_KEY9,
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email_id: email_id, html: html })
        })
        const json = await response.json();
        console.log(process.env.REACT_APP_AUTHORIZATION_KEY);
    }

    const Register = async (name, email, registerationnumber, password, teamname, phone) => {
        showLoader();
        const response = await fetch(`${host}/api/auth/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ name, email, registerationnumber, password, teamname, phone })
        })
        const json = await response.json();
        // console.log(json);
        if (json.authToken) {
            localStorage.setItem('authTokenRegCCSC', json.authToken);
            handleAlert("User Registered Successfully!!!", "success");
            setLogin(true);
            closeLoader();
        } else {
            handleAlert("Something went wrong!!!", "");
            setLogin(false);
            closeLoader();
        }
    }

    // Logging In
    const Login = async (email, password) => {
        showLoader();
        const response = await fetch(`${host}/api/auth/login`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        const json = await response.json();
        // console.log(json);
        if (json.authToken) {
            handleAlert("User Login Successful!!!", "success");
            localStorage.setItem('authTokenRegCCSC', json.authToken);
            setLogin(true);
            closeLoader();
        } else {
            handleAlert("Something went wrong!!!");
            setLogin(false);
            closeLoader();
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
        // console.log(json);
        if (json) {
            setUserDetails(json);
        }
    }

    // Change user password
    const changePass = async (currentpassword, newpassword) => {
        showLoader();
        const response = await fetch(`${host}/api/auth/changepassword`, {
            method: 'PUT',
            headers: {
                'auth-token': localStorage.getItem('authTokenRegCCSC'),
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ currentpassword, newpassword })
        })
        const json = await response.json();
        // console.log(json);
        if (json) {
            handleAlert("Password Changed Successfully!!!", "success");
            closeLoader();
        } else {
            handleAlert("Something went wrong!!!", "warning");
            closeLoader();
        }
    }

    return (
        <UserContext.Provider value={{ login, setLogin, Register, Login, GetUser, userDetails, changePass, sendMail }}>
            {props.children}
        </UserContext.Provider>
    )

}

export default UserState;