import { Input, Typography } from '@material-tailwind/react'
import React from 'react'

const Contact = () => {
  return (
    <div className='flex justify-around mt-[100px]'>
        <Typography className='font-bold font-serif text-[40px]'>Contact Form</Typography>
        <div className="flex flex-col p-[25px] gap-5">
            <div className="flex gap-10">
                <Input label='Name' aria-placeholder='black' variant='standard' color='black' />
                <Input label='Email' aria-placeholder='black' variant='standard' color='black' />
            </div>
            <div className="flex gap-10">
                <Input label='Subject' aria-placeholder='black' variant='standard' color='black' />
                <Input label='Phone' aria-placeholder='black' variant='standard' color='black' />
            </div>
            <div className="flex flex-col">
              <label htmlFor="Name"> <Typography className='font-sans pb-[25px] opacity-35'>Hello Iam Intrested in..</Typography></label>
              <Input id='Name' variant='standard'/>
            </div>
        </div>
    </div>
  )
}

export default Contact