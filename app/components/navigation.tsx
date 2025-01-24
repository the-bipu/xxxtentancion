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
                <span className='text-black text-xl cursor-pointer z-20' onClick={() => setNavStatus(!navStatus)}>Menu</span>
            </div>
            <div className={`fixed w-full h-screen bg-gray-400 left-0 top-0 ${navStatus ? 'flex' : 'hidden'} items-center justify-center z-10`}>
                <div className="flex flex-row text-black gap-3">
                    <div className="cursor-pointer transition-all hover:underline">Home</div> |
                    <div className="cursor-pointer transition-all hover:underline">About Us</div> |
                    <div className="cursor-pointer transition-all hover:underline">Gallery</div> |
                    <div className="cursor-pointer transition-all hover:underline">No Policies</div> |
                    <div className="cursor-pointer transition-all hover:underline">Contact Us</div>
                </div>
            </div>
        </div>
    )
}

export default Navigation