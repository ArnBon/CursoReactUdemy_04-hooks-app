import React, { memo } from 'react'

interface Props {
    subtitle: string;

    callMyAPI: (myValue: string) => void;

}

export const MySubTitle = memo(({ subtitle, callMyAPI}: Props) => {
      console.log('MySubTitle re-render');
    return (
      <>
          <h6 className='text-2x1 font-bold'>{ subtitle }</h6>
  
          <button className='bg-indigo-500 text-white px-2 py-1 rounded-md cursor-pointer' onClick={() => callMyAPI(subtitle)}>Call function !</button>
      </>
    )
  }); 
