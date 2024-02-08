import React from 'react'
import banner from "../assets/banner.jpeg"

const About = () => {
    return (
        <div>
            <div>
                {/* Hero Section */}
                <section className="relative">
                    <div className="h-fit flex items-center justify-center">
                        <img src={banner} alt="Slide 1" className="w-full h-auto" />
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center text-yellow-400 text-center">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Welcome to a SAI INDUSTRIES</h2>
                            <p className="text-rose-100">Discover a wide range of nutrition products to support your wellness journey.</p>
                        </div>
                    </div>
                </section>

                <section>

                    <div className="container px-5 py-24 mx-auto">
                        <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="inline-block w-8 h-8 text-gray-500 mb-8" viewBox="0 0 975.036 975.036">
                                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
                            </svg>
                            <p className="leading-relaxed text-lg">At <b>SAI INDUSTRIES </b>, we understand the delicate dance between nurturing the land and maximizing its bounty. That`&lsquo;`s why we offer a curated selection of cutting-edge agricultural tools designed to empower your growth, optimize resource utilization, and elevate your yields.
                                <br />
                                <b>Chain link fences</b> offer a timeless blend of durability, versatility, and affordability. These galvanized steel meshes provide robust physical barriers, ideal for securing your property, enclosing pets, or defining boundaries. Available in various heights and mesh sizes, they suit diverse needs, from deterring unwanted trespassers to protecting vegetable gardens from critters. Their open weave allows light and air to pass through, maintaining an airy feel while offering clear visibility. Choose from classic silver galvanized finishes or opt for sleek black or green coatings for a contemporary touch.
                                <br />
                                <b>Plastic tarpaulins</b> are the ultimate all-weather warriors. These heavy-duty, waterproof sheets offer a multitude of uses, whether protecting your belongings from rain and sun, shielding outdoor work areas from wind and dust, or creating temporary shelters for events. Constructed from strong, tear-resistant materials like polyethylene or PVC, they come in various sizes and thicknesses to tackle anything from light drizzles to heavy storms. Need to cover a large area? Simply join multiple tarpaulins together for seamless protection. Their lightweight nature makes them easy to manage and maneuver, while reinforced eyelets allow for secure tying down.
                            </p>
                            <span className="inline-block h-1 w-10 rounded bg-rose-500 mt-8 mb-6"></span>
                            <h2 className="text-white font-medium title-font tracking-wider text-sm">OMKAR GAWADE</h2>
                            <p className="text-gray-500">Senior Product Manager</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default About