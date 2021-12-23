import React from 'react';
import campanies from '../assets/companies.png'

const Companies = () => {
    return (
      <div className="flex items-center justify-center h-1/6 bg-gray-100 rounded-sm shadow-sm">
        <img className='h-6 w-2/3' src={campanies} alt="campanies" />
      </div>
    );
}

export default Companies
