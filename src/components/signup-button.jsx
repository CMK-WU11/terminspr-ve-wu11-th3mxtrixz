"use client"

import { useEffect, useState } from "react"

export default function SignUpButton({ id, token, uid }) {
    const [isSignup, setIsSignup] = useState(false)

    async function handleButtonClick() {
        const addActivity = await fetch(`http://localhost:4000/api/v1/users/${uid}/activities/${id}`, {
                method: "POST",
                headers: {
                    "Authorization": `Bearer ${token}` 
                },
            })
            if (addActivity.ok) {
                setIsSignup(true)
            }
    }

    async function handleDeleteButtonClick() {
        const addActivity = await fetch(`http://localhost:4000/api/v1/users/${uid}/activities/${id}`, {
                method: "DELETE",
                headers: {
                    "Authorization": `Bearer ${token}` 
                },
            })
            if (addActivity.ok) {
                setIsSignup(false)
            }
    }

    // useEffect(() => {
    //     async function fetchUser() {
    //         const response = await fetch(`http://localhost:4000/api/v1/users/${uid}`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`
    //             }
    //         })
    //         const data = await response.json()
    //         setIsSignup(data.activities.some(element => element.id === id))
    //         console.log("user", data.activities.some(element => element.id === id))
    //         console.log("activId", id)
    //     } fetchUser()
    // }, [])

    useEffect(() => {
        
            fetch(`http://localhost:4000/api/v1/users/${uid}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            .then(res => res.json())
            .then(data =>{
                setIsSignup(data.activities.some(element => element.id === Number(id))) // Jeg tager id'et fra URL'en som er en string, men sammenligner med et number, derfor Number(id).

                // console.log("user", data.activities.some(element => element.id === Number(id)))
                // console.log("activId", id)
            })
        
    }, [])


    

    return (
        <>
        {isSignup ? <button onClick={handleDeleteButtonClick} className="bg-[#5E2E53] text-[#EAEAEA] h-[3.5rem] w-[60%] text-[18px] rounded-[10px] absolute bottom-[3rem] right-[1.5rem]">Forlad</button>
        : <button onClick={handleButtonClick} className="bg-[#5E2E53] text-[#EAEAEA] h-[3.5rem] w-[60%] text-[18px] rounded-[10px] absolute bottom-[3rem] right-[1.5rem]">Tilmeld</button>}
        </>
    )
}
