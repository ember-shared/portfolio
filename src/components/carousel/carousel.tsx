import { FC, useEffect, useMemo, useState } from 'react';
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

type TCarouselProps = {
    urls: string[];
    millisecondInterval: number;
    animationX: number;
};

export const Carousel: FC<TCarouselProps> = ({
    urls,
    millisecondInterval,
    animationX,
}) => {
    const [currentImage, setCurrentImage] = useState<string>(urls[0]);

    const variants: { [key: string]: {} } = useMemo(() => {
        return {
            initial: {
                x: animationX,
                opacity: 0,
            },
            animate: {
                x: 0,
                opacity: 1,
                transition,
            },
            exit: {
                x: -1 * animationX,
                opacity: 0,
                transition,
            },
        };
    }, [animationX]);

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
        <div className={`relative w-full h-full overflow-hidden`}>
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
