import Image from 'next/image'
import React from 'react'
import Logo from '../../../../public/InternoLogo.svg'
import sosmed from '../../../../public/multiplesocialmedia.png'
import { Typography } from '@material-tailwind/react'

const LeftFooter = () => {
  return (
    <div className='flex'>
        <div className="flex flex-col gap-5">
            <div className="flex gap-3 items-center">
                <Image src={Logo} alt='Interlogo'/>
                <Typography className='font-bold font-serif text-3xl'>Interno</Typography>
            </div>
            <Typography className='w-2/3 font-serif font-extralight text-[13px] opacity-65'>It is a long established fact that a reader will be distracted lookings.</Typography>
            <Image src={sosmed} alt='sosmed' className='w-1/3'/>
        </div>
    </div>
  )
}

export default LeftFooter