import HeaderIcon from "./HeaderIcon"
import {HomeIcon,CollectionIcon,SearchIcon,UserIcon,BadgeCheckIcon,FireIcon} from "@heroicons/react/outline"
export default function Header() {
    return (
        <header className='flex flex-col items-center justify-between m-5 sm:flex-row'>
        
            <div> 
            {/* BRAND NAME  */}
            <h1 className='text-4xl font-black'>KOMANGGIKO.</h1>
            </div>
            {/* ICONS SECTION  */}
            <div className="flex flex-grow max-w-2xl h-auto justify-evenly">
             <HeaderIcon title='HOME' Icon={HomeIcon}/>
             <HeaderIcon title='COLLECTION' Icon={CollectionIcon}/>
             <HeaderIcon title='POPULAR' Icon={FireIcon}/>
             <HeaderIcon title='TOP' Icon={BadgeCheckIcon}/>
             <HeaderIcon title='SEARCH' Icon={SearchIcon}/>
             <HeaderIcon title='USER' Icon={UserIcon}/>
        </div>
        </header>
    )
}
