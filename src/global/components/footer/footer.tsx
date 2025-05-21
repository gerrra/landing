import React from 'react';
import ScrollAppear from '../scrollAppear/scrollAppear';
import { ComponentAppearDirection } from '../../enums/componentAppearDirection';
import { links } from '../../service/globalService';
import { LinksItemType } from '../../types/linksItemType';

type ContactItem = {
    title?: string;
    value: string;
}

const Footer: React.FC = () => {
    const contacts: ContactItem[] = [
        {
            title: 'Email',
            value: 'support@devspark.io',
        },
        {
            title: 'Telegram',
            value: '@devspark',
        },
        {
            value: 'Moscow, Russia / Seattle, USA',
        },
    ]

    return (
        <section
            className='
                scroll-mt-24
                grid
                text-white
                w-[100%]

                md:grid-cols-[1fr_1fr_1fr]
                grid-cols-1

                lg:gap-6
                md:gap-6
                gap-4
            '
        >
            <ScrollAppear
                direction={ComponentAppearDirection.Up}
                component={
                    <div
                        className='
                            grid
                            justify-items-center
                        '
                    >
                        <div
                            className='
                                font-bold

                                lg:text-lg
                                md:text-lg
                                text-base

                                lg:mb-4
                                md:mb-4
                                mb-3
                            '
                        >
                            About us
                        </div>
                        <div
                            className='
                                text-center

                                lg:text-lg
                                md:text-lg
                                text-base
                            '
                        >
                            DevSpark is a platform for launching and scaling digital projects fast. We help developers, founders, and teams focus on what matters — building products, not infrastructure
                        </div>
                    </div>
                }
            />
            <ScrollAppear
                direction={ComponentAppearDirection.Up}
                component={
                    <div
                        className='
                            grid
                            grid-cols-1
                            justify-items-center
                        '
                    >
                        <div
                            className='
                                font-bold

                                lg:text-lg
                                md:text-lg
                                text-base

                                lg:mb-4
                                md:mb-4
                                mb-3
                            '
                        >
                            Navigation
                        </div>
                        {
                            links.map((link: LinksItemType, index: number) => (
                                <a
                                    key={index}
                                    href={`#${link.href}`}
                                    className='
                                        

                                        hover:text-blue-500
                                        active:scale-95

                                        lg:text-lg
                                        md:text-lg
                                        text-base

                                        py-1
                                    '
                                >
                                    {link.title}
                                </a>
                            ))
                        }
                    </div>
                }
            />
            <ScrollAppear
                direction={ComponentAppearDirection.Up}
                component={
                    <div
                        className='
                            grid
                            grid-rows-[auto_1fr_auto]
                            h-full
                            justify-items-center
                        '
                    >
                        <div
                            className='
                                font-bold

                                lg:text-lg
                                md:text-lg
                                text-base

                                lg:mb-4
                                md:mb-4
                                mb-3
                            '
                        >
                            Contact
                        </div>
                        <div
                            className='
                                lg:mb-4
                                md:mb-4
                                mb-3
                            '
                        >
                            {
                                contacts.map((contact: ContactItem, index: number) => (
                                    <div
                                        key={index}
                                        className='
                                            grid
                                            grid-cols-[auto_auto_1fr]
                                            gap-2
                                            py-1

                                            lg:text-lg
                                            md:text-lg
                                            text-base

                                            w-fit
                                            mx-auto
                                        '
                                    >
                                        <div
                                            className='
                                                font-bold
                                                leading-none
                                            '
                                        >
                                            • 
                                        </div>
                                        {
                                            !!contact.title &&
                                            <div
                                                className='
                                                    font-bold
                                                    whitespace-nowrap
                                                '
                                            >
                                                {contact.title}:
                                            </div>
                                        }
                                        <div
                                            className='
                                                break-words
                                            '
                                        >
                                            {contact.value}
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                        <div
                            className='
                                md:text-base
                                text-sm
                            '
                        >
                            © 2025 DevSpark | All rights reserved
                        </div>
                    </div>
                }
            />
        </section>
    );
};

export default Footer;