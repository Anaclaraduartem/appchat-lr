import React, { useState } from "react";


export default function ChatApp()
    {
        const[currentPage, setCurrentPage] = useState('login')
        const [username,setUsername] = userState(null);
       
        const onLogin=()=>{

        }

        switch(currentPage){
            case 'login':
                return (
                <Login
                 onLogin={onLogin}
                 username={username} 
                 setUsername={setUsername}
                 
                 />

                );
                break

                default:
                    break;
        }
        
    }
