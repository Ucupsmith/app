import React from 'react'
import BannerImages from '../../../../public/BannerImages.svg'
import Image from 'next/image'
import { Typography } from '@material-tailwind/react'

const Jumbotron = () => {
  return (
    <div className='flex flex-col'>
        <div className="bg-banner flex justify-center items-end h-[356px]">
            <div className="flex flex-col justify-center items-center w-[504px] h-[179px] rounded-t-[50px] bg-white text-black">
                <Typography className='capitalize font-serif font-bold text-5xl'>style guid</Typography>
                <Typography className='capitalize'>home / styleguid</Typography> 
            </div>
        </div>
    </div>
  )
}

export default Jumbotron