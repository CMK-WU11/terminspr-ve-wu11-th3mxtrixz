import LoginForm from "@/components/login-form";

export default function Login() {
    return (
        <div className="front-page-img h-[100%] w-[100vw] flex flex-col items-center justify-center relative">
            <div className="diagonal-box absolute px-[10rem] py-[150%]">
                <div className="opposite-rotate">
                    <h2 className="text-white text-[36px]">Log ind</h2>
                    <LoginForm/>
                </div>
            </div>
        </div>
    )
}