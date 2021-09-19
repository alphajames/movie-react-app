import Image from 'next/image'
import { ThumbUpIcon,DesktopComputerIcon,CalendarIcon } from '@heroicons/react/outline';
const Thumbnail = ({result}) =>  {
    const BASE_URL = "https://image.tmdb.org/t/p/original";

    // IMAGE SRC 
    const src = `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
    `${BASE_URL}${result.poster_path}`;
    return (
        <div className="p-4 group cursor-pointer transition duration-200 ease-in transform sm:hover:scale-105 hover:z-50">
         <Image
        layout="responsive"
        loader={() => src}
        src={src}
        height={1080}
        width={1920}
      />
      <div className="p-4"> 
      
        {/* MOVIE TITLE  */}
        <p className="text-2xl font-bold">
        {result.title || result.original_name}
      </p>

      {/* MOVIE DESCRIPTION  */}
      <p className="truncate opacity-60 max-w-md">{result.overview}</p>

      {/* MOVIE STATS  */}
      <p className="flex items-center py-2 opacity-0 group-hover:opacity-100"> 
      <DesktopComputerIcon className="h-5 mx-2" />{result.media_type && `${result.media_type}`}  
      <CalendarIcon className="h-5 mx-2" />{result.release_date || result.first_air_date}  
      <ThumbUpIcon className="h-5 mx-2"/> {result.vote_count}
      </p>

      </div>
        </div>
    )
}

export default Thumbnail;
