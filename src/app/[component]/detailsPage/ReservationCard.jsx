
'use client'
import { useState } from "react";

const ReservationCard = () => {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);
  const [extraBeds, setExtraBeds] = useState(0);
  const [services, setServices] = useState({
    petFriendly: false,
    spa: false,
    sauna: false,
  });

  const baseCost = 50;
  const serviceCosts = {
    petFriendly: 10,
    spa: 20,
    sauna: 25,
  };

  const calculateTotalCost = () => {
    let totalCost = baseCost * rooms;

    if (services.petFriendly) totalCost += serviceCosts.petFriendly * rooms;
    if (services.spa) totalCost += serviceCosts.spa * rooms;
    if (services.sauna) totalCost += serviceCosts.sauna * rooms;

    return totalCost;
  };

  return (
    <div className="bg-dark text-white p-6 rounded-lg">
      <h2 className="text-lg font-bold mb-4">Reserve</h2>
      <p className="text-right text-gold">
        From <span className="font-bold">$50</span>/night
      </p>

      {/* Check-In and Check-Out */}
      <div className="grid grid-cols-2 gap-4 my-4">
        <div>
          <label className="block text-sm mb-2">Check In</label>
          <input
            type="date"
            className="w-full bg-black text-white p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block text-sm mb-2">Check Out</label>
          <input
            type="date"
            className="w-full bg-black text-white p-2 rounded-md"
          />
        </div>
      </div>

      {/* Adults, Children, Rooms, Extra Bed */}
      <div className="grid grid-cols-2 gap-4 my-4">
        {[
          { label: "Adult", value: adults, setValue: setAdults },
          { label: "Children", value: children, setValue: setChildren },
          { label: "Rooms", value: rooms, setValue: setRooms },
          { label: "Extra Bed", value: extraBeds, setValue: setExtraBeds },
        ].map(({ label, value, setValue }) => (
          <div key={label} className="flex items-center justify-between">
            <span className="text-sm">{label}</span>
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setValue((prev) => Math.max(0, prev - 1))}
                className="bg-gold text-black w-6 h-6 rounded-full flex items-center justify-center font-bold"
              >
                -
              </button>
              <span>{value}</span>
              <button
                onClick={() => setValue((prev) => prev + 1)}
                className="bg-gold text-black w-6 h-6 rounded-full flex items-center justify-center font-bold"
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Extra Services */}
      <div className="my-4">
        <h3 className="font-bold mb-2">Extra Services:</h3>
        {[
          { label: "Pet-Friendly Amenities", key: "petFriendly", cost: 10 },
          { label: "Spa Services", key: "spa", cost: 20 },
          { label: "Sauna/Steam Room", key: "sauna", cost: 25 },
        ].map(({ label, key, cost }) => (
          <label key={key} className="flex items-center space-x-2 text-sm">
            <input
              type="checkbox"
              checked={services[key]}
              onChange={() =>
                setServices((prev) => ({ ...prev, [key]: !prev[key] }))
              }
              className="form-checkbox text-gold"
            />
            <span>
              {label} <span className="text-gold">${cost}/Room</span>
            </span>
          </label>
        ))}
      </div>

      {/* Total Cost */}
      <div className="mt-4">
        <h3 className="font-bold">Total Cost:</h3>
        <p className="text-2xl text-gold font-bold">${calculateTotalCost()}</p>
      </div>

      {/* Button */}
      <button className="bg-gold text-black font-bold w-full py-2 mt-4 rounded-md">
        BOOK YOUR STAY
      </button>
    </div>
  );
};

export default ReservationCard;
