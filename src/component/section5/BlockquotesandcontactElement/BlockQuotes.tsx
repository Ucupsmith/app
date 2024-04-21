import { Typography } from '@material-tailwind/react'
import React from 'react'

const BlockQuotes = () => {
  return (
    <div className='flex justify-around'>
        <Typography className='font-bold font-serif text-[40px]'>Black Quotes</Typography>
        <div className="flex flex-col w-2/3 gap-y-5 text-center items-center rounded-[50px] bg-[#F4F0EC] p-[25px]">
            <Typography className='text-6xl font-bold font-serif italic text-[#CDA274]'>,,</Typography>
            <Typography className='w-2/3 font-bold font-serif italic text-[25px] text-[#CDA274]'>The details are not the details. They make the design.</Typography>
        </div>
    </div>
  )
}

export default BlockQuotes