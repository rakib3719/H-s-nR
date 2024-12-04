import Banner from "./Banner";
import Facilities from "./Facilites";
import OurRooms from "./OurRooms";
import SpecialOffers from "./SpecialOffers";

const HomePage = () => {
    return (
        <div className="">
            <Banner />


            <OurRooms/>
            <SpecialOffers/>
            <Facilities/>
        </div>
    );
};

export default HomePage;