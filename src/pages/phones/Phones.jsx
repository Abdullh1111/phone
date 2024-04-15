import React from 'react';
import Phone from './Phone';

const Phones = ({phones}) => {
    return (
        <div>
            <p className='py-10 font-semibold text-center'>All Categories Phones</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                phones.map((phone,idx) => <Phone key={idx} phone={phone}></Phone>)
            }
          </div>
        </div>
    );
};

export default Phones;