"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { z } from "zod"

// Alt er taget fra repitation med Brian og Din Mægler opgave (med enkelte ændringer)
export default async function Login(prevState, formData) {
    const username = formData.get("username")
    const password = formData.get("password")

    const schema = z.object({
        username: z.string().min(1, { message: "Du skal udfylde et brugernavn"}),
        password: z.string().min(1, { message: "Du skal udfylde et password"})
    })

    const validate = schema.safeParse({
        username,
        password
    })

    if (!validate.success) {
        return  {
            formData: {
                username,
                password
            },
            errors: validate.error.format()
        }
    }
    try {
        const response = await fetch("http://localhost:4000/auth/token/", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify({
                username,
                password
            })
        })
        
        
        if (response.status === 400) { // bad request
            return {
                formData: {
                    username,
                    password
                },
                error: "Forkert brugernavn eller password"
            }
        }
        
        const data = await response.json()
        
        const cookieStore = await cookies()
        cookieStore.set("token", data.token, { maxAge: 60 * 60 * 24})
        cookieStore.set("uid", data.userId, { maxAge: 60 * 60 * 24})
        cookieStore.set("role", data.role, { maxAge: 60 * 60 * 24})

        } catch (error) {
            throw new Error(error)
        }

        const cookieStore = await cookies()
        const role = cookieStore.get("role")
        
        if (role.value === "instructor") {
            redirect("/calendar/instructor")
            
        }else {
            redirect("/calendar")
        }
}