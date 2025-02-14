import Footer from "@/components/footer";
import Card from "@/app/(main)/card/page";
import SearchFunction from "@/components/search-function";
import { CiSearch } from "react-icons/ci";

export default async function Search() {

    const activities = await fetch(`http://localhost:4000/api/v1/activities`)
    const data = await activities.json()
    console.log("activities", data)

    
    return (
        <>
            <SearchFunction data={data}/>
            <Footer/>
        </>
    )
}