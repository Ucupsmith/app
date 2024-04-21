import { text } from '@/data/section2/text'
import { Typography } from '@material-tailwind/react'
import React from 'react'

const Text = () => {
  return (
    <div className='flex mt-[75px]'>
        <div className="flex flex-col">
            <Typography className='font-bold font-serif text-[40px]'>Text</Typography>
            <Typography className='font-serif'>This is some text inside of
            a div block.</Typography>
        </div>
        <div className="flex flex-col">
            {text.map((value,index)=>{
                return(
                    <div key={index} className="ms-[60px] mt-[15px]">
                        <Typography className={`mb-[25px] ${value.paragraphclassName}`}>{value.paragraph}</Typography>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Text