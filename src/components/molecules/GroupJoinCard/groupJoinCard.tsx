import Image from "next/image";
import Text from "@/components/atoms/Text/text";
import Button from "@/components/atoms/Button/button";
import { IGroupJoin } from "@/types/types";
import { group } from "console";

interface IGroupJoinProps{
    groupJoinData:IGroupJoin
}

const GroupJoinCard:React.FC<IGroupJoinProps> = ({groupJoinData}) => {
    console.log("hjjhjk",groupJoinData);
  return (
    <div
  className="flex flex-row justify-between items-center p-[32px] bg-cover bg-center"
  style={{ backgroundImage: `url(${groupJoinData?.background?.image})` }}
>
        <div className="flex flex-col w-[45%]">
            <Image src={groupJoinData?.top_left_icon_img} alt="group engagement icon" width={20} height={20}/>
            <Text variant="heading" children={groupJoinData?.title ?? "N/A"}/>
            <Text variant="font18" className="text-[#6b7280] font-[400]" children={groupJoinData?.description ?? "N/A"}/>
            <Button variant="greenBG" className="mt-[16px]" children={groupJoinData?.cta?.text} onClick={() => window.open(groupJoinData?.cta?.clicked_url, '_blank')}
            />
        </div>
        <div className="w-[45%]">
            <Image src={groupJoinData?.thumbnail ?? "https://cdn.10minuteschool.com/images/skills/lp/ms_onset.jpg"} alt="group join" width={300} height={300} className="rounded-lg object-cover"/>
        </div>
    </div>
  )
}

export default GroupJoinCard;