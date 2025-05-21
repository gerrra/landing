import React, { useCallback, useMemo } from 'react';
import ScrollAppear from '../../../global/components/scrollAppear/scrollAppear';
import { ComponentAppearDirection } from '../../../global/enums/componentAppearDirection';
import { ComponentIds } from '../../../global/enums/componentIds';
import clsx from 'clsx';

type pricingListItem = {
    title: string,
    description?: string,
    image?: string,
    backgroundColor?: string,
};

const Pricing: React.FC = () => {
    const pricingList: pricingListItem[] = [
        {
            title: 'Free',
            description: '1 project, basic features',
            backgroundColor: 'green100',
        },
        {
            title: 'Pro',
            description: '$19/mo — all you need as a solo dev',
            backgroundColor: 'green200',
        },
        {
            title: 'Team',
            description: '$59/mo — for collaborative teams',
            backgroundColor: 'green300',
        },
        {
            title: 'Enterprise',
            description: 'custom plans available',
            backgroundColor: 'green400',
        },
    ];

    const bgHover = useMemo(
        (): { [key: string]: string } => ({
            green100: 'hover:bg-green-100',
            green200: 'hover:bg-green-200',
            green300: 'hover:bg-green-300',
            green400: 'hover:bg-green-400',
        }),
        [],
    );

    const priceItemWrap = useCallback(
        (backgroundColor?: string) => {
            return clsx(
                'lg:p-4',
                'md:p-3',
                'sm:p-3',
                'p-2',

                'rounded-lg',
                'bg-white',
                'cursor-pointer',
                'transition',
                'duration-700',
                'active:scale-95',
                backgroundColor && bgHover[backgroundColor]
            );
        },
        [bgHover],
    );

    return (
        <section
            id={ComponentIds.Pricing}
            className='
                scroll-mt-24
                grid
            '
        >
            <ScrollAppear
                direction={ComponentAppearDirection.Down}
                component={
                    <div
                        className='
                            font-bold

                            lg:text-2xl
                            md:text-xl
                            sm:text-lg
                            text-base

                            lg:mb-8
                            md:mb-6
                            sm:mb-5
                            mb-4
                        '
                    >
                        Pricing
                    </div>
                }
            />
            <div
                className={`
                    grid
                    justify-items-center
                    items-center

                    lg:gap-4
                    md:gap-4
                    sm:gap-3
                    gap-2

                    md:grid-cols-[1fr_1fr]
                    grid-cols-1
                `}
            >
                {
                    pricingList.map((item: pricingListItem, index: number) => (
                        <ScrollAppear
                            key={index}
                            direction={ComponentAppearDirection.Up}
                            durationTime={`${1000 + index * 300}`}
                            component={
                                <div
                                    className={priceItemWrap(item.backgroundColor)}
                                >
                                    <div
                                        className='
                                            font-bold

                                            lg:text-lg
                                            md:text-lg
                                            sm:text-base
                                            text-sm
                                        '
                                    >
                                        {item.title}
                                    </div>
                                    <div
                                        className='
                                            lg:text-lg
                                            md:text-lg
                                            sm:text-base
                                            text-sm
                                        '
                                    >
                                        - {item.description}
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

export default Pricing;