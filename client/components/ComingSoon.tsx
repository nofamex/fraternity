import Particle from '../components/Particle'
import ReactLoading from 'react-loading'
import Head from 'next/head'

function ComingSoon() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Fredoka+One&family=Lobster&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div tw="absolute flex flex-col w-full h-full justify-center items-center text-8xl font-bold font-lobster">
        <p tw="text-primary">Coming Soon</p>
        <ReactLoading type="bars" color="#fed058" width={150} />
      </div>
      <Particle />
    </>
  )
}

export default ComingSoon
