import bookingsData from "./bookings.json"; // Import the JSON data

// Simulate an API

// helper function that checks if the bookins is in the current week
function isBookingInCurrentWeek(
  bookingStart,
  bookingEnd,
  startDate = null,
  endDate = null
) {
  let startOfWeek, endOfWeek;

  if (startDate && endDate) {
    startOfWeek = new Date(startDate);
    endOfWeek = new Date(endDate);
  } else {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diffToStartOfWeek = dayOfWeek === 0 ? -6 : 1 - dayOfWeek;

    startOfWeek = new Date(
      now.getFullYear(),
      now.getMonth(),
      now.getDate() + diffToStartOfWeek
    );
    endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(endOfWeek.getDate() + 6);
  }

  startOfWeek.setHours(0, 0, 0, 0);
  endOfWeek.setHours(23, 59, 59, 999);

  const bookingStartDate = new Date(bookingStart);
  const bookingEndDate = new Date(bookingEnd);

  return bookingStartDate <= endOfWeek && bookingEndDate >= startOfWeek;
}

// checks
export const getCurrentWeekBookings = () => {
  return new Promise((resolve) => {
    const currentWeekBookings = bookingsData.filter((booking) => {
      return isBookingInCurrentWeek(booking.start, booking.end);
    });

    setTimeout(() => resolve(currentWeekBookings), 500);
  });
};

export const getRoomNames = () => {
  return new Promise((resolve) => {
    const roomNamesSet = new Set();

    bookingsData.forEach((booking) => {
      roomNamesSet.add(booking.roomDetails.name);
    });

    setTimeout(() => resolve(Array.from(roomNamesSet)), 500);
  });
};

// get the bookings for a specific week depending on the start and end date
export const getBookingsForWeek = (startDate, endDate) => {
  return new Promise((resolve) => {
    const bookings = bookingsData.filter((booking) => {
      const bookingStart = new Date(booking.start);
      const bookingEnd = new Date(booking.end);
      const start = new Date(startDate);
      const end = new Date(endDate);

      start.setHours(0, 0, 0, 0);
      end.setHours(23, 59, 59, 999);

      return bookingStart <= end && bookingEnd >= start;
    });

    setTimeout(() => resolve(bookings), 500);
  });
};
