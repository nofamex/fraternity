import Particle from '../components/Particle'
import ReactLoading from 'react-loading'
import Head from 'next/head'
import 'twin.macro'

function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="incereal.ico" type="image/x-icon" />
        <title>InCerials</title>
      </Head>
      <div tw="absolute flex flex-col w-full h-full justify-center items-center text-6xl md:text-9xl font-bold font-lobster">
        <p tw="text-primary">Coming Soon!</p>
        <ReactLoading type="bars" color="#fed058" width={150} />
      </div>
      <div tw="hidden md:block">
        <Particle />
      </div>
    </>
  )
}

export default Home
