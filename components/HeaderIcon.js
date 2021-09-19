export default function HeaderIcon({title,Icon}) {
    return (
        <div className="flex flex-col items-center cursor-pointer w-10 sm:w-20 group">
            <Icon className='h-6 mb-1 mt-4 group-hover:animate-pulse duration-75'/>
            <p className="text-sm opacity-0 group-hover:opacity-100 group-hover:animate-pulse duration-75">{title}</p>
        </div>
    )
}
