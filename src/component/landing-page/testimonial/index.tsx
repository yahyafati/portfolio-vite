import React from 'react';
import TestimonialItem from './testimonial-item';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import style from './style.module.scss';
import { FormattedMessage } from 'react-intl';

export interface ITestimonial {
    body: string;
    by: string;
    relation: string;
}

const SAMPLE_TESTIMONIALS: ITestimonial[] = [
    {
        body: "He can go and beat anyone in the street and you can't do anything about it. He is too powerful!",
        by: 'Fati',
        relation: 'Dad',
    },
    {
        body: "Yahya is the best developer ever, he can beat anyone in a fight. I'm not just saying that because I'm his mother. My son is better than yours.",
        by: 'Nuria',
        relation: 'Mom',
    },
    {
        body: "His code is so perfect that it makes other developers cry tears of joy. He's basically a wizard.",
        by: 'Munir',
        relation: 'Brother',
    },
    {
        body: 'Yahya is so great that his keyboard types by itself out of sheer respect for him.',
        by: 'Hanan',
        relation: 'Sister',
    },
    {
        body: 'He once solved a bug so efficiently that the computer thanked him personally.',
        by: 'Anonymous',
        relation: 'Best Friend',
    },
    {
        body: "Yahya's work ethic is so incredible that even robots are jealous.",
        by: 'Anonymous',
        relation: 'Colleague',
    },
    {
        body: "If Yahya can't fix it, it's probably not broken in the first place.",
        by: 'Anonymous',
        relation: 'Neighbor',
    },
    {
        body: "Yahya's coding skills are so advanced that his code writes itself while he takes a nap.",
        by: 'Anonymous',
        relation: 'Friend',
    },
];

interface TestimonialProps {}

const Testimonial: React.FC<TestimonialProps> = () => {
    return (
        <div id="testimonials" className={style.testimonialSection}>
            <h2>
                <FormattedMessage
                    id="landing.testimonials.title.base"
                    values={{
                        kindWords: (
                            <strong>
                                <FormattedMessage id="landing.testimonials.title.kindWords" />
                            </strong>
                        ),
                    }}
                />
            </h2>
            <Carousel
                className={style.testimonials}
                autoPlay={false}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
                showIndicators={false}
                showThumbs={false}
                emulateTouch={true}
            >
                {SAMPLE_TESTIMONIALS.map((testimonial, index) => (
                    <TestimonialItem key={index} testimonial={testimonial} />
                ))}
            </Carousel>
        </div>
    );
};

export default Testimonial;
