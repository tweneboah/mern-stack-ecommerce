import React from 'react';
import contact from '../images/contact.png';
const Contact = () => {
  return (
    <div>
      <section class='py-12 px-4'>
        <h2 class='text-4xl text-center mb-16 font-semibold font-heading'>
          Contact the Scranton team
        </h2>
        <div class='flex flex-wrap items-center -mx-6'>
          <div class='w-full lg:w-1/2 px-6'>
            <h3 class='text-2xl mb-2 font-semibold font-heading'>
              Let us guide you through the world of paper
            </h3>
            <p class='mb-8'>
              Lovely Pam-Pam is waiting to answer all your questions and
              inquiries.
            </p>
            <ul>
              <li class='mb-4 flex items-center'>
                <svg
                  class='inline-block w-6 h-6 mr-3 text-indigo-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6'></path>
                </svg>
                <span>1725 Slough Avenue, Scranton</span>
              </li>
              <li class='mb-4 flex items-center'>
                <svg
                  class='inline-block w-6 h-6 mr-3 text-indigo-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z'></path>
                </svg>
                <span>555-111-555</span>
              </li>
              <li class='mb-4 flex items-center'>
                <svg
                  class='inline-block w-6 h-6 mr-3 text-indigo-600'
                  fill='none'
                  stroke='currentColor'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    stroke-width='2'
                    d='M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'></path>
                </svg>
                <span>scranton@dundermifflin.com</span>
              </li>
            </ul>
          </div>
          <div class='w-full lg:w-1/2 px-6 lg:px-24 mb-8 lg:mb-0'>
            <img src={contact} alt='contact' />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
