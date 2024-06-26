
import { Link } from "react-router-dom"

export const Header = () => {
return (
    <div className='w-full ' >
        <ul className='text-2xl font-semibold flex flex-col md:flex-row gap-10  justify-center '>
        <Link to={'/home'}>Home</Link>
        <Link to={'/about'}>About</Link>
        <Link to={'/contact'}>Contact</Link>
        </ul>
    </div>
)
}
