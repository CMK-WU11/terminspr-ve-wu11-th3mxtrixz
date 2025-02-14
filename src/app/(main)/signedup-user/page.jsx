import Header from "@/components/header";

export default async function SignedUpUser() {

    const getSignUpUser = await fetch(`http://localhost:4000/api/v1/activities`)
    const signedUp = await getSignUpUser.json()
    const users = signedUp.users

    console.log("eh", signedUp)
    
    console.log("signed up", signedUp)
    return (
        <>
        <header className="px-[2rem] py-[1rem] sticky top-0 bg-[#5E2E53] z-[10]">
            <h1>{signedUp.name}</h1>
        </header>
        <div className="h-[100vh]">
            {/* {users.map((item, index) => (
                <div key={index}>
                    <h1>{item.firstname}</h1>
                </div>
            ))} */}
        </div>
        </>
    )
}