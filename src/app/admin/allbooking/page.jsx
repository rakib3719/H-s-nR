'use client';
import React, { useState } from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import { FcViewDetails } from "react-icons/fc";
import { IoIosCheckbox, IoMdClose } from 'react-icons/io';

// Axios request for fetching data
const fetchBookings = async (page, status) => {
  try {
    const response = await axios.get(`/api/booking?page=${page}&status=${status}`);
    return response?.data?.data;
  } catch (error) {
    throw new Error('Error fetching bookings');
  }
};

// Axios request for updating booking status
// const updateBookingStatus = async (id, newStatus) => {

//   try {
//     const response = await axios.patch(`/api/booking/${id}`, { status: newStatus });
//     return response.data;
//   } catch (error) {
//     throw new Error('Error updating booking status');
//   }
// };

const BookingTable = () => {
  const [page, setPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState('all');
  const [selectedBooking, setSelectedBooking] = useState(null); // To store the selected booking for details modal

  // Use TanStack's useQuery for fetching data
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ['bookings', page, statusFilter],
    queryFn: () => fetchBookings(page, statusFilter),
  });

  // Handle status change for bookings
  const handleStatusChange = async (id, newStatus) => {
    alert(id)
    try {
   
   
      const response = await axios.patch(`/api/booking/${id}`, { status: newStatus });
      console.log(response, "update data");
      refetch()
      toast.success(`Booking status updated to ${newStatus}`);
      refetch(); // Refetch data after mutation
    } catch (error) {
      toast.error('Error updating booking status');
    }
  };

  // Handle view booking details
  const handleViewDetails = (booking) => {
    setSelectedBooking(booking);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching bookings</p>;

  return (
    <div className="container mx-auto ">
      <ToastContainer />
      <h1 className="text-2xl font-semibold mb-4">Bookings</h1>

      {/* Filter buttons */}
      <div className="mb-4">
        {['all', 'pending', 'accept'].map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-2 mr-2 rounded-lg ${
              statusFilter === status ? 'bg-yellow-500 text-white' : 'bg-gray-200'
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Bookings table */}
      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full table-xs md:table-md lg:table-md bg-white border border-gray-300 rounded-lg">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="lg:px-6 py-3 text-left">Name</th>
              <th className="lg:px-6 py-3 text-left">Room Number</th>
              <th className="lg:px-6 py-3 text-left">Status</th>
              <th className="lg:px-6 py-3 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600">
            {data && data.length > 0 ? (
              data.map((booking) => (
                <tr key={booking._id} className="border-b border-gray-200 hover:bg-gray-50">
                  <td className="md:px-6 py-4">{booking.name}</td>
                  <td className="md:px-6 py-4">{booking.roomNumber}</td>
                  <td className="md:px-6 py-4">{booking.status}</td>
                  <td className="md:px-6 py-4 flex space-x-2">
                    {booking.status === 'pending' && (
                      <button
                        onClick={() => handleStatusChange(booking._id, 'accept')}
                        className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      >
                <IoIosCheckbox />
                      </button>
                    )}
                    {booking.status === 'accept' && (
                      <button
                        onClick={() => handleStatusChange(booking._id, 'completed')}
                        className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-blue-600"
                      >
                    <IoMdClose />
                      </button>
                    )}
                    <button
                      onClick={() => handleViewDetails(booking)}
                      className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                    >
                      <FcViewDetails/>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4">No bookings available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="mt-4 flex justify-between items-center">
        <button
          onClick={() => setPage(page - 1)}
          disabled={page === 1}
          className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-pointer disabled:bg-gray-200"
        >
          Previous
        </button>
        <span>Page {page}</span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === data?.totalPages}
          className="px-4 py-2 bg-gray-300 text-gray-600 rounded-lg cursor-pointer disabled:bg-gray-200"
        >
          Next
        </button>
      </div>

      {/* View Details Modal */}
      {selectedBooking && (
        <div className="fixed z-50 inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white text-black p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-xl font-semibold mb-4">Booking Details</h2>
            <p><strong>Name:</strong> {selectedBooking.name}</p>
            <p><strong>Room Number:</strong> {selectedBooking.roomNumber}</p>
            <p><strong>Status:</strong> {selectedBooking.status}</p>
            <p><strong>Email:</strong> {selectedBooking.email}</p>
            <p><strong>Phone:</strong> {selectedBooking.phone}</p>
            <p><strong>Check-In Date:</strong> {new Date(selectedBooking.checkInDate).toLocaleString()}</p>
            <p><strong>Check-Out Date:</strong> {new Date(selectedBooking.checkOutDate).toLocaleString()}</p>
            <p><strong>Price Per Room:</strong> ${selectedBooking.pricePerRoom}</p>
            <p><strong>Adults:</strong> {selectedBooking.adults}</p>
            <p><strong>Children:</strong> {selectedBooking.children}</p>
            <p><strong>Rooms:</strong> {selectedBooking.rooms}</p>
            <p><strong>Extra Beds:</strong> {selectedBooking.extraBeds}</p>
            <p><strong>Services:</strong></p>
            <ul>
              {Object.entries(selectedBooking.services).map(([key, value]) => (
                <li key={key}>
                  {key.charAt(0).toUpperCase() + key.slice(1)}: {value ? 'Yes' : 'No'}
                </li>
              ))}
            </ul>
            <button
              onClick={() => setSelectedBooking(null)}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BookingTable;