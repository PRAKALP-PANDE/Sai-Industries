import React from 'react'
import heroimg from "../assets/Hero.jpeg"
import sectionimg from "../assets/Sectionh.jpeg"
import Services from './Services'

const Hero = () => {
    return (
        <div>
            <section className="text-white-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">SAI INDUSTRIES,
                            <br className="hidden lg:inline-block" />Awasari.
                        </h1>
                        <p className="mb-8 leading-relaxed">Empower your farm`&apos;`s growth with smart tools: harness water power for irrigation, nurture crops with targeted drip systems, and boost yields with weed-suppressing paper. Secure your space with strong, stylish chain link fences and conquer any weather with versatile plastic tarpaulins. Cultivate efficiency, abundance, and protection, all within reach.</p>
                    </div>
                    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src={heroimg} />
                    </div>
                </div>
            </section>
            <section className="text-white bg-gray-900 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    <div className="lg:w-4/5 mx-auto flex flex-wrap">
                        <img alt="ecommerce" className="lg:w-1/2 w-full h-64 object-cover object-center rounded" src={sectionimg} />
                        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                            <h2 className="text-sm title-font text-white-500 tracking-widest">BRAND NAME</h2>
                            <h1 className="text-white text-3xl title-font font-medium mb-1">WHO WE ARE?</h1>
                            <p className="leading-relaxed">Sai Industries, is a modern manufacturing an ISO 9001-2015 certified company with wide range of Industrial, Agricultural, Infrastructural, Automobile, Power generation & Compressor components. Which includes all kind of valves such as Ball valve, Butterfly valve & Globe valves, Agricultural equipments, Construction equipments, Hydraulic & Pneumatic fitments, etc .</p>
                        </div>
                    </div>
                </div>
                <hr className='w-48 h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-gray-700' />
            </section>
            <Services />

        </div>
    )
}

export default Hero