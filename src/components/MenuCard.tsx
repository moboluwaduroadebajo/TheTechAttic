import React from "react";
import { ChevronDown } from "react-feather";

interface MenuCardProps {
  label: string;
}

const MenuCard = ({ label }: MenuCardProps) => {
  return (
    <div className="flex gap-2 bg-[#f3f9fb] rounded-full w-fit px-4 py-2.5 cursor-pointer capitalize hover:bg-[#008ecc] hover:text-white group">
      {label} <ChevronDown className="text-[#2ba0d4] group-hover:text-white" />
    </div>
  );
};

export default MenuCard;
