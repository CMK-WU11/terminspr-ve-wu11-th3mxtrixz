import AddedActivity from "@/components/added-activity";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { cookies } from "next/headers";

export default async function Calendar() {
    const cookieStore = await cookies()
    const uid = cookieStore.get("uid")
    const token = cookieStore.get("token")

    const getActivities = await fetch(`http://localhost:4000/api/v1/users/${uid.value}`, {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token.value}`
        }
    })
    const data = await getActivities.json()
    
    console.log("activities", data)
    return (
        <>
        <Header manualTitle="Kalender"/>
        <div className="h-[100vh]">
            {data.activities.map((item) => (
                <div key={item.id}>
                    <AddedActivity item={item}/>
                </div>
            ))}
        </div>
        <Footer/>
        </>
    )
}