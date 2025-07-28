import { useEffect, useState } from 'react';
import { useGetIeltsCourseQuery } from '@/redux/services/productsApi';
import { ISection } from '@/types/types';


const useIeltsCourseSections = () => {
  const { data, isLoading, isSuccess, isError } = useGetIeltsCourseQuery();
  const [courseData, setCourseData] = useState<any>();


  useEffect(() => {
    if (!isSuccess) return;
    setCourseData(data?.data);
  }, [isSuccess, data]);

  const instructorSection = courseData?.sections?.find(
    (section: ISection) => section?.type === 'instructors' && section?.values?.length > 0
  );
  const instructorData = instructorSection
    ? {
        sectionName: instructorSection.name,
        instructors: instructorSection.values,
      }
    : null;

  const featureSection = courseData?.sections?.find(
    (section: ISection) => section?.type === 'features' && section?.values?.length > 0
  );
  const featureData = featureSection
    ? {
        sectionName: featureSection.name,
        features: featureSection.values,
      }
    : null;

  const groupEngagementSection = courseData?.sections?.find(
    (section: ISection) => section?.type === 'group_join_engagement' && section?.values?.length > 0
  );
  const groupEngagementData = groupEngagementSection
    ? {
        sectionName: groupEngagementSection.name,
        groupEngagement: groupEngagementSection.values,
      }
    : null;

  const pointersSection = courseData?.sections?.find(
    (section: ISection) => section?.type === 'pointers' && section?.values?.length > 0
  );
  const pointersData = pointersSection
    ? {
        sectionName: pointersSection.name,
        pointers: pointersSection.values,
      }
    : null;

  const featureExplanationSection = courseData?.sections?.find(
    (section: ISection) => section?.type === 'feature_explanations' && section?.values?.length > 0
  );
  const featureExplanationData = featureExplanationSection
    ? {
        sectionName: featureExplanationSection.name,
        explanation: featureExplanationSection.values,
      }
    : null;

  const courseDetailsSection = courseData?.sections?.find(
    (section: ISection) => section?.type === 'about' && section?.values?.length > 0
  );
  const courseDetailsData = courseDetailsSection
    ? {
        sectionName: courseDetailsSection.name,
        courseDetails: courseDetailsSection.values,
      }
    : null;

  return {
    isLoading,
    isError,
    isSuccess,
    instructorData,
    featureData,
    groupEngagementData,
    pointersData,
    featureExplanationData,
    courseDetailsData,
    media: courseData?.media,
    ctaText: courseData?.cta_text,
    checklist: courseData?.checklist,
    courseData
  };
};

export default useIeltsCourseSections;
