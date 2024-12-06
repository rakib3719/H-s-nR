
import AllRooms from "../AllRooms/AllRooms";
import GalleryPage from "../GalleryPage/GalleryPage";
import Banner from "./Banner";
import Facilities from "./Facilites";
import OurRooms from "./OurRooms";
import RandomSection from "./RandomSection";
import SpecialOffers from "./SpecialOffers";

const HomePage = () => {
    return (
        <div className="max-w-[1400px] mx-auto">
            <Banner />
            <OurRooms/>
            <SpecialOffers/>
            <div>
                <h1 className="text-center mt-44 font-bold text-3xl py16">Facilites</h1>
            <Facilities/>

            </div>
            <RandomSection/>
            <AllRooms/>
            <GalleryPage/>
        </div>
    );
};

export default HomePage;