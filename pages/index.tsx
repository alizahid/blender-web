import { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'

const Home: NextPage = () => (
  <>
    <Head>
      <title>Blender for Render</title>
    </Head>

    <header className="flex items-center m-8 leading-none">
      <img className="h-12" src="/blender.svg" />
      <div className="ml-4">
        <h1 className="text-2xl font-semibold">Blender</h1>
        <h2 className="flex items-center mt-2">
          for
          <img className="h-4 w-4 mx-2" src="/render.svg" />
          Render
        </h2>
      </div>
    </header>
    <main className="m-8">
      <section>
        <p className="text-gray-700">Blender is a mobile client for Render.</p>
      </section>
      <section className="mt-8">
        <h2 className="font-medium">Download</h2>
        <a
          className="inline-block bg-primary text-white hover:text-white font-medium rounded-lg p-3 mt-4"
          href="https://testflight.apple.com/join/NS8d3C7s">
          TestFlight
        </a>
      </section>
    </main>
    <footer className="m-8">
      <p className="text-sm text-gray-600">
        {new Date().getFullYear()} / Built by{' '}
        <a href="https://alizahid.dev">Ali Zahid</a> for{' '}
        <a href="https://render.com">Render</a>
      </p>
    </footer>
  </>
)

export default Home
