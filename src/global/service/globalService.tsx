import { ComponentIds } from "../enums/componentIds";
import { LinksItemType } from "../types/linksItemType";

export const links: LinksItemType[] = [
    {
        title: 'About',
        href: ComponentIds.About,
    },
    {
        title: 'Who it`s for',
        href: ComponentIds.WhoItsFor,
    },
    {
        title: 'How it works',
        href: ComponentIds.HowItWorks,
    },
    {
        title: 'Testimonials',
        href: ComponentIds.Testimonials,
    },
    {
        title: 'Pricing',
        href: ComponentIds.Pricing,
    },
    {
        title: 'Get started',
        href: ComponentIds.GetStarted,
    },
];

export const getImageWidth = (size: number) => {
    if (window.matchMedia('(min-width: 1024px)').matches) return Math.round(size);
    if (window.matchMedia('(min-width: 768px)').matches) return Math.round(size * 0.8);
    if (window.matchMedia('(min-width: 640px)').matches) return Math.round(size * 0.69);
    return Math.round(size * 0.57);
};
