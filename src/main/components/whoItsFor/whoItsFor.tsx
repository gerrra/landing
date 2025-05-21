import React, { useEffect, useState } from 'react';
import ScrollAppear from '../../../global/components/scrollAppear/scrollAppear';
import { ComponentAppearDirection } from '../../../global/enums/componentAppearDirection';
import { newIdeaId, scalabilityId, tiredId } from '../../../global/images/imageIds';
import SmartImageCloudinary from '../../../global/components/smartImage/smartImage';
import { ComponentIds } from '../../../global/enums/componentIds';
import { getImageWidth } from '../../../global/service/globalService';

type whoItsForListItem = {
    title: string,
    description?: string,
    image?: string,
};

const WhoItsFor: React.FC = () => {
    const lgSizeImage = 70;
    const [imageWidth, setImageWidth] = useState(getImageWidth(lgSizeImage));
    const whoItsForList: whoItsForListItem[] = [
        {
            title: 'A founder validating a new idea',
            image: newIdeaId,
        },
        {
            title: 'A developer tired of endless setup',
            image: tiredId,
        },
        {
            title: 'A team seeking scalability and flexibility',
            image: scalabilityId,
        }
    ];

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
            id={ComponentIds.WhoItsFor}
            className='
                scroll-mt-24
            '
        >
            <ScrollAppear
                classNames='
                    lg:mb-8
                    md:mb-6
                    sm:mb-5
                    mb-4
                '
                direction={ComponentAppearDirection.Right}
                component={
                    <div
                        className='
                            font-bold

                            lg:text-2xl
                            md:text-xl
                            sm:text-lg
                            text-base
                        '
                    >
                        DevSpark is perfect if you're:
                    </div>
                }
            />
            <div
                className='
                    grid
                    justify-items-center
                    items-center

                    md:grid-cols-3
                    sm:grid-cols-1

                    lg:gap-4
                    md:gap-4
                    sm:gap-3
                    gap-2
                '
            >
                {
                    whoItsForList.map((item: whoItsForListItem, index: number) => (
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

                                        lg:text-xl
                                        md:text-lg
                                        sm:text-base
                                        text-sm

                                        lg:gap-4
                                        md:gap-4
                                        sm:gap-3
                                        gap-2
                                    '
                                >
                                    {
                                        !!item.image &&
                                        <SmartImageCloudinary
                                            alt={item.title}
                                            publicId={item.image}
                                            width={imageWidth}
                                        />
                                    }
                                    <div>
                                        {item.title}
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

export default WhoItsFor;