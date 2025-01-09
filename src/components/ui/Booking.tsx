import React from 'react';
import { Link } from 'react-router-dom';
import { TbClipboard } from 'react-icons/tb';

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
        <span className="hidden md:block">Book Now</span>
        <TbClipboard className="text-sm md:hidden" />
      </Link>
    </>
  );
};

export default Booking;
