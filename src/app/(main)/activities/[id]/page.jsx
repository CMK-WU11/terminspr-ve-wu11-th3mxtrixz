import Footer from "@/components/footer"

export default async function Activity({params}) {
    const {id} = await params
    const getActivities = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const data = await getActivities.json()
    console.log("activities", data)

    return (
        <>
        <div className="h-[100vh]">
            <div className="relative">
                <img src={data.asset.url} className="h-[10%] w-[100%] object-cover"/>
                <button className="bg-[#5E2E53] text-[#EAEAEA] h-[3.5rem] w-[60%] text-[18px] rounded-[10px] absolute bottom-[3rem] right-[1.5rem]">Tilmeld</button>
            </div>
            <div className="p-[1rem] text-white">
                <h3 className="text-[24px]">{data.name}</h3>
                <h3 className="text-[18px]">{data.minAge}-{data.maxAge} år</h3>
                <p className="text-[18px]">{data.weekday} - kl. {data.time}</p>
                {/* <p>{data.weekday} kl. {data.time} | {data.minAge}-{data.maxAge} år</p> */}
                <p className="text-[18px]">{data.description}</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}