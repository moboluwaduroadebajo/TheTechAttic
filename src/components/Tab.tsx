import React from "react";


interface Tabprops{
  mainText: string;
  spanText: string;
}

const Tab = ({mainText, spanText} : Tabprops) => {
return(
     
        <div className="bg-white pl-4 border-b-1 ml-12 mr-12 pb-2 ">
            <h3 className="text-gray-500 text-black  font-bold">
                {mainText}
            <span className="text-blue-500">
                    {spanText}
            </span>
            </h3>
        </div>
);
};

export default Tab;