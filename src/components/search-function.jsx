"use client"
import Card from "@/app/(main)/card/page";
import { useEffect, useState } from "react"
import { CiSearch } from "react-icons/ci";

export default function SearchFunction({data}) {
    const [searchValue, setSearchValue] = useState("")
    const [searchData, setSearchData] = useState([])
        
    function getSearch(event) {
        setSearchValue(event.target.value)
    }
    console.log("søg for helvede", getSearch)
        
    useEffect(() => { 
        if (searchValue === "") {
            setSearchData([]) // Reseter searchData når searchValue er tomt
            } else {
                setSearchData(data.filter(element => 
                element.name.toLowerCase().includes(searchValue.toLowerCase())))
            }
        }, [searchValue, data])

    console.log("data", data)

    console.log("search", searchValue)

    return (
        <div className="h-[90.5vh]">
            <header className="h-[8rem] sticky top-0 bg-[#5E2E53] z-[10] px-[2rem] py-[1rem]">
                <h1>Søg</h1>
                <div className="flex items-center relative mt-[0.5rem] mb-[3rem]">
                    <input className="opacity-[30%] h-[3rem] w-[100%] p-[0.5rem]" type="text" onChange={getSearch} />
                    <CiSearch className="text-white absolute right-1 text-[36px]"/>
                </div>
            </header>
            {searchValue === "" ? <span className="m-[1rem] items-center flex text-white text-[18px]">Der blev ikke fundet nogle aktiviteter. Prøv at søge efter noget andet.</span> : null}
            {searchData.map((data, index) => (
                <Card data={data} key={index}/>
            ))}
        </div>
    )
}