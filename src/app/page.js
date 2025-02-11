import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="front-page-img h-[100vh] w-[100vw]">
        <div className="text-[36px] flex justify-center flex-col h-full">
          <h2 className="roboto-font">LANDRUP</h2>
          <i className="text-[#E1A1E9] border-b-[1rem] border-[#913693] racing-sans-one-regular">DANS</i>
          <Link href="/activities" className="flex justify-center">
            <button className="bg-[#5E2E53] text-[#EAEAEA] h-[4rem] w-[80%] text-[24px] rounded-[10px]">Kom i gang</button>
          </Link>
        </div>
      </div>
    </>
  )
}
