"use client"

import { LuHouse } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import CalendarIcon from "../../public/calendar.png"
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie" // Jeg valgte at installere "js-cookies" da jeg arbejder med client-side komponenter (useRouter) men Cookies() er kun tilgængeligt i server side i Next.js


export default function Footer() {
    const router = useRouter()
    const token = Cookies.get("token")

        function handleCalendarClick() {
            if(!token) {
                router.push("/login")
            } else {
                router.push("/calendar")
            }
        }

    return (
        <footer className="shadow-[0px_-15px_10px_0px_rgba(0,_0,_0,_0.1)] flex justify-around items-center h-[5rem] w-[100vw] bg-[#EAEAEA] sticky bottom-0">
            <div className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]">
                <Link href="/activities"><LuHouse/></Link>
            </div>
            <div className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]">
                <Link href="/search"><CiSearch/></Link>
            </div>
                <button className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]" onClick={handleCalendarClick}>
                    <Image src={CalendarIcon} alt="calendar icon"/>
                </button>
        </footer>
    )
}