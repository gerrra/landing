import React from 'react';
import ScrollAppear from '../../../global/components/scrollAppear/scrollAppear';
import { ComponentAppearDirection } from '../../../global/enums/componentAppearDirection';
import { ComponentIds } from '../../../global/enums/componentIds';
import SmartImageCloudinary from '../../../global/components/smartImage/smartImage';
import { howItWorksId } from '../../../global/images/imageIds';

const HowItWorks: React.FC = () => {
    return (
        <section
            id={ComponentIds.HowItWorks}
            className='
                grid
                items-center
                justify-items-center
                scroll-mt-24
                grid-flow-dense

                md:grid-cols-[1fr_1fr]
                grid-cols-[2fr_1fr]
            '
        >
            <ScrollAppear
                classNames='
                    sm:block
                    hidden

                    md:order-1
                    order-2
                '
                component={
                    <SmartImageCloudinary
                        alt='HowItWorks'
                        publicId={howItWorksId}
                        width={500}
                    />
                }
                direction={ComponentAppearDirection.Right}
            />
            <ScrollAppear
                classNames='
                    md:order-2
                    order-1
                '
                component={
                    <div>
                        <div
                            className='
                                font-bold

                                lg:text-2xl
                                md:text-xl
                                text-lg
                            '
                        >
                            Simple setup
                        </div>
                        <div
                            className='
                                font-bold

                                lg:mb-8
                                md:mb-6
                                mb-5

                                lg:text-2xl
                                md:text-xl
                                text-lg
                            '
                        >
                            Reliable performance
                        </div>
                        <div
                            className='
                                lg:text-lg
                                md:text-lg
                                text-base
                            '
                        >
                            Choose your stack, connect your repo, and DevSpark takes care of the rest: deployment, security, monitoring, and scaling
                        </div>
                    </div>
                }
                direction={ComponentAppearDirection.Left}
            />
        </section>
    );
};

export default HowItWorks;