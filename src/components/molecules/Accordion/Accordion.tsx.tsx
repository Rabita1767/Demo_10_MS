import React, { useState } from "react";
import Text from "@/components/atoms/Text/text";
import { ICourseDetails } from "@/types/types";

interface IAccordionProps {
  courseDetailsData:ICourseDetails
}

const Accordion: React.FC<IAccordionProps> = ({ courseDetailsData }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-gray-300 rounded-md p-[16px] flex flex-col gap-[8px]">
      <div
        className="flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div dangerouslySetInnerHTML={{ __html: courseDetailsData?.title ?? '' }}/>
        <div className="text-gray-600">
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </div>
      </div>

      {isOpen && (
        <div dangerouslySetInnerHTML={{ __html: courseDetailsData?.description ?? '' }}/>
      )}
    </div>
  );
};

export default Accordion;
