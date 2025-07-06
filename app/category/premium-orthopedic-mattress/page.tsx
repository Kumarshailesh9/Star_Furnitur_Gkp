export default function PremiumOrthopedicMattressPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Premium Orthopedic Mattress
      </h1>

      <div className="grid md:grid-cols-2 gap-8 items-start">
        {/* Product Image */}
        <img
          src="/comfortable-mattress.png"
          alt="Premium Orthopedic Mattress"
          className="w-full rounded-xl shadow-md"
        />

        {/* Product Details */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Product Details</h2>

          <ul className="mb-6 space-y-2 text-gray-700">
            <li>
              ✅ <strong>Type:</strong> Premium Orthopedic Mattress
            </li>
            <li>
              ✅ <strong>Material:</strong> High-Density Foam + Memory Foam Layers
            </li>
            <li>
              ✅ <strong>Support:</strong> Superior Spine Support & Comfort
            </li>
            <li>
              ✅ <strong>Size:</strong> 72×70 inches (King Size)
            </li>
            <li>
              ✅ <strong>Features:</strong> Breathable Fabric, Anti-Sag Technology
            </li>
            <li>
              ✅ <strong>Warranty:</strong> 10 Years
            </li>
          </ul>

          <p className="text-xl font-bold mb-4">Price: ₹25,000</p>

          <a
            href="https://wa.me/919999999999?text=I%20am%20interested%20in%20ordering%20the%20Premium%20Orthopedic%20Mattress"
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
