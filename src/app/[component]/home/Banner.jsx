import Image from "next/image";
import bannerImg from '@/asset/images/banner.webp'

const Banner = () => {
    return (
        <div className="lg:flex max-w-[1500px] mx-auto px-12 bg-[#fff5ed] items-center">
            <section>
<h1 className="font-montserrat font-bold text-3xl lg:text-5xl">Luxury Hotel</h1>
<p className="font-lato">Immerse yourself in the epitome of luxury at Almaris, your premier destination in New York. Our hotel redefines elegance and comfort, offering an exquisite escape for discerning travelers.</p>

<button className="bg-[#ab8965]  text-white btn p-4 mt-8">   Book Your Stay </button>

            </section>
            <section className="mt-48">


                <Image  src={bannerImg} alt="Banner"/>
            </section>
        </div>
    );
};

export default Banner;