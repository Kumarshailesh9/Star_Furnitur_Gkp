import ProductCard from '@/components/ui/productcard';
import Link from 'next/link';

const DoubleBeds = () => {
  const badgeText = 'Double Bed';
  const productImages = ['1.1', '11.1', '12.1', '13.1', '14.1', '16.1', '17.1', '18.1', '19.1', '21.1', '22.1', '23.1', '24.1', '25.1'];

  return (
   <>
   <div className='flex justify-center items-center p-6'>
   <p className='font-bold text-2xl'>Wooden Double Bed in Gorakhpur</p>
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
