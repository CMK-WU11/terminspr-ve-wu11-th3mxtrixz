"use client"

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react"

export default function Header({ manualTitle }) {
    // Alt med "manualTitle" at gøre er taget fra "Din Mægler" opgave.  
    const [title, setTitle] = useState("")
    const pathName = usePathname().split("/")[1]

    useEffect(() => {
        setTitle(pathName.toUpperCase());
    }, [pathName])

    return (
        <header className="px-[2rem] py-[1rem] sticky top-0 bg-[#5E2E53] z-[10]">
            <h1>{manualTitle ? manualTitle : title}</h1>
        </header>
    )
}