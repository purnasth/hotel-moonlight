export const hotelFacilities = [
  {
    id: 'airport_pickup',
    icon: '🚐',
    title: 'Airport Pick-up',
    description:
      'We provide guests complimentary international airport pick-up and transfer to our hotel. Please inform us of your airline, flight number, date and time of arrival when you confirm your booking. Look out for the "Hotel Moonlight" sign as you come out of arrivals. We can arrange domestic airport pick-up and departure transport upon request.',
  },
  {
    id: 'reception',
    icon: '💼',
    title: 'Reception - The Heart of Moonlight',
    description:
      '24-hour Front Desk service, for arrival and departure, payments and currency exchange. Contact with all departments. Wake-up calls. Local (free) and international (at tariff) calls can be made from your room, both via reception. Complimentary safety box (if leaving hotel, and returning at a later date subject to availability). SIM card registration and recharge/top-up service.',
  },
  {
    id: 'travel_service',
    icon: '🚌',
    title: 'Travel Service/Reception',
    description:
      'We provide reliable private car, minibus and coach/bus hire. Public and private air and bus transport ticketing. Half and whole day city and environs sightseeing. Domestic travel services (transport and hotels) to all areas of Nepal. Information/booking for cultural tours, Everest flights and diverse activities.',
  },
  {
    id: 'concierge_service',
    icon: '🛎️',
    title: 'Concierge Service',
    description:
      'Baggage to and from rooms. Complimentary and secure luggage storage for short and long periods. Daily newspapers. Assistance in securing taxis and assistance for parking (subject to space).',
  },
  {
    id: 'common_areas',
    icon: '🏡',
    title: 'Common Areas',
    description:
      'Reception seating area, Juneli Restaurant and Bar, Palm Tree Garden, Over the Moon Rooftop. In the Main building, each floor has its own corner lounge (opposite the lift).',
  },
  {
    id: 'rooms',
    icon: '🛏️',
    title: 'Rooms',
    description:
      '43 Deluxe, 23 Boutique-style. All rooms have ensuite bathrooms, fresh towels & slippers, toiletries & hair dryer, air-conditioning, LED TV, with HD channels, free Wi-Fi, telephone, Tea & Coffee maker, safety deposit box and Mini-bar. Two bottles of complimentary mineral water every day.',
  },
  {
    id: 'family_services',
    icon: '👨‍👩‍👧‍👦',
    title: 'Family Services',
    description:
      'Family rooms (6). Extra bed, cot, child’s highchair - upon request.',
  },
  {
    id: 'room_services',
    icon: '🧼',
    title: 'Room/Valet Services',
    description:
      'Daily housekeeping. Same day & next day laundry or Dry Cleaning - deliver to reception, or call Room Service. Iron and ironing board upon request. Extra bottled water (chargeable).',
  },
  {
    id: 'environment',
    icon: '🌍',
    title: 'Environment',
    description:
      'To save energy, water & soap please hang up any towel you do not wish to replace. Thank you. Leave your towel on the bathroom floor if you wish for a fresh towel.',
  },
  {
    id: 'food_beverages',
    icon: '🍽️',
    title: 'Food and Beverages',
    description:
      "Juneli Restaurant and Breakfast room. Juneli Bar and Over the Moon Bar (Rooftop). Comprehensive national and international A la carte menu and buffet. BBQ facilities. Bakery/Pizza Oven. Barista Coffee Shop - take-away, residential, coffee beans, bakery items, soft drinks etc. Packed breakfast and lunch box (upon request). Special diet (please advise). Children's meals/buffet - Children’s Party - by arrangement.",
  },
  {
    id: 'conference_center',
    icon: '🏢',
    title: 'Conference Center - Banquet Room',
    description:
      'Designated Conference & Banquet Manager. Conference hall. Air conditioned, projector & screen, audio facilities. Webinar (video conference). Back-up electricity generator. From 8 to 100 guests. Seating: 60 in Fishbone/Classroom, 70 in U-shape, 100 in Theatre set-up. Full catering services. Banquets, weddings and celebrations. 40 to 70 seating, with up to 300 if using all hotel facilities.',
  },
  {
    id: 'business_facilities',
    icon: '💻',
    title: 'Business/communication facilities',
    description:
      'Free Wi-Fi. Free local phone calls. International phone calls at tariff. Photocopy. Translator service, by request.',
  },
  {
    id: 'payment',
    icon: '💳',
    title: 'Payment',
    description:
      'Deposit/settlement acceptable via most international credit cards, or if booking online see: www.hotelmoonlight.com. BOOK NOW.',
  },
  {
    id: 'medical_safety',
    icon: '🩺',
    title: 'Medical and Safety',
    description:
      'First Aid Kit in reception. On-call doctor 24 hrs. Direct contact with local and international-standard hospitals. 24-hour guard, CCTV cameras. Regular staff fire drill, fire extinguishers and fire alarms on each floor. Central fire-water hose, emergency exit from each floor. 24-hour generator back up.',
  },
  {
    id: 'wellness',
    icon: '💆‍♀️',
    title: 'Wellness - Moonlight Spa',
    description:
      'Full spectrum of professional treatments - massage, manicure, pedicure & sauna. Yoga (individual or groups) by request.',
  },
  {
    id: 'miscellaneous',
    icon: '🔧',
    title: 'Miscellaneous',
    description:
      'ATM (side of main entrance). Safe parking (upon request/availability). Safe cycle and motorbike parking.',
  },
  {
    id: 'hotel_shop',
    icon: '💎',
    title: 'Hotel Shop - Himalayas Gems & Jewellery',
    description:
      'Mesmerizing selection of jewels and gems from all over Asia. Exquisite own design handwork in precious metals - exclusive pieces. Design your own creations, or have us repair your jewelry - including same-day size change of rings.',
  },
];

const Facilities = () => {
  return (
    <>
      <main>
        <h1 className="mx-auto my-10 max-w-3xl text-center text-3xl leading-snug sm:text-3xl md:text-4xl lg:text-7xl lg:leading-snug">
          Facilities
        </h1>
        <p className="mx-auto mb-24 max-w-xl text-center text-base">
          We offer a range of services to make your stay more enjoyable. From
          accommodation to dining, spa treatments, and event planning, we have
          everything you need for a relaxing and memorable stay.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {hotelFacilities.map((facility) => (
            <div
              key={facility.id}
              className="rounded-lg bg-white p-6 shadow-md"
            >
              <div className="mb-4 flex items-center space-x-4">
                <span className="text-4xl">{facility.icon}</span>
                <h2 className="text-xl font-bold">{facility.title}</h2>
              </div>
              <p className="text-gray-700">{facility.description}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default Facilities;
