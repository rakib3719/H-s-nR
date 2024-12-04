import AlmarisDesign from "../../../garbase/AlmarisDesign";
import Banner from "./Banner";
import Facilities from "./Facilites";
import OurRooms from "./OurRooms";
import RandomSection from "./RandomSection";
import SpecialOffers from "./SpecialOffers";

const HomePage = () => {
    return (
        <div>
            <Banner />
            <OurRooms/>
            <SpecialOffers/>
            <RandomSection/>
            <Facilities/>
        </div>
    );
};

export default HomePage;