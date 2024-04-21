import React from 'react'
import Typograph from './section2_component/Typograph'
import Paragraph from './section2_component/Paragraph'
import Text from './section2_component/Text'
import List from './section2_component/List'

const Typographsection_new = () => {
  return (
    <div className='flex items-center justify-center p-[50px] mt-[75px]'>
        <div className="flex flex-col w-[800px] rounded-[70px] justify-center p-[50px] bg-[#F6F6F6]">
            <Typograph/>
            <Paragraph/>
            <Text/>
            <List/>
        </div>
    </div>
  )
}

export default Typographsection_new