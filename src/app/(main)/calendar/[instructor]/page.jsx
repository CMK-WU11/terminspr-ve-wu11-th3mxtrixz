import ActivityDetails from "@/components/activity-details";
import Header from "@/components/header";
import { cookies } from "next/headers";

export default async function Instructor() {
    const cookieStore = await cookies()
    const uid = cookieStore.get("uid")
    const token = cookieStore.get("token")
    const role = cookieStore.get("role")

    const getActivities = await fetch(`http://localhost:4000/api/v1/activities`, {
        "method": "GET",
        "headers": {
            "Authorization": `Bearer ${token.value}`
        }
    })
    const data = await getActivities.json()
    const sortedId = data.filter(element => element.instructorId == uid.value)
    console.log(sortedId)
    console.log("activities", data)
    return (
        <>
        <Header manualTitle="Kalender"/>
        <div className="h-[100vh]">
            {sortedId.map((item) => (
                <div key={item.id}>
                    <ActivityDetails item={item}/>
                </div>
            ))}
        </div>
        </>
    )
}