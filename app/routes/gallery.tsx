import Footer from "~/components/footer"
import Navigation from "~/components/navigation"

import logo from "/logoM.svg";

export const meta = () => [
    { title: "Gallery - XXXTENTACION" },
    { name: "description", content: "XXXTENTACION" },
];

const Gallery = () => {
    return (
        <div className="flex flex-col items-center justify-center w-full min-h-screen bg-white text-black">

            <img src={logo} alt="" className="md:w-1/2 w-11/12 md:relative absolute top-5" />
            <Navigation />

            <div id='images-wrapper' className={`flex flex-row flex-wrap mb-8 mt-16 items-center justify-start gap-8`}>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/tenten.jpg' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/tentan1.png' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/tentan3.png' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/tentan4.png' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/tentan5.png' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/kid.png' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/tentan6.jpg' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/tentan7.jpg' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/tentan8.jpg' alt='' className='w-full h-auto object-cover rounded' />
                </div>
                <div className='flex flex-col items-center justify-center gap-10 md:w-96 w-full relative'>
                    <img src='/assets/grid/tentan9.jpg' alt='' className='w-full h-auto object-cover rounded' />
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default Gallery