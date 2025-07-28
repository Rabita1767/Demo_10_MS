import Image from "next/image";
import Text from "@/components/atoms/Text/text";
import { IFeatureExplanation } from "@/types/types";
interface IFeatureExplanationProps {
    featureExplanationData: IFeatureExplanation
}

const FeatureExplanationCard:React.FC<IFeatureExplanationProps> = ({featureExplanationData}) => {
  return (
    <div className="flex flex-row p-[20px] justify-between items-center rounded-md md:border border-gray-300">
        <div className="flex flex-col justify-between gap-[16px]">
            <Text variant="font16" className="text-[#111827]" children={featureExplanationData?.title}/>
            {featureExplanationData?.checklist && featureExplanationData?.checklist.map((item, index) => (
                <div className="flex flex-row" key={index}>
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <Text variant="font16" className="text-[#4b5563]" children={item ?? 
"N/A"
                }/>
            </div>
            ))}
            
        </div>
        <div>
            <Image src={featureExplanationData?.file_url ?? "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"} alt="feature" width={150} height={150} className="w-full h-full"/>
        </div>
    </div>
  )
}

export default FeatureExplanationCard;