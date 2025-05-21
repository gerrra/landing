import React, { useRef, useEffect, useState, JSX, useMemo } from 'react';
import { ComponentAppearDirection } from '../../enums/componentAppearDirection';
import { AnimationTrajectory } from '../../enums/animationTrajectory';
import { Axis } from '../../enums/axis';

type scrollAppearProps = {
    component: JSX.Element;
    classNames?: string;
    direction?: ComponentAppearDirection;
    durationTime?: string;
    animationTrajectory?: AnimationTrajectory | string;
    pathLength?: string;
}

const ScrollAppear: React.FC<scrollAppearProps> = ({
    component,
    classNames,
    direction = ComponentAppearDirection.Left,
    animationTrajectory = AnimationTrajectory.EaseInOut,
    durationTime = '1000',
    pathLength = '20',
}) => {
    const targetRef = useRef<HTMLDivElement | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(
        () => {
            const observer: IntersectionObserver = new IntersectionObserver(
                ([entry]) => {
                    setIsVisible(entry.isIntersecting);
                },
                { threshold: 0.1 }
            );
            const targetRefCurrent: HTMLDivElement | null = targetRef.current;

            if (targetRefCurrent) observer.observe(targetRefCurrent);

            return () => {
                if (targetRefCurrent) observer.unobserve(targetRefCurrent)
            };
        },
        [],
    );

    const transformAxisAndValue = useMemo(
        () => {
            const axis = (direction === ComponentAppearDirection.Left || direction ===  ComponentAppearDirection.Right)
                    ? Axis.X
                    : Axis.Y
            const value = `${(direction === ComponentAppearDirection.Right || direction === ComponentAppearDirection.Down) ? '-' : ''}${pathLength}`;
            const transform = isVisible
                ? {axis, value: 0}
                : {axis, value};

            return transform;
        },
        [isVisible, direction, pathLength],
    );

    const componentClassNames: string = useMemo(
        () => {
            const opacity: string = isVisible ? 'opacity-100' : 'opacity-0';

            return `
                inline-block
                will-change-transform
                transition-all
                w-[100%]
                h-[100%]
                ${opacity}
            `;
        },
        [isVisible],
    );

    const componentStyles: React.CSSProperties | undefined = useMemo(
        () => ({
            transitionDuration: `${durationTime}ms`,
            transitionTimingFunction: animationTrajectory,
            transform: `translate${transformAxisAndValue.axis}(${transformAxisAndValue.value}px)`,
        }),
        [durationTime, animationTrajectory, transformAxisAndValue],
    );

    const componentWrapClassNames: string = useMemo(
        () => `
            relative
            overflow-visible
            w-[100%]
            ${classNames ? classNames : ''}
        `,
        [classNames],
    );

    return (
        <div className={componentWrapClassNames}>
            <div
                ref={targetRef}
                className={componentClassNames}
                style={componentStyles}
            >
                {component}
            </div>
        </div>
    );
};

export default ScrollAppear;