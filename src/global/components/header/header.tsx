import React, { useEffect, useMemo, useState } from 'react';
import SmartImageCloudinary from '../smartImage/smartImage';
import { logoId } from '../../images/imageIds';
import { links } from '../../service/globalService';
import { LinksItemType } from '../../types/linksItemType';

const Header = () => {
    const [hasShadow, setHasShadow] = useState(false);

    useEffect(
        () => {
            const handleScroll = () => {
                setHasShadow(window.scrollY > 0);
            };

            window.addEventListener('scroll', handleScroll);
            return () => window.removeEventListener('scroll', handleScroll);
        },
        [],
    );

    const headerClassNames = useMemo(
        () => `
            fixed
            top-0
            left-0
            w-full
            z-50
            grid
            grid-cols-[auto_auto_1fr]
            gap-2
            items-center
            py-4
            px-8
            transition-all
            duration-300
            ${hasShadow ? 'shadow-md bg-white' : ''}
        `,
        [hasShadow],
    );

    return (
        <div
            className={headerClassNames}
        >
            <div
                className='
                    flex
                    items-center
                    gap-2
                '
            >
                <SmartImageCloudinary
                    alt='Logo'
                    publicId={logoId}
                    className='w-8 h-8'
                />
                <span
                    className='font-bold text-lg'
                >
                    DevSpark
                </span>
            </div>
            <nav
                className='
                    col-span-2
                    flex
                    justify-end
                    gap-6
                    text-sm
                    font-medium
                    text-gray-700
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
        </div>
    )
}

export default Header;