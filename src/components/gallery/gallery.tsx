'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import { useUITranslations } from '@/hooks/use-warehouse-config';
import { 
  warehouseIndustrial, 
  warehouseShot1, 
  warehouseShot2, 
  warehouseShot3, 
  warehouseShot4,
  bg2, 
  warehouseDrone, 
  warehouseLayout, 
  // warehouseLoc1, 
  warehouseLoc2, 
  warehouseLoc3, 
  warehouseLoc4 
} from '@/assets';

type GalleryItem = {
  type: 'image' | 'video';
  src: StaticImageData | string | null;
  alt: string;
  videoSrc?: string;
};

export default function Gallery() {
  const t = useUITranslations();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const videoRefs = useRef<{ [key: number]: HTMLVideoElement | null }>({});

  // Video files from public folder
  const videoFiles = [
    // '/video/IMG_0231.mp4',
    // '/video/IMG_0234.mp4',
    '/video/IMG_0236.mp4',
    '/video/IMG_0237.mp4',
    '/video/IMG_0239.mp4',
    '/video/IMG_0242.mp4',
    '/video/IMG_0243.mp4',
    '/video/IMG_0247 (1).mp4',
    '/video/IMG_0252.mp4',
    '/video/IMG_0254.mp4',
  ];

  // Mix images and videos together
  const galleryItems: GalleryItem[] = [
    { type: 'image' as const, src: warehouseIndustrial, alt: 'Industrial warehouse exterior' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 1', videoSrc: videoFiles[0] },  
    { type: 'image' as const, src: warehouseShot1, alt: 'Warehouse interior shot 1' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 2', videoSrc: videoFiles[1] },
    { type: 'image' as const, src: warehouseShot2, alt: 'Warehouse interior shot 2' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 3', videoSrc: videoFiles[2] },
    { type: 'image' as const, src: warehouseShot3, alt: 'Warehouse interior shot 3' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 4', videoSrc: videoFiles[3] },
    { type: 'image' as const, src: warehouseShot4, alt: 'Warehouse interior shot 4' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 5', videoSrc: videoFiles[4] },
    // { type: 'image' as const, src: warehouseDrone, alt: 'Aerial drone view of warehouse' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 6', videoSrc: videoFiles[5] },
    { type: 'image' as const, src: warehouseLayout, alt: 'Warehouse floor plan layout' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 7', videoSrc: videoFiles[6] },
    // { type: 'image' as const, src: warehouseLoc1, alt: 'Location view 1' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 8', videoSrc: videoFiles[7] },
    // { type: 'image' as const, src: warehouseLoc2, alt: 'Location view 2' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 9', videoSrc: videoFiles[8] },
    // { type: 'image' as const, src: warehouseLoc3, alt: 'Location view 3' },
    // { type: 'video' as const, src: null, alt: 'Warehouse video 10', videoSrc: videoFiles[9] },
    
  ].filter(item =>  (item.type === 'image' && item.src)); // Filter out any undefined images

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  // Sync body overflow with modal state
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (selectedImage !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  // Autoplay videos when they come into view
  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5, // Trigger when 50% of video is visible
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        const video = entry.target as HTMLVideoElement;
        if (entry.isIntersecting) {
          video.play().catch(() => {
            // Autoplay was prevented, which is fine
          });
        } else {
          video.pause();
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all video elements after a short delay to ensure they're mounted
    const timeoutId = setTimeout(() => {
      Object.values(videoRefs.current).forEach((video) => {
        if (video) {
          observer.observe(video);
        }
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [galleryItems]);

  return (
    <>
      <section className="py-4 lg:py-6 bg-white relative overflow-hidden" id="gallery">
        {/* Background Image with Opacity */}
        {(() => {
          const bgImageUrl = typeof bg2 === 'string' ? bg2 : bg2.src || bg2;
          return (
            <div
              className="absolute inset-0 bg-no-repeat bg-center bg-cover opacity-30 z-0"
              style={{
                backgroundImage: `url(${bgImageUrl})`,
              }}
            />
          );
        })()}
        <div className="w-full relative z-10">
          {/* Header */}
          <div className="text-center mb-4 lg:mb-5 px-4 md:px-6 lg:px-8">
            <h2
              className="text-xl   lg:text-2xl xl:text-3xl  md:mb-6 mb-0 py-6 text-[#173C65] fw-bold font-libre"
            >
              {t('gallery.title')}
            </h2>
            <p
              className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed font-['Assistant',sans-serif]"
            >
              {t('gallery.subtitle')}
            </p>
          </div>

          {/* Gallery Masonry Grid */}
          {galleryItems.length > 0 ? (
            <div className="xl:w-[88%] w-[95%] mx-auto px-2  lg:px-2">
              <div 
                className="grid gap-1 lg:gap-1.5 grid-cols-[repeat(auto-fill,minmax(150px,1fr))] auto-rows-[minmax(150px,auto)] md:auto-rows-[minmax(250px,auto)] grid-flow-row-dense"
              >
                {galleryItems.map((item, index) => {
                  // Create varied sizes for masonry effect - more horizontal items
                  const getSize = (idx: number) => {
                    const sizes = [
                      { row: 'span 1', col: 'span 2' }, // Wide
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 1', col: 'span 2' }, // Wide
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 1', col: 'span 2' }, // Wide
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 1', col: 'span 1' }, // Square
                      { row: 'span 1', col: 'span 2' }, // Wide
                      { row: 'span 1', col: 'span 1' }, // Square
                    ];
                    return sizes[idx % sizes.length];
                  };
                  
                  const size = getSize(index);
                  
                  return (
                    <div
                      key={index}
                      className="relative rounded-lg overflow-hidden cursor-pointer group shadow-md hover:shadow-xl transition-all duration-300 bg-gray-100"
                      onClick={() => openModal(index)}
                      style={{ 
                        gridRow: size.row,
                        gridColumn: size.col,
                      }}
                    >
                      {item.type === 'image' && item.src ? (
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover group-hover:scale-110 transition-transform duration-300"
                          priority={index < 3}
                        />
                      ) : (
                        <video
                          ref={(el) => {
                            if (el) {
                              videoRefs.current[index] = el;
                            }
                          }}
                          src={item.videoSrc}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                          muted
                          loop
                          playsInline
                        />
                      )}
                      <div className="absolute inset-0 pointer-events-none bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300 flex items-center justify-center">
                        {item.type === 'video' ? (
                          <svg
                            className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        ) : (
                          <svg
                            className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                            />
                          </svg>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              <p>No images available</p>
            </div>
          )}
        </div>
      </section>

      {/* Image/Video Modal */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 z-[1000] bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          {/* Close Button */}
         <button
            onClick={closeModal}
            // UPDATED: Added background and padding to make close button visible
            className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 rounded-full p-2"
            aria-label="Close modal"
          >

            <svg
                className="w-8 h-8 md:w-10 md:h-10 transform group-hover:rotate-90 transition-transform duration-300"

              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            {galleryItems[selectedImage].type === 'image' && galleryItems[selectedImage].src ? (
              <Image
                src={galleryItems[selectedImage].src}
                alt={galleryItems[selectedImage].alt}
                width={1200}
                height={800}
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <video
                src={galleryItems[selectedImage].videoSrc}
                controls
                autoPlay
                className="max-w-full max-h-full object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
            )}
          </div>
          {/* Navigation */}
          {galleryItems.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => (prev === 0 ? galleryItems.length - 1 : (prev || 0) - 1));
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Previous"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => ((prev || 0) + 1) % galleryItems.length);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-10"
                aria-label="Next"
              >
                <svg
                  className="w-10 h-10"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}
        </div>
      )}
    </>
  );
}

