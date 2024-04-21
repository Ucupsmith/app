import { Typography } from "@material-tailwind/react";
import React from "react";
interface ColorDetailI{
    color: string;title:string; subtitle:string
}

const ColorDetail:React.FC<ColorDetailI> = ({color,title, subtitle}:ColorDetailI) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <div className={`w-10 h-10 ${color}`}></div>
      {/* <Typography>{title}</Typography> */}
      {/* <Typography>{subtitle}</Typography> */}
    </div>
  );
};

export default ColorDetail;
