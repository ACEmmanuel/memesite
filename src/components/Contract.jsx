import React from 'react';

//Import Components & Icon
import Clipboard from './icons/clipboard'; 
import Check from './icons/check';

const Contract = ({copyText, contractAddress, copied, stylee}) => {
  return (
    <>
      <div className={`w-fit mx-auto  mb-[2rem] gap-4 font-perm font-bold ${stylee}`} >

        <p className='bg-white rounded-sm px-2 mx-auto font-perm lg:text-[18px] max-w-[15rem] md:max-w-[25rem] lg:max-w-[30rem] truncate '>{contractAddress}</p>

          <button onClick={copyText} className=' transition-all duration-1000 ease-in-out '>
            {copied ? <Check  /> : <Clipboard /> }
          </button>
        </div>
    </>
  )
}

export default Contract