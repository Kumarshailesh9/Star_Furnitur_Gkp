import ProductCard from '@/components/ui/productcard';
import Link from 'next/link';

const DoubleBeds = () => {
    const badgeText = 'DRESSING';
    const productImages = ['3.1', '45.1', '46.1', '47.1', '48.1', '49.1', '51.1', '52.1', '56.1', '57.1', '58.1', '59.1', '60.1', '61.1', '63.1', '64.1'];

    return (
        <>
            <div className='flex justify-center items-center p-6'>
                <p className='font-bold text-2xl'>Dressing Tables</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100">
                {productImages.map((img, index) => (
                    <Link href={`/details/${img}`} key={index}>
                        <ProductCard
                            title={'Double Beds'}
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
