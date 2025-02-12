"use client" 
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [showWelcomeButton, setShowWelcomeButton] = useState(false)

  useEffect(() => {
    setTimeout(() => {
    setShowWelcomeButton(!showWelcomeButton)
    }, 1500)
},[])

  return (
    <>
      <div className="front-page-img h-[100vh] w-[100vw]">
        <div className="flex justify-center flex-col h-full">
          <div className="mt-[20rem]">
            <h2 className="outline-purple text-[36px] ml-[2.5rem] leading-[0.7]">LANDRUP</h2>
            <i className=" outline-black text-[72px] ml-[2rem] leading-[0.8]">DANS</i>
            <div className="w-[60%] border-t-[1rem] border-[#913693] mt-[1rem]"></div>
            <Link href="/activities" className="flex justify-center mt-[15rem] relative">
            {showWelcomeButton && <button className="fade-in-right button-shadow absolute bg-[#5E2E53] text-[#EAEAEA] h-[4rem] w-[70%] text-[24px] rounded-[10px]">Kom i gang</button>}
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
