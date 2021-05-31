import React from 'react'

function About() {
    return (
        <>
            <main id="about" className="lg:mx-60 lg:my-5 lg:relative h-screen content-center">
                <h2 className="text-center lg:w-full font-semibold text-3xl text-pink-400 border-b border-pink-400">About</h2>
                <div className="flex flex-col w-full py-8 lg:flex-row lg:py-20 lg:px-20 ">
                    <div className="mx-24 lg:mx-0 py-2 px-6 lg:px-2 w-3/5 ">
                        <img className="h-90 px-2 rounded-3xl" src="/img/IMG_20200706_043524_278.jpg" alt="imaage" />
                    </div>
                    <div className="mx-8 lg:py-28 lg:px-10 w-4/5">
                        <h2 className="text-4xl font-medium py-2">Hai saya Arief...</h2>
                        <p className="text-xl text-gray-600 leading-6">Saya memiliki minat dan bakat dibidang IT dan saya gemar mempelajari hal - hal yang berbau IT oleh karena itu saya mampu memahami hal-hal mengenai website dan juga berkarir sebagai Web Developper.</p>
                    </div>
                </div>
            </main>
        </>
    )
}

export default About
