import { Button, Typography } from '@material-tailwind/react'
import React from 'react'
import BlockQuotes from './BlockquotesandcontactElement/BlockQuotes'
import Contact from './BlockquotesandcontactElement/Contact'

const BlockmixContact = () => {
  return (
    <div className='flex justify-center mt-[100px]'>
        <div className="flex flex-col">
            <BlockQuotes/>
            <Contact/>
            <div className="flex justify-end me-[45px]">
                <Button className='w-28 capitalize'>send now</Button>
            </div>
        </div>
    </div>
  )
}

export default BlockmixContact