import React from 'react'

const Products = () => {

    const cardData = [
        {
            title: 'PLASTIC TARPAULIN',
            image: 'https://m.media-amazon.com/images/I/61QKIL-NMfL._SX679_.jpg',
            description: "large sheet of strong, flexible, water - resistant or waterproof material, often cloth such as canvas or polyester coated with polyurethane, or made of plastics such as polyethylene."
        },
        {
            title: 'CHAINLINK FANCE',
            image: 'https://m.media-amazon.com/images/I/71UsMmTC8IL._SY879_.jpg',
            description: "securing and enclosing places like backyards, barns, penitentiaries, government facilities and construction sites"
        },
        {
            title: 'RUBBER MATS',
            image: 'https://m.media-amazon.com/images/I/61k7wd+O9JL._SX522_.jpg',
            description: "Cow mats are designed to absorb shock and provide cushioning, reducing stress on the animal's joints and hooves"
        },
        {
            title: 'SHEDNET',
            image: 'https://m.media-amazon.com/images/I/61K07cfQBmL._SX679_.jpg',
            description: "Shade Nets are lightweight knitted Polyethylene fabrics which are brought in use to bring about the protection from Sun's heat and the ultraviolet radiations which we or the plants might be exposed to unknowingly."
        },
        {
            title: 'PP ROPES',
            image: 'https://m.media-amazon.com/images/I/51x4MutNF1L.jpg',
            description: "strong, thick line or cord, commonly one composed of twisted or braided strands of hemp, flax, or the like, or of wire or other materia"
        },
        {
            title: 'DRIPE IRRIGATION ',
            image: 'https://m.media-amazon.com/images/I/81REARZuBLL.__AC_SX300_SY300_QL70_FMwebp_.jpg',
            description: "Drip irrigation involves placing tubing with emitters on the ground along side the plants."
        },
        {
            title: 'LENO BAGS',
            image: 'https://m.media-amazon.com/images/I/51k53SsiEPL.jpg',
            description: "wrapping a wide range of agricultural items such as shallot, ginger, potato, onion, pepper, citrus, and pineapple"
        },
        {
            title: 'MULCHING PAPER',
            image: 'https://m.media-amazon.com/images/I/51FV2PSnQlL.jpg',
            description: "balancing the moisture level of the soil, maintaining the temperature at the root level, improving the microbial activity, and any others"
        },
        {
            title: 'TOMATO CRATES',
            image: 'https://m.media-amazon.com/images/I/4110kdGJ8UL.jpg',
            description: "This crate has the holes or openings which allows air to pass, and the vegetable remains fresh for longer."
        },
        {
            title: 'GARDEN PIPES',
            image: 'https://m.media-amazon.com/images/I/71D6xZ7NtmL._SX679_.jpg',
            description: "A type of water pipe which is well known for its flexibility, durability, and is commonly used to flush out the water for all garden and landscaping purposes"
        },
        {
            title: 'WATER TANKS',
            image: '/tank.jpg',
            description: "used to store water and provide faster access to a water supply"
        },
        {
            title: 'PLASTIC MIRACLE ',
            image: 'https://m.media-amazon.com/images/I/61HcI8po5WL._SX679_.jpg',
            description: "spell bound magic of Plastic, adding colours and elegance to daily life"
        },
        {
            title: 'CHAF CUTTER',
            image: 'https://m.media-amazon.com/images/I/51rOut3KI8L._SL1200_.jpg',
            description: "A chaff cutter is a mechanical device for cutting straw or hay into small pieces before being mixed together with other forage and fed to horses and cattle."
        },
        {
            title: 'PLUMBIG MATERIAL',
            image: 'https://m.media-amazon.com/images/I/21Exr9OFVEL.jpg',
            description: "the system of pipes, tanks, fittings, and other apparatus required for the water supply, heating, and sanitation in a building"
        },
        {
            title: 'CHAINLINK MACHINES',
            image: 'https://www.securefencing.co.in/images/products/fully-automatic/fully-automatic-chain-link-machine.png',
            description: "Chain Link Fence Machine can make various specifications of chain link fences "
        },
        {
            title: 'PLASTIC WATER JARS',
            image: 'https://m.media-amazon.com/images/I/41F+0ZiAEQL._SX679_.jpg',
            description: "A water JAR is a container that is used to hold liquids, mainly water, for the purpose of transporting a drink while travelling "
        },
        {
            title: 'Polltry Equiptments',
            image: 'https://5.imimg.com/data5/SELLER/Default/2023/6/316773199/MJ/EO/FQ/93226681/poultry-equipment-500x500.jpg',
            description: "Useful for poultry and other farming."
        },
        {
            title: 'KNAPSAK BATTRY SPRAY PUMP',
            image: '/pump.jpg',
            description: "A battery sprayers are an agricultural and landscaping device used for spraying liquids such as pesticides"
        }
    ];

    const Card = ({ title, image, description }) => {
        return (
            <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                    <img className="h-40 rounded w-full object-cover object-center mb-6" src={image} alt="content" />
                    <h3 className="tracking-widest text-rose-400 text-xs font-medium title-font">{title}</h3>
                    <h2 className="text-lg text-white font-medium title-font mb-4">{title}</h2>
                    <p className="leading-relaxed text-base">{description}</p>
                </div>
            </div>
        );
    };



    return (
        <div>
            <section className="text-gray-400 body-font bg-gray-900">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">Products</h1>
                            <div className="h-1 w-20 bg-rose-500 rounded"></div>
                        </div>
                        <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
                            Empower your farm`&lsquo;`s growth with smart tools: harness water power for irrigation, nurture crops with targeted drip systems, and boost yields with weed-suppressing paper. Secure your space with strong, stylish chain link fences and conquer any weather with versatile plastic tarpaulins. Cultivate efficiency, abundance, and protection, all within reach.</p>
                    </div>
                    <div className="flex flex-wrap -m-4">


                        {cardData.map((card, index) => (
                            <Card key={index} title={card.title} image={card.image} description={card.description} />
                        ))}

                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products






















































































