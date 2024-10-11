import React, { useEffect, useState, useRef } from 'react';
import Loader from '../../Loader/Loader';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

export default function ContactUs() {
  const [loading, setLoading] = useState(true);
  const form = useRef();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'badrdaghash',
        'template_3d4ulr8',
        form.current,
        'muESnDu_Q4W3VP94a'
      )
      .then(
        (result) => {
          console.log('Successfully sent ', result.text);
          toast('Successfully sent', {
            icon: '👏',
            style: {
              borderRadius: '10px',
              background: '#333',
              color: '#fff',
            },
          });
          form.current.reset(); // Clear the form inputs
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          className: 'bg-[rgba(0,0,0,0.8)] text-white border-none',
        }}
      />
      <h1 className='text-center text-white text-2xl sm:text-[45px] mb-4'>Send message</h1>

      <div className='bg-[rgba(0,0,0,0.9)] w-[90%] sm:w-[50%] md:w-[40%] lg:w-[30%] pt-8 pb-12 mx-auto rounded-lg shadow-md shadow-cyan-900'>
        <form ref={form} onSubmit={sendEmail} className="max-w-sm mx-auto">
          <div className="relative mb-4">
            <input
              type="text"
              name="from_name"
              id="name"
              className="block text-white rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm bg-transparent dark:bg-gray-700 border-0 border-b-2 border-cyan-300 focus:border-cyan-400 focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor="name"
              className="absolute text-sm text-white  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-cyan-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name
            </label>
          </div>

          <div className="relative mb-4">
            <input
              type="email"
              name="from_email"
              id="email"
              className="block text-white rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm bg-transparent dark:bg-gray-700 border-0 border-b-2 border-cyan-300 focus:border-cyan-400 focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor="email"
              className="absolute text-sm text-white  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-cyan-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email
            </label>
          </div>

          <div className="relative mb-4">
            <input
              type="tel"
              name="from_phone"
              id="phone"
              className="block text-white rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm bg-transparent dark:bg-gray-700 border-0 border-b-2 border-cyan-300  focus:border-cyan-400 focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor="phone"
              className="absolute text-sm text-white  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-cyan-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Phone
            </label>
          </div>

          <div className="relative mb-4">
            <input
              type="text"
              name="message"
              id="message"
              className="block text-white rounded-t-lg px-2.5 pb-1.5 pt-4 w-full text-sm bg-transparent dark:bg-gray-700 border-0 border-b-2 border-cyan-300 focus:border-cyan-400 focus:outline-none focus:ring-0 peer"
              placeholder=" "
            />
            <label
              htmlFor="message"
              className="absolute text-sm text-white  duration-300 transform -translate-y-3 scale-75 top-3 z-10 origin-[0] start-2.5 peer-focus:text-cyan-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Message
            </label>
          </div>

          <div className='flex justify-center items-center'>
            <button
              type="submit"
              className="text-white bg-cyan-600 hover:bg-cyan-700 transition-colors duration-300 focus:ring-1 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 mt-6"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
