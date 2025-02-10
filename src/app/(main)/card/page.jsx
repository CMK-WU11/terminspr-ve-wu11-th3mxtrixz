import Footer from "@/components/footer"
import Header from "@/components/header"
import Image from "next/image"
import Link from "next/link"

export default async function Card() {
    const getActivities = await fetch(`http://localhost:4000/api/v1/activities`)
    const data = await getActivities.json()
    
    console.log("activities", data)
    return (
            <div>
            {data.map((data, index) => (
                <Link href={`/activities/${data.id}`}>
                <div key={index} className="flex justify-center flex-col my-[1rem] mx-[2rem] relative">
                    <img className="image-radius w-[100%] h-[22rem] object-cover" src={data.asset.url}/>
                    <div className="image-text-box p-[1rem] pl-[1.5rem] absolute bottom-0 w-[100%]">
                        <h3 className="font-medium text-[18px]">{data.name}</h3>
                        <p className="font-medium text-[18px]">{data.minAge}-{data.maxAge} år</p>
                    </div>
                </div>
                </Link>
            ))}
        </div>
    )
}