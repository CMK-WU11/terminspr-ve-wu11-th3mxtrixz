import Card from "@/app/(main)/card/page"
import Footer from "@/components/footer"
import Header from "@/components/header"
import Image from "next/image"

export default async function Activities() {
    const getActivities = await fetch(`http://localhost:4000/api/v1/activities`)
    const data = await getActivities.json()
    console.log("activities", data)

    return (
        <div>
            <Header manualTitle="Aktiviteter"/> 
            {data.map((item, index) => (
                <Card data={item} key={index}/>
            ))}
        </div>
    )
}