import { Typography } from '@material-tailwind/react'
import Image from 'next/image'
import React from 'react'
import Icon from '../../../public/PaintIcon.svg'
import Measure from '../../../public/Measurement.svg'
import House from '../../../public/Household.svg'
import Stair from '../../../public/Stair.svg'
import IconInterface from './IconPlacementComponent/IconInterface'
import SocialmediaIcon from './IconPlacementComponent/SocialmediaIcon'
const IconPlacement = () => {
  return (
    <div className='flex justify-center'>
        <div className="flex bg-[#F6F6F6] w-[800px] rounded-[50px] p-[80px]">
            <div className="flex flex-col">
                <Typography className='font-bold font-serif text-[40px]'>Icons</Typography>
                <Typography className='font-serif w-2/3'>Little pictures that help out in various ways.</Typography>
            </div>
            <div className="flex flex-col hover:cursor-pointer">
                <div className="flex w-[60px] gap-12">
                    <Image src={Icon} alt='PaintIcon'/>
                    <Image src={Measure} alt='Measure'/>
                    <Image src={House} alt='House'/>
                    <Image src={Stair} alt='Stairs'/>
                </div>
                <IconInterface/>
                <SocialmediaIcon/>
            </div>
        </div>
    </div>
  )
}

export default IconPlacement