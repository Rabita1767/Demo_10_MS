import Text from "@/components/atoms/Text/text";
import { IPointers } from "@/types/types";

export interface IPointersProps {
  pointersData: IPointers[];
}

const Pointers: React.FC<IPointersProps> = ({ pointersData }) => {
  return (
    <div className="grid grid-cols-2 gap-4 p-[24px] rounded-md md:border border-gray-300 bg-white">
      {pointersData?.length > 0 &&
        pointersData.map((pointer: IPointers, index: number) => (
          <div key={index} className="flex flex-row items-start gap-[8px]">
            <div className="mt-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-green-500 flex-shrink-0"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <Text
              children={pointer?.text ?? "N/A"}
              variant="font16"
              className="text-[#111827]"
            />
          </div>
        ))}
    </div>
  );
};

export default Pointers;
