import React, { useEffect, useMemo, useRef, useState } from 'react';
import SmartImageCloudinary from '../smartImage/smartImage';
import { burgerId, closeId, logoId } from '../../images/imageIds';
import { links } from '../../service/globalService';
import { LinksItemType } from '../../types/linksItemType';

const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);
    const [showTitle, setShowTitle] = useState(false);
    const [showMenu, setShowMenu] = useState(false);
    const width1024 = 1024;
    const width768 = 768;
    const [width, setWidth] = useState<number>(typeof window !== 'undefined' ? window.innerWidth : 0);
    const ref = useRef<HTMLDivElement>(null);

    const headerClassNames = useMemo(
        () => `
            fixed
            top-0
            left-0
            w-full
            z-10
            grid
            grid-cols-[auto_auto_1fr]
            items-center
            transition-all
            duration-300
            ${hasShadow ? 'shadow-md bg-white' : ''}

            lg:gap-4
            md:gap-4
            gap-3

            lg:px-12
            md:px-8
            px-6

            lg:py-4
            md:py-4
            py-3
        `,
        [hasShadow],
    );

    const titleClassNames = useMemo(
        () => `
            font-bold
            transition-all
            duration-300

            lg:text-2xl
            md:text-xl
            text-lg
            ${(showTitle || showMenu) ? 'opacity-100' : 'opacity-0'}
        `,
        [showTitle, showMenu],
    );

    useEffect(
        () => {
            const handleClickOutside = (event: MouseEvent) => {
                if (ref.current && !ref.current.contains(event.target as Node)) {
                    setShowMenu(false)
                }
            }
            const handleResize = () => {
                setWidth(window.innerWidth);
                setShowMenu(false);
            }
            const handleScroll = () => {
                setShowMenu(false);
                setHasShadow(window.scrollY > 0);
                setShowTitle(window.scrollY > 50);
            }

            window.addEventListener('resize', handleResize);
            window.addEventListener('scroll', handleScroll);
            document.addEventListener('mousedown', handleClickOutside);

            return () => {
                window.removeEventListener('resize', handleResize)
                window.removeEventListener('scroll', handleScroll)
                document.addEventListener('mousedown', handleClickOutside);
            };
        },
        [],
    );

    const miniMenuWrapClasses = useMemo(
        () => {
            let translate: string = '';
            if (width < width1024) translate = 'translate-y-[72px]';
            if (width < width768) translate = 'translate-y-[56px]';

            return `
                grid
                grid-cols-1
                fixed
                top-0
                right-0
                w-full
                transition
                duration-300
                shadow-md
                ${showMenu ? `opacity-100 ${translate}` : 'opacity-0 -translate-y-[100%]'}
                ${hasShadow ? 'bg-white' : 'bg-gray-100'}
            `

        },
        [width, showMenu, hasShadow],
    );

    return (
        <div
            className={headerClassNames}
        >
            <div
                className='
                    flex
                    items-center

                    lg:gap-4
                    md:gap-4
                    gap-3
                '
            >
                <SmartImageCloudinary
                    alt='Logo'
                    publicId={logoId}
                    className='
                        lg:w-12
                        md:w-10
                        w-8

                        lg:h-12
                        md:h-10
                        h-8
                    '
                />
                <span
                    className={titleClassNames}
                >
                    DevSpark
                </span>
            </div>
            {
                width >= width1024
                    ? <nav
                        className='
                            col-span-2
                            flex
                            justify-end
                            text-gray-700
                            font-medium

                            lg:text-lg
                            md:text-lg
                            text-base

                            lg:gap-6
                            md:gap-6
                            gap-4
                        '
                    >
                        {
                            links.map((link: LinksItemType, index: number) => (
                                <a
                                    key={index}
                                    href={`#${link.href}`}
                                    className='
                                        hover:text-blue-500
                                        active:scale-95
                                    '
                                >
                                    {link.title}
                                </a>
                            ))
                        }
                    </nav>
                    : <div
                        className='
                            col-span-2
                            flex
                            justify-end
                        '
                    >
                        <SmartImageCloudinary
                            alt='Menu'
                            publicId={showMenu ? closeId : burgerId}
                            onClick={() => setShowMenu(!showMenu)}
                            className='
                                active:scale-95
                                cursor-pointer
    
                                lg:w-12
                                md:w-10
                                w-8
    
                                lg:h-12
                                md:h-10
                                h-8
                            '
                        />
                    </div>
            }
            <div
                ref={ref}
                className={miniMenuWrapClasses}
            >
                {
                    links.map((link: LinksItemType, index: number) => (
                        <a
                            key={index}
                            href={`#${link.href}`}
                            onClick={() => setShowMenu(!showMenu)}
                            className='
                                w-full
                                hover:text-blue-500
                                cursor-pointer
                                py-4
                                px-6

                                lg:text-lg
                                md:text-lg
                                text-base
                            '
                        >
                            {link.title}
                        </a>
                    ))
                }
            </div>
        </div>
    )
}

export default Header;