import React from 'react';
import ScrollAppear from '../../../global/components/scrollAppear/scrollAppear';
import { ComponentAppearDirection } from '../../../global/enums/componentAppearDirection';
import { ComponentIds } from '../../../global/enums/componentIds';

type buttonsItem = {
    title: string;
}

const GetStarted: React.FC = () => {
    const buttons: buttonsItem[] = [
        {
            title: 'Sign up',
        },
        {
            title: 'Contact our team',
        },
    ]
    return (
        <section
            id={ComponentIds.GetStarted}
            className='
                scroll-mt-24
                grid
                justify-items-center
                items-center
            '
        >
            <ScrollAppear
                classNames='
                    text-center

                    lg:mb-8
                    md:mb-6
                    mb-5
                '
                direction={ComponentAppearDirection.Down}
                component={
                    <div>
                        <div
                            className='
                                font-bold

                                lg:text-2xl
                                md:text-xl
                                text-lg

                                lg:mb-4
                                md:mb-4
                                mb-3
                            '
                        >
                            Get started today
                        </div>
                        <div
                            className='
                                lg:text-lg
                                md:text-lg
                                text-base
                            '
                        >
                            DevSpark is your next step in digital growth. Launch your first project now
                        </div>
                    </div>
                }
            />
            <ScrollAppear
                direction={ComponentAppearDirection.Up}
                classNames='
                    lg:w-[50%]
                    md:w-[80%]
                    w-[100%]
                '
                component={
                    <div
                        className='
                            grid
                            grid-cols-2
                            items-center

                            lg:text-xl
                            md:text-lg
                            sm:text-base
                            text-sm

                            lg:gap-4
                            md:gap-4
                            gap-3
                        '
                    >
                        {
                            buttons.map((button: buttonsItem, index:number) => (
                                <div
                                    className='
                                        bg-blue-300
                                        rounded-lg
                                        text-white
                                        text-center
                                        cursor-pointer
                                        transition
                                        duration-700

                                        hover:bg-blue-500
                                        active:scale-95

                                        lg:p-4
                                        md:p-3
                                        sm:p-3
                                        p-2
                                    '
                                >
                                    {button.title}
                                </div>
                            ))
                        }
                    </div>
                }
            />
        </section>
    );
};

export default GetStarted;