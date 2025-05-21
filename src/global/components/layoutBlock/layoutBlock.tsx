import React, { JSX, useMemo } from 'react';

type layoutBlockProps = {
    component: JSX.Element;
    classNames?: string;
    bgBlack?: boolean;
    bgWhite?: boolean;
}

const LayoutBlock: React.FC<layoutBlockProps> = (props: layoutBlockProps) => {
    const bgBlack: string = 'bg-[#1a1a1a]';
    const bgWhite: string = 'bg-white';
    const wrapClassNames = useMemo(
        () => {
            return `
                ${props.classNames ?? ''}
                ${props.bgBlack ? bgBlack : props.bgWhite ? bgWhite : 'bg-gray-100'}

                lg:p-12
                md:p-8
                p-6
            `
        },
        [props.classNames, props.bgBlack, props.bgWhite],
    );

    return (
        <div
            className={wrapClassNames}
        >
            {props.component}
        </div>
    );
};

export default LayoutBlock;