import { GalleryItem } from '@/components/gallery-item/gallery-item';

export default function ComponentGallery() {
    return (
        <div className='flex flex-col py-8 gap-y-16'>
            <GalleryItem name='test name' description='test desc'>
                <p>first gallery item</p>
            </GalleryItem>
            <hr />
            <GalleryItem name='test name 2' description='test desc 2'>
                <p>second gallery item</p>
            </GalleryItem>
        </div>
    );
}
