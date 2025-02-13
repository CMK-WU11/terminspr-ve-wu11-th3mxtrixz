import { LuHouse } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import CalendarIcon from "../../public/calendar.png"
import Link from "next/link";
import Image from "next/image";
import { cookies } from "next/headers";

export default async function Footer() {
    const cookieStore = await cookies()
    const role = cookieStore.get("role")

    return (
        <footer className="footer-shadow flex justify-around items-center h-[5rem] w-[100vw] bg-[#EAEAEA] sticky bottom-0">
            <div className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]">
                <Link href="/activities"><LuHouse/></Link>
            </div>
            <div className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]">
                <Link href="/search"><CiSearch/></Link>
            </div>
            <Link href={role === "instructor" ? '/calendar/instructor' : '/calendar'} className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]">
                    <Image src={CalendarIcon} alt="calendar icon"/>
                </Link>
        </footer>
    )
}