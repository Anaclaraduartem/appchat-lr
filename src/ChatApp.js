import React, { useState } from "react";


export default function ChatApp()
    {
        const[currentPage, setCurrentPage] = useState('login')

        switch(currentPage){
            case 'login':
                return <Login/>
                break

                default:
                    break;
        }
        
    }
