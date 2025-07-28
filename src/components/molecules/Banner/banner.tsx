import Text from "@/components/atoms/Text/text";
import InfoCard from "@/components/molecules/InfoCard/infoCard";
import { ICarouselMedia, ICheckListItem, ICtaText } from "@/types/types";
type BannerData = {
    title: string;
    ratingAndReview?: string;
    description?: string;
}
interface IBannerProps{
    content:BannerData
}

const Banner:React.FC<IBannerProps>=({content})=>{
    return (
        <div className="flex flex-row justify-between items-center py-[40px] px-[16px] bg-[#040e2e] min-h-[300px]">
        <div className="flex flex-col justify-center gap-[4px] items-start flex-1/2 my-[0] mx-[40px]">
        <Text variant="heading">{content?.title ?? "N/A"}</Text>
        {/* <Text variant="body">{content?.ratingAndReview ?? "N/A"}</Text> */}
        <div className='text-[16px] text-[#A3A3A3] w-[50%]'
        dangerouslySetInnerHTML={{ __html: content?.description ?? '' }}
    />
        </div>
    </div>
    )

}
export default Banner;