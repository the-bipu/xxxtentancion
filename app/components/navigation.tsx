import { useEffect, useState } from "react";

const Navigation = () => {
    const [navStatus, setNavStatus] = useState(false);

    useEffect(() => {
        if (navStatus) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [navStatus]);

    return (
        <div className='absolute w-full h-auto flex items-center justify-center top-0 left-0'>
            <div className='fixed top-10 w-11/12 h-auto flex items-center justify-end z-20'>
                <span className='text-black text-xl cursor-pointer z-20 backdrop-blur' onClick={() => setNavStatus(!navStatus)}>
                    {navStatus ? 'Close' : 'Menu'}
                </span>
            </div>
            <div className={`fixed w-full h-screen bg-[#acacac] left-0 top-0 ${navStatus ? 'flex' : 'hidden'} items-center justify-center z-10`}>
                <div className="flex flex-row text-black gap-3">
                    <div className="cursor-pointer transition-all hover:underline">
                        <a href='/'>Home</a>
                    </div> |
                    <div className="cursor-pointer transition-all hover:underline">
                        <a href="/about-us">About Us</a>
                    </div> |
                    <div className="cursor-pointer transition-all hover:underline">
                        <a href="/gallery">Gallery</a>
                    </div> |
                    <div className="cursor-pointer transition-all hover:underline">
                        <a href="/no-policies">No Policies</a>
                    </div> |
                    <div className="cursor-pointer transition-all hover:underline">
                        <a href="/contact-us">Contact Us</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation