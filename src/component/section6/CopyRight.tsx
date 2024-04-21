import React from 'react'
import Typograph from '../section2/section2_component/Typograph'
import { Typography } from '@material-tailwind/react'

const CopyRight = () => {
  return (
    <div className='flex flex-col items-center justify-center mt-[100px]'>
        <hr className='w-full'/>
        <Typography className='opacity-65 p-5'>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</Typography>
    </div>
  )
}

export default CopyRight