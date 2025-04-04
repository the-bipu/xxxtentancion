import x from '/logos/x.svg';
import yt from '/logos/yt.svg';
import spotify from '/logos/spotify.svg';
import insta from '/logos/insta.svg';
import fb from '/logos/fb.svg';
import apple from '/logos/apple.svg';

const Footer = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-10 items-center justify-center py-20 bg-white">
            <div className="flex flex-row gap-2">
                <img src={x} alt="" className="w-10 cursor-pointer" />
                <img src={yt} alt="" className="w-10 cursor-pointer" />
                <img src={spotify} alt="" className="w-10 cursor-pointer" />
                <img src={apple} alt="" className="w-10 cursor-pointer" />
                <img src={fb} alt="" className="w-10 cursor-pointer" />
                <img src={insta} alt="" className="w-10 cursor-pointer" />
            </div>
            <div className="flex flex-row text-black text-sm gap-3">
                <a href='/about-us' className="cursor-pointer transition-all hover:underline">About Us</a> |
                <a href='/gallery' className="cursor-pointer transition-all hover:underline">Gallery</a> |
                <a href='/no-policies' className="cursor-pointer transition-all hover:underline">No Policies</a> |
                <a href='/contact-us' className="cursor-pointer transition-all hover:underline">Contact Us</a>
            </div>
        </div>
    )
}

export default Footer