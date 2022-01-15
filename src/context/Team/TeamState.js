import React, { useContext, useState } from 'react';
import AlertContext from '../Alert/AlertContext';
import LoadingContext from '../Loading/LoadingContext';
import TeamContext from './TeamContext';


const TeamState = (props) => {

    const host = 'https://codetoscore-backend.herokuapp.com';
    const [teamMembers, setTeamMembers] = useState([]);
    const [teamDetails, setTeamDetails] = useState([]);
    const alertContext = useContext(AlertContext);
    const { handleAlert } = alertContext;
    const loadingContext = useContext(LoadingContext);
    const { showLoader, closeLoader } = loadingContext;
    // Fetch all team members

    const getTeam = async () => {
        showLoader();
        const response = await fetch(`${host}/api/team/getteam`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            }
        })
        const json = await response.json();
        // console.log(json[0].teammembers);

        if (json) {
            setTeamMembers(json[0].teammembers);
            setTeamDetails(json[0]);
            closeLoader();
        } else {
            setTeamMembers([]);
            closeLoader();
        }
    }

    // Adding a team member
    const addMember = async (name, registrationnumber, email, phone) => {
        showLoader();
        const response = await fetch(`${host}/api/team/addmember`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            },
            body: JSON.stringify({ name, registrationnumber, email, phone })
        })
        const json = await response.json();
        // console.log(json);

        if (json) {
            // console.log(json);
            if (!json.error) {
                handleAlert("Member Added successfully!!", "success");
                getTeam();
                closeLoader();
            } else {
                handleAlert("Something went wrong maybe you are adding a same member twice");
                closeLoader();
            }
        } else {
            handleAlert("Something went wrong", "");
            closeLoader();
        }
    }

    // Editing a team member
    const editMember = async (id, name, registrationnumber, email, phone) => {
        showLoader();
        const response = await fetch(`${host}/api/team/editmember/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            },
            body: JSON.stringify({ name, registrationnumber, email, phone })
        })
        const json = await response.json();
        // console.log(json);
        if (json) {
            if (!json.error) {
                handleAlert("Member Edited successfully!!", "success");
                getTeam();
            } else {
                handleAlert("Something went wrong while editing the member");
                closeLoader();
            }
        } else {
            handleAlert("Something went wrong", "");
            closeLoader();
        }
    }

    // Deleting the Member
    const deleteMember = async (id) => {
        showLoader();
        const response = await fetch(`${host}/api/team/deletemember/${id}`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            }
        })
        const json = await response.json();
        // console.log(json);
        if (json) {
            getTeam();
            handleAlert("Member deleted successfully!!", "success");
        } else {
            handleAlert("Something went wrong", "");
            closeLoader();
        }
    }

    // Deleting the Team
    const deleteTeam = async () => {
        showLoader();
        const response = await fetch(`${host}/api/auth/deleteteam`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            }
        })
        const json = await response.json();
        // console.log(json);
        if (json) {
            handleAlert("Team deleted successfully!!", "success");
            closeLoader();
        } else {
            handleAlert("Something went wrong", "");
            closeLoader();
        }
    }

    return (
        <TeamContext.Provider value={{ teamMembers, setTeamMembers, getTeam, addMember, editMember, deleteMember, teamDetails, deleteTeam }}>
            {props.children}
        </TeamContext.Provider>
    )

}

export default TeamState