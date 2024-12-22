// import { connectDB } from "@/app/lib/connectDB";

// export async function POST(request) {
//   try {
//     const { startDate, endDate, guests } = await request.json();

// // Ensure guests have valid numbers
// const { adults, children } = guests;

// if (!startDate || !endDate || !adults || !children) {
//   return new Response(
//     JSON.stringify({ error: "Invalid search parameters" }),
//     { status: 400 }
//   );
// }

// // Parse dates for comparison
// const searchStartDate = new Date(startDate);
// const searchEndDate = new Date(endDate);
//  let db= await connectDB()
// // Find rooms based on search criteria
// const rooms = await db.collection('room').find({
//   availableFrom: { $lte: searchEndDate }, // room available before or on the end date
//   availableTo: { $gte: searchStartDate }, // room available after or on the start date
//   adults: { $gte: adults },  // Ensure enough adults can fit in the room
//   childs: { $gte: children } // Ensure enough children can fit in the room
// }).toArray();

// return new Response(JSON.stringify(rooms), { status: 200 });

//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch data" }),
//       { status: 500 }
//     );
//   }
// }









// import { connectDB } from "@/app/lib/connectDB";

// export async function POST(request) {
//   try {
//     const { startDate, endDate, guests, checkDate } = await request.json(); // Added checkDate for date-based availability

//     // Ensure guests have valid numbers
//     const { adults, children } = guests;

//     if (!startDate || !endDate || !adults || !children) {
//       return new Response(
//         JSON.stringify({ error: "Invalid search parameters" }),
//         { status: 400 }
//       );
//     }

//     // Parse dates for comparison
//     const searchStartDate = new Date(startDate);
//     const searchEndDate = new Date(endDate);
//     const searchCheckDate = checkDate ? new Date(checkDate) : null; // If checkDate is provided, convert it to Date

//     // Connect to DB
//     let db = await connectDB();

//     // Construct the query based on search parameters
//     let query = {
//       availableFrom: { $lte: searchEndDate }, // Room available before or on the end date
//       availableTo: { $gte: searchStartDate }, // Room available after or on the start date
//       adults: { $gte: adults },  // Ensure enough adults can fit in the room
//       childs: { $gte: children }, // Ensure enough children can fit in the room
//     };

//     // If checkDate is provided, add a check for rooms available on that specific date
//     if (searchCheckDate) {
//       query = {
//         ...query,
//         $or: [
//           { availableFrom: { $lte: searchCheckDate }, availableTo: { $gte: searchCheckDate } },
//           { availableFrom: { $gte: searchCheckDate }, availableTo: { $gte: searchCheckDate } }
//         ]
//       };
//     }

//     // Find rooms based on search criteria
//     const rooms = await db.collection('room').find(query).toArray();

//     // Return the results
//     return new Response(JSON.stringify(rooms), { status: 200 });

//   } catch (error) {
//     console.error("Error fetching data:", error);
//     return new Response(
//       JSON.stringify({ error: "Failed to fetch data" }),
//       { status: 500 }
//     );
//   }
// }












import { connectDB } from "@/app/lib/connectDB";

export async function POST(request) {
  try {
    const { startDate, endDate, guests, checkDate } = await request.json(); // Added checkDate for date-based availability

    // Ensure guests have valid numbers
    const { adults, children } = guests;

    if (!startDate || !endDate || !adults || !children) {
      return new Response(
        JSON.stringify({ error: "Invalid search parameters" }),
        { status: 400 }
      );
    }

    // Parse dates for comparison
    const searchStartDate = new Date(startDate);
    const searchEndDate = new Date(endDate);
    const searchCheckDate = checkDate ? new Date(checkDate) : null; // If checkDate is provided, convert it to Date

    // Connect to DB
    let db = await connectDB();

    // Construct the query based on search parameters
    let query = {
      availableFrom: { $lte: searchEndDate }, // Room available before or on the end date
      availableTo: { $gte: searchStartDate }, // Room available after or on the start date
      adults: { $gte: adults },  // Ensure enough adults can fit in the room
      childs: { $gte: children }, // Ensure enough children can fit in the room
    };

    // If checkDate is provided, add a check for rooms available on that specific date
    if (searchCheckDate) {
      query = {
        ...query,
        $or: [
          { availableFrom: { $lte: searchCheckDate }, availableTo: { $gte: searchCheckDate } },
          { availableFrom: { $gte: searchCheckDate }, availableTo: { $gte: searchCheckDate } }
        ]
      };
    }

    // Try to find rooms based on the search criteria
    let rooms = await db.collection('room').find(query).toArray();

    // If no rooms match the query, return all rooms
    if (rooms.length === 0) {
      console.log("No rooms found based on the search criteria. Returning all rooms.");
      rooms = await db.collection('room').find().toArray(); // Return all rooms if no match
    }

    // Return the results
    return new Response(JSON.stringify(rooms), { status: 200 });

  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch data" }),
      { status: 500 }
    );
  }
}
