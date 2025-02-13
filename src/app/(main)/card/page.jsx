import Link from "next/link"

export default async function Card({data}) {
    return (
            <div>
                <Link href={`/activities/${data.id}`}>
                <div className="flex justify-center flex-col my-[1rem] mx-[2rem] relative">
                    <img className="image-radius w-[100%] h-[22rem] object-cover" src={data.asset.url}/>
                    <div className="image-text-box p-[1rem] pl-[1.5rem] absolute bottom-0 w-[100%]">
                        <h3 className="font-medium text-[18px]">{data.name}</h3>
                        <p className="font-medium text-[18px]">{data.minAge}-{data.maxAge} år</p>
                    </div>
                </div>
                </Link>
        </div>
    )
}