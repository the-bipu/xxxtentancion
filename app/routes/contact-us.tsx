import Footer from "~/components/footer"
import Navigation from "~/components/navigation"

import logo from "/logoM.svg";

import kid from '/assets/grid/kid-square.png';

export const meta = () => [
    { title: "Contact Us - XXXTENTACION" },
    { name: "description", content: "XXXTENTACION" },
];

const ContactUs = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white text-black">

            <img src={logo} alt="" className="md:w-1/2 w-11/12 md:relative absolute top-5" />
            <Navigation />

            <div className="flex flex-col gap-4 w-11/12 h-auto py-10">

                <img src={kid} alt="" className="w-72" />

                <div className="font-bold text-xl">Bitch,</div>
                <div className="font-normal text-base text-justify">
                    We only have one rule which is <br />
                    Don't ever follow any Rule.
                </div>
                
            </div>

            <Footer />
        </div>
    )
}

export default ContactUs