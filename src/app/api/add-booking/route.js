import { connectDB } from "@/app/lib/connectDB"; // Assuming this is a utility to connect to MongoDB
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    // Connect to the database
    const db = await connectDB();
    const bookingsCollection = db.collection("booking");

    // Parse the request body
    const body = await request.json();
    const { checkInDate, checkOutDate, guests, pricePerRoom, message, email, phoneNumber, status, name, washrooms, squareFeet, roomSize, roomNumber, } = body;
    console.log(pricePerRoom);

    // Check for missing required fields
    if (!checkInDate || !checkOutDate || !guests) {
      return NextResponse.json(
        { message: "Missing required fields." },
        { status: 400 }
      );
    }

    // Insert the booking into the database
    const result = await bookingsCollection.insertOne({
      name,
      roomNumber,
      roomSize,
      washrooms,
      squareFeet,
      checkInDate,
      checkOutDate,
      guests,
      pricePerRoom,
      message,
      email,
      status,
      phoneNumber,
      createdAt: new Date(), // Add timestamp of when the booking was made
    });

    // Return success response with the booking ID
    return NextResponse.json({ message: "Booking successful!", bookingId: result.insertedId });
  } catch (error) {
    console.error("Error saving booking:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
