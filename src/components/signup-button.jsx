"use client"
import { useState, useEffect } from "react"
import Cookies from "js-cookie"

export default function SignUpButton({ id }) {
    const [showButton, setShowButton] = useState(false)
    const [buttonText, setButtonText] = useState("")
    const authToken = Cookies.get("token")
    const uid = Cookies.get("uid")

    const bearer = 'Bearer ' + authToken

    useEffect(() => {
        if (uid) {
            setShowButton(true)
            setButtonText("Tilmeld")
        } else {
            setShowButton(false)
        }
    }, [])

    function handleButtonClick() {
        if (buttonText === "Tilmeld") {
            fetch(`http://localhost:4000/api/v1/users/${uid}/activities/${id}`, {
                method: "POST",
                headers: {
                    "Authorization": bearer 
                },
            })
                .then((response) => response.json())
                .then((data) => {
                    console.log("Activity added:", data)
                })
                .catch((error) => {
                    console.error("Error adding activity:", error)
                })
        } else {
            // Tilføje instruktør logik
        }
    }

    return (
        <>
            {showButton && (
                <button 
                    onClick={handleButtonClick} 
                    className="bg-[#5E2E53] text-[#EAEAEA] h-[3.5rem] w-[60%] text-[18px] rounded-[10px] absolute bottom-[3rem] right-[1.5rem]">
                    {buttonText}
                </button>
            )}
        </>
    )
}
