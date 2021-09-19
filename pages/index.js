import Head from 'next/head'
import Header from '../components/Header'
import Movies from '../components/Movies'
import Navigation from '../components/Navigation'
import requests from '../utils/requests'
export default function Home({results}) {
  
  return (
  <div> 
  <Head>
    <title>Komanggiko</title> 
  </Head>
  {/* HEADER + ICONS SECTION  */}
  <Header />
  {/* CONTENT NAVIGATION  SECTION */}
  <Navigation />
  {/* MOVIE SECTION  */}
  <Movies results={results}/>
  </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchPopular.url
    }`
  ).then((res) => res.json());

  // RETURN AS A PROP
  return {
    props: {
      results: request.results,
    },
  };
}

