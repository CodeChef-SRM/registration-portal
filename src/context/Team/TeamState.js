import React, { useContext, useState } from 'react';
import AlertContext from '../Alert/AlertContext';
import TeamContext from './TeamContext';


const TeamState = (props) => {

    const host = 'https://codetoscore-backend.herokuapp.com';
    const [teamMembers, setTeamMembers] = useState([]);
    const [teamDetails, setTeamDetails] = useState([]);
    const alertContext = useContext(AlertContext);
    const { handleAlert } = alertContext;
    // Fetch all team members

    const getTeam = async () => {
        const response = await fetch(`${host}/api/team/getteam`, {
            method: 'POST',
            headers: {
                // replace with localStorage.getItem('authTokenRegCCSC')
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            }
        })
        const json = await response.json();
        console.log(json[0].teammembers);

        if (json) {
            setTeamMembers(json[0].teammembers);
            setTeamDetails(json[0]);
        } else {
            setTeamMembers([]);
        }
    }

    // Adding a team member
    const addMember = async (name, registrationnumber, email, phone) => {
        const response = await fetch(`${host}/api/team/addmember`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            },
            body: JSON.stringify({ name, registrationnumber, email, phone })
        })
        const json = await response.json();
        console.log(json);

        if (json) {
            handleAlert("Member Added successfully!!", "success");
            getTeam();
        } else {
            handleAlert("Something went wrong", "");
        }
    }

    // Editing a team member
    const editMember = async (id, name, registrationnumber, email, phone) => {
        const response = await fetch(`${host}/api/team/editmember/${id}`, {
            method: 'PUT',
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            },
            body: JSON.stringify({ name, registrationnumber, email, phone })
        })
        const json = await response.json();
        console.log(json);
        if (json) {
            handleAlert("Member Edited successfully!!", "success");
            getTeam();
        } else {
            handleAlert("Something went wrong", "");
        }
    }

    // Deleting the Member
    const deleteMember = async (id) => {
        const response = await fetch(`${host}/api/team/deletemember/${id}`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            }
        })
        const json = await response.json();
        console.log(json);
        if (json) {
            getTeam();
            handleAlert("Member deleted successfully!!", "success");
        } else {
            handleAlert("Something went wrong", "");
        }
    }

    // Deleting the Team
    const deleteTeam = async () => {
        const response = await fetch(`${host}/api/auth/deleteteam`, {
            method: 'DELETE',
            headers: {
                'auth-token': localStorage.getItem('authTokenRegCCSC')
            }
        })
        const json = await response.json();
        console.log(json);
        if (json) {
            handleAlert("Team deleted successfully!!", "success");
        } else {
            handleAlert("Something went wrong", "");
        }
    }

    return (
        <TeamContext.Provider value={{ teamMembers, setTeamMembers, getTeam, addMember, editMember, deleteMember, teamDetails, deleteTeam }}>
            {props.children}
        </TeamContext.Provider>
    )

}

export default TeamState