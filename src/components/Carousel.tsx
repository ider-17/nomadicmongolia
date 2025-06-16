'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'

interface Slide {
    _id: string
    title: string
    description: string
    btnText: string
    bgImageUrl: string
    linkUrl: string
}

interface CarouselProps {
    slides: Slide[]
}

export default function Carousel({ slides }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [touchStartX, setTouchStartX] = useState(0)
    const [touchEndX, setTouchEndX] = useState(0)

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex)
    }

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchStartX(e.touches[0].clientX)
    }

    const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
        setTouchEndX(e.changedTouches[0].clientX)
    }

    useEffect(() => {
        if (touchStartX && touchEndX) {
            if (touchStartX - touchEndX > 50) {
                nextSlide()
            } else if (touchEndX - touchStartX > 50) {
                prevSlide()
            }
        }
    }, [touchStartX, touchEndX])

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') {
                prevSlide()
            } else if (e.key === 'ArrowRight') {
                nextSlide()
            }
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [currentIndex])

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === slides.length - 1 ? 0 : prevIndex + 1
            )
        }, 5000)

        return () => clearInterval(intervalId)
    }, [slides.length])

    return (
        <section className="bg-white w-full h-[780px] flex justify-center px-[150px] pt-[90px]">
            <div
                className="relative mx-auto h-[600px] w-full overflow-hidden rounded-lg shadow-xl hover:-translate-y-1 transition-all duration-300 hover:scale-105"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                {/* Slides */}
                <div
                    className="h-full flex transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide) => (
                        <div
                            key={slide._id}
                            className="min-w-full flex items-end justify-center text-white bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.bgImageUrl})` }}
                        >
                            <div className="max-w-5xl mx-auto px-6 py-4 text-center mb-15">
                                <h2 className="text-4xl font-bold mb-4 drop-shadow-md">{slide.title}</h2>
                                <p className="text-lg mb-6 drop-shadow-md">{slide.description}</p>
                                <Link href={slide.linkUrl}>
                                    <button className="bg-white text-gray-800 font-semibold px-6 py-3 rounded-full hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 hover:bg-gray-100 cursor-pointer">
                                        {slide.btnText}
                                    </button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex items-end justify-center gap-45 p-4">
                    <button
                        onClick={prevSlide}
                        className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-md transition-all duration-300 cursor-pointer"
                    >
                        <ChevronLeft size={24} className="text-gray-800" />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="p-2 rounded-full bg-white/70 hover:bg-white/90 shadow-md transition-all duration-300 cursor-pointer"
                    >
                        <ChevronRight size={24} className="text-gray-800" />
                    </button>
                </div>

                {/* Indicators */}
                <div className="absolute bottom-[30px] left-1/2 transform -translate-x-1/2 flex space-x-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-white scale-125' : 'bg-white/50'
                                }`}
                        ></button>
                    ))}
                </div>
            </div>
        </section>
    )
}
