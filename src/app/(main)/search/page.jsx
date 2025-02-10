import Header from "@/components/header";
import Footer from "@/components/footer";
import Card from "@/app/(main)/card/page";
import { CiSearch } from "react-icons/ci";


export default async function Search() {
    const getActivities = await fetch(`http://localhost:4000/api/v1/activities`)
    const data = await getActivities.json()

    return (
        <div>
            <header className="h-[8rem] sticky top-0 bg-[#5E2E53] z-[10] px-[2rem] my-[1rem]">
                <h1>Søg</h1>
                <div className="flex items-center relative mt-[0.5rem] mb-[3rem]">
                    <input className="opacity-[30%] h-[3rem] w-[100%] p-[0.5rem]" type="search"/>
                    <CiSearch className="text-white absolute right-1 text-[36px]"/>
                </div>
            </header>
            {data.map((data, index) => (
                <Card data={data} key={index}/>
            ))}
            <Footer/>
        </div>
    )
}