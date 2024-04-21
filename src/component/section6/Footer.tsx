import React from 'react'
import LeftFooter from './footercomponent/LeftFooter'
import RightFooter from './footercomponent/RightFooter'

const Footer = () => {
  return (
    <div className='flex justify-center mt-[150px]'>
        <LeftFooter/>
        <RightFooter/>
    </div>
  )
}

export default Footer