import React from 'react'
import Button from '../components/Button'
import Navbar from '../components/Navbar'



function Hero() {
    return (
        <>
            <Navbar/>
            <main className="mb-48 lg:my-2 px-8 lg:px-20 py-20 content-center flex flex-col h-screen lg:flex-row lg:mx-60">
                <div className="py-2 lg:py-32 px-2">
                    <div className="hero-text">
                        <h2 className="text-3xl font-medium"> Hai saya <span className="text-pink-500 hover:text-pink-600"><a href="#a">Muhammad Arief</a></span></h2>
                        <h2 className="text-2xl text-gray-800">Dan saya seorang Web Developper</h2>
                        <p className="text-base text-gray-500 py-1 leading-5">Senang melalukan sesuatu yang baru dan  melakukan <br /> hal hal yang menyenangkan  dalam pekerjaan <br />maupun keseharian</p>
                    </div>
                    <a href="#about"><Button/></a>
                </div>
                <div className="px-16 lg:px-2 my-10 lg:my-0">
                    <img src="/img/Image.svg" alt="img" className="py-11 h-96 lg:pl-48 lg:absolute" />
                </div>
            </main>   
        </>
    )
}   

export default Hero

