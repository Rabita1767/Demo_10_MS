import Text from "@/components/atoms/Text/text";
import { IFeature, IFeatureCardProps } from "@/types/types";
import Image from "next/image";

const FeatureCard: React.FC<IFeatureCardProps> = ({ featureData }) => {
  if (!featureData || featureData.length === 0) return null;

  return (
    <div className="grid grid-cols-2 gap-[32px] p-[24px] bg-[#040e2e] text-[#ffffff] rounded-lg">
      {featureData.map((feature:IFeature) => (
        <div key={feature?.id} className="flex flex-row items-start space-x-4 m-[4px]">
          <Image
            src={feature.icon ?? "https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/Group_1116604651_1684834874567.png"}
            alt="feature icon"
            width={30}
            height={30}
            className="rounded-full p-[4px] mr-[8px] object-cover"
          />
          <div className="flex flex-col justify-between">
            <Text variant="font18" className="font-[500]">
              {feature.title}
            </Text>
            <Text variant="font14" className="font-[400]">
              {feature.subtitle}
            </Text>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
