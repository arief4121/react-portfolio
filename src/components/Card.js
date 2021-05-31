import React from 'react'

function Card(props) {
    return (
        <div>
            <div className="my-2 mx-5 bg-white w-72 justify-center items-center py-5 px-8 rounded-3xl border-4 border-pink-400 hover:shadow-2xl">
                <h2 className="text-center font-medium text-pink-400 text-2xl">{props.title}</h2>
                <img src={props.imgUrl} alt="ima" className="h-32 w-32 mx-10"/>
                <div className="text-center">
                    <p className="text-gray-500 py-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum, recusandae?</p>
                    <a href={props.link}><button className="bg-blue-500 py-1 px-5 rounded-xl text-white hover:bg-blue-800 focus:outline-none">Get</button>
                    </a> 
                </div>
            </div>
        </div>
    )
}

export default Card
