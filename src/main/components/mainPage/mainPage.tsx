import React from 'react';
import Header from '../../../global/components/header/header';
import About from '../about/about';
import LayoutBlock from '../../../global/components/layoutBlock/layoutBlock';
import WhoItsFor from '../whoItsFor/whoItsFor';
import HowItWorks from '../howItWorks/howItWorks';
import Testimonials from '../testimonials/testimonials';
import Pricing from '../pricing/pricing';
import GetStarted from '../getStarted/getStarted';
import Footer from '../../../global/components/footer/footer';

const MainPage: React.FC = () => {
    return (
        <div
            className='
                bg-gray-100
                relative
                overflow-hidden

                lg:mt-20
                md:mt-19
                sm:mt-16
                mt-10
            '
        >
            <Header />
            <LayoutBlock
                component={<About />}
            />
            <LayoutBlock
                bgWhite
                component={<WhoItsFor />}
            />
            <LayoutBlock
                component={<HowItWorks />}
            />
            <LayoutBlock
                bgWhite
                component={<Testimonials />}
            />
            <LayoutBlock
                component={<Pricing />}
            />
            <LayoutBlock
                bgWhite
                component={<GetStarted />}
            />
            <LayoutBlock
                bgBlack
                component={<Footer />}
            />
        </div>
    );
};

export default MainPage;