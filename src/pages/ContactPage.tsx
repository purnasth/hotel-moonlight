import ContactAndSocial from '../components/ui/ContactAndSocial';
import ContactForm from '../components/ui/ContactForm';
// import BookingRating from '../components/ui/BookingRating';
// import TravelersChoice from '../components/ui/TravelersChoice';

const ContactPage = () => {
  return (
    <>
      <main>
        <div className="container grid grid-cols-1 md:grid-cols-2">
          <div className="my-12 xl:my-0 mb-24 space-y-8">
            <h4 className="text-5xl font-medium">Hotel Moonlight</h4>
            <p className="mt-2 max-w-md text-sm">
              We offer a range of services to make your stay more enjoyable.
              From accommodation to dining, spa treatments, and event planning,
              we have everything you need for a relaxing and memorable stay.
            </p>
            <div className="flex flex-col gap-12 pb-4">
              <ContactAndSocial />
            </div>
            {/* <TravelersChoice />
            <br />
            <BookingRating /> */}
          </div>
          <ContactForm />
        </div>
      </main>
    </>
  );
};

export default ContactPage;
