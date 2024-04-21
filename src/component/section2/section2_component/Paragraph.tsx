import { paragraph } from '@/data/section2/paragraph'
import { Typography } from '@material-tailwind/react'
import React from 'react'

const Paragraph = () => {
  return (
    <div className='flex mt-[25px]'>
        <div className="flex flex-col">
            <Typography className='font-bold font-serif text-[40px]'>Paragraph</Typography>
            <Typography className='font-extralight font-serif'>Paragraph, body and other common text elements.</Typography>    
        </div>
        <div className="flex flex-col justify-start">
            {paragraph.map((value,index)=>{
                return(
                    <div key={index} className='ms-[82px] mt-[10px]'>
                        <Typography className={`${value.subheaderclassName}`}>{value.header}</Typography>
                        <Typography className='mt-[20px]'>{value.subheader}</Typography> 
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Paragraph