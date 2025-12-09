'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './styles.css';

import { banner1, banner2, bg1, warehouseShot1, warehouseShot2, warehouseShot3 } from '@/assets';
import { warehouseConfig } from '@/config/warehouse-content';

export default function Banner() {
  // Use warehouse images - can be easily changed in config
  // Default to warehouse images, fallback to original banners if needed
  const warehouseImages = [warehouseShot1, warehouseShot2, warehouseShot3].filter(Boolean);
  const banners = warehouseImages.length > 0 ? warehouseImages : [banner1, banner2];

  const bgImageUrl = typeof bg1 === 'string' ? bg1 : bg1.src || bg1;

  return (
    <section 
      className="hero-section relative overflow-hidden pt-[100px] pb-20 bg-white" 
      id="home"
    >
      {/* Background Image with Opacity */}
      <div
        className="absolute inset-0 bg-no-repeat bg-bottom bg-cover opacity-[0.15] z-0"
        style={{
          backgroundImage: `url(${bgImageUrl})`,
        }}
      />
      <div className="text-block relative  max-w-7xl mx-auto z-10">
        <div className=" ">
          <div className="row flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-12">
            {/* Left Column - Text Content */}
            <div className="col-lg-6 v-center w-full lg:w-[50%] flex flex-col  justify-start ">
              <div className="header-heading">
                <h1 
                  className="font-bold text-[32px] md:text-3xl leading-[1.2] mb-[15px] md:mb-[18px] m-0 p-0 mt-0 text-[#173C65] font-['Libre_Baskerville',Georgia,serif]" 
                >
                  {warehouseConfig.banner.title}
                  {warehouseConfig.banner.subtitle && (
                    <>
                      <br className="leading-none" />
                      <span className="text-[24px] md:text-[28px] font-medium lg:text-3xl leading-tight block mt-8 ">
                        {warehouseConfig.banner.subtitle}
                      </span>
                    </>
                  )}
                </h1>
                <p 
                  className="text-[14px] md:text-[16px] leading-normal mb-[20px] md:mb-[24px] font-medium text-[#505050] font-['Assistant',sans-serif]" 
                >
                  {warehouseConfig.banner.description}
                </p>
                <a
                  href={warehouseConfig.banner.ctaLink}
                  className="cta learnmore inline-block px-8 py-4 rounded-lg font-semibold text-base transition-opacity hover:opacity-90 w-fit border-2 bg-white text-black border-[#173C65] font-['Assistant',sans-serif]"
                >
                  {warehouseConfig.banner.ctaText}
                </a>
              </div>
            </div>

            {/* Right Column - Image Slider */}
            <div className="col-lg-6 w-full lg:w-1/2 flex flex-col items-center ">
              <div className="single-image relative w-full ">
                <div className="relative w-full overflow-hidden h-auto min-h-[400px]">
                  <Swiper
                    className="mySwiper h-[480px]"
                    pagination={{ clickable: true }}
                    modules={[Pagination, Autoplay]}
                    loop={banners.length > 1}
                    autoplay={
                      banners.length > 1
                        ? { delay: 3000, disableOnInteraction: false }
                        : false
                    }
                  >
                    {banners.map((banner, index) => (
                      <SwiperSlide key={index} className="h-[450px]">
                        <Image
                          src={banner}
                          alt={warehouseConfig.banner.title}
                          width={800}
                          height={450}
                          className="w-full h-[450px] object-cover transition-opacity duration-500 rounded-[6px_6px_6px_50px]"
                          priority={index === 0}
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Wave Shape */}
      <div className="absolute bottom-0 left-0 w-full h-80 lg:h-96 pointer-events-none z-0 overflow-hidden">
        <svg
          className="absolute bottom-0 left-0 w-full h-full"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
        >
          <path
            d="M 0 400 L 0 240 Q 200 200 400 220 T 800 210 T 1200 200 L 1200 400 Z"
            fill="#EFF6FF"
          />
        </svg>
      </div>
    </section>
  );
}
