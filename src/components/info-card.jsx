export default async function InfoCard() {
    const getActivities = await fetch(`http://localhost:4000/api/v1/activities`)
    const data = await getActivities.json()
    return (
        <div>

        </div>
    )
}