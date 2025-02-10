import { LuHouse } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import CalendarIcon from "../../public/calendar.png"
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="shadow-[0px_-15px_10px_0px_rgba(0,_0,_0,_0.1)] flex justify-around items-center h-[5rem] w-[100vw] bg-[#EAEAEA] sticky bottom-0">
            <div className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]">
                <Link href="/activities"><LuHouse/></Link>
            </div>
            <div className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]">
                <Link href="/search"><CiSearch/></Link>
            </div>
            <div className="border-2 border-black text-[24px] rounded-[50%] p-[0.5rem]">
                <Link href="/calendar"><Image src={CalendarIcon} alt="calendar icon"/></Link>
            </div>
        </footer>
    )
}