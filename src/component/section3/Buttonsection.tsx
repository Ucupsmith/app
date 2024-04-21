import { button } from '@/_interfaces/section3/button.interface'
import { Typography } from '@material-tailwind/react'
import React from 'react'
import Buttonclick from './buttonsection_component/Buttonclick'
import { buttonlist } from '@/data/section3/buttonlist'

const Buttonsection= () => {
  return (
    <div className="flex justify-center mt-[100px] mb-[100px]">
      <div className="w-[800px] flex rounded-[50px] bg-[#F6F6F6] p-[80px]">
        <div className="flex flex-col w-1/3 ">
          <Typography className='text-[40px] font-serif font-bold'>Buttons</Typography>
          <Typography className='font-extralight font-serif'>Component, text style and size variations</Typography>
        </div>
        <div className="flex flex-col w-96">
          <Buttonclick buttonban={buttonlist}/>
        </div>
        
      </div>
    </div>
  )
}

export default Buttonsection