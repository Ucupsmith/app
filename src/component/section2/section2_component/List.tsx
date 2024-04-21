import { list } from '@/data/section2/list'
import { Typography } from '@material-tailwind/react'
import React from 'react'

const List = () => {
  return (
    <div className="flex mt-[75px]">
        <div className="flex flex-col">
            <Typography className='font-bold font-serif text-[40px]'>List</Typography>
            <Typography className='font-serif'>This is some List inside of
            a div block.</Typography>  
        </div>
        <div className="flex flex-col">
            {list.map((value,index)=>{
                return(
                    <div key={index} className="ms-[25px] mt-[25px]">
                       <Typography className={`${value.numberclassName}`}>{value.list}</Typography>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default List