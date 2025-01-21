import { ButtonIcon } from '@radix-ui/react-icons'

const Navigation = () => {
    return (
        <div className='absolute w-full h-auto flex items-center justify-center top-10'>
            <div className='w-11/12 h-auto flex items-center justify-end'>
                <span className='text-black text-xl cursor-pointer z-20'>Menu</span>
            </div>
        </div>
    )
}

export default Navigation