import ProductCard from '@/components/ui/productcard';
import Link from 'next/link';

const DoubleBeds = () => {
    const badgeText = 'OFFICE TABLE';
    const productImages = ['6.1','83.1','84.1','85.1'];

    return (
        <>
        <div className='flex justify-center items-center p-6'>
                <p className='font-bold text-2xl'>Executive Office Tables</p>
            </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100">
            {productImages.map((img, index) => (
                <Link href={`/details/${img}`} key={index}>
                    <ProductCard
                        title={'OFFICE TABLE'}
                        badgeText={badgeText}
                        image={`/category/all/${img}.jpg`}
                        alt={`${badgeText} ${index + 1}`}
                    />
                </Link>
            ))}
        </div>
        </>
    );
};

export default DoubleBeds;
