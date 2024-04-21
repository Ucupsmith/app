import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import multisosmed from '../../../../public/multiplesocialmedia.png'
import React from 'react'

const SocialmediaIcon = () => {
  return (
        <div className="flex flex-col mt-[50px] gap-y-4">
            <Typography className='font-serif font-bold text-sm'>Social Media</Typography>
            <Image src={multisosmed} alt='multisosmed'/>
        </div>
  )
}

export default SocialmediaIcon