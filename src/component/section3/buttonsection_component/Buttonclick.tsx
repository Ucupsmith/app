import { Typography } from "@material-tailwind/react";
import React from "react";
import { button } from "@/_interfaces/section3/button.interface";

const Buttonclick: React.FC<button> = ({buttonban}:button) => {
  return (
    <div className="flex w-full justify-around gap-5 mt-[10px] ms-[75px]">        
        {buttonban.map((value,index)=>{
            return(
                    <div key={index} className={`${value.bgclassName}` === 'w-[224x]' ? ' flex flex-col absolute mt-[100px] me-[235px]' : ''}>
                        <Typography className="mb-[10px] font-bold font-serif">{value.topheader}</Typography>
                        <div className={`mb-[50px] ${value.bg}`}>
                            <button><Typography className="text-white font-serif">{value.inside}</Typography></button>
                        </div> 
                    </div>
                
            )
        })}
    </div>
  );
};

export default Buttonclick;
