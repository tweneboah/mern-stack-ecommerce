import React from 'react';
import workers from '../images/contactme.jpg';
const About = () => {
  return (
    <div className='flex justify-end items-center '>
      <section className='py-8 px-4 '>
        <div className='flex flex-wrap items-center max-w-6xl mx-auto'>
          <div className='lg:w-1/2 px-4 mb-8 lg:mt-0 '>
            <img className='rounded shadow ' src={workers} alt='workers' />
          </div>
          <div className='lg:w-1/2 px-4 lg:pl-20'>
            <h2 className='text-3xl lg:pl-8 lg:border-l-8 font-semibold font-heading'>
              Who we are
            </h2>
            <p className='mt-6 mb-8 lg:pl-10 text-gray-400 leading-relaxed'>
              Are you a carte blanche of the paper industry? No worries, our
              team will help you in implementation process and dispel doubts.
              Are you a carte blanche of the paper industry? No worries, our
              team will help you in implementation process and dispel doubts.
              Are you a carte blanche of the paper industry? No worries, our
              team will help you in implementation process and dispel doubts.
              Are you a carte blanche of the paper industry? No worries, our
              team will help you in implementation process and dispel doubts.
              Are you a carte blanche of the paper industry? No worries, our
              team will help you in implementation process and dispel doubts.
              Are you a carte blanche of the paper industry? No worries, our
              team will help you in implementation process and dispel doubts.
              Are you a carte blanche of the paper industry? No worries, our
              team will help you in implementation process and dispel doubts.
            </p>
            <div className='lg:pl-10'>
              <a
                className='inline-block py-4 px-8 mb-4 sm:mb-0 mr-6 leading-none text-white bg-indigo-600 hover:bg-indigo-700 font-semibold rounded shadow'
                href='#'>
                Sign up for free
              </a>
              <a
                className='inline-block text-indigo-600 hover:underline'
                href='#'>
                Learn more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
