import Footer from "~/components/footer"
import Navigation from "~/components/navigation"

import logo from "/logoM.svg";

const AboutUs = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white text-black">

            <img src={logo} alt="" className="md:w-1/2 w-11/12 md:relative absolute top-5" />
            <Navigation />

            <div className="flex md:flex-row flex-col w-full min-h-screen bg-black mt-10">
                <div className="md:w-1/4 w-full md:h-screen h-auto">
                    <div className="flex items-center justify-center relative w-full md:h-2/6 h-64 bgHoverFive">
                        <span className="text-2xl font-semibold absolute top-10">Jahseh</span>
                    </div>
                    <div className="flex items-center justify-center relative w-full md:h-4/6 h-64 bgHoverThird">
                        <span className="text-2xl font-semibold absolute bottom-10">Jahseh</span>
                    </div>
                </div>
                <div className="flex md:w-1/4 w-full md:h-screen min-h-96 relative items-center justify-center bgHoverFirst">
                    <span className="text-2xl font-semibold absolute top-10">Young Jahseh</span>
                </div>
                <div className="md:w-1/4 w-full md:h-screen h-auto">
                    <div className="flex items-center justify-center relative w-full md:h-4/6 h-64 bgHoverFour">
                        <span className="text-2xl font-semibold absolute top-10">Jahseh</span>
                    </div>
                    <div className="flex items-center justify-center relative w-full md:h-2/6 h-64 bgHoverSecond">
                        <span className="text-2xl font-semibold absolute bottom-10">Jahseh</span>
                    </div>
                </div>
                <div className="md:flex hidden md:w-1/4 w-full h-screen relative items-center justify-center bgHoverKid">
                    <span className="text-2xl font-semibold absolute top-10">Kid Jahseh</span>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default AboutUs