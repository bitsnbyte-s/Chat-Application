import React from "react";
import {useHistory} from 'react-router-dom'
import {auth} from '../firebase'
import {ChatEngine} from 'react-chat-engine'
const Chats=()=>{
    const history=useHistory();

    const handlelogout= async()=>{
        await auth.signOut();
        history.push('/');
    }
    return(
    <div className="chats-page">
        <div className="nav-bar">
            <div className="logo-tab">
                Chat App
            </div>
            <div className="logout-tab"
            onClick={handlelogout}
            >
                Logout
            </div>
        </div>
        <ChatEngine
        height="calc(100vh-66px)"
        projectId="143240cb-7fb7-40ef-8d7f-3a3b2a357ba7"
        userName="."
        userSecret="."
        ></ChatEngine>
    </div>
    )
}

export default Chats;