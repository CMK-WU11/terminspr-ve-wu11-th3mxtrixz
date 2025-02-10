export default async function Activity({params}) {
    const {id} = await params
    const getActivities = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const data = await getActivities.json()
    console.log("activities", data)

    return (
        <div>

        </div>
    )
}