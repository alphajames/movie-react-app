import requests from '../utils/requests';
import {useRouter} from 'next/router'
export default function Navigation() {
    const router = useRouter();
    return (
        <nav className="relative">
            <div className="flex text-1xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide px-10 sm:px-20"> 
            {/* GENRE SECTION */}
            {Object.entries(requests).map(([key,{title,url}]) => (<h1 className="last:pr-24 font-semibold cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500" key={key} onClick={()=> router.push(`/?genre=${key}`)}> {title}</h1>) )}
            </div>
            <div className="absolute top-0 right-0 bg-gradient-to-l from-[#18191b] h-10 w-1/12" />
        </nav>
    )
}
 