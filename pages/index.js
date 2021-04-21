import Head from "next/head";
import Header from "../components/Header";
import Nav from "../components/Nav";
import Results from "../components/Results";
import requests from "../utils/requests";

export default function Home(props) {
  console.log(props);

  return (
    <div>
      <Head>
        <title>Hulu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export async function getServerSideProps(context) {
  try {
    const genre = context.query.genre;

    const res = await fetch(
      `https://api.themoviedb.org/3${requests[genre]?.url ?? requests.popular}`
    );
    const data = await res.json();

    return {
      props: {
        data: data.results,
      },
    };
  } catch (error) {
    console.log(error);
  }
}
