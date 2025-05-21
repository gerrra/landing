import React from 'react';
import ScrollAppear from '../../../global/components/scrollAppear/scrollAppear';
import { ComponentAppearDirection } from '../../../global/enums/componentAppearDirection';
import { ComponentIds } from '../../../global/enums/componentIds';
import SmartImageCloudinary from '../../../global/components/smartImage/smartImage';
import { devSparkAboutId } from '../../../global/images/imageIds';

type keyFeatureItem = {
    title: string;
}

const About: React.FC = () => {
    const keyFeatures: keyFeatureItem[] = [
        {
            title: 'Instant project launch',
        },
        {
            title: 'CI/CD automation',
        },
        {
            title: 'Cloud infrastructure',
        },
        {
            title: 'Built-in security and analytics',
        },
    ];

    return (
        <section
            id={ComponentIds.About}
            className='
                grid
                z-1
                scroll-mt-24
                relative

                lg:grid-cols-[1fr_auto]
                md:grid-cols-1

                lg:gap-12
                md:gap-8
                sm:gap-6
                gap-4
            '
        >
            <div>
                <ScrollAppear
                    classNames='
                        lg:mb-12
                        md:mb-10
                        sm:mb-8
                        mb-6
                    '
                    direction={ComponentAppearDirection.Right}
                    component={
                        <div>
                            <div
                                className='
                                    font-bold

                                    lg:text-4xl
                                    md:text-3xl
                                    sm:text-2xl
                                    text-xl

                                    lg:mb-6
                                    md:mb-6
                                    sm:mb-5
                                    mb-4

                                    lg:mt-12
                                    md:mt-10
                                    sm:mt-8
                                    mt-6
                                '
                            >
                                DevSpark
                            </div>
                            <div
                                className='
                                    font-bold

                                    lg:text-2xl
                                    md:text-xl
                                    sm:text-lg
                                    text-base

                                    lg:mb-4
                                    md:mb-4
                                    sm:mb-3
                                    mb-2
                                '
                            >
                                Ignite ideas. Build with technology
                            </div>
                            <div
                                className='
                                    lg:text-lg
                                    md:text-lg
                                    sm:text-base
                                    text-sm
                                '
                            >
                                A platform for fast launch, testing, and scaling of digital products. Everything a developer needs — in one place
                            </div>
                        </div>
                    }
                />
                <ScrollAppear
                    classNames='
                        lg:mb-4
                        md:mb-4
                        sm:mb-3
                        mb-2
                    '
                    direction={ComponentAppearDirection.Right}
                    component={
                        <div>
                            <div
                                className='
                                    font-bold

                                    lg:text-2xl
                                    md:text-xl
                                    sm:text-lg
                                    text-base

                                    lg:mb-4
                                    md:mb-4
                                    sm:mb-3
                                    mb-2
                                '
                            >
                                Everything you need to grow your product
                            </div>
                            <div
                                className='
                                    lg:text-lg
                                    md:text-lg
                                    sm:text-base
                                    text-sm
                                '
                            >
                                DevSpark brings together development, deployment, and analytics tools so you can focus on building — not on boring setups
                            </div>
                        </div>
                    }
                />
                {
                    keyFeatures.map((item: keyFeatureItem, index: number) => (
                        <ScrollAppear
                            key={index}
                            classNames='
                                lg:mb-4
                                md:mb-4
                                sm:mb-3
                                mb-2
                            '
                            direction={ComponentAppearDirection.Right}
                            durationTime={`${1500 + 300 * index}`}
                            component={
                                <div
                                    className='
                                        font-bold

                                        lg:text-lg
                                        md:text-lg
                                        sm:text-base
                                        text-sm
                                    '
                                >
                                    • {item.title}
                                </div>
                            }
                        />
                    ))
                }
            </div>
            <ScrollAppear
                classNames='
                    lg:w-[450px]
                    md:w-[350px]
                    md:bottom-0
                    md:right-0
                    md:block
                    hidden

                    lg:relative
                    md:absolute

                    lg:opacity-100
                    md:opacity-40
                '
                component={
                    <SmartImageCloudinary
                        alt='DevSparkAbout'
                        publicId={devSparkAboutId}
                    />
                }
            />
        </section>
    );
};

export default About;