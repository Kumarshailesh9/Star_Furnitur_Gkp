import ProductCard from '@/components/ui/productcard';
import Link from 'next/link';

const DoubleBeds = () => {
    const badgeText = 'WARDROBE';
    const productImages = ['2.1', '65.1', '66.1', '67.1', '69.1', '70.1', '71.1', '72.1', '73.1', '74.1', '75.1', '76.1', '77.1', '78.1', '79.1', '80.1', '81.1', '82.1'];

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100">
            {productImages.map((img, index) => (
                <Link href={`/details/${img}`} key={index}>
                    <ProductCard
                        title={'Double Beds'}
                        badgeText={badgeText}
                        image={`/category/wb/${img}.jpg`}
                        alt={`${badgeText} ${index + 1}`}
                    />
                </Link>
            ))}
        </div>
    );
};

export default DoubleBeds;
