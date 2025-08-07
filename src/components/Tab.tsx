import React from "react";


interface Tabprops{
  mainText: string;
  linkText: string;
}

const Tab = ({mainText, linkText} : Tabprops) => {
return(
     
        <div className="bg-white pl-4 border-b-1 ml-12 mr-12 pb-2">
            <h3 className="text-gray-500 text-black  font-bold">
                {mainText}
                <a href="#" className="text-blue-500 hover:underline">
                    {linkText}
                </a>
            </h3>
        </div>
);
};

export default Tab;