type PropTypes = {
    name: string;
    description: string;
    children: JSX.Element;
};

export const GalleryItem = ({ name, description, children }: PropTypes) => (
    <>

    <div className='flex flex-col items-center gap-y-8'>
        <div className='text-center'>
        <p className='m-0 px-2 py-1 text-black text-2xl font-bold'>{name}</p>
        <div className='m-0 px-2 py-1 text-gray text-base font-light'>
            {description}
        </div>
    </div>
        <div className='flex justify-center w-full gap-x-4'>{children}</div>
    </div>
    </>
);
