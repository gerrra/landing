import React, { JSX, useMemo } from 'react';

type layoutBlockProps = {
    component: JSX.Element;
    classNames?: string;
}

const LayoutBlock: React.FC<layoutBlockProps> = (props: layoutBlockProps) => {
    const wrapClassNames = useMemo(
        () => {
            return `
                bg-gray-100
                ${props.classNames}

                lg:p-12
                md:p-8
                sm:p-6
                p-4
            `
        },
        [props.classNames],
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