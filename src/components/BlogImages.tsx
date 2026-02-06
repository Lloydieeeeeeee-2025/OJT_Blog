"use client";

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogImagesProps {
    images: string[];
    altPrefix?: string;
}

export default function BlogImages({ images, altPrefix = 'Blog image' }: BlogImagesProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlay, setIsAutoPlay] = useState(true);

    if (!images || images.length === 0) {
        return null;
    }

    // Auto-rotate from right to left
    useEffect(() => {
        if (!isAutoPlay || images.length <= 1) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images.length, isAutoPlay]);

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
        setIsAutoPlay(false);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length);
        setIsAutoPlay(false);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlay(false);
    };

    // Single image - display as gallery
    if (images.length === 1) {
        return (
            <div className="my-8">
                <div className="relative w-full overflow-hidden rounded-xl shadow-2xl group">
                    <img
                        src={images[0]}
                        alt={`${altPrefix} 1`}
                        className="w-full h-96 md:h-[500px] object-cover object-center transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    {/* Subtle gradient overlay on hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/0 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
            </div>
        );
    }

    // Multiple images - display as carousel
    return (
        <div className="my-8">
            <div
                className="relative w-full overflow-hidden rounded-xl shadow-2xl group"
                onMouseEnter={() => setIsAutoPlay(false)}
                onMouseLeave={() => setIsAutoPlay(true)}
            >
                {/* Carousel Container */}
                <div className="relative w-full h-96 md:h-[500px] bg-black">
                    <div
                        className="flex h-full transition-transform duration-1000 ease-in-out"
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {images.map((imageUrl, index) => (
                            <img
                                key={index}
                                src={imageUrl}
                                alt={`${altPrefix} ${index + 1}`}
                                className="w-full h-full flex-shrink-0 object-cover object-center"
                                loading="lazy"
                            />
                        ))}
                    </div>

                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none"></div>
                </div>

                {/* Navigation Arrows */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrev}
                            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 border border-white/20"
                            aria-label="Previous image"
                        >
                            <ChevronLeft size={24} strokeWidth={2.5} />
                        </button>

                        <button
                            onClick={handleNext}
                            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white p-3 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 z-10 border border-white/20"
                            aria-label="Next image"
                        >
                            <ChevronRight size={24} strokeWidth={2.5} />
                        </button>
                    </>
                )}

                {/* Dots Navigation - Always visible */}
                {images.length > 1 && (
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                        {images.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleDotClick(index)}
                                className={`transition-all duration-300 rounded-full backdrop-blur-sm ${
                                    index === currentIndex
                                        ? 'w-8 h-2.5 bg-white shadow-lg'
                                        : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/60'
                                }`}
                                aria-label={`Go to image ${index + 1}`}
                            />
                        ))}
                    </div>
                )}

                {/* Image Counter */}
                {images.length > 1 && (
                    <div className="absolute top-6 right-6 bg-black/40 backdrop-blur-md text-white px-4 py-2 rounded-full text-sm font-medium border border-white/20">
                        {currentIndex + 1} / {images.length}
                    </div>
                )}

                {/* Progress Bar */}
                {images.length > 1 && (
                    <div className="absolute bottom-0 left-0 h-1 bg-white/20 w-full">
                        <div
                            className="h-full bg-white transition-all duration-300"
                            style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
                        ></div>
                    </div>
                )}
            </div>

            {/* Image Information */}
            {images.length > 1 && (
                <div className="mt-4 flex items-center justify-between">
                    <p className="text-sm text-gray-600 font-medium">
                        {images.length} images
                    </p>
                    <p className="text-xs text-gray-500">
                        Auto-rotate every 4 seconds
                    </p>
                </div>
            )}
        </div>
    );
}