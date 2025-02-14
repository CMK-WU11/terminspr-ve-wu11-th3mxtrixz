import Link from "next/link";

export default function ActivityDetails({item}) {
    return (
        <>
        <Link href={`/signedup-user`}>
            <div className="bg-white h-[6.5rem] rounded-xl my-[2rem] mx-[1rem]">
                <div className="p-[0.5rem] pl-[1rem]">
                    <h2 className="text-[30px]">{item.name}</h2>
                    <p className="text-[18px]">{item.weekday} {item.time}</p>
                </div>
            </div>
        </Link>
        </>
    )
}