import React from 'react';

const Card = ({ text, num }) => {
  return (
    <section className='w-[300px] h-[300px] bg-cover bg-center relative font-perm font-bold' style={{ backgroundImage: `url('./paper2.png')` }}>
      <div className='absolute top-[2.3rem] left-[3rem] max-w-[210px] mt-4'>
        <p className='mx-auto w-fit mb-2 font-extrabold text-[1.25rem] underline'>{num}</p>
        {text}
      </div>
    </section>
  );
}

export default Card;
