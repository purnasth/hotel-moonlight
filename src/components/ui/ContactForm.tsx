import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import { submitForm } from '../../utils/api';

// Define form fields
const enquiryForm = [
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

const ContactForm: React.FC = ({}) => {
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

    try {
      await submitForm('/enquiry.php', {
        ...data,
        recaptchaToken,
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
        className={`transition-700 relative w-full max-w-xl transform`}
      >
        {/* <div className="space-y-2">
          <h3 className="font-body text-xl font-bold">Enquiry Form</h3>
          <p>Send your information and query.</p>
        </div> */}
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
                  className={`w-full rounded-none border-b border-dark/30 bg-transparent py-0 text-base font-normal text-dark focus:border-dark focus:outline-none sm:py-2 md:text-base ${
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
                  className={`w-full rounded-none border-b border-dark/40 bg-transparent py-0 text-base font-normal text-dark focus:border-dark focus:outline-none sm:py-2 md:text-base ${
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
            className={`transition-300 border-primary bg-gradient h group mt-4 flex items-center gap-2 border px-6 py-2 font-semibold text-light ${
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
              +977 985-1221636
            </a>
            for more information.
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ContactForm;
