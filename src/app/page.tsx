'use client';
import { useEffect, useState,useRef } from 'react';
import Accordion from '@/components/molecules/Accordion/Accordion.tsx';
import Banner from '@/components/molecules/Banner/banner';
import FeatureCard from '@/components/molecules/FeatureCard/featureCard';
import FeatureExplanationCard from '@/components/molecules/FeatureExplanationCard/featureExplanationCard';
import GroupJoinCard from '@/components/molecules/GroupJoinCard/groupJoinCard';
import HorizontalScrollComponent from '@/components/molecules/HorizontalScroll/horizontalScroll';
import InfoCard from '@/components/molecules/InfoCard/infoCard';
import InstructorCard from '@/components/molecules/InstructorCard/instructorCard';
import Pointers from '@/components/molecules/Pointers/pointers';
import SectionTemplate from '@/components/templates/SectionTemplate/sectionTemplate';
import useIeltsCourseSections from '@/hooks/useIeltsCourseSections';
import clsx from 'clsx';

export default function Home() {
  const [isSticky, setIsSticky] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        threshold: 0,
      }
    );
  
    const currentSentinel = sentinelRef.current;
    if (currentSentinel) observer.observe(currentSentinel);
  
    return () => {
      if (currentSentinel) observer.unobserve(currentSentinel);
    };
  }, []);
  
  const {
    isLoading,
    isError,
    instructorData,
    featureData,
    groupEngagementData,
    pointersData,
    featureExplanationData,
    courseDetailsData,
    media,
    ctaText,
    checklist,
    courseData
  } = useIeltsCourseSections();

  return (
    
    <div className="relative bg-white">
      <div ref={sentinelRef} className="h-[1px] w-full" />
      <div
        className={clsx(
          isSticky ? 'sticky top-[2%]' : 'absolute top-[2%]',
          'right-[2%] z-50 lg:block'
        )}
      >

          <InfoCard
            carouselContent={media?? []}
            price="3850"
            ctaText={ctaText ?? "N/A"}
            listItem={checklist ?? []}
            isSticky={isSticky}
          />
      </div>
      

      {/* Banner */}
      <Banner content={courseData} />

      {/* Main Sections */}
      <div className="relative flex flex-col px-4">
        <SectionTemplate headerText={instructorData?.sectionName ?? 'Instructors'}>
          {instructorData?.instructors?.map((data: any, idx: number) => (
            <InstructorCard key={idx} headerText={data.headerText} instructorData={data} />
          ))}
        </SectionTemplate>

        <SectionTemplate headerText={featureData?.sectionName ?? 'Features'}>
          {featureData?.features && <FeatureCard featureData={featureData?.features} />}
        </SectionTemplate>

        <SectionTemplate headerText="">
          {groupEngagementData?.groupEngagement?.map((data: any, idx: number) => (
            <GroupJoinCard groupJoinData={data} key={idx} />
          ))}
        </SectionTemplate>

        <SectionTemplate headerText={pointersData?.sectionName ?? 'What you will learn by doing the course'}>
          {pointersData?.pointers && <Pointers pointersData={pointersData?.pointers} />}
        </SectionTemplate>

        <SectionTemplate headerText={featureExplanationData?.sectionName ?? 'Course Exclusive Feature'}>
          {featureExplanationData?.explanation?.map((data: any, idx: number) => (
            <FeatureExplanationCard featureExplanationData={data} key={idx} />
          ))}
        </SectionTemplate>

        <SectionTemplate headerText={courseDetailsData?.sectionName ?? 'Course details'}>
          {courseDetailsData?.courseDetails?.map((data: any, idx: number) => (
            <Accordion courseDetailsData={data} key={idx} />
          ))}
        </SectionTemplate>
      </div>
    </div>
    
  );
}
