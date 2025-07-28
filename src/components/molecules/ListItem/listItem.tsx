import Image from "next/image";
import Text from "@/components/atoms/Text/text";
import { ICheckListItem } from "@/types/types";

interface IListItemsProps{
    data: ICheckListItem
}
const ListItem:React.FC<IListItemsProps> = ({data}) => {
  return (
    <div className='flex flex-row items-center gap-[10px] p-2'>
        <Image src={data?.icon ?? ""} alt={data?.id ?? "icon"} width={20} height={20} className={`rounded-full bg-${data?.color ?? "black"}`} />
        <Text variant="listItem">{data?.text ?? "N/A"}</Text>
    </div>
  )
}

export default ListItem