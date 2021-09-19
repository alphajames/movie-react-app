const API_KEY = process.env.API_KEY;

export default { 
    fetchPopular: { 
        title: "Popular",
        url:`/trending/all/week?api_key=${API_KEY}&language=en-US`
    },
    fetchTop:{
        title:"Top",
        url:`/movie/top_rated?api_key=${API_KEY}&language=en-US`
    },
    fetchAction: { 
        title:"Action",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=28`
    },
    fetchComedy:{
        title:"Comedy",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=35`
    },
    fetchHorror:{
        title:"Horror",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=27`
    },
    fetchRomanceMovies: { 
        title:"Romance",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10749`
    },
    fetchMystery: { 
        title:"Mystery",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=9648`
    },
    fetchSciFi: { 
        title:"SciFi",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=878`
    },
    fetchWestern: { 
        title:"Western",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=37`
    },
    fetchAnimation: { 
        title:"Animation",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=16`
    },
    fetchTV: { 
        title:"TV Series",
        url:`/discover/movie?api_key=${API_KEY}&with_genres=10770`
    }
}