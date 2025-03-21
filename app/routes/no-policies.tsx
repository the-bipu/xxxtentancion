import Footer from "~/components/footer"
import Navigation from "~/components/navigation"

import logo from "/logoM.svg";

import kid from '/assets/grid/kid-square.png';

export const meta = () => [
    { title: "No Policies - XXXTENTACION" },
    { name: "description", content: "XXXTENTACION" },
];

const NoPolicies = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white text-black">

            <img src={logo} alt="" className="md:w-1/2 w-11/12 md:relative absolute top-5" />
            <Navigation />

            <div className="flex flex-col gap-4 w-11/12 h-auto py-10">

                <img src={kid} alt="" className="w-72" />

                <div className="font-bold text-xl">Bitch,</div>
                <div className="font-normal text-base text-justify">
                Our only rule is: <strong>Never follow a rule.</strong>
                </div>
                
            </div>

            <Footer />
        </div>
    )
}

export default NoPolicies