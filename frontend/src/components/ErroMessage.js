import React from 'react';

const ErroMessage = ({ children }) => {
  return (
    <div className='bg-red-900 text-white p-2 text-center rounded-full shadow-lg text-lg'>
      {children}
    </div>
  );
};

export default ErroMessage;
