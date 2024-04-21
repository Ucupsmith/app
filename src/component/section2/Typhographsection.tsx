import { Typography } from "@material-tailwind/react";
import React from "react";
import { typograph } from "@/data/typograph";
import { paragraph } from "@/data/paragraph";
import { text } from "@/data/text";
import { textlist } from "@/_interfaces/text.interface";
import { list } from "@/data/list";
import { color } from "@material-tailwind/react/types/components/alert";
// const bodysection:React.FC<>=()=>{
//   return(
//     <div></div>
//   )
// }




const Typographsection: React.FC<textlist> = ({texting}:textlist) => {
  return (
    <div className="flex justify-center mt-[100px]">
      <div className="flex w-[800px] h-[2500px] mt-[50px] rounded-[70px] bg-[#F6F6F6]">
        <div className="flex flex-col justify-between mt-[100px] ms-[35px]">
          <div className="w-44">
            <Typography className="font-bold font-serif text-4xl">
              Typography
            </Typography>
            <Typography className="font-extralight text-sm mt-[15px]">
              Headings, body and other common text elements.
            </Typography>
          </div>
          <div className="w-44 mt-[750px]">
            <Typography className="font-bold font-serif text-4xl">
              Paragraph
            </Typography>
            <Typography className="font-extralight text-sm mt-[15px]">
              Paragraph, body and other common text elements.
            </Typography>
          </div>
          <div className="w-44 mt-[600px] mb-[460px]">
            <Typography className="font-bold font-serif text-4xl">
              Text
            </Typography>
            <Typography className="font-extralight text-sm mt-[15px]">
              This is some text inside of a div block.
            </Typography>
          </div>
          <div className="w-44 mb-[300px]">
            <Typography className="font-bold font-serif text-4xl">
              List
            </Typography>
            <Typography className="font-extralight text-sm mt-[15px]">
              This is some List inside ofa div block.
            </Typography>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mt-[85px] ms-[35px]">
            <Typography className="font-bold font-serif text-[65px]">
              Disply 01 Text
            </Typography>
            <Typography className="font-serif text-[#CDA274]">
              DM Serif Display - 65px
            </Typography>
          </div>
          <div className="flex flex-col w-[345px] items-center justify-center">
            {typograph.map((value, index) => {
              return (
                <>
                    <div key={index} className="font-bold font-serif text-[38px]">
                        {value.Heading}
                      <Typography className="font-serif text-[#CDA274]">
                        {value.subtitle}
                      </Typography>
                      <hr className="border-[1px] border-black w-1/2 mt-[15px]"/>
                    </div>
                </>
              );
            })}
          </div>
          <div className="mt-[134px] ms-[45px]">
            {paragraph.map((value,index)=>{
                return(
                  <div key={index} className=" font-bold capitalize w-96">
                    {value.Heading}    
                    <Typography className="mt-[20px]">{value.subheading}</Typography>
                  </div>
                )
            })}
          </div>  
          <div className="flex flex-col w-[345px] ms-[45px] mt-[230px]">
            {texting.map((value, index)=>{
              return(
                <div key={index} className={`mt-[50px] ${value.textstyle}`}>
                  {value.paragraph}
                </div>
              )
            })}
          </div>
          <div className="mt-[290px] ms-[45px]">
            {list.map((value,index)=>{
              return(
                <div key={index} className="mt-[25px]">
                  {value.number} {value.subtitle}
                </div>
              )
            })}
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Typographsection;

