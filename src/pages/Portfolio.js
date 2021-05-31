import React from 'react'
import Card from '../components/Card'

function Portfolio() {
    return (
        <>
            <main id="port" className="my-10 py-10 content-center lg:relative lg:mx-60 ">
                <h2 className="text-center w-full font-semibold text-3xl text-pink-400 border-b border-pink-400">My Portfolio</h2>
                <div id="card" className="mx-20 lg:mx-0 py-20 justify-around flex flex-col lg:flex-row ">
                    <Card 
                        imgUrl="/img/react.png"
                        title="React Js"
                        />
                    <Card
                        imgUrl="/img/tailwind.svg"
                        title="Tailwind CSS"/>
                    <Card
                        imgUrl="/img/node.png"
                        title="Node Js" 
                    />
                </div>
            </main>
        </>
    )
}

export default Portfolio
