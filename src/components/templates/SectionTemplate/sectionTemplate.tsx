import Text from "@/components/atoms/Text/text";

interface ISection{
    headerText:string,
    children: React.ReactNode

}

const SectionTemplate:React.FC<ISection> = ({headerText,children}) => {
  return (
    <div className='flex flex-col w-[60%] p-[20px] gap-[16px]'>
        <Text variant="sectionHeader" children={headerText}/>
        {children}
    </div>
  )
}

export default SectionTemplate