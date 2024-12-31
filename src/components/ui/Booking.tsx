import React from 'react';
import { Link } from 'react-router-dom';

interface BookingProps {
  className?: string;
}

const Booking: React.FC<BookingProps> = ({ className }) => {
  return (
    <>
      <Link
        to="https://hotelmoonlight.com/result.php?hotel_code=MQYYCu"
        className={`${className}`}
      >
        Book Now
      </Link>
    </>
  );
};

export default Booking;
