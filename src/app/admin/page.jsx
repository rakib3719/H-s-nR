import OverviewSection from "../[component]/admin/OverviewSection";


const page = () => {
    return (
        <div>
      <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
          <h2 className="text-3xl font-bold">145</h2>
          <p className="mt-2 text-gray-300">Total Pending Bookings</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
          <h2 className="text-3xl font-bold">75</h2>
          <p className="mt-2 text-gray-300">Available Rooms</p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center hover:bg-yellow-500 hover:text-gray-900 transition-all">
          <h2 className="text-xl italic">
            {"Travel brings power and love back into your life."}
          </h2>
          <p className="text-gray-400 mt-2">— Rumi</p>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-5xl mx-auto px-6 py-12 text-center">
        <h2 className="text-3xl font-bold text-yellow-400 mb-4">
          Discover Hotel Seven View
        </h2>
        <p className="text-gray-300 leading-relaxed">
          Whether traveling for business or leisure, Hotel Seven View offers
          unmatched comfort, personalized services, and world-class amenities.
          Make your stay memorable in the heart of Arezzo, Italy.
        </p>
      </div>
        </div>
    );
};

export default page;