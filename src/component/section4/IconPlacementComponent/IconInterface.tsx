import { Typography } from '@material-tailwind/react'
import React from 'react'
import call from '../../../../public/Call Icon.png'
import arrow from '../../../../public/_.png'
import double from '../../../../public/doublequote.png'
import web from '../../../../public/Wesite.png'
import mail from '../../../../public/Maill.png'
import multi from '../../../../public/multipleicons.png'
import Image from 'next/image'

const IconInterface= () => {
  return (
    <div className='flex flex-col mt-[25px] gap-y-5'>
        <Typography className='font-serif font-bold text-sm'>Interface</Typography>
        <div className="flex w-[50px] gap-5">
          <Image src={call} alt='call'/>
          <Image src={arrow} alt='arrow'/>
          <Image src={double} alt='double'/>
          <Image src={web} alt='web'/>
          <Image src={mail} alt='mail'/>
        </div>
        <div className="flex gap-y-5">
          <Image src={multi} alt='multiple'/>
        </div>
    </div>
  )
}

export default IconInterface