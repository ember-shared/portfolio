import { Carousel } from '@/components/carousel/carousel';
import { GalleryItem } from '@/components/gallery-item/gallery-item';
import { IMAGE_URL_DATA } from '@/data/constants';

export default function ComponentGallery() {
    return (
        <div className='flex flex-col py-8 gap-y-16'>
            <GalleryItem
                name='Carousel'
                description='Custom image carousel.'
            >
                <Carousel
                    urls={Object.values(IMAGE_URL_DATA)}
                    millisecondInterval={5000}
                />
            </GalleryItem>
            <hr />
        </div>
    );
}
