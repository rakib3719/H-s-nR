import AlmarisDesign from "../../../garbase/AlmarisDesign";
import Banner from "./Banner";
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
        </div>
    );
};

export default HomePage;