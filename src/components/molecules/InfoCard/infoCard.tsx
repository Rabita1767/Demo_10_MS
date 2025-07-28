'use client';

import React, { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';

import Image from "next/image";

import Text from "@/components/atoms/Text/text";
import Button from "@/components/atoms/Button/button";
import ListItem from "@/components/molecules/ListItem/listItem";
import Carousel from "@/components/atoms/Carousel/carousel";
import { ICarouselMedia, ICheckListItem, ICtaText } from "@/types/types";

interface IInfoCardProps {
  carouselContent: ICarouselMedia[];
  price: string;
  ctaText: ICtaText;
  listItem?: ICheckListItem[];
  isSticky: boolean;
}

const InfoCard: React.FC<IInfoCardProps> = ({ carouselContent, price, ctaText, listItem,isSticky }) => {
  const slides = carouselContent && carouselContent.length > 0
    ? carouselContent.map((item: ICarouselMedia, index: number) => (
      <div
        key={index}
        className="h-[300px] w-[390px] flex items-center justify-center overflow-hidden rounded-md bg-gray-100"
      >
        {item?.resource_type === "video" ? (
          <video
            controls
            className="w-full h-full object-cover rounded-md"
            poster={item?.thumbnail_url ?? "https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"}
          >
            <source src={item?.resource_value ?? ""} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <Image
            src={item?.resource_value ?? "https://cdn.10minuteschool.com/images/catalog/media/introduction_1706097447220.jpg"}
            alt={item?.name ?? "Image"}
            width={250}
            height={250}
            className="object-cover w-full h-full rounded-md"
          />
        )}
      </div>
    ))
    : [
      <div key="slide1" className="h-[300px] w-[400px] bg-blue-500 text-white flex items-center justify-center text-2xl rounded-md">
        Slide 1
      </div>,
      <div key="slide2" className="h-[300px] w-[400px] bg-red-500 text-white flex items-center justify-center text-2xl rounded-md">
        Slide 2
      </div>,
      <div key="slide3" className="h-[300px] w-[400px] bg-green-500 text-white flex items-center justify-center text-2xl rounded-md">
        Slide 3
      </div>
    ];

  return (
    <div className="absolute right-[2%] flex flex-col items-center justify-center p-2 bg-white shadow-md w-[328px] lg:w-[400px] ">
      <div className={clsx('w-full', isSticky && 'hidden')}>
        <Carousel items={slides} />
      </div>

      <div className="w-full mt-4">
        <div className='flex flex-row items-center justify-items-start gap-4'>
        <Text variant="black24">৳{price}</Text>
        <Text variant="black24" className="line-through text-gray-500">৳5000</Text>
        </div>
        <Button variant="greenBG" className="mt-2 w-full">
          {ctaText?.name ?? "N/A"}
        </Button>
      </div>

      <div className="mt-4 w-full">
        {listItem && listItem.length > 0 &&
          listItem.map((item: ICheckListItem, index: number) => (
            <ListItem key={index} data={item} />
          ))
        }
      </div>
    </div>
  );
};

export default InfoCard;
