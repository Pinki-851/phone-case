/* eslint-disable @next/next/no-img-element */
import { MaxWidthWrapper } from "@/components/max-width-wrapper";
import { LiTextWrapper } from "@/components/text-wrapper";
import { Star } from "lucide-react";

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <MaxWidthWrapper className='pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52'>
        <div className='col-span-2 px-6 lg:px-0 lg:pt-4'>
          <div className='relative mx-auto text-center lg-text-left flex flex-col items-center lg:items-start'>
            <div className='absolute w-28 left-0 -top-20 hidden lg:block'>
              <img
                src='/snake-1.png'
                alt='snake'
              />
            </div>
            <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-gray-900 text-5xl md:text-6xl lg:text-7xl '>
              Your Image on a <span className='bg-green-600 px-2'>Custom</span>{" "}
              Phone Case
            </h1>
            <p className='mt-8 text-lg lg-pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap'>
              {" "}
              Capture your favorite memories with your own,
              <span>one-of-one</span> phone case. PhoneCase allows you to
              protect your memories,not just your phone case.
            </p>
            <ul className='mt-8 space-y-2 text-left font-medium flex flex-col item-center sm:items-start'>
              <div className='space-y-2'>
                <LiTextWrapper text='High-qulity,durable material' />
                <LiTextWrapper text='5 year print guarantee' />
                <LiTextWrapper text='Modern iPhone module supported' />
              </div>
            </ul>

            <div className='mt-12 flex flex-col sm:flex-row items-center sm:items-start gap-5'>
              <div className='flex -space-x-4'></div>
              {[
                "/users/user-1.png",
                "/users/user-2.png",
                "/users/user-3.png",
                "/users/user-4.jpg",
                "/users/user-5.jpg",
              ]?.map((val) => {
                return (
                  <img
                    key='val'
                    src={val}
                    alt='user image'
                    className='inline-block h-10 w-10 rounded-full ring-2'
                  />
                );
              })}
            </div>
            <div className='flex flex-col justify-between items-center sm:items-start'>
              <div className='flex gap-0.5'>
                {Array.from({ length: 5 }, (_, index) => (
                  <Star
                    key={index}
                    className='h-4 w-4 text-green-600 fill-green-600'
                  />
                ))}{" "}
              </div>
            </div>

            <p>
              <span className='font-semibold'>1.250</span> happy customers
            </p>
          </div>
        </div>
        <div className='col-span-full lg:col-span-1 w-full flex justify-center px-8 sm:px-10 mt-32 lg:mx-0 lg:my-20 h-fit'>
          <div className='relative md:max-w-xl'>
            <img
              src='/your-image.png'
              className='absolute w-40 lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden xl:block'
              alt=''
            />
            <img
              src='/line.png'
              className='absolute w-20 left-6 -bottom-6 select-none'
              alt='line-image'
            />
          </div>
        </div>
      </MaxWidthWrapper>
    </main>
  );
}
