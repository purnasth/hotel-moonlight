import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitForm } from '../../utils/api';

// Define form fields
const offersForm = [
  { name: 'fullName', type: 'text', label: 'Full Name', required: true },
  { name: 'email', type: 'email', label: 'Email', required: true },
  { name: 'phoneNumber', type: 'text', label: 'Phone Number', required: true },
  { name: 'message', type: 'textarea', label: 'Message', required: true },
];

// Validation schema using yup
const schema = yup.object().shape({
  fullName: yup.string().required('Enter your full name*'),
  email: yup.string().email('Invalid email').required('Enter your email*'),
  phoneNumber: yup.string().required('Enter your phone number*'),
  message: yup.string().required('Enter your message*'),
});

// Define FormData type
interface FormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

// Props interface
interface OffersEnquiryProps {
  offerTitle: string;
  onClose: () => void;
}

const OffersEnquiry: React.FC<OffersEnquiryProps> = ({ offerTitle, onClose }) => {
  const [showModal, setShowModal] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  useEffect(() => {
    setShowModal(true);
  }, []);

  const closeWithAnimation = () => {
    setShowModal(false);
    setTimeout(onClose, 300);
  };

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

    try {
      await submitForm('/offersEnquery_mail_react.php', {
        ...data,
        recaptchaToken,
        offerTitle,
      });
      toast.success('Form submitted successfully!');
    } catch (error) {
      const errorMessage = (error as Error).message || 'An error occurred.';
      toast.error(errorMessage);
    }
  };

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  return (
    <>
      <div
        className={`transition-700 fixed inset-0 z-50 flex items-center justify-center bg-dark/50 backdrop-blur-sm ${
          showModal ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={closeWithAnimation}
      >
        <div
          className={`transition-700 relative w-full max-w-xl transform bg-light p-6 shadow-lg ${
            showModal ? 'scale-100 opacity-100' : 'scale-0 opacity-0'
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={closeWithAnimation}
            className="absolute right-5 top-5 text-xl text-gray-700"
            aria-label="Close"
            title="Close"
          >
            &#x2715;
          </button>
          <div className="space-y-2">
            <h3 className="font-body text-xl font-medium">Enquiry Form</h3>
            <p>Send your information and query.</p>
          </div>
          <h4 className="my-4 font-body text-xl font-medium">
            {offerTitle || 'Special Offer'}
          </h4>
          <form onSubmit={handleSubmit(onSubmit)}>
            {offersForm.map((input) => (
              <div key={input.name} className="relative mb-4">
                <label htmlFor={input.name} className="block text-dark/80">
                  {input.label}
                  {input.required && <span className="text-red-500">*</span>}
                </label>
                {input.type === 'textarea' ? (
                  <textarea
                    {...register(input.name as keyof FormData)}
                    rows={2}
                    id={input.name}
                    className={`w-full rounded-none border-b border-dark/20 bg-transparent py-0 text-base font-semibold text-dark focus:border-dark focus:outline-none sm:py-2 md:text-xl ${
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
                    className={`w-full rounded-none border-b border-dark/20 bg-transparent py-0 text-base font-semibold text-dark focus:border-dark focus:outline-none sm:py-2 md:text-xl ${
                      errors[input.name as keyof FormData]
                        ? 'border-red-500'
                        : 'border-gray-200'
                    } `}
                  />
                )}
                {errors[input.name as keyof FormData] && (
                  <p className="pointer-events-none absolute bottom-[6px] select-none text-sm text-red-500 md:bottom-3">
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
              className={`transition-300 group mt-4 flex items-center gap-2 bg-gradient px-5 py-2 font-semibold text-light ${
                isSubmitting ? 'cursor-not-allowed opacity-75' : ''
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
            <p className="mt-4 text-sm text-dark/80">
              or Call us at
              <a
                href="tel:+9779851221636"
                className="mx-1 font-body font-bold underline underline-offset-2"
              >
                +977 9851-221636
              </a>
              for direct booking.
            </p>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default OffersEnquiry;
