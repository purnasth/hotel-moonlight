import BookingRating from '../components/ui/BookingRating';
import ContactAndSocial from '../components/ui/ContactAndSocial';
import ContactForm from '../components/ui/ContactForm';
import TravelersChoice from '../components/ui/TravelersChoice';

const ContactPage = () => {
  return (
    <>
      <main className="flex flex-col items-center justify-center">
        <div className="mb-24 space-y-8 text-center">
          <h4 className="text-5xl font-medium">Hotel Moonlight</h4>
          <p className="mt-2 max-w-md text-sm">
            We offer a range of services to make your stay more enjoyable. From
            accommodation to dining, spa treatments, and event planning, we have
            everything you need for a relaxing and memorable stay.
          </p>
          <div className="flex origin-center scale-125 items-center justify-center pb-4">
            <ContactAndSocial />
          </div>
          <TravelersChoice />
          <br />
          <BookingRating />
        </div>
        <ContactForm />
      </main>
    </>
  );
};

export default ContactPage;
