import ProductCard from '@/components/ui/productcard';
import Link from 'next/link';

const AllProducts = () => {
  const allProducts = [
    // Double Bed
    ...['1.1', '11.1', '12.1', '13.1', '14.1', '16.1', '17.1', '18.1', '19.1', '21.1', '22.1', '23.1', '24.1', '25.1'].map(img => ({
      img,
      badgeText: 'Double Bed'
    })),

    // Center Table
    { img: '4.1', badgeText: 'CENTER TABLE' },

    // Dressing
    ...['3.1', '45.1', '46.1', '47.1', '48.1', '49.1', '51.1', '52.1', '56.1', '57.1', '58.1', '59.1', '60.1', '61.1', '63.1', '64.1'].map(img => ({
      img,
      badgeText: 'DRESSING'
    })),

    // Dining Table
    { img: '5.1', badgeText: 'DINING TABLE' },

    // Office Cabinets
    { img: '7.1', badgeText: 'OFFICE CABINETS' },

    // Office Table
    ...['6.1', '83.1', '84.1', '85.1'].map(img => ({
      img,
      badgeText: 'OFFICE TABLE'
    })),

    // Wardrobe
    ...['2.1', '65.1', '66.1', '67.1', '69.1', '70.1', '71.1', '72.1', '73.1', '74.1', '75.1', '76.1', '77.1', '78.1', '79.1', '80.1', '81.1', '82.1'].map(img => ({
      img,
      badgeText: 'WARDROBE'
    }))
  ];

  // Utility to resolve extension
//   const getImagePath = (img) => {
//     const basePath = `/category/all/${img}`;
//     const exts = ['.jpg', '.jpeg', '.png'];
//     for (const ext of exts) {
//       // We assume .jpg exists unless you want to dynamically check on server
//       return `${basePath}${ext}`;
//     }
//   };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4 bg-gray-100">
      {allProducts.map((product, index) => (
        <Link href={`/details/${product.img}`} key={index}>
          <ProductCard
            title={product.badgeText}
            badgeText={product.badgeText}
            image={`/category/all/${product.img}.jpg`} // use .jpg by default
            alt={`${product.badgeText} ${index + 1}`}
          />
        </Link>
      ))}
    </div>
  );
};

export default AllProducts;
