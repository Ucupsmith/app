import { typograpgh } from '@/data/section2/typograph'
import { Typography } from '@material-tailwind/react'
import { hr } from 'date-fns/locale'
import React from 'react'


const Typograph = () => {
  return (
    <div className='flex'>
        <div className="flex flex-col">
        <Typography className='font-bold font-serif text-[40px]'>Typography</Typography>
        <Typography className='font-extralight font-serif'>Headings, body and other common text elements.</Typography>
        </div>
        <div className="flex flex-col justify-start">
            {typograpgh.map((value,index)=>{
                return(
                    <div key={index} className={`ms-[42px] ${value.titleClassName === `text-[85px]` ? 'mb-[50px]': 'mb-[25px]'}`}>
                        <Typography className={`font-bold font-serif ${value.titleClassName}`}>{value.title}</Typography>
                        <Typography className='text-[#CDA274]'>{value.subtitle}</Typography>
                        {value.titleClassName === `text-[85px]` ? <></> : <hr className='border-black w-[345px] '/> }
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Typograph