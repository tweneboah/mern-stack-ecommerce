import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { GiClothes } from 'react-icons/gi';
import { VscListOrdered } from 'react-icons/vsc';
import { FcSmartphoneTablet } from 'react-icons/fc';
import { MdLaptopMac } from 'react-icons/md';
import { fetchAllProductsAction } from '../../redux/actions/productActions';
import { fetchAllUsersAction } from '../../redux/actions/userAction';
const CategoriesWithLogo = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllProductsAction('TV'));
  }, []);
  return (
    <div>
      <div class='bg-white'>
        <div class='max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8'>
          <div class='grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5'>
            <div onClick={() => dispatch(fetchAllProductsAction(''))}>
              <VscListOrdered class=' text-gray-400 text-7xl border rounded-full p-2' />
            </div>
            <div
              onClick={() => dispatch(fetchAllProductsAction('TV'))}
              class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <div onClick={() => dispatch(fetchAllProductsAction(''))}>
                <GiClothes class=' text-gray-400 text-7xl border rounded-full p-2' />
              </div>
            </div>

            <div onClick={() => dispatch(fetchAllProductsAction('laptop'))}>
              <FcSmartphoneTablet class=' text-gray-400 text-7xl border rounded-full p-3' />
            </div>
            <div class='col-span-1 flex justify-center md:col-span-2 lg:col-span-1'>
              <MdLaptopMac class=' text-gray-400 text-7xl border rounded-full p-3' />
            </div>
            <div class='col-span-1 flex justify-center md:col-span-3 lg:col-span-1'>
              <img
                class='h-12'
                src='https://tailwindui.com/img/logos/transistor-logo-gray-400.svg'
                alt='Transistor'
              />
            </div>
            <div class='col-span-2 flex justify-center md:col-span-3 lg:col-span-1'>
              <img
                class='h-12'
                src='https://tailwindui.com/img/logos/workcation-logo-gray-400.svg'
                alt='Workcation'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoriesWithLogo;
