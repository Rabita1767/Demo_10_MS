export interface ICarouselMedia {
    name: string;
    resource_type: string;
    resource_value: string;
    thumbnail_url: string;
}
export interface ICheckListItem {
    color?: string;
    icon: string;
    id?: string;
    list_page_visibility?: boolean;
    text: string;
}
export interface ICtaText{
    name:string,
    value:string
}
interface TeacherProfile {
    name: string;
    description: string; 
    image: string;
}
export interface IInstructorCard {
headerText: string;
instructorData: TeacherProfile;
}

export interface ISection {
    type:string,
    name:string,
    description:string,
    bg_color:string,
    order_idx:number,
    values:any[]
}

export interface IInstructor{
    description:string,
    has_instructor_page:boolean,
    image:string,
    name:string,
    short_description:string,
    slug:string
}
export interface IFeature{
    id: string;
    title: string;
    subtitle: string;
    icon: string;
}
export interface IFeatureCardProps {
    featureData:IFeature[];
};
export interface ICta{
    clicked_url:string,
    color:string,
    text:string
}
export interface IBackground{
    image:string,
    primary_color?:string,
    secondary_color?:string
}
export interface IGroupJoin{
    top_left_icon_img:string;
    title:string;
    description:string;
    cta:ICta;
    thumbnail:string
    background:IBackground
}

export interface IPointers{
    color: string,
    icon: string,
    id?: string,
    text: string,
}
export interface IFeatureExplanation{
    checklist: string[];
    file_type: "image" | "video";
    file_url: string;
    id: string;
    title: string;
    video_thumbnail: string;
}
export interface ICourseDetails{
    title:string,
    description:string,
    id: string,
}
