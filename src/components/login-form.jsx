"use client"

import Login from "@/actions/login"
import { useActionState, useEffect } from "react"

// Alt er taget fra repitation med Brian (med enkelte ændringer)
export default function LoginForm() {
    const [formState, formAction, isPending] = useActionState(Login, null)

    useEffect(() => {
        console.log("formState", formState)
    }, [formState])

    return (
        <form action={formAction} noValidate className="w-full">
            <div>
                <label>
                    <input
                        className="h-12 w-80 my-4 p-2 text-lg"
                        type="text"
                        name="username"
                        placeholder="Brugernavn"
                        defaultValue={formState?.formData?.username}
                    />
                </label>
                {formState?.errors?.username && (
                    <span className="block text-red-700">{formState.errors.username._errors[0]}</span>
                )}
            </div>
            <div>
                <label>
                    <input
                        className="h-12 w-80 p-2 text-lg"
                        type="password"
                        name="password"
                        placeholder="Adgangskode"
                        defaultValue={formState?.formData?.password}
                    />
                </label>
                {formState?.errors?.password && (
                    <span className="block text-red-700">{formState.errors.password._errors[0]}</span>
                )}
            </div>
            <div className="flex flex-col items-center">
                {formState?.error && <span className="text-red-700">{formState.error}</span>}
                <button disabled={isPending} type="submit" className="bg-[#5E2E53] text-[#EAEAEA] text-lg rounded-xl h-12 w-60 mt-4 button-shadow">{isPending ? "Logger ind.." : "Log ind"}</button>
            </div>
        </form>
    )
}
