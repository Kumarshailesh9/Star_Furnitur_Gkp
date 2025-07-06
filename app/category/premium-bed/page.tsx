export default function PremiumBedPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Premium Bed with Upholstered Headboard
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <img
          src="/shaku-bed.jpg"
          alt="Premium Bed with Upholstered Headboard"
          className="w-full rounded-xl shadow-md"
        />

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Product Details</h2>

          <ul className="mb-6 space-y-2 text-gray-700">
            <li>
              ✅ <strong>Type:</strong> Bed with Storage
            </li>
            <li>
              ✅ <strong>Material:</strong> Sakhu Wood & Premium Fabric
            </li>
            <li>
              ✅ <strong>Size:</strong> King Size (6×6 feet)
            </li>
            <li>
              ✅ <strong>Mattress:</strong> Not included — Recommended Size: 72×70 inches
            </li>
            <li>
              ✅ <strong>Headboard:</strong> Upholstered, Soft & Stylish
            </li>
            <li>
              ✅ <strong>Finish Color:</strong> White Cassius
            </li>
          </ul>

          <p className="text-xl font-bold mb-4">Price: ₹55,000</p>

          <a
            href="https://wa.me/919999999999?text=I%20am%20interested%20in%20ordering%20the%20Premium%20Bed%20with%20Upholstered%20Headboard"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition"
          >
            Order on WhatsApp
          </a>
        </div>
      </div>
    </main>
  );
}
