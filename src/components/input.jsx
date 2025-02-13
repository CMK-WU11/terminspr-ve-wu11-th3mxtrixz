"use client"
export default function Input() {
    
    function getSearch(event) {
        document.getElementById(event.target.value)
        console.log(getSearch)
    }

    return (
        <input className="opacity-[30%] h-[3rem] w-[100%] p-[0.5rem]" 
        type="search" 
        value={found}
        onChange={getSearch}/>
    )
}