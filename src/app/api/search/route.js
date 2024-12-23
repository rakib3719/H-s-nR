



import { connectDB } from "@/app/lib/connectDB";

export async function POST(request) {
  try {
    // Parse request body
    const body = await request.json();
    const { startDate, endDate, guests, checkDate } = body || {}; // Safely destructure body

    // Initialize default query to fetch all rooms
    let query = {};

    if (startDate || endDate || guests || checkDate) {
      // Ensure guests have valid numbers
      const { adults, children } = guests || {};

      // Construct query based on parameters
      query = {
        ...(startDate && endDate && {
          availableFrom: { $lte: new Date(endDate) }, // Room available before or on the end date
          availableTo: { $gte: new Date(startDate) }, // Room available after or on the start date
        }),
        ...(adults && { adults: { $gte: adults } }), // Ensure enough adults can fit in the room
        ...(children && { childs: { $gte: children } }), // Ensure enough children can fit in the room
      };

      // If checkDate is provided, add a specific date check
      if (checkDate) {
        const searchCheckDate = new Date(checkDate);
        query = {
          ...query,
          $or: [
            {
              availableFrom: { $lte: searchCheckDate },
              availableTo: { $gte: searchCheckDate },
            },
            {
              availableFrom: { $gte: searchCheckDate },
              availableTo: { $gte: searchCheckDate },
            },
          ],
        };
      }
    }

    // Connect to the database
    const db = await connectDB();

    // Fetch rooms based on the query
    const rooms = await db.collection("room").find(query).toArray();

    // Return the fetched data
    return new Response(JSON.stringify(rooms), { status: 200 });
  } catch (error) {
    console.error("Error fetching data:", error);
    return new Response(JSON.stringify({ error: "Failed to fetch data" }), {
      status: 500,
    });
  }
}
