"use client";

import React, { useState } from 'react';

interface SectionItemProps {
    section: {
        title: string;
        content: string;
        image: { asset: { url: string } };
        imagePosition: 'left' | 'right';
    };
};

const SectionThree: React.FC<SectionItemProps> = ({ section }) => {
    const [showMore, setShowMore] = useState(false);
    const maxLength = 600;

    const isLongText = section.content.length > maxLength;
    const visibleText = showMore ? section.content : section.content.slice(0, maxLength);

    return (
        <div className="w-full text-black px-[150px] mb-20">
            <div className="flex gap-4 items-center">
                {section.imagePosition === 'left' && (
                    <div
                        className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(${section.image.asset.url})` }}
                    ></div>
                )}
                <div className="w-1/2">
                    <h1 className="text-3xl font-bold text-center mb-6">{section.title}</h1>
                    <p className="text-lg text-justify">
                        {visibleText}
                        {showMore ? '' : '...'}
                        {isLongText && (
                            <span
                                onClick={() => setShowMore(!showMore)}
                                className="text-blue-600 cursor-pointer ml-2"
                            >
                                {showMore ? 'less' : 'more'}
                            </span>
                        )}
                    </p>
                </div>
                {section.imagePosition === 'right' && (
                    <div
                        className="w-1/2 h-[400px] bg-cover bg-center rounded-2xl"
                        style={{ backgroundImage: `url(${section.image.asset.url})` }}
                    ></div>
                )}
            </div>
        </div>
    );
};

export default SectionThree;
