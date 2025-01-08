// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import * as yup from 'yup';
// import { toast, ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import ReCAPTCHA from 'react-google-recaptcha';
// import { submitForm } from '../../utils/api';

// // Define form fields
// const enquiryForm = [
//   { name: 'fullName', type: 'text', label: 'Full Name', required: true },
//   { name: 'email', type: 'email', label: 'Email', required: true },
//   { name: 'phoneNumber', type: 'text', label: 'Phone Number', required: true },
//   { name: 'eventName', type: 'text', label: 'Event Name', required: true },
//   { name: 'eventDate', type: 'date', label: 'Event Date', required: true },
//   { name: 'pax', type: 'number', label: 'No. of pax', required: true },
//   { name: 'message', type: 'textarea', label: 'Message', required: true },
// ];

// // Validation schema using yup
// const schema = yup.object().shape({
//   fullName: yup.string().required('Enter your full name*'),
//   email: yup.string().email('Invalid email').required('Enter your email*'),
//   phoneNumber: yup.string().required('Enter your phone number*'),
//   eventName: yup.string().required('Enter your event name*'),
//   eventDate: yup.string().required('Enter your event date*'),
//   pax: yup.string().required('Enter your number of pax*'),
//   message: yup.string().required('Enter your message*'),
// });

// // Define FormData type
// interface FormData {
//   fullName: string;
//   email: string;
//   phoneNumber: string;
//   eventName: string;
//   eventDate: string;
//   pax: string;
//   message: string;
// }

// const EventEnquiryForm: React.FC = ({}) => {
//   const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

//   const {
//     register,
//     handleSubmit,
//     formState: { errors, isSubmitting },
//   } = useForm<FormData>({
//     resolver: yupResolver(schema),
//   });

//   const onSubmit = async (data: FormData) => {
//     if (!recaptchaToken) {
//       toast.error('Please complete the reCAPTCHA verification.');
//       return;
//     }

//     try {
//       await submitForm('/enquiry.php', {
//         ...data,
//         recaptchaToken,
//       });
//       toast.success('Form submitted successfully!');
//     } catch (error) {
//       const errorMessage = (error as Error).message || 'An error occurred.';
//       toast.error(errorMessage);
//     }
//   };

//   const handleRecaptchaChange = (token: string | null) => {
//     setRecaptchaToken(token);
//   };

//   return (
//     <>
//       <main className="pt-0" id="form">
//         <div
//           className={`transition-700 relative mx-auto w-full max-w-xl transform`}
//         >
//           <div className="mb-12 space-y-2">
//             <h3 className="text-2xl font-bold">Enquiry Form</h3>
//             {/* <p>Send your information and query.</p> */}
//           </div>
//           <form onSubmit={handleSubmit(onSubmit)}>
//             {enquiryForm.map((input) => (
//               <div key={input.name} className="relative mb-4">
//                 <label htmlFor={input.name} className="block text-dark">
//                   {input.label}
//                   {input.required && <span className="text-red-500">*</span>}
//                 </label>
//                 {input.type === 'textarea' ? (
//                   <textarea
//                     {...register(input.name as keyof FormData)}
//                     rows={2}
//                     id={input.name}
//                     className={`w-full rounded-none border-b border-dark/30 bg-transparent py-0 text-base font-normal text-dark focus:border-dark focus:outline-none sm:py-2 md:text-base ${
//                       errors[input.name as keyof FormData]
//                         ? 'border-red-500'
//                         : 'border-gray-200'
//                     } `}
//                   />
//                 ) : (
//                   <input
//                     {...register(input.name as keyof FormData)}
//                     type={input.type}
//                     id={input.name}
//                     className={`w-full rounded-none border-b border-dark/40 bg-transparent py-0 text-base font-normal text-dark focus:border-dark focus:outline-none sm:py-2 md:text-base ${
//                       errors[input.name as keyof FormData]
//                         ? 'border-red-500'
//                         : 'border-gray-200'
//                     } `}
//                   />
//                 )}
//                 {errors[input.name as keyof FormData] && (
//                   <p className="pointer-events-none select-none text-sm text-red-500 md:bottom-3">
//                     {errors[input.name as keyof FormData]?.message}
//                   </p>
//                 )}
//               </div>
//             ))}
//             <ReCAPTCHA
//               sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
//               onChange={handleRecaptchaChange}
//             />
//             <button
//               type="submit"
//               aria-label="Submit"
//               title="Submit"
//               className={`transition-300 bg-gradient h group mt-4 flex items-center gap-2 border border-primary px-6 py-2 font-semibold text-light ${
//                 isSubmitting ? 'cursor-not-allowed opacity-75' : ''
//               }`}
//               disabled={isSubmitting}
//             >
//               {isSubmitting ? 'Sending...' : 'Submit'}
//             </button>
//           </form>
//         </div>
//       </main>
//       <ToastContainer />
//     </>
//   );
// };

// export default EventEnquiryForm;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';

// Define form fields
const enquiryForm = [
  { name: 'fullName', type: 'text', label: 'Full Name', required: true },
  { name: 'email', type: 'email', label: 'Email', required: true },
  { name: 'phoneNumber', type: 'text', label: 'Phone Number', required: true },
  { name: 'eventName', type: 'text', label: 'Event Name', required: true },
  { name: 'eventDate', type: 'date', label: 'Event Date', required: true },
  { name: 'pax', type: 'number', label: 'No. of pax', required: true },
  { name: 'message', type: 'textarea', label: 'Message', required: true },
];

// Validation schema using yup
const schema = yup.object().shape({
  fullName: yup.string().required('Enter your full name*'),
  email: yup.string().email('Invalid email').required('Enter your email*'),
  phoneNumber: yup.string().required('Enter your phone number*'),
  eventName: yup.string().required('Enter your event name*'),
  eventDate: yup.string().required('Enter your event date*'),
  pax: yup.string().required('Enter your number of pax*'),
  message: yup.string().required('Enter your message*'),
});

// Define FormData type
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  eventName: string;
  eventDate: string;
  pax: string;
  message: string;
}

const EventEnquiryForm: React.FC = ({}) => {
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    if (!recaptchaToken) {
      toast.error('Please complete the reCAPTCHA verification.');
      return;
    }

    const whatsappNumber = '+9779808021753';
    const message = `Full Name: ${data.fullName}\nEmail: ${data.email}\nPhone Number: ${data.phoneNumber}\nEvent Name: ${data.eventName}\nEvent Date: ${data.eventDate}\nNo. of pax: ${data.pax}\nMessage: ${data.message}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Redirect to WhatsApp with the message
    window.location.href = whatsappURL;
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <main className="pt-0" id="form">
        <div
          className={`transition-700 relative mx-auto w-full max-w-xl transform`}
        >
          <div className="mb-12 space-y-2">
            <h3 className="text-2xl font-bold">Enquiry Form</h3>
            {/* <p>Send your information and query.</p> */}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            {enquiryForm.map((input) => (
              <div key={input.name} className="relative mb-4">
                <label htmlFor={input.name} className="block text-dark">
                  {input.label}
                  {input.required && <span className="text-red-500">*</span>}
                </label>
                {input.type === 'textarea' ? (
                  <textarea
                    {...register(input.name as keyof FormData)}
                    rows={2}
                    id={input.name}
                    className={`w-full rounded-none border-b border-dark/30 bg-transparent py-0 text-base font-medium text-dark focus:border-dark focus:outline-none sm:py-2 md:text-base ${
                      errors[input.name as keyof FormData]
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } `}
                  />
                ) : (
                  <input
                    {...register(input.name as keyof FormData)}
                    type={input.type}
                    id={input.name}
                    className={`w-full rounded-none border-b border-dark/40 bg-transparent py-0 text-base font-medium text-dark focus:border-dark focus:outline-none sm:py-2 md:text-base ${
                      errors[input.name as keyof FormData]
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } `}
                  />
                )}
                {errors[input.name as keyof FormData] && (
                  <p className="pointer-events-none select-none text-sm text-red-500 md:bottom-3">
                    {errors[input.name as keyof FormData]?.message}
                  </p>
                )}
              </div>
            ))}
            <ReCAPTCHA
              sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY}
              onChange={handleRecaptchaChange}
            />
            <button
              type="submit"
              aria-label="Submit"
              title="Submit"
              className={`transition-300 bg-gradient h group mt-4 flex items-center gap-2 border border-primary px-6 py-2 font-semibold text-light ${
                isSubmitting ? 'cursor-not-allowed opacity-75' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </main>
      <ToastContainer />
    </>
  );
};

export default EventEnquiryForm;
