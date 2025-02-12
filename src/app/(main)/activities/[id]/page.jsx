import Footer from "@/components/footer"
import SignUpButton from "@/components/signup-button"

export default async function Activity({params}) {
    // const [showButton, setShowButton] = useState(false)

    // function handleShowButton(){
    //     if (showButton) {
    //         deleteCookie("token")
    //         deleteCookie("uid")
    //         // redirect("/login")
    //     }
    // }

    // async function fetchData() {
    //     try {
    //         const {id} = params
    //         const getActivities = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    //         const results = await getActivities.json()
    //     }
    // }
    

    const {id} = await params
    const getActivities = await fetch(`http://localhost:4000/api/v1/activities/${id}`)
    const data = await getActivities.json()
    console.log("activities", data)

    return (
        <>
        <div className="h-[100vh]">
            <div className="relative">
                <img src={data.asset.url} className="h-[10%] w-[100%] object-cover"/>
                <SignUpButton id={id} />
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