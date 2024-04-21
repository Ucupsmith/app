import { footer } from '@/data/footer/footer'
import { Typography } from '@material-tailwind/react'
import React from 'react'

const RightFooter = () => {
  return (
        <div className="flex gap-14 ">
            {footer.map((value,index)=>{
                return(
                    <div key={index} className="flex flex-col gap-5 hover:cursor-pointer">
                        <Typography className='font-bold font-serif'>{value.title}</Typography>
                        <Typography className={`w-28 flex flex-col opacity-65 ${value.subtitle}`}>{value.subtitle}</Typography>
                    </div>
                )
            })}
        </div>
  )
}

export default RightFooter