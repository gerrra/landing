import React, { useEffect, useState } from 'react';
import ScrollAppear from '../../../global/components/scrollAppear/scrollAppear';
import { ComponentAppearDirection } from '../../../global/enums/componentAppearDirection';
import { DanielId, ElenaId, testimonialsId } from '../../../global/images/imageIds';
import SmartImageCloudinary from '../../../global/components/smartImage/smartImage';
import { ComponentIds } from '../../../global/enums/componentIds';
import { getImageWidth } from '../../../global/service/globalService';

type testimonialsListItem = {
    name: string,
    description?: string,
    image?: string,
};

const Testimonials: React.FC = () => {
    const testimonialsList: testimonialsListItem[] = [
        {
            name: 'Elena, startup co-founder',
            description: 'DevSpark helped us launch our MVP in 3 days — no DevOps, no headaches',
            image: ElenaId,
        },
        {
            name: 'Daniel, developer',
            description: 'Feels like magic. Perfect for freelancers and small teams',
            image: DanielId,
        },
    ];

    const lgSizeImage = 100;
    const [imageWidth, setImageWidth] = useState(getImageWidth(lgSizeImage));

    useEffect(
        () => {
            const handler = () => setImageWidth(getImageWidth(lgSizeImage));
            window.addEventListener('resize', handler);
            return () => window.removeEventListener('resize', handler);
        },
        [],
    );

    return (
        <section
            id={ComponentIds.Testimonials}
            className='
                scroll-mt-24
                grid
                justify-items-center
                relative
            '
        >
            <div
                className='
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    opacity-50
                '
            >
                <SmartImageCloudinary
                    alt='TestimonialsBackground'
                    publicId={testimonialsId}
                />
            </div>
            <ScrollAppear
                direction={ComponentAppearDirection.Down}
                component={
                    <div
                        className='
                            font-bold
                            text-center

                            lg:text-2xl
                            md:text-xl
                            text-lg

                            lg:mb-8
                            md:mb-6
                            mb-5
                        '
                    >
                        Testimonials
                    </div>
                }
            />
            <div
                className={`
                    grid
                    grid-rows-2
                    justify-items-center
                    items-center

                    md:w-[80%]
                    w-[100%]

                    lg:gap-4
                    md:gap-4
                    gap-3
                `}
            >
                {
                    testimonialsList.map((item: testimonialsListItem, index: number) => (
                        <ScrollAppear
                            key={index}
                            direction={ComponentAppearDirection.Up}
                            durationTime={`${1000 + index * 500}`}
                            component={
                                <div
                                    className='
                                        grid
                                        grid-cols-[auto_1fr]
                                        items-center
                                        bg-white/50
                                        rounded-lg

                                        lg:p-4
                                        md:p-3
                                        p-3

                                        lg:gap-4
                                        md:gap-4
                                        gap-3
                                    '
                                >
                                    {
                                        !!item.image &&
                                        <SmartImageCloudinary
                                            alt={item.name}
                                            publicId={item.image}
                                            width={imageWidth}
                                        />
                                    }
                                    <div>
                                        <div
                                            className='
                                                font-bold

                                                lg:text-xl
                                                md:text-lg
                                                text-base
                                            '
                                        >
                                            - {item.name}
                                        </div>
                                        <div
                                            className='
                                                lg:text-lg
                                                md:text-lg
                                                text-base
                                            '
                                        >
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            }
                        />
                    ))
                }
            </div>
        </section>
    );
};

export default Testimonials;