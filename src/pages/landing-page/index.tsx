import { NavLink } from "react-router-dom";
import { Footer } from "../../components";

export default function LandingPage() {
    return (
        <div className="flex flex-col justify-center items-center">
            <header className="flex flex-row justify-between w-full p-4">
                <h1>LandingPage</h1>
                <h1>contact</h1>
            </header>
            <LandingPageCard />
            <LandingPageCard />
            <LandingPageCard />
            <LandingPageCard />
            <StartBtn />
            <Footer />
        </div>
    )
}

function LandingPageCard() {
    return (
        <div className='bg-red-400 w-11/12 h-24 rounded-lg mt-4'>

        </div>
    )
}

function StartBtn() {
    return (
        <>
            <div className="fixed bottom-0 flex justify-center items-center w-full h-72 bg-blue-400">
                <NavLink to="/register" className="flex justify-center items-center w-32 h-14 border border-black z-30 mb-20">Start</NavLink>
            </div>
        </>
    )
}