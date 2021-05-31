import React from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'

function Contact() {
    return (
        <>
            <main id="contact" className="lg:mx-60 my-10 py-10 content-center relative ">
                <h2 className="text-center w-full font-semibold text-3xl text-pink-400 border-b border-pink-400">Contact Me</h2>
                <div id="card" className="mx-10 lg:mx-0 py-20 justify-around flex flex-col lg:flex-row">
                    <Card 
                        imgUrl="/img/facebook.png"
                        title="Facebook"
                    />
                    <Card
                        imgUrl="/img/whatsapp.png"
                        title="WhatsApp"
                        link="https://api.whatsapp.com/send?phone=6285249575762"
                    />
                    <Card
                        imgUrl="/img/email.png"
                        title="Email" 
                    />
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default Contact
