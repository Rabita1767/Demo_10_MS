import Text from "@/components/atoms/Text/text";
import SectionTemplate from "@/components/templates/SectionTemplate/sectionTemplate";
import { IInstructorCard } from "@/types/types";
import Image from "next/image";

const InstructorCard:React.FC<IInstructorCard> = ({headerText,instructorData}) => {
    console.log("InstructorCard Rendered with data:", instructorData);
  return (
     <div className="flex flex-row items-center gap-[16px] border border-gray-300 rounded-lg p-4 mt-2">
            <div>
                <Image src={instructorData?.image ?? "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"} alt="instructor" width={50} height={50} className="rounded-full object-cover"/>
            </div>
            <div className="flex flex-col">
                <Text variant="font18" className="font-[500] text-[#111827]" children={instructorData?.name ?? "N/A"}/>
                <div className="text-[14px] flex" dangerouslySetInnerHTML={{ __html: instructorData?.description ?? '' }}/>
            </div>
        </div>
  )
}

export default InstructorCard