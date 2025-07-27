import React from "react";
import { ChevronDown } from "react-feather";

interface MenuCardProps {
  label: string;
}

const MenuCard = ({ label }: MenuCardProps) => {
  return (
    <div className="flex gap-2 bg-primary-50 rounded-full w-fit px-4 py-2.5 cursor-pointer capitalize hover:bg-primary hover:text-white group">
      {label} <ChevronDown className="text-primary group-hover:text-white" />
    </div>
  );
};

export default MenuCard;
