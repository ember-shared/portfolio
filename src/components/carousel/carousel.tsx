import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const transition = {
    x: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
    },
    opacity: {
        duration: 0.4,
    },
};

const variants = {
    initial: {
        x: 800,
        opacity: 0,
    },
    animate: {
        x: 0,
        opacity: 1,
        transition,
    },
    exit: {
        x: -800,
        opacity: 0,
        transition,
    },
};

type TCarouselProps = {
    urls: string[];
    millisecondInterval: number;
    minHeight?: string;
};

export const Carousel: FC<TCarouselProps> = ({
    urls,
    millisecondInterval,
    minHeight,
}) => {
    const [currentImage, setCurrentImage] = useState<string>(urls[0]);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            const index = urls.findIndex((url) => url === currentImage);
            index !== urls.length - 1
                ? setCurrentImage(urls[index + 1])
                : setCurrentImage(urls[0]);
        }, millisecondInterval);

        return () => clearInterval(slideInterval);
    }, [urls, millisecondInterval, currentImage]);

    return (
        <div
            className={`relative w-full ${
                minHeight ? minHeight : 'min-h-[50vh]'
            } overflow-hidden`}
        >
            <AnimatePresence>
                <motion.img
                    key={currentImage}
                    variants={variants}
                    initial='initial'
                    animate='animate'
                    exit='exit'
                    className='absolute top-0 left-0 w-full h-full object-cover object-center'
                    src={currentImage}
                    alt='Carousel Image'
                />
            </AnimatePresence>
        </div>
    );
};
