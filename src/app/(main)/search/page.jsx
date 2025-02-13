import Footer from "@/components/footer";
import Card from "@/app/(main)/card/page";
import { CiSearch } from "react-icons/ci";
// import { useEffect, useState } from "react";


export default async function Search() {

        const getActivities = await fetch(`http://localhost:4000/api/v1/activities`)
    const data = await getActivities.json()
    console.log("activities", data)
    // const [getSearchValue, setSearchValue] = useState()
    // const [searchData, setSearchData] = useState()
    
    // function getSearch(event) {
    //     setSearchValue(event.target.value)
    //     console.log(getSearch)
    // }
    
    // useEffect(() => {
    //     async function fetchSearchActivities() {
    //         const getActivities = await fetch(`http://localhost:4000/api/v1/activities`)
    //         const data = await getActivities.json()
    //         setSearchData(data.activities.filter((activities) => activities.name.includes(search.toLowerCase())))
    //     }
    // })

    // useEffect(() => {

    // })

    return (
        <div>
            <header className="h-[8rem] sticky top-0 bg-[#5E2E53] z-[10] px-[2rem] my-[1rem]">
                <h1>Søg</h1>
                <div className="flex items-center relative mt-[0.5rem] mb-[3rem]">
                    <input className="opacity-[30%] h-[3rem] w-[100%] p-[0.5rem]" type="search" value={""} />
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