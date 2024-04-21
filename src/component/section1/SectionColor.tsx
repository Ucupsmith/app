import { Typography } from "@material-tailwind/react";
import { id } from "date-fns/locale";
import React from "react";
import {color} from '@/_interfaces/color.interface'

const SectionColor: React.FC<color> = ({colorlist}: color) => {
  return (
    <div className="flex justify-center mt-[200px]">
      <div className="bg-[#F6F6F6] border rounded-[50px] flex justify-between w-[800px] h-[250px]">
        <div className="flex flex-col justify-center items-start ms-[64px]">
          <Typography className="font-serif font-bold text-[40px]">
            Color
          </Typography>
          <Typography className="w-1/2 font-serif">
            Primaries, shades and text and any other color style used in Intrno.
          </Typography>
        </div>
        <div className="flex items-center gap-[30px] me-[35px]">
          {colorlist.map((value, index) => {
            return (
              <div key={index}>
                <div className={`rounded-[10px] w-[100px] h-[100px] ${value.bg}`}></div>
                <Typography className="font-semibold font-sans text-center text-[13px]">
                  {value.name} {value.code}
                </Typography>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SectionColor;
