// This file contains product data for all categories
// In a real application, this would typically come from a database or API

export interface ProductImage {
  src: string
  alt: string
}

export interface ProductSpecification {
  dimensions: string
  material: string
  finish: string
  weight: string
  warranty: string
  boxContents: string
}

export interface ProductFeature {
  text: string
}

export interface ProductReview {
  id: string
  name: string
  date: string
  rating: number // 1-5
  comment: string
  userImage?: string
}

export interface Product {
  id: string
  slug: string
  name: string
  price: number
  description: string
  rating: number // Average rating 1-5
  reviewCount: number
  category: string
  features: ProductFeature[]
  specifications: ProductSpecification
  images: ProductImage[]
  colors?: string[]
  sizes?: string[]
  reviews: ProductReview[]
  relatedProducts: RelatedProduct[]
  isNew?: boolean
  discount?: number
  isPremium?: boolean
}

export interface RelatedProduct {
  name: string
  price: number
  image: string
  rating: number
  reviewCount: number
  href: string
  discount?: number
  isNew?: boolean
  isPremium?: boolean
}

// Sample product data
export const products: Record<string, Product> = {
  "comfort-plus-bed": {
    id: "bed-001",
    slug: "comfort-plus-bed",
    name: "Comfort Plus Queen Bed",
    price: 24999,
    description:
      "Experience the perfect blend of comfort and style with our Comfort Plus Queen Bed. Crafted with premium quality wood and featuring an ergonomic design, this bed ensures a restful sleep experience while adding elegance to your bedroom.",
    rating: 4.8,
    reviewCount: 124,
    category: "beds",
    features: [
      { text: "Made from premium quality Sheesham wood" },
      { text: "Ergonomic design for maximum comfort" },
      { text: "Sturdy construction for long-lasting durability" },
      { text: "Elegant finish that complements any bedroom decor" },
      { text: "Spacious storage drawers underneath" },
      { text: "Easy assembly with included instructions" },
    ],
    specifications: {
      dimensions: "Length: 213 cm, Width: 165 cm, Height: 90 cm",
      material: "Sheesham Wood",
      finish: "Matte Polish",
      weight: "85 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Bed, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/wooden-queen-bed-front.png",
        alt: "Comfort Plus Queen Bed - Front View",
      },
      {
        src: "/placeholder.svg?key=atqxo",
        alt: "Comfort Plus Queen Bed - Side View",
      },
      {
        src: "/wooden-queen-storage-bed.png",
        alt: "Comfort Plus Queen Bed - Storage Drawers",
      },
      {
        src: "/wooden-queen-headboard-detail.png",
        alt: "Comfort Plus Queen Bed - Headboard Detail",
      },
    ],
    colors: ["Natural", "Walnut", "Mahogany"],
    sizes: ["Single", "Queen", "King"],
    reviews: [
      {
        id: "rev-001",
        name: "Rahul Sharma",
        date: "2 months ago",
        rating: 5,
        comment:
          "Excellent quality bed! The wood is sturdy and the finish is beautiful. Assembly was straightforward and the storage drawers are a great bonus. Highly recommend!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-002",
        name: "Priya Patel",
        date: "1 month ago",
        rating: 4,
        comment:
          "Very happy with my purchase. The bed looks elegant and is very comfortable. The only minor issue was that delivery took a bit longer than expected, but the quality makes up for it.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Luxe 3-Seater Sofa",
        price: 32999,
        image: "/elegant-three-seater-sofa.png",
        rating: 4.7,
        reviewCount: 98,
        href: "/product/luxe-sofa",
      },
      {
        name: "Classic Dining Set (6 Seater)",
        price: 28999,
        image: "/wooden-6-seater-dining-set.png",
        rating: 4.9,
        reviewCount: 75,
        href: "/product/classic-dining-set",
      },
      {
        name: "Premium Wardrobe",
        price: 18999,
        image: "/placeholder.svg?key=45nni",
        rating: 4.6,
        reviewCount: 112,
        href: "/product/premium-wardrobe",
      },
      {
        name: "Comfort Mattress (Queen)",
        price: 12999,
        image: "/queen-size-mattress.png",
        rating: 4.8,
        reviewCount: 156,
        href: "/product/comfort-mattress",
      },
    ],
  },

  
  "premium-bed": {
    id: "bed-005",
    slug: "premium-bed",
    name: "Premium Bed with Upholstered Headboard",
    price: 36999,
    description:
      "Elevate your bedroom with our Premium Bed featuring a luxurious upholstered headboard. This sophisticated piece combines solid wood construction with premium upholstery, creating a statement centerpiece for your bedroom. The tall, cushioned headboard provides exceptional comfort for reading or watching TV in bed, while the robust frame ensures years of reliable use.",
    rating: 4.9,
    reviewCount: 92,
    category: "beds",
    isPremium: true,
    features: [
      { text: "Crafted from premium solid wood for exceptional durability" },
      { text: "Luxurious upholstered headboard with diamond tufting" },
      { text: "High-density foam padding for superior comfort" },
      { text: "Premium fabric with stain-resistant treatment" },
      { text: "Reinforced center support for enhanced stability" },
      { text: "Noise-free design with special joint technology" },
      { text: "Optional hydraulic storage mechanism available" },
      { text: "Handcrafted by master artisans" },
    ],
    specifications: {
      dimensions: "Length: 218 cm, Width: 188 cm, Height: 120 cm (Headboard Height: 60 cm)",
      material: "Solid Sheesham Wood with Premium Upholstery",
      finish: "Hand-polished Wood with Premium Fabric Upholstery",
      weight: "105 kg",
      warranty: "7 Years Comprehensive Warranty",
      boxContents: "1 Bed Frame, 1 Upholstered Headboard, Assembly Instructions, Premium Hardware Kit, Care Kit",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=premium bed with tall upholstered headboard",
        alt: "Premium Bed - Front View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=upholstered headboard detail with diamond tufting",
        alt: "Premium Bed - Headboard Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=premium bed frame joint detail",
        alt: "Premium Bed - Frame Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=premium bed in luxury bedroom setting",
        alt: "Premium Bed - Styled in Bedroom",
      },
    ],
    colors: ["Royal Blue", "Charcoal Grey", "Beige", "Emerald Green"],
    sizes: ["Queen", "King", "California King"],
    reviews: [
      {
        id: "rev-103",
        name: "Rajiv Malhotra",
        date: "2 months ago",
        rating: 5,
        comment:
          "This premium bed is truly exceptional! The upholstered headboard is both beautiful and comfortable for reading in bed. The craftsmanship is outstanding, and the 7-year warranty shows the manufacturer's confidence in their product. Worth every rupee!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-104",
        name: "Sunita Kapoor",
        date: "3 months ago",
        rating: 5,
        comment:
          "We've had many beds over the years, but this Premium Bed is by far the best. The upholstery is luxurious, and the frame is incredibly sturdy. The professional assembly service was excellent, and the bed has transformed our master bedroom.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Particle Bed with Storage",
        price: 29999,
        image: "/placeholder.svg?height=400&width=600&query=particle board bed with storage",
        rating: 4.7,
        reviewCount: 86,
        href: "/product/particle-bed",
        isPremium: true,
      },
      {
        name: "Luxury Bed",
        price: 49999,
        image: "/luxury-carved-bed.png",
        rating: 4.9,
        reviewCount: 78,
        href: "/product/luxury-bed",
        isPremium: true,
      },
      {
        name: "Premium Wardrobe",
        price: 18999,
        image: "/placeholder.svg?key=45nni",
        rating: 4.6,
        reviewCount: 112,
        href: "/product/premium-wardrobe",
      },
      {
        name: "Designer Bedside Tables (Set of 2)",
        price: 12999,
        image: "/placeholder.svg?height=400&width=600&query=luxury bedside tables pair",
        rating: 4.8,
        reviewCount: 65,
        href: "/product/designer-bedside-tables",
        isPremium: true,
      },
    ],
  },

  "luxury-bed": {
    id: "bed-006",
    slug: "luxury-bed",
    name: "Luxury Carved Bed with Canopy Option",
    price: 49999,
    description:
      "Indulge in the ultimate sleeping experience with our Luxury Carved Bed, a masterpiece of artisanal craftsmanship. This exquisite bed features intricate hand-carved details on the headboard and footboard, showcasing traditional Indian woodworking techniques passed down through generations. The optional canopy frame allows for customization with drapes to create a truly regal bedroom sanctuary.",
    rating: 4.9,
    reviewCount: 78,
    category: "beds",
    isPremium: true,
    features: [
      { text: "Meticulously hand-carved by master craftsmen" },
      { text: "Constructed from premium aged Sheesham wood" },
      { text: "Intricate floral and geometric patterns on headboard and footboard" },
      { text: "Optional matching canopy frame available" },
      { text: "Traditional joinery techniques for heirloom quality" },
      { text: "Customizable with choice of carving patterns" },
      { text: "Reinforced frame with double-bolt connections" },
      { text: "Includes white glove delivery and setup service" },
      { text: "Each piece is unique with natural wood grain variations" },
    ],
    specifications: {
      dimensions: "Length: 225 cm, Width: 195 cm, Height: 210 cm (with Canopy)",
      material: "Premium Aged Sheesham Wood",
      finish: "Hand-polished with Natural Wood Oil and Protective Coating",
      weight: "135 kg",
      warranty: "7 Years Comprehensive Warranty",
      boxContents:
        "1 Carved Bed Frame, 1 Carved Headboard, 1 Carved Footboard, Optional Canopy Frame, White Glove Delivery & Assembly Service, Care & Maintenance Kit",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=luxury wooden bed with intricate carvings",
        alt: "Luxury Carved Bed - Front View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=hand carved wooden headboard detail",
        alt: "Luxury Carved Bed - Headboard Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=luxury bed with canopy and drapes",
        alt: "Luxury Carved Bed - With Canopy",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=luxury carved bed in traditional indian bedroom",
        alt: "Luxury Carved Bed - Styled in Bedroom",
      },
    ],
    colors: ["Natural Aged Wood", "Royal Mahogany", "Antique Walnut"],
    sizes: ["Queen", "King", "Emperor"],
    reviews: [
      {
        id: "rev-105",
        name: "Aditya Singh",
        date: "4 months ago",
        rating: 5,
        comment:
          "This bed is truly a work of art! The craftsmanship is extraordinary, with intricate carvings that showcase traditional Indian artistry. The white glove delivery service was impeccable, and the team took care of everything. This is not just a bed, it's a family heirloom we'll pass down to our children.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-106",
        name: "Meera Kapoor",
        date: "2 months ago",
        rating: 5,
        comment:
          "Words cannot express how beautiful this bed is. The carvings are exquisite and the quality is outstanding. We added the canopy option with custom drapes and it has transformed our bedroom into a royal chamber. The 7-year warranty gives us confidence in this significant investment.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Premium Bed with Upholstered Headboard",
        price: 36999,
        image: "/placeholder.svg?height=400&width=600&query=premium bed with upholstered headboard",
        rating: 4.9,
        reviewCount: 92,
        href: "/product/premium-bed",
        isPremium: true,
      },
      {
        name: "Luxury Wardrobe with Carvings",
        price: 42999,
        image: "/placeholder.svg?height=400&width=600&query=luxury carved wooden wardrobe",
        rating: 4.8,
        reviewCount: 56,
        href: "/product/luxury-wardrobe",
        isPremium: true,
      },
      {
        name: "Handcrafted Dressing Table",
        price: 28999,
        image: "/placeholder.svg?height=400&width=600&query=carved wooden dressing table with mirror",
        rating: 4.9,
        reviewCount: 48,
        href: "/product/handcrafted-dressing-table",
        isPremium: true,
      },
      {
        name: "Premium Silk Bedding Set",
        price: 18999,
        image: "/placeholder.svg?height=400&width=600&query=luxury silk bedding set",
        rating: 4.7,
        reviewCount: 72,
        href: "/product/premium-silk-bedding",
        isPremium: true,
      },
    ],
  },

  "orthopedic-mattress": {
    id: "mattress-002",
    slug: "orthopedic-mattress",
    name: "Premium Orthopedic Mattress",
    price: 18999,
    description:
      "Experience therapeutic sleep with our Premium Orthopedic Mattress, designed in collaboration with orthopedic specialists to provide optimal spinal alignment and pressure relief. This advanced mattress combines multiple layers of specialized foam with pocket springs to deliver personalized support for each sleeper, making it ideal for those with back pain or joint issues.",
    rating: 4.8,
    reviewCount: 104,
    category: "beds",
    isPremium: true,
    features: [
      { text: "7-zone pocket spring system for targeted support" },
      { text: "Memory foam layer contours to your body shape" },
      { text: "Cooling gel-infused foam regulates temperature" },
      { text: "Orthopedic design promotes proper spinal alignment" },
      { text: "Anti-microbial treatment for a hygienic sleep environment" },
      { text: "Edge support technology maximizes usable surface area" },
      { text: "Breathable fabric cover with moisture-wicking properties" },
      { text: "Hypoallergenic materials suitable for sensitive individuals" },
      { text: "No-flip design with dual comfort options (medium-firm and firm)" },
    ],
    specifications: {
      dimensions: "Length: 198 cm, Width: 152 cm, Height: 25 cm",
      material: "7-Zone Pocket Springs, Memory Foam, Cooling Gel Foam, High-Density Support Foam",
      finish: "Premium Quilted Fabric Cover with Silver-Ion Technology",
      weight: "35 kg",
      warranty: "7 Years Comprehensive Warranty",
      boxContents: "1 Premium Orthopedic Mattress, Mattress Protector, Care Instructions",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=premium orthopedic mattress",
        alt: "Premium Orthopedic Mattress - Full View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=orthopedic mattress layers cutaway view",
        alt: "Premium Orthopedic Mattress - Layers",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=orthopedic mattress spine alignment demonstration",
        alt: "Premium Orthopedic Mattress - Spine Alignment",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=premium mattress quilted cover detail",
        alt: "Premium Orthopedic Mattress - Cover Detail",
      },
    ],
    colors: ["White", "Off-White"],
    sizes: ["Single", "Queen", "King", "Custom Size Available"],
    reviews: [
      {
        id: "rev-107",
        name: "Dr. Suresh Patel",
        date: "3 months ago",
        rating: 5,
        comment:
          "As an orthopedic surgeon, I'm extremely impressed with this mattress. The zoned support system provides excellent spinal alignment, and many of my patients have reported significant reduction in back pain after switching to this mattress. The quality and engineering are exceptional.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-108",
        name: "Lakshmi Reddy",
        date: "2 months ago",
        rating: 5,
        comment:
          "After years of struggling with lower back pain, this mattress has been life-changing! The support is perfect - not too firm or too soft. I'm sleeping better than I have in years and waking up without the stiffness I used to experience. The cooling technology also works wonderfully for hot summer nights.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Premium Bed with Upholstered Headboard",
        price: 36999,
        image: "/placeholder.svg?height=400&width=600&query=premium bed with upholstered headboard",
        rating: 4.9,
        reviewCount: 92,
        href: "/product/premium-bed",
        isPremium: true,
      },
      {
        name: "Luxury Pillow Set",
        price: 7999,
        image: "/placeholder.svg?height=400&width=600&query=luxury memory foam pillows",
        rating: 4.7,
        reviewCount: 86,
        href: "/product/luxury-pillow-set",
        isPremium: true,
      },
      {
        name: "Premium Mattress Topper",
        price: 6999,
        image: "/placeholder.svg?height=400&width=600&query=memory foam mattress topper",
        rating: 4.6,
        reviewCount: 72,
        href: "/product/premium-mattress-topper",
        isPremium: true,
      },
      {
        name: "Adjustable Bed Base",
        price: 29999,
        image: "/placeholder.svg?height=400&width=600&query=adjustable bed frame with remote",
        rating: 4.8,
        reviewCount: 58,
        href: "/product/adjustable-bed-base",
        isPremium: true,
      },
    ],
  },

  "luxe-sofa": {
    id: "sofa-001",
    slug: "luxe-sofa",
    name: "Luxe 3-Seater Sofa",
    price: 32999,
    description:
      "Transform your living space with our Luxe 3-Seater Sofa, the perfect blend of contemporary design and everyday comfort. Featuring premium upholstery and cushioning, this sofa creates an inviting atmosphere for family gatherings and entertaining guests.",
    rating: 4.7,
    reviewCount: 98,
    category: "sofas",
    features: [
      { text: "Premium quality velvet upholstery that's soft to the touch" },
      { text: "High-density foam and S-spring suspension for superior comfort" },
      { text: "Solid wood frame ensures long-lasting durability" },
      { text: "Removable and washable cushion covers for easy maintenance" },
      { text: "Ergonomic design that supports healthy sitting posture" },
      { text: "Elevated wooden legs with elegant finish" },
    ],
    specifications: {
      dimensions: "Length: 198 cm, Width: 89 cm, Height: 84 cm",
      material: "Solid Wood Frame with Velvet Upholstery",
      finish: "Matte Velvet with Polished Wooden Legs",
      weight: "52 kg",
      warranty: "5 Years on Frame, 2 Years on Upholstery",
      boxContents: "1 Sofa, 3 Back Cushions, 3 Seat Cushions, Assembly Instructions",
    },
    images: [
      {
        src: "/products/elegant-sofa-full.jpg",
        alt: "Luxe 3-Seater Sofa - Front View",
      },
      {
        src: "/products/elegant-sofa-detail.png",
        alt: "Luxe 3-Seater Sofa - Detail View",
      },
      {
        src: "/products/elegant-sofa-angle.png",
        alt: "Luxe 3-Seater Sofa - Angle View",
      },
      {
        src: "/products/elegant-sofa-back.png",
        alt: "Luxe 3-Seater Sofa - Back View",
      },
    ],
    colors: ["Navy Blue", "Charcoal Grey", "Emerald Green", "Beige"],
    sizes: ["2-Seater", "3-Seater", "L-Shape"],
    reviews: [
      {
        id: "rev-003",
        name: "Ajay Malhotra",
        date: "3 months ago",
        rating: 5,
        comment:
          "We've had this sofa for three months now and it's exceeded our expectations. The velvet is soft yet durable and the cushioning is perfect - not too soft or too firm. It's become the centerpiece of our living room!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-004",
        name: "Neha Singh",
        date: "2 months ago",
        rating: 4,
        comment:
          "Beautiful sofa with excellent craftsmanship. The color is exactly as shown in the pictures and the fabric feels premium. The only reason for 4 stars is that it took some time to break in, but now it's very comfortable.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
      {
        name: "Classic Dining Set (6 Seater)",
        price: 28999,
        image: "/wooden-6-seater-dining-set.png",
        rating: 4.9,
        reviewCount: 75,
        href: "/product/classic-dining-set",
      },
      {
        name: "Premium Coffee Table",
        price: 8999,
        image: "/placeholder.svg?key=coffee-table",
        rating: 4.6,
        reviewCount: 87,
        href: "/product/premium-coffee-table",
      },
      {
        name: "Designer Floor Lamp",
        price: 5999,
        image: "/placeholder.svg?key=floor-lamp",
        rating: 4.7,
        reviewCount: 62,
        href: "/product/designer-floor-lamp",
      },
    ],
  },

  "classic-dining-set": {
    id: "dining-001",
    slug: "classic-dining-set",
    name: "Classic Dining Set (6 Seater)",
    price: 28999,
    description:
      "Gather your family around our Classic Dining Set, a perfect combination of traditional craftsmanship and modern functionality. This elegant 6-seater dining set features a spacious table and comfortable chairs, creating an inviting dining experience for family meals and special occasions.",
    rating: 4.9,
    reviewCount: 75,
    category: "dining",
    features: [
      { text: "Handcrafted from premium quality solid Sheesham wood" },
      { text: "Sturdy mortise and tenon joinery for exceptional durability" },
      { text: "Comfortable chairs with ergonomic backrests" },
      { text: "Cushioned seats with premium upholstery" },
      { text: "Scratch-resistant and heat-resistant table top" },
      { text: "Extendable table design for additional seating (optional)" },
    ],
    specifications: {
      dimensions:
        "Table: Length: 180 cm, Width: 90 cm, Height: 75 cm; Chair: Width: 45 cm, Depth: 50 cm, Height: 95 cm",
      material: "Solid Sheesham Wood with Fabric Upholstered Seats",
      finish: "Natural Wood Finish with Protective Lacquer Coating",
      weight: "Table: 45 kg, Each Chair: 7 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Dining Table, 6 Chairs, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/products/grand-dining-set-full.png",
        alt: "Classic Dining Set - Full View",
      },
      {
        src: "/products/grand-dining-set-detail.png",
        alt: "Classic Dining Set - Table Detail",
      },
      {
        src: "/products/grand-dining-set-chair.png",
        alt: "Classic Dining Set - Chair Detail",
      },
      {
        src: "/products/grand-dining-set-angle.png",
        alt: "Classic Dining Set - Angle View",
      },
    ],
    colors: ["Natural Wood", "Walnut", "Espresso"],
    sizes: ["4 Seater", "6 Seater", "8 Seater"],
    reviews: [
      {
        id: "rev-005",
        name: "Vikram Mehta",
        date: "5 months ago",
        rating: 5,
        comment:
          "This dining set exceeded my expectations. The wood quality is excellent and the finish is beautiful. Assembly was easy and the chairs are very comfortable. It's become the heart of our dining area where we gather for family meals.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-006",
        name: "Anita Desai",
        date: "3 months ago",
        rating: 5,
        comment:
          "Absolutely beautiful dining set! The table is spacious and chairs are comfortable even for long dinner parties. The wood grain is gorgeous and the craftsmanship is evident in every detail. Well worth the investment.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
      {
        name: "Luxe 3-Seater Sofa",
        price: 32999,
        image: "/elegant-three-seater-sofa.png",
        rating: 4.7,
        reviewCount: 98,
        href: "/product/luxe-sofa",
      },
      {
        name: "Sideboard Cabinet",
        price: 19999,
        image: "/placeholder.svg?key=sideboard",
        rating: 4.8,
        reviewCount: 56,
        href: "/product/sideboard-cabinet",
      },
      {
        name: "Dining Pendant Light",
        price: 7999,
        image: "/placeholder.svg?key=pendant-light",
        rating: 4.5,
        reviewCount: 42,
        href: "/product/dining-pendant-light",
      },
    ],
    discount: 10,
  },

  "premium-wardrobe": {
    id: "storage-001",
    slug: "premium-wardrobe",
    name: "Premium Wardrobe",
    price: 18999,
    description:
      "Organize your clothing and accessories with our Premium Wardrobe, combining functionality with elegant design. This spacious wardrobe features multiple compartments, hanging space, and drawers to keep your belongings tidy and accessible, while adding a touch of sophistication to your bedroom.",
    rating: 4.6,
    reviewCount: 112,
    category: "storage",
    features: [
      { text: "Constructed with premium engineered wood for stability and durability" },
      { text: "Spacious hanging sections for dresses, shirts, and suits" },
      { text: "Multiple shelves for folded clothes and accessories" },
      { text: "Smooth-glide drawers for smaller items" },
      { text: "Full-length mirror on one door" },
      { text: "Advanced anti-sag hinges for longevity" },
      { text: "Modular design allows for customization" },
    ],
    specifications: {
      dimensions: "Width: 150 cm, Depth: 58 cm, Height: 200 cm",
      material: "Premium Engineered Wood with Laminate Finish",
      finish: "Matte Finish with Wood Grain Texture",
      weight: "95 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "Wardrobe Panels, Drawers, Hanging Rods, Shelves, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/products/premium-wardrobe-full.png",
        alt: "Premium Wardrobe - Full View",
      },
      {
        src: "/products/premium-wardrobe-detail.png",
        alt: "Premium Wardrobe - Door Detail",
      },
      {
        src: "/products/premium-wardrobe-interior.png",
        alt: "Premium Wardrobe - Interior View",
      },
      {
        src: "/products/premium-wardrobe-drawer.png",
        alt: "Premium Wardrobe - Drawer Detail",
      },
    ],
    colors: ["White Oak", "Wenge", "Mahogany"],
    sizes: ["2 Door", "3 Door", "4 Door"],
    reviews: [
      {
        id: "rev-007",
        name: "Rajesh Kumar",
        date: "4 months ago",
        rating: 5,
        comment:
          "This wardrobe has transformed our bedroom storage situation! It's incredibly spacious and well-designed. The quality of the materials is excellent for the price point, and the instructions made assembly straightforward. The mirror is a great addition too.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-008",
        name: "Shalini Gupta",
        date: "2 months ago",
        rating: 4,
        comment:
          "Beautiful wardrobe with plenty of storage options. The drawers slide smoothly and the hanging space is generous. My only suggestion would be to include more shelving options, but overall I'm very satisfied with this purchase.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
      {
        name: "Bedside Table (Set of 2)",
        price: 7999,
        image: "/placeholder.svg?key=bedside-table",
        rating: 4.5,
        reviewCount: 89,
        href: "/product/bedside-table-set",
      },
      {
        name: "Chest of Drawers",
        price: 14999,
        image: "/placeholder.svg?key=chest-drawers",
        rating: 4.7,
        reviewCount: 76,
        href: "/product/chest-of-drawers",
      },
      {
        name: "Dressing Table",
        price: 16999,
        image: "/placeholder.svg?key=dressing-table",
        rating: 4.8,
        reviewCount: 64,
        href: "/product/dressing-table",
      },
    ],
    isNew: true,
  },
  "serenity-single-bed": {
    id: "bed-002",
    slug: "serenity-single-bed",
    name: "Serenity Single Bed",
    price: 18999,
    description:
      "A compact and elegant single bed perfect for small spaces. The Serenity Single Bed combines functionality with style, featuring a sturdy wooden frame and a sleek design that fits seamlessly into any bedroom decor.",
    rating: 4.6,
    reviewCount: 87,
    category: "beds",
    features: [
      { text: "Made from high-quality Mango wood" },
      { text: "Space-saving design ideal for smaller bedrooms" },
      { text: "Durable construction for long-lasting use" },
      { text: "Clean lines and minimalist aesthetic" },
      { text: "Easy assembly with included instructions" },
      { text: "Compatible with standard single mattresses" },
    ],
    specifications: {
      dimensions: "Length: 198 cm, Width: 98 cm, Height: 85 cm",
      material: "Mango Wood",
      finish: "Natural Wood Finish",
      weight: "65 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Bed, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/simple-wooden-bed.png",
        alt: "Serenity Single Bed - Front View",
      },
      {
        src: "/placeholder.svg?key=single-bed-side",
        alt: "Serenity Single Bed - Side View",
      },
      {
        src: "/placeholder.svg?key=single-bed-detail",
        alt: "Serenity Single Bed - Detail",
      },
      {
        src: "/placeholder.svg?key=single-bed-headboard",
        alt: "Serenity Single Bed - Headboard",
      },
    ],
    colors: ["Natural", "Walnut", "White"],
    sizes: ["Single"],
    reviews: [
      {
        id: "rev-009",
        name: "Amit Patel",
        date: "1 month ago",
        rating: 5,
        comment:
          "Perfect for my child's room! The bed is sturdy, easy to assemble, and looks great. The natural wood finish is beautiful and matches our other furniture perfectly.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-010",
        name: "Meera Singh",
        date: "2 months ago",
        rating: 4,
        comment:
          "Good quality bed for the price. Assembly was straightforward and the bed feels solid. I would have given 5 stars if the delivery had been quicker.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
      {
        name: "Premium Wardrobe",
        price: 18999,
        image: "/minimalist-wooden-wardrobe.png",
        rating: 4.6,
        reviewCount: 112,
        href: "/product/premium-wardrobe",
      },
      {
        name: "Comfort Mattress (Single)",
        price: 8999,
        image: "/placeholder.svg?key=single-mattress",
        rating: 4.7,
        reviewCount: 93,
        href: "/product/comfort-mattress-single",
      },
      {
        name: "Bedside Table (Set of 2)",
        price: 7999,
        image: "/placeholder.svg?key=bedside-table",
        rating: 4.5,
        reviewCount: 89,
        href: "/product/bedside-table-set",
      },
    ],
  },

  "royal-king-bed": {
    id: "bed-003",
    slug: "royal-king-bed",
    name: "Royal King Size Bed",
    price: 32999,
    description:
      "Experience luxury with our Royal King Size Bed, designed for those who appreciate spaciousness and elegance. This majestic bed features premium craftsmanship, a grand headboard, and ample space for a restful night's sleep.",
    rating: 4.9,
    reviewCount: 68,
    category: "beds",
    features: [
      { text: "Crafted from premium Sheesham wood for exceptional durability" },
      { text: "Elegant carved headboard with intricate detailing" },
      { text: "Spacious king-size design for maximum comfort" },
      { text: "Reinforced frame for superior stability" },
      { text: "Optional storage drawers available" },
      { text: "Designed to complement both traditional and modern interiors" },
    ],
    specifications: {
      dimensions: "Length: 213 cm, Width: 193 cm, Height: 105 cm",
      material: "Sheesham Wood",
      finish: "Polished Wood with Protective Coating",
      weight: "95 kg",
      warranty: "5 Years on Manufacturing Defects",
      boxContents: "1 Bed, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/luxurious-bedroom-retreat.png",
        alt: "Royal King Size Bed - Front View",
      },
      {
        src: "/placeholder.svg?key=king-bed-side",
        alt: "Royal King Size Bed - Side View",
      },
      {
        src: "/placeholder.svg?key=king-bed-detail",
        alt: "Royal King Size Bed - Detail",
      },
      {
        src: "/placeholder.svg?key=king-bed-headboard",
        alt: "Royal King Size Bed - Headboard",
      },
    ],
    colors: ["Mahogany", "Cherry", "Espresso"],
    sizes: ["King"],
    reviews: [
      {
        id: "rev-011",
        name: "Rajiv Malhotra",
        date: "3 months ago",
        rating: 5,
        comment:
          "This bed is truly fit for royalty! The craftsmanship is exceptional, and the design makes a statement in our master bedroom. The king size is perfect for us, and the quality of the wood is outstanding. Worth every penny!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-012",
        name: "Sunita Kapoor",
        date: "2 months ago",
        rating: 5,
        comment:
          "We've had many beds over the years, but this Royal King Size Bed is by far the best. The attention to detail in the carving is beautiful, and the bed is incredibly sturdy. It's become the centerpiece of our bedroom.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
      {
        name: "Luxe 3-Seater Sofa",
        price: 32999,
        image: "/elegant-three-seater-sofa.png",
        rating: 4.7,
        reviewCount: 98,
        href: "/product/luxe-sofa",
      },
      {
        name: "Premium Orthopedic Mattress (King)",
        price: 18999,
        image: "/placeholder.svg?key=king-mattress",
        rating: 4.9,
        reviewCount: 76,
        href: "/product/orthopedic-mattress-king",
      },
      {
        name: "Luxury Bedding Set",
        price: 12999,
        image: "/placeholder.svg?key=luxury-bedding",
        rating: 4.8,
        reviewCount: 54,
        href: "/product/luxury-bedding-set",
      },
    ],
    isNew: true,
  },

  "comfort-mattress": {
    id: "mattress-001",
    slug: "comfort-mattress",
    name: "Comfort Mattress (Queen)",
    price: 12999,
    description:
      "Experience the perfect balance of comfort and support with our Comfort Mattress. Designed with multiple layers of premium materials, this mattress adapts to your body shape for a restful sleep experience night after night.",
    rating: 4.8,
    reviewCount: 156,
    category: "beds",
    features: [
      { text: "Multi-layered memory foam for optimal comfort" },
      { text: "Breathable fabric cover for temperature regulation" },
      { text: "Medium-firm support ideal for all sleeping positions" },
      { text: "Anti-microbial treatment for a hygienic sleep environment" },
      { text: "No-flip design with reinforced edges" },
      { text: "Vacuum-packed for convenient delivery" },
    ],
    specifications: {
      dimensions: "Length: 198 cm, Width: 152 cm, Height: 20 cm",
      material: "Memory Foam with High-Density Support Foam",
      finish: "Premium Knitted Fabric Cover",
      weight: "28 kg",
      warranty: "10 Years on Manufacturing Defects",
      boxContents: "1 Mattress, Care Instructions",
    },
    images: [
      {
        src: "/queen-size-mattress.png",
        alt: "Comfort Mattress - Top View",
      },
      {
        src: "/placeholder.svg?key=mattress-side",
        alt: "Comfort Mattress - Side View",
      },
      {
        src: "/placeholder.svg?key=mattress-layers",
        alt: "Comfort Mattress - Layers",
      },
      {
        src: "/placeholder.svg?key=mattress-cover",
        alt: "Comfort Mattress - Cover Detail",
      },
    ],
    colors: ["White", "Beige"],
    sizes: ["Single", "Queen", "King"],
    reviews: [
      {
        id: "rev-013",
        name: "Deepak Sharma",
        date: "1 month ago",
        rating: 5,
        comment:
          "After years of back pain, I finally found the perfect mattress. The Comfort Mattress provides just the right amount of support while still feeling plush. I'm sleeping better than I have in years!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-014",
        name: "Lakshmi Reddy",
        date: "3 months ago",
        rating: 4,
        comment:
          "Great mattress for the price. It's comfortable and supportive, and I appreciate that it doesn't get too hot during the summer. The only reason for 4 stars instead of 5 is that it took a few days to fully expand after unpacking.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
      {
        name: "Premium Pillow Set",
        price: 3999,
        image: "/placeholder.svg?key=pillow-set",
        rating: 4.7,
        reviewCount: 89,
        href: "/product/premium-pillow-set",
      },
      {
        name: "Cotton Bed Sheet Set",
        price: 2999,
        image: "/placeholder.svg?key=bed-sheet",
        rating: 4.6,
        reviewCount: 112,
        href: "/product/cotton-bed-sheet-set",
      },
      {
        name: "Mattress Protector",
        price: 1499,
        image: "/placeholder.svg?key=mattress-protector",
        rating: 4.5,
        reviewCount: 78,
        href: "/product/mattress-protector",
      },
    ],
  },

  "elegant-bookshelf": {
    id: "storage-002",
    slug: "elegant-bookshelf",
    name: "Elegant Bookshelf",
    price: 12999,
    description:
      "Showcase your book collection and decorative items with our Elegant Bookshelf. Featuring a timeless design with clean lines and sturdy construction, this bookshelf combines functionality with aesthetic appeal, making it a perfect addition to your living room, study, or home office.",
    rating: 4.7,
    reviewCount: 94,
    category: "storage",
    features: [
      { text: "Crafted from premium quality Sheesham wood for durability" },
      { text: "Five spacious shelves for ample storage" },
      { text: "Open design showcases your books and decorative items" },
      { text: "Sturdy construction with anti-topple hardware included" },
      { text: "Adjustable shelf heights for versatile storage options" },
      { text: "Easy assembly with detailed instructions" },
    ],
    specifications: {
      dimensions: "Width: 90 cm, Depth: 35 cm, Height: 180 cm",
      material: "Sheesham Wood",
      finish: "Natural Wood Finish with Protective Coating",
      weight: "45 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "Bookshelf Panels, Shelves, Hardware Kit, Assembly Instructions",
    },
    images: [
      {
        src: "/wooden-bookshelf.png",
        alt: "Elegant Bookshelf - Front View",
      },
      {
        src: "/wooden-bookshelf-side.png",
        alt: "Elegant Bookshelf - Side View",
      },
      {
        src: "/placeholder.svg?key=wp5ao",
        alt: "Elegant Bookshelf - Detail",
      },
      {
        src: "/styled-bookshelf.png",
        alt: "Elegant Bookshelf - Styled",
      },
    ],
    colors: ["Natural", "Walnut", "Mahogany"],
    sizes: ["Small (3 Shelves)", "Medium (5 Shelves)", "Large (7 Shelves)"],
    reviews: [
      {
        id: "rev-015",
        name: "Arjun Nair",
        date: "2 months ago",
        rating: 5,
        comment:
          "This bookshelf is exactly what I was looking for! The wood quality is excellent, and it was surprisingly easy to assemble. It holds all my books with plenty of space left for decorative items. Highly recommend!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-016",
        name: "Divya Sharma",
        date: "1 month ago",
        rating: 4,
        comment:
          "Beautiful bookshelf that adds a touch of elegance to my living room. The natural wood finish is gorgeous and matches my other furniture perfectly. The only reason for 4 stars is that assembly took longer than expected.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Premium Wardrobe",
        price: 18999,
        image: "/products/premium-wardrobe-full.png",
        rating: 4.6,
        reviewCount: 112,
        href: "/product/premium-wardrobe",
      },
      {
        name: "Modern TV Unit",
        price: 15999,
        image: "/placeholder.svg?key=tv-unit",
        rating: 4.5,
        reviewCount: 78,
        href: "/product/modern-tv-unit",
      },
      {
        name: "Study Desk",
        price: 9999,
        image: "/placeholder.svg?key=study-desk",
        rating: 4.8,
        reviewCount: 65,
        href: "/product/study-desk",
      },
      {
        name: "Wall Shelf Set",
        price: 4999,
        image: "/placeholder.svg?key=wall-shelves",
        rating: 4.4,
        reviewCount: 52,
        href: "/product/wall-shelf-set",
      },
    ],
    isNew: true,
  },

  "modern-tv-unit": {
    id: "storage-003",
    slug: "modern-tv-unit",
    name: "Modern TV Unit",
    price: 15999,
    description:
      "Elevate your entertainment space with our Modern TV Unit, designed to combine style with functionality. This sleek unit features ample storage for your media devices, gaming consoles, and accessories, while its contemporary design adds a touch of sophistication to your living room.",
    rating: 4.5,
    reviewCount: 78,
    category: "storage",
    features: [
      { text: "Constructed with premium engineered wood for durability" },
      { text: "Spacious top surface accommodates TVs up to 65 inches" },
      { text: "Multiple compartments for organized storage of media devices" },
      { text: "Cable management system keeps wires neat and tidy" },
      { text: "Soft-close drawers for smooth and silent operation" },
      { text: "Wall-mounting option available for a floating look" },
    ],
    specifications: {
      dimensions: "Width: 180 cm, Depth: 45 cm, Height: 55 cm",
      material: "Engineered Wood with Laminate Finish",
      finish: "Matte Finish with Wood Grain Texture",
      weight: "65 kg",
      warranty: "2 Years on Manufacturing Defects",
      boxContents: "TV Unit Panels, Drawers, Hardware Kit, Assembly Instructions",
    },
    images: [
      {
        src: "/modern-wooden-tv-unit.png",
        alt: "Modern TV Unit - Front View",
      },
      {
        src: "/placeholder.svg?key=tv-unit-side&height=600&width=600&query=TV unit side view",
        alt: "Modern TV Unit - Side View",
      },
      {
        src: "/placeholder.svg?key=tv-unit-detail&height=600&width=600&query=TV unit drawer detail",
        alt: "Modern TV Unit - Drawer Detail",
      },
      {
        src: "/placeholder.svg?key=tv-unit-styled&height=600&width=600&query=TV unit with television and decor",
        alt: "Modern TV Unit - Styled",
      },
    ],
    colors: ["White Oak", "Wenge", "Grey"],
    sizes: ["Small (120 cm)", "Medium (180 cm)", "Large (210 cm)"],
    reviews: [
      {
        id: "rev-017",
        name: "Vikrant Singh",
        date: "3 months ago",
        rating: 5,
        comment:
          "This TV unit transformed our living room! The design is sleek and modern, and the storage space is perfect for all our media devices. The cable management system is a game-changer - no more tangled wires!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-018",
        name: "Pooja Mehta",
        date: "2 months ago",
        rating: 4,
        comment:
          "Beautiful TV unit with excellent storage options. The drawers slide smoothly and the finish is high-quality. Assembly was straightforward with the provided instructions. Would have given 5 stars if it had included wall-mounting hardware.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Luxe 3-Seater Sofa",
        price: 32999,
        image: "/elegant-three-seater-sofa.png",
        rating: 4.7,
        reviewCount: 98,
        href: "/product/luxe-sofa",
      },
      {
        name: "Coffee Table Set",
        price: 8999,
        image: "/placeholder.svg?key=coffee-table",
        rating: 4.6,
        reviewCount: 87,
        href: "/product/coffee-table-set",
      },
      {
        name: "Wall Shelf Set",
        price: 4999,
        image: "/placeholder.svg?key=wall-shelves",
        rating: 4.4,
        reviewCount: 52,
        href: "/product/wall-shelf-set",
      },
      {
        name: "Floor Lamp",
        price: 3999,
        image: "/placeholder.svg?key=floor-lamp",
        rating: 4.3,
        reviewCount: 45,
        href: "/product/floor-lamp",
      },
    ],
  },

  "chest-of-drawers": {
    id: "storage-004",
    slug: "chest-of-drawers",
    name: "Chest of Drawers",
    price: 14999,
    description:
      "Organize your clothing and accessories with our elegant Chest of Drawers. Featuring five spacious drawers with smooth-glide mechanisms, this versatile storage solution combines functionality with timeless design, making it a perfect addition to your bedroom or dressing area.",
    rating: 4.7,
    reviewCount: 76,
    category: "storage",
    features: [
      { text: "Crafted from premium quality Sheesham wood for durability" },
      { text: "Five spacious drawers with smooth-glide metal runners" },
      { text: "Anti-tilt safety feature for added security" },
      { text: "Dovetail joinery for exceptional strength" },
      { text: "Elegant brass handles add a touch of sophistication" },
      { text: "Felt-lined top drawer for delicate items" },
    ],
    specifications: {
      dimensions: "Width: 100 cm, Depth: 45 cm, Height: 120 cm",
      material: "Sheesham Wood",
      finish: "Polished Wood with Protective Coating",
      weight: "55 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "Chest of Drawers, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?key=chest-drawers&height=600&width=600&query=wooden chest of drawers",
        alt: "Chest of Drawers - Front View",
      },
      {
        src: "/placeholder.svg?key=drawers-side&height=600&width=600&query=chest of drawers side view",
        alt: "Chest of Drawers - Side View",
      },
      {
        src: "/placeholder.svg?key=drawers-detail&height=600&width=600&query=drawer detail with brass handle",
        alt: "Chest of Drawers - Drawer Detail",
      },
      {
        src: "/placeholder.svg?key=drawers-styled&height=600&width=600&query=chest of drawers in bedroom setting",
        alt: "Chest of Drawers - Styled",
      },
    ],
    colors: ["Natural", "Walnut", "Espresso"],
    sizes: ["Small (3 Drawers)", "Medium (5 Drawers)", "Large (7 Drawers)"],
    reviews: [
      {
        id: "rev-019",
        name: "Rahul Kapoor",
        date: "4 months ago",
        rating: 5,
        comment:
          "Excellent quality chest of drawers! The wood is beautiful and the drawers slide smoothly. It's spacious enough for all my clothes and the felt-lined top drawer is perfect for my watches and jewelry. Highly recommend!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-020",
        name: "Ananya Desai",
        date: "2 months ago",
        rating: 4,
        comment:
          "Beautiful piece of furniture that adds elegance to our bedroom. The drawers are spacious and the wood grain is gorgeous. Assembly was straightforward but took some time. Very happy with this purchase!",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Premium Wardrobe",
        price: 18999,
        image: "/products/premium-wardrobe-full.png",
        rating: 4.6,
        reviewCount: 112,
        href: "/product/premium-wardrobe",
      },
      {
        name: "Dressing Table",
        price: 16999,
        image: "/placeholder.svg?key=dressing-table",
        rating: 4.8,
        reviewCount: 64,
        href: "/product/dressing-table",
      },
      {
        name: "Bedside Table (Set of 2)",
        price: 7999,
        image: "/placeholder.svg?key=bedside-table",
        rating: 4.5,
        reviewCount: 89,
        href: "/product/bedside-table-set",
      },
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
    ],
  },

  "storage-ottoman": {
    id: "storage-005",
    slug: "storage-ottoman",
    name: "Storage Ottoman",
    price: 6999,
    description:
      "Maximize your space with our versatile Storage Ottoman, the perfect blend of functionality and style. This multi-purpose piece serves as a comfortable footrest, extra seating, and hidden storage solution, making it ideal for living rooms, bedrooms, or entryways where space is at a premium.",
    rating: 4.6,
    reviewCount: 83,
    category: "storage",
    features: [
      { text: "Upholstered in premium fabric for comfort and durability" },
      { text: "Lift-top design reveals spacious interior storage" },
      { text: "Sturdy wooden frame ensures stability and longevity" },
      { text: "Soft-close hinges for safety and convenience" },
      { text: "Padded top provides comfortable seating" },
      { text: "Non-slip feet protect your floors" },
    ],
    specifications: {
      dimensions: "Width: 80 cm, Depth: 40 cm, Height: 45 cm",
      material: "Solid Wood Frame with Premium Fabric Upholstery",
      finish: "Tufted Fabric with Wooden Legs",
      weight: "15 kg",
      warranty: "2 Years on Manufacturing Defects",
      boxContents: "1 Storage Ottoman, Assembly Instructions",
    },
    images: [
      {
        src: "/placeholder.svg?key=storage-ottoman&height=600&width=600&query=fabric storage ottoman",
        alt: "Storage Ottoman - Closed View",
      },
      {
        src: "/placeholder.svg?key=ottoman-open&height=600&width=600&query=storage ottoman with open lid",
        alt: "Storage Ottoman - Open View",
      },
      {
        src: "/placeholder.svg?key=ottoman-detail&height=600&width=600&query=ottoman fabric detail",
        alt: "Storage Ottoman - Fabric Detail",
      },
      {
        src: "/placeholder.svg?key=ottoman-styled&height=600&width=600&query=ottoman in living room setting",
        alt: "Storage Ottoman - Styled",
      },
    ],
    colors: ["Grey", "Beige", "Navy Blue", "Emerald Green"],
    sizes: ["Small (60 cm)", "Medium (80 cm)", "Large (100 cm)"],
    reviews: [
      {
        id: "rev-021",
        name: "Nikhil Sharma",
        date: "1 month ago",
        rating: 5,
        comment:
          "This ottoman is a game-changer for our small apartment! It provides much-needed storage for blankets and doubles as extra seating when we have guests. The fabric is soft yet durable, and the construction feels very solid.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-022",
        name: "Ritu Patel",
        date: "3 months ago",
        rating: 4,
        comment:
          "Great storage solution that looks stylish in our living room. The tufted top is comfortable for sitting, and the storage space is surprisingly roomy. The only improvement I'd suggest is a slightly stronger hinge mechanism.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Luxe 3-Seater Sofa",
        price: 32999,
        image: "/elegant-three-seater-sofa.png",
        rating: 4.7,
        reviewCount: 98,
        href: "/product/luxe-sofa",
      },
      {
        name: "Coffee Table Set",
        price: 8999,
        image: "/placeholder.svg?key=coffee-table",
        rating: 4.6,
        reviewCount: 87,
        href: "/product/coffee-table-set",
      },
      {
        name: "Floor Cushions (Set of 2)",
        price: 2999,
        image: "/placeholder.svg?key=floor-cushions",
        rating: 4.4,
        reviewCount: 56,
        href: "/product/floor-cushions",
      },
      {
        name: "Decorative Throw Blanket",
        price: 1499,
        image: "/placeholder.svg?key=throw-blanket",
        rating: 4.7,
        reviewCount: 92,
        href: "/product/decorative-throw-blanket",
      },
    ],
    isNew: true,
  },

  "wall-shelf-set": {
    id: "storage-006",
    slug: "wall-shelf-set",
    name: "Wall Shelf Set",
    price: 4999,
    description:
      "Add style and functionality to any room with our Wall Shelf Set. This set of three floating shelves provides the perfect platform to display your favorite books, photos, and decorative items while making efficient use of vertical space. The clean, minimalist design complements any interior style.",
    rating: 4.4,
    reviewCount: 52,
    category: "storage",
    features: [
      { text: "Set of three floating shelves in graduated sizes" },
      { text: "Crafted from premium quality engineered wood" },
      { text: "Hidden bracket mounting system for a clean, floating look" },
      { text: "Easy installation with included hardware and template" },
      { text: "Each shelf supports up to 5 kg of weight" },
      { text: "Versatile design works in any room of your home" },
    ],
    specifications: {
      dimensions: "Small: 40 cm, Medium: 60 cm, Large: 80 cm (Width) x 20 cm (Depth) x 3.5 cm (Height)",
      material: "Engineered Wood with Laminate Finish",
      finish: "Matte Finish with Smooth Edges",
      weight: "8 kg (Total Set)",
      warranty: "1 Year on Manufacturing Defects",
      boxContents: "3 Wall Shelves, Mounting Hardware, Installation Template, Instructions",
    },
    images: [
      {
        src: "/placeholder.svg?key=wall-shelves&height=600&width=600&query=floating wall shelves set",
        alt: "Wall Shelf Set - Installed View",
      },
      {
        src: "/placeholder.svg?key=shelf-detail&height=600&width=600&query=wall shelf detail",
        alt: "Wall Shelf Set - Detail",
      },
      {
        src: "/placeholder.svg?key=shelf-mounting&height=600&width=600&query=wall shelf mounting bracket",
        alt: "Wall Shelf Set - Mounting System",
      },
      {
        src: "/placeholder.svg?key=shelf-styled&height=600&width=600&query=wall shelves with books and decor",
        alt: "Wall Shelf Set - Styled",
      },
    ],
    colors: ["White", "Black", "Natural Wood", "Walnut"],
    sizes: ["Standard Set (3 Shelves)", "Extended Set (5 Shelves)"],
    reviews: [
      {
        id: "rev-023",
        name: "Aditya Verma",
        date: "2 months ago",
        rating: 5,
        comment:
          "These shelves are exactly what I needed for my small apartment! They were easy to install with the included template, and they look much more expensive than they actually are. Great quality for the price!",
        userImage: "/indian-man-portrait.png",
      },
      
    ],
    relatedProducts: [
      {
        name: "Elegant Bookshelf",
        price: 12999,
        image: "/placeholder.svg?key=elegant-bookshelf",
        rating: 4.7,
        reviewCount: 94,
        href: "/product/elegant-bookshelf",
      },
      {
        name: "Modern TV Unit",
        price: 15999,
        image: "/placeholder.svg?key=modern-tv-unit",
        rating: 4.5,
        reviewCount: 78,
        href: "/product/modern-tv-unit",
      },
      {
        name: "Decorative Wall Hooks (Set of 3)",
        price: 1999,
        image: "/placeholder.svg?key=wall-hooks",
        rating: 4.3,
        reviewCount: 47,
        href: "/product/decorative-wall-hooks",
      },
      {
        name: "Picture Frame Set",
        price: 2499,
        image: "/placeholder.svg?key=picture-frames",
        rating: 4.5,
        reviewCount: 63,
        href: "/product/picture-frame-set",
      },
    ],
  },

  "shoe-rack": {
    id: "storage-007",
    slug: "shoe-rack",
    name: "Wooden Shoe Rack",
    price: 7999,
    description:
      "Keep your entryway organized and clutter-free with our Wooden Shoe Rack. This practical and stylish storage solution features multiple tiers to accommodate your footwear collection, while its sleek design ensures it complements your home decor. Perfect for entryways, mudrooms, or walk-in closets.",
    rating: 4.5,
    reviewCount: 68,
    category: "storage",
    features: [
      { text: "Four-tier design provides ample storage for up to 16 pairs of shoes" },
      { text: "Crafted from durable Sheesham wood for long-lasting use" },
      { text: "Open slatted design allows for air circulation" },
      { text: "Compact footprint maximizes storage while minimizing space usage" },
      { text: "Sturdy construction supports heavy footwear" },
      { text: "Easy assembly with included instructions and hardware" },
    ],
    specifications: {
      dimensions: "Width: 80 cm, Depth: 30 cm, Height: 90 cm",
      material: "Sheesham Wood",
      finish: "Natural Wood Finish with Protective Coating",
      weight: "12 kg",
      warranty: "2 Years on Manufacturing Defects",
      boxContents: "Shoe Rack Components, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?key=shoe-rack&height=600&width=600&query=wooden shoe rack",
        alt: "Wooden Shoe Rack - Front View",
      },
      {
        src: "/placeholder.svg?key=shoe-rack-side&height=600&width=600&query=shoe rack side view",
        alt: "Wooden Shoe Rack - Side View",
      },
      {
        src: "/placeholder.svg?key=shoe-rack-detail&height=600&width=600&query=shoe rack wood detail",
        alt: "Wooden Shoe Rack - Detail",
      },
      {
        src: "/placeholder.svg?key=shoe-rack-styled&height=600&width=600&query=shoe rack in entryway with shoes",
        alt: "Wooden Shoe Rack - Styled",
      },
    ],
    colors: ["Natural", "Walnut", "Teak"],
    sizes: ["2-Tier", "3-Tier", "4-Tier"],
    reviews: [
      {
        id: "rev-025",
        name: "Sanjay Gupta",
        date: "3 months ago",
        rating: 5,
        comment:
          "This shoe rack has transformed our entryway! It's sturdy, well-made, and holds all our family's everyday shoes. The natural wood finish matches our decor perfectly, and assembly was straightforward. Great purchase!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-026",
        name: "Nisha Reddy",
        date: "1 month ago",
        rating: 4,
        comment:
          "Good quality shoe rack that looks nice in our hallway. It was easy to put together and holds quite a few pairs of shoes. The only reason for 4 stars instead of 5 is that larger boots don't fit well on the shelves.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Entryway Bench with Storage",
        price: 9999,
        image: "/placeholder.svg?key=entryway-bench",
        rating: 4.6,
        reviewCount: 57,
        href: "/product/entryway-bench",
      },
      {
        name: "Wall Mounted Coat Rack",
        price: 3999,
        image: "/placeholder.svg?key=coat-rack",
        rating: 4.4,
        reviewCount: 49,
        href: "/product/wall-mounted-coat-rack",
      },
      {
        name: "Storage Ottoman",
        price: 6999,
        image: "/placeholder.svg?key=storage-ottoman",
        rating: 4.6,
        reviewCount: 83,
        href: "/product/storage-ottoman",
      },
      {
        name: "Umbrella Stand",
        price: 1999,
        image: "/placeholder.svg?key=umbrella-stand",
        rating: 4.3,
        reviewCount: 38,
        href: "/product/umbrella-stand",
      },
    ],
  },

  "bedside-table-set": {
    id: "storage-008",
    slug: "bedside-table-set",
    name: "Bedside Table (Set of 2)",
    price: 7999,
    description:
      "Complete your bedroom setup with our elegant Bedside Table Set. These versatile nightstands feature a drawer for storing small items and an open shelf for books or decorative pieces. The timeless design and quality craftsmanship ensure these tables will complement your bedroom decor for years to come.",
    rating: 4.5,
    reviewCount: 89,
    category: "storage",
    features: [
      { text: "Set of two matching bedside tables for a cohesive look" },
      { text: "Each table features one drawer and one open shelf" },
      { text: "Crafted from premium quality Sheesham wood" },
      { text: "Smooth-glide drawer with elegant metal handle" },
      { text: "Compact design perfect for smaller bedrooms" },
      { text: "Sturdy construction supports lamps, books, and more" },
    ],
    specifications: {
      dimensions: "Width: 45 cm, Depth: 40 cm, Height: 55 cm (Each Table)",
      material: "Sheesham Wood",
      finish: "Polished Wood with Protective Coating",
      weight: "8 kg (Each Table)",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "2 Bedside Tables, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?key=bedside-table&height=600&width=600&query=wooden bedside table",
        alt: "Bedside Table - Single View",
      },
      {
        src: "/placeholder.svg?key=bedside-tables-pair&height=600&width=600&query=pair of bedside tables",
        alt: "Bedside Table - Set View",
      },
      {
        src: "/placeholder.svg?key=bedside-drawer&height=600&width=600&query=bedside table drawer detail",
        alt: "Bedside Table - Drawer Detail",
      },
      {
        src: "/placeholder.svg?key=bedside-styled&height=600&width=600&query=bedside tables in bedroom setting",
        alt: "Bedside Table - Styled",
      },
    ],
    colors: ["Natural", "Walnut", "Mahogany"],
    sizes: ["Standard"],
    reviews: [
      {
        id: "rev-027",
        name: "Vivek Malhotra",
        date: "2 months ago",
        rating: 5,
        comment:
          "These bedside tables are perfect! The quality is excellent, and they were easy to assemble. The drawer is spacious enough for my books and reading glasses, and the shelf underneath is great for magazines. They look much more expensive than they are!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-028",
        name: "Sneha Joshi",
        date: "1 month ago",
        rating: 4,
        comment:
          "Beautiful bedside tables that match our bed frame perfectly. The wood grain is gorgeous, and the construction feels solid. Assembly was straightforward but took about 30 minutes per table. Very happy with this purchase!",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
      {
        name: "Premium Wardrobe",
        price: 18999,
        image: "/products/premium-wardrobe-full.png",
        rating: 4.6,
        reviewCount: 112,
        href: "/product/premium-wardrobe",
      },
      {
        name: "Chest of Drawers",
        price: 14999,
        image: "/placeholder.svg?key=chest-drawers",
        rating: 4.7,
        reviewCount: 76,
        href: "/product/chest-of-drawers",
      },
      {
        name: "Dressing Table",
        price: 16999,
        image: "/placeholder.svg?key=dressing-table",
        rating: 4.8,
        reviewCount: 64,
        href: "/product/dressing-table",
      },
    ],
  },

  

  "rustic-dining-set": {
    id: "dining-003",
    slug: "rustic-dining-set",
    name: "Rustic Farmhouse Dining Set (8 Seater)",
    price: 36999,
    description:
      "Bring the charm of a countryside farmhouse to your dining area with our Rustic Farmhouse Dining Set. This spacious 8-seater features a distressed finish and robust construction, perfect for large family gatherings and entertaining guests.",
    rating: 4.8,
    reviewCount: 42,
    category: "dining",
    features: [
      { text: "Handcrafted from solid Mango wood for exceptional durability" },
      { text: "Distressed finish adds rustic charm and character" },
      { text: "Spacious table accommodates 8 people comfortably" },
      { text: "Bench seating option available for a authentic farmhouse feel" },
      { text: "Chairs feature comfortable cushioned seats" },
      { text: "Each piece has unique wood grain patterns and slight variations" },
    ],
    specifications: {
      dimensions:
        "Table: Length: 220 cm, Width: 100 cm, Height: 78 cm; Chair: Width: 45 cm, Depth: 52 cm, Height: 98 cm",
      material: "Solid Mango Wood",
      finish: "Distressed Natural Wood Finish with Protective Coating",
      weight: "Table: 65 kg, Each Chair: 8 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Dining Table, 8 Chairs (or 6 Chairs + 2 Benches), Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/rustic-dining-set.png",
        alt: "Rustic Farmhouse Dining Set - Full View",
      },
      {
        src: "/placeholder.svg?key=rustic-dining-detail&height=600&width=600&query=rustic wooden dining table detail",
        alt: "Rustic Farmhouse Dining Set - Table Detail",
      },
      {
        src: "/placeholder.svg?key=rustic-dining-chair&height=600&width=600&query=rustic wooden dining chair",
        alt: "Rustic Farmhouse Dining Set - Chair Detail",
      },
      {
        src: "/placeholder.svg?key=rustic-dining-styled&height=600&width=600&query=rustic dining set in farmhouse kitchen",
        alt: "Rustic Farmhouse Dining Set - Styled",
      },
    ],
    colors: ["Natural", "Walnut", "Antique Oak"],
    sizes: ["6 Seater", "8 Seater"],
    reviews: [
      {
        id: "rev-031",
        name: "Rajiv Malhotra",
        date: "3 months ago",
        rating: 5,
        comment:
          "This dining set is absolutely stunning! The craftsmanship is exceptional and it's become the centerpiece of our home. We love hosting dinner parties now just to show it off.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-032",
        name: "Meera Singh",
        date: "1 month ago",
        rating: 5,
        comment:
          "Worth every penny! The table is massive and solid. We opted for the bench seating on one side which our kids love. The distressed finish hides marks and scratches which is perfect for a family with young children.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Classic Dining Set (6 Seater)",
        price: 28999,
        image: "/wooden-6-seater-dining-set.png",
        rating: 4.9,
        reviewCount: 75,
        href: "/product/classic-dining-set",
      },
      {
        name: "Sideboard Cabinet",
        price: 19999,
        image: "/placeholder.svg?key=sideboard",
        rating: 4.8,
        reviewCount: 56,
        href: "/product/sideboard-cabinet",
      },
      {
        name: "Kitchen Island",
        price: 24999,
        image: "/placeholder.svg?key=kitchen-island",
        rating: 4.7,
        reviewCount: 38,
        href: "/product/kitchen-island",
      },
      {
        name: "Rustic Pendant Light",
        price: 6999,
        image: "/placeholder.svg?key=rustic-pendant",
        rating: 4.6,
        reviewCount: 29,
        href: "/product/rustic-pendant-light",
      },
    ],
    discount: 15,
  },

  "compact-dining-set": {
    id: "dining-004",
    slug: "compact-dining-set",
    name: "Compact Folding Dining Set (2 Seater)",
    price: 14999,
    description:
      "Perfect for small spaces, our Compact Folding Dining Set offers functionality without compromising on style. This innovative 2-seater features a folding mechanism that allows you to expand the table when needed and fold it away when not in use.",
    rating: 4.6,
    reviewCount: 37,
    category: "dining",
    features: [
      { text: "Space-saving design with folding table mechanism" },
      { text: "Expands from a console table to a dining table for 2-4 people" },
      { text: "Chairs can be nested under the table when not in use" },
      { text: "Made from durable engineered wood with a smooth finish" },
      { text: "Easy to clean and maintain" },
      { text: "Ideal for apartments, studio homes, or small dining areas" },
    ],
    specifications: {
      dimensions:
        "Table (Folded): Length: 45 cm, Width: 80 cm, Height: 75 cm; Table (Extended): Length: 80 cm, Width: 80 cm; Chair: Width: 40 cm, Depth: 45 cm, Height: 80 cm",
      material: "Engineered Wood with Laminate Finish",
      finish: "Smooth Matte Finish",
      weight: "Table: 25 kg, Each Chair: 4 kg",
      warranty: "2 Years on Manufacturing Defects",
      boxContents: "1 Folding Dining Table, 2 Chairs, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?key=compact-dining-folded&height=600&width=600&query=folding dining table compact",
        alt: "Compact Folding Dining Set - Folded View",
      },
      {
        src: "/placeholder.svg?key=compact-dining-extended&height=600&width=600&query=folding dining table extended",
        alt: "Compact Folding Dining Set - Extended View",
      },
      {
        src: "/placeholder.svg?key=compact-dining-chair&height=600&width=600&query=compact dining chair",
        alt: "Compact Folding Dining Set - Chair Detail",
      },
      {
        src: "/placeholder.svg?key=compact-dining-styled&height=600&width=600&query=compact dining set in small apartment",
        alt: "Compact Folding Dining Set - Styled",
      },
    ],
    colors: ["White", "Oak", "Walnut"],
    sizes: ["2 Seater", "4 Seater"],
    reviews: [
      {
        id: "rev-033",
        name: "Vikram Mehta",
        date: "2 months ago",
        rating: 5,
        comment:
          "Perfect solution for our small apartment! We can fold it away when not in use and extend it when we have guests. The quality is excellent and it looks much more expensive than it is.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-034",
        name: "Ananya Desai",
        date: "1 month ago",
        rating: 4,
        comment:
          "Great space-saving dining set. Assembly was straightforward and the folding mechanism works smoothly. The chairs are comfortable enough for regular use. Would recommend for small spaces.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
     
      {
        name: "Nesting Coffee Tables",
        price: 8999,
        image: "/placeholder.svg?key=nesting-tables",
        rating: 4.5,
        reviewCount: 42,
        href: "/product/nesting-coffee-tables",
      },
      {
        name: "Compact Sofa",
        price: 18999,
        image: "/placeholder.svg?key=compact-sofa",
        rating: 4.6,
        reviewCount: 39,
        href: "/product/compact-sofa",
      },
      {
        name: "Wall-Mounted Desk",
        price: 7999,
        image: "/placeholder.svg?key=wall-desk",
        rating: 4.4,
        reviewCount: 31,
        href: "/product/wall-mounted-desk",
      },
    ],
  },

  "glass-dining-set": {
    id: "dining-005",
    slug: "glass-dining-set",
    name: "Contemporary Glass Dining Set (6 Seater)",
    price: 32999,
    description:
      "Add a touch of elegance to your dining area with our Contemporary Glass Dining Set. Featuring a tempered glass tabletop supported by a stylish metal base, this 6-seater dining set combines modern aesthetics with practical functionality.",
    rating: 4.7,
    reviewCount: 45,
    category: "dining",
    features: [
      { text: "10mm tempered glass tabletop for safety and durability" },
      { text: "Brushed stainless steel base provides stability and style" },
      { text: "Chairs feature premium leatherette upholstery for comfort" },
      { text: "Easy to clean glass surface is stain-resistant" },
      { text: "Contemporary design that creates a sense of space" },
      { text: "Chairs have ergonomic design for comfortable dining" },
    ],
    specifications: {
      dimensions:
        "Table: Length: 180 cm, Width: 90 cm, Height: 75 cm; Chair: Width: 45 cm, Depth: 50 cm, Height: 95 cm",
      material: "Tempered Glass with Stainless Steel Base, Leatherette Upholstered Chairs",
      finish: "Clear Glass with Brushed Stainless Steel",
      weight: "Table: 50 kg, Each Chair: 6 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Glass Dining Table, 6 Chairs, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?key=glass-dining-full&height=600&width=600&query=glass dining table with 6 chairs",
        alt: "Contemporary Glass Dining Set - Full View",
      },
      {
        src: "/placeholder.svg?key=glass-dining-detail&height=600&width=600&query=glass dining table detail",
        alt: "Contemporary Glass Dining Set - Table Detail",
      },
      {
        src: "/placeholder.svg?key=glass-dining-chair&height=600&width=600&query=modern dining chair with leatherette",
        alt: "Contemporary Glass Dining Set - Chair Detail",
      },
      {
        src: "/placeholder.svg?key=glass-dining-styled&height=600&width=600&query=glass dining set in modern apartment",
        alt: "Contemporary Glass Dining Set - Styled",
      },
    ],
    colors: ["Clear/Silver", "Frosted/Silver", "Tinted/Black"],
    sizes: ["4 Seater", "6 Seater", "8 Seater"],
    reviews: [
      {
        id: "rev-035",
        name: "Arjun Kapoor",
        date: "3 months ago",
        rating: 5,
        comment:
          "This dining set is absolutely stunning! The glass top gives our dining area a spacious feel, and the chairs are surprisingly comfortable. Assembly was professional and worth the extra cost.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-036",
        name: "Neha Sharma",
        date: "2 months ago",
        rating: 4,
        comment:
          "Beautiful dining set that has transformed our dining area. The glass is thick and sturdy, and the metal base is very stable. The chairs are comfortable for long dinner parties. Only giving 4 stars because it shows fingerprints easily.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Glass Coffee Table",
        price: 12999,
        image: "/placeholder.svg?key=glass-coffee-table",
        rating: 4.6,
        reviewCount: 52,
        href: "/product/glass-coffee-table",
      },
      {
        name: "Contemporary Sideboard",
        price: 21999,
        image: "/placeholder.svg?key=contemporary-sideboard",
        rating: 4.8,
        reviewCount: 39,
        href: "/product/contemporary-sideboard",
      },
      {
        name: "Modern Pendant Light",
        price: 8999,
        image: "/placeholder.svg?key=modern-pendant",
        rating: 4.5,
        reviewCount: 47,
        href: "/product/modern-pendant-light",
      },
    ],
    isNew: true,
  },

  "office-table": {
    id: "office-001",
    slug: "office-table",
    name: "Executive Office Table",
    price: 18999,
    description:
      "Elevate your workspace with our Executive Office Table, designed for professionals who value both functionality and aesthetics. This sophisticated desk features a spacious work surface, integrated storage solutions, and premium materials that make a statement in any office environment.",
    rating: 4.7,
    reviewCount: 68,
    category: "office",
    features: [
      { text: "Crafted from premium engineered wood with a scratch-resistant surface" },
      { text: "Spacious work area accommodates multiple monitors and office equipment" },
      { text: "Built-in cable management system keeps your workspace tidy" },
      { text: "Lockable drawers for secure storage of important documents" },
      { text: "Reinforced frame provides exceptional stability" },
      { text: "Adjustable feet for perfect leveling on uneven floors" },
      { text: "Sleek design complements modern office environments" },
    ],
    specifications: {
      dimensions: "Length: 150 cm, Width: 75 cm, Height: 75 cm",
      material: "Premium Engineered Wood with Laminate Finish",
      finish: "Matte Finish with Wood Grain Texture",
      weight: "45 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Office Table, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=executive office desk with drawers",
        alt: "Executive Office Table - Front View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=office desk cable management system",
        alt: "Executive Office Table - Cable Management",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=office desk drawer detail",
        alt: "Executive Office Table - Drawer Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=office desk in modern office setting",
        alt: "Executive Office Table - In Office Setting",
      },
    ],
    colors: ["Walnut", "Mahogany", "White", "Black"],
    sizes: ["Standard", "Large (180 cm)", "L-Shaped"],
    reviews: [
      {
        id: "rev-101",
        name: "Vikram Mehta",
        date: "2 months ago",
        rating: 5,
        comment:
          "This office table has transformed my home office. The build quality is exceptional, and the cable management system keeps everything organized. Assembly was straightforward, and the finished product looks much more expensive than it is.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-102",
        name: "Priya Sharma",
        date: "1 month ago",
        rating: 4,
        comment:
          "Great desk for professionals. The workspace is generous, and the drawers provide ample storage. The only reason for 4 stars instead of 5 is that assembly took longer than expected, but the end result was worth it.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Ergonomic Office Chair",
        price: 12999,
        image: "/placeholder.svg?height=400&width=600&query=ergonomic office chair",
        rating: 4.8,
        reviewCount: 92,
        href: "/product/ergonomic-office-chair",
      },
      {
        name: "Computer Table",
        price: 14999,
        image: "/placeholder.svg?height=400&width=600&query=computer desk with keyboard tray",
        rating: 4.6,
        reviewCount: 78,
        href: "/product/computer-table",
      },
      {
        name: "Office Bookshelf",
        price: 9999,
        image: "/placeholder.svg?height=400&width=600&query=office bookshelf",
        rating: 4.5,
        reviewCount: 56,
        href: "/product/office-bookshelf",
      },
      {
        name: "Desk Organizer Set",
        price: 2999,
        image: "/placeholder.svg?height=400&width=600&query=wooden desk organizer",
        rating: 4.7,
        reviewCount: 45,
        href: "/product/desk-organizer-set",
      },
    ],
  },

  "side-table": {
    id: "table-001",
    slug: "side-table",
    name: "Contemporary Side Table",
    price: 5999,
    description:
      "Add functionality and style to any room with our Contemporary Side Table. Perfect for placing beside sofas, armchairs, or beds, this versatile piece provides a convenient surface for lamps, books, beverages, and decorative items while enhancing your interior décor.",
    rating: 4.6,
    reviewCount: 74,
    category: "tables",
    features: [
      { text: "Crafted from solid wood with a durable finish" },
      { text: "Compact design ideal for small spaces" },
      { text: "Stable base prevents tipping" },
      { text: "Smooth, rounded edges for safety" },
      { text: "Water-resistant surface protects against spills" },
      { text: "Non-scratch feet protect your floors" },
    ],
    specifications: {
      dimensions: "Diameter: 45 cm, Height: 55 cm",
      material: "Solid Sheesham Wood",
      finish: "Natural Wood Finish with Protective Coating",
      weight: "6 kg",
      warranty: "2 Years on Manufacturing Defects",
      boxContents: "1 Side Table, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=round wooden side table",
        alt: "Contemporary Side Table - Front View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=side table wood grain detail",
        alt: "Contemporary Side Table - Wood Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=side table base detail",
        alt: "Contemporary Side Table - Base Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=side table next to sofa with lamp",
        alt: "Contemporary Side Table - Styled",
      },
    ],
    colors: ["Natural", "Walnut", "Espresso", "White"],
    sizes: ["Small (35 cm)", "Medium (45 cm)", "Large (55 cm)"],
    reviews: [
      {
        id: "rev-103",
        name: "Arjun Nair",
        date: "3 months ago",
        rating: 5,
        comment:
          "Perfect little side table for my living room! The quality is excellent, and it was incredibly easy to assemble. The wood grain is beautiful, and it's the perfect height for my sofa.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-104",
        name: "Meera Patel",
        date: "1 month ago",
        rating: 4,
        comment:
          "Lovely side table that looks much more expensive than it is. The natural finish matches my other furniture perfectly. It's sturdy and well-made. Would definitely recommend!",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Coffee Table",
        price: 8999,
        image: "/placeholder.svg?height=400&width=600&query=wooden coffee table",
        rating: 4.7,
        reviewCount: 86,
        href: "/product/coffee-table",
      },
      {
        name: "Console Table",
        price: 12999,
        image: "/placeholder.svg?height=400&width=600&query=wooden console table",
        rating: 4.5,
        reviewCount: 62,
        href: "/product/console-table",
      },
      {
        name: "Nesting Tables Set",
        price: 7999,
        image: "/placeholder.svg?height=400&width=600&query=wooden nesting tables",
        rating: 4.6,
        reviewCount: 58,
        href: "/product/nesting-tables",
      },
      {
        name: "Luxe 3-Seater Sofa",
        price: 32999,
        image: "/elegant-three-seater-sofa.png",
        rating: 4.7,
        reviewCount: 98,
        href: "/product/luxe-sofa",
      },
    ],
  },

  "sofa-combined": {
    id: "sofa-002",
    slug: "sofa-combined",
    name: "Modular Sofa Combination",
    price: 45999,
    description:
      "Transform your living space with our versatile Modular Sofa Combination. This innovative seating solution allows you to customize your arrangement to suit your space and lifestyle. Featuring premium upholstery and plush cushioning, this modular set can be configured as a sectional, separate pieces, or even a sofa bed for ultimate flexibility.",
    rating: 4.8,
    reviewCount: 86,
    category: "sofas",
    features: [
      { text: "Modular design allows multiple configurations" },
      { text: "Premium stain-resistant fabric upholstery" },
      { text: "High-density foam with pocket springs for superior comfort" },
      { text: "Solid wood frame ensures stability and longevity" },
      { text: "Removable and washable covers for easy maintenance" },
      { text: "Hidden storage compartment in ottoman section" },
      { text: "Convertible chaise section can be positioned on either side" },
      { text: "Includes decorative cushions for added style and comfort" },
    ],
    specifications: {
      dimensions:
        "3-Seater: Length: 210 cm, Width: 90 cm, Height: 85 cm; Chaise: Length: 160 cm, Width: 90 cm, Height: 85 cm; Ottoman: Length: 90 cm, Width: 90 cm, Height: 45 cm",
      material: "Solid Wood Frame with Premium Fabric Upholstery",
      finish: "Soft-touch Fabric with Wooden Legs",
      weight: "Total Set: 120 kg",
      warranty: "5 Years on Frame, 3 Years on Upholstery",
      boxContents: "1 3-Seater Sofa, 1 Chaise Lounge, 1 Ottoman, Decorative Cushions, Assembly Instructions",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=modular sectional sofa with ottoman",
        alt: "Modular Sofa Combination - L-Shape Configuration",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=modular sofa separate pieces",
        alt: "Modular Sofa Combination - Separate Configuration",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=modular sofa fabric detail",
        alt: "Modular Sofa Combination - Fabric Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=modular sofa in living room setting",
        alt: "Modular Sofa Combination - Styled",
      },
    ],
    colors: ["Dove Grey", "Navy Blue", "Sage Green", "Beige"],
    sizes: ["5-Piece Set", "7-Piece Set"],
    reviews: [
      {
        id: "rev-105",
        name: "Rajiv Malhotra",
        date: "2 months ago",
        rating: 5,
        comment:
          "This modular sofa is exactly what our family needed! We can reconfigure it based on our needs - movie night, hosting guests, or just everyday relaxing. The quality is exceptional, and the fabric is both soft and durable. Assembly was straightforward with the clear instructions provided.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-106",
        name: "Anita Desai",
        date: "3 months ago",
        rating: 5,
        comment:
          "We've had many sofas over the years, but this modular combination is by far the most versatile and comfortable. The hidden storage in the ottoman is perfect for blankets, and being able to move the chaise from left to right is incredibly practical. Highly recommend!",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Luxe 3-Seater Sofa",
        price: 32999,
        image: "/elegant-three-seater-sofa.png",
        rating: 4.7,
        reviewCount: 98,
        href: "/product/luxe-sofa",
      },
      {
        name: "Coffee Table Set",
        price: 8999,
        image: "/placeholder.svg?key=coffee-table",
        rating: 4.6,
        reviewCount: 87,
        href: "/product/coffee-table-set",
      },
      {
        name: "Floor Lamp",
        price: 5999,
        image: "/placeholder.svg?height=400&width=600&query=modern floor lamp",
        rating: 4.5,
        reviewCount: 64,
        href: "/product/floor-lamp",
      },
      {
        name: "Area Rug",
        price: 7999,
        image: "/placeholder.svg?height=400&width=600&query=living room area rug",
        rating: 4.7,
        reviewCount: 72,
        href: "/product/area-rug",
      },
    ],
    isNew: true,
  },

  "computer-table": {
    id: "office-002",
    slug: "computer-table",
    name: "Ergonomic Computer Workstation",
    price: 14999,
    description:
      "Enhance your productivity with our Ergonomic Computer Workstation, thoughtfully designed for long hours of comfortable computing. This comprehensive desk features a pullout keyboard tray, monitor shelf, CPU cabinet, and ample workspace, making it perfect for home offices, gaming setups, or professional environments.",
    rating: 4.6,
    reviewCount: 78,
    category: "office",
    features: [
      { text: "Ergonomic design reduces strain during extended computer use" },
      { text: "Pullout keyboard tray with wrist rest for comfortable typing" },
      { text: "Elevated monitor shelf promotes proper posture" },
      { text: "Dedicated CPU cabinet with ventilation" },
      { text: "Built-in cable management system eliminates clutter" },
      { text: "Multiple storage compartments for office supplies" },
      { text: "Scratch-resistant and waterproof surface" },
      { text: "Anti-skid feet for stability" },
    ],
    specifications: {
      dimensions: "Length: 120 cm, Width: 60 cm, Height: 135 cm (including monitor shelf)",
      material: "Engineered Wood with Laminate Finish",
      finish: "Matte Finish with Smooth Edges",
      weight: "40 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "Computer Table Components, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=computer desk with keyboard tray and monitor shelf",
        alt: "Ergonomic Computer Workstation - Front View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=computer desk keyboard tray extended",
        alt: "Ergonomic Computer Workstation - Keyboard Tray",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=computer desk cable management system",
        alt: "Ergonomic Computer Workstation - Cable Management",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=computer desk in home office setting",
        alt: "Ergonomic Computer Workstation - Styled",
      },
    ],
    colors: ["White", "Black", "Oak", "Walnut"],
    sizes: ["Compact (100 cm)", "Standard (120 cm)", "Large (150 cm)"],
    reviews: [
      {
        id: "rev-107",
        name: "Aditya Verma",
        date: "2 months ago",
        rating: 5,
        comment:
          "This computer desk has completely transformed my work-from-home setup. The ergonomic design has significantly reduced my back and wrist pain. The cable management system is a game-changer - no more tangled wires! Assembly took about an hour but was straightforward with the clear instructions.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-108",
        name: "Neha Sharma",
        date: "1 month ago",
        rating: 4,
        comment:
          "Great desk for both work and gaming. The monitor shelf is at the perfect height, and the keyboard tray slides smoothly. Plenty of storage for all my peripherals and supplies. The only reason for 4 stars is that I wish the desk was slightly deeper, but overall it's an excellent product.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Ergonomic Office Chair",
        price: 12999,
        image: "/placeholder.svg?height=400&width=600&query=ergonomic office chair",
        rating: 4.8,
        reviewCount: 92,
        href: "/product/ergonomic-office-chair",
      },
      {
        name: "Executive Office Table",
        price: 18999,
        image: "/placeholder.svg?height=400&width=600&query=executive office desk",
        rating: 4.7,
        reviewCount: 68,
        href: "/product/office-table",
      },
      {
        name: "Desk Lamp",
        price: 2999,
        image: "/placeholder.svg?height=400&width=600&query=adjustable desk lamp",
        rating: 4.5,
        reviewCount: 56,
        href: "/product/desk-lamp",
      },
      {
        name: "Monitor Stand",
        price: 1999,
        image: "/placeholder.svg?height=400&width=600&query=wooden monitor stand",
        rating: 4.4,
        reviewCount: 48,
        href: "/product/monitor-stand",
      },
    ],
  },

  showcase: {
    id: "storage-009",
    slug: "showcase",
    name: "Glass Door Display Showcase",
    price: 22999,
    description:
      "Highlight your treasured collectibles, heirlooms, and decorative pieces with our elegant Glass Door Display Showcase. Featuring tempered glass doors, adjustable shelves, and built-in lighting, this showcase provides the perfect environment to display and protect your valuable items while enhancing your home's interior design.",
    rating: 4.8,
    reviewCount: 64,
    category: "storage",
    features: [
      { text: "Tempered glass doors provide clear visibility while protecting contents from dust" },
      { text: "Integrated LED lighting system highlights your displayed items" },
      { text: "Adjustable glass shelves accommodate items of various heights" },
      { text: "Soft-close hinges prevent slamming and ensure smooth operation" },
      { text: "Lockable doors keep valuable collections secure" },
      { text: "Mirrored back panel enhances visual appeal and creates depth" },
      { text: "Solid wood frame provides stability and durability" },
      { text: "Adjustable feet for perfect leveling on uneven floors" },
    ],
    specifications: {
      dimensions: "Width: 100 cm, Depth: 40 cm, Height: 180 cm",
      material: "Solid Wood Frame with Tempered Glass",
      finish: "Polished Wood with Clear Glass",
      weight: "65 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Display Showcase, LED Lighting System, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=glass door display cabinet with lighting",
        alt: "Glass Door Display Showcase - Front View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=display cabinet interior with led lighting",
        alt: "Glass Door Display Showcase - Interior with Lighting",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=display cabinet glass door detail",
        alt: "Glass Door Display Showcase - Door Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=display cabinet with collectibles",
        alt: "Glass Door Display Showcase - Styled with Items",
      },
    ],
    colors: ["Mahogany", "Walnut", "White", "Black"],
    sizes: ["2-Door", "3-Door", "Corner Unit"],
    reviews: [
      {
        id: "rev-109",
        name: "Sanjay Kapoor",
        date: "3 months ago",
        rating: 5,
        comment:
          "This showcase is absolutely stunning! The craftsmanship is exceptional, and the integrated lighting perfectly highlights our collection of crystal figurines. The mirrored back adds depth and makes the cabinet appear larger. Assembly was professional and worth the extra cost.",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-110",
        name: "Lakshmi Reddy",
        date: "2 months ago",
        rating: 5,
        comment:
          "We purchased this showcase for our silver collection, and it has exceeded our expectations. The adjustable shelves allow for perfect arrangement, and the lockable doors give us peace of mind. The LED lighting creates a beautiful ambiance in our living room in the evening.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Elegant Bookshelf",
        price: 12999,
        image: "/wooden-bookshelf.png",
        rating: 4.7,
        reviewCount: 94,
        href: "/product/elegant-bookshelf",
      },
      {
        name: "Wall Shelf Set",
        price: 4999,
        image: "/placeholder.svg?key=wall-shelves",
        rating: 4.4,
        reviewCount: 52,
        href: "/product/wall-shelf-set",
      },
      {
        name: "Console Table",
        price: 12999,
        image: "/placeholder.svg?height=400&width=600&query=wooden console table",
        rating: 4.5,
        reviewCount: 62,
        href: "/product/console-table",
      },
      {
        name: "Decorative Lighting Set",
        price: 6999,
        image: "/placeholder.svg?height=400&width=600&query=decorative accent lights",
        rating: 4.6,
        reviewCount: 48,
        href: "/product/decorative-lighting-set",
      },
    ],
  },

  "console-table": {
    id: "table-002",
    slug: "console-table",
    name: "Elegant Console Table",
    price: 12999,
    description:
      "Add a touch of sophistication to your entryway, hallway, or living room with our Elegant Console Table. This slim, stylish piece combines form and function, providing a perfect surface for decorative items, lamps, or everyday essentials while making a design statement with its refined aesthetics.",
    rating: 4.5,
    reviewCount: 62,
    category: "tables",
    features: [
      { text: "Handcrafted from premium Sheesham wood" },
      { text: "Slim profile design perfect for narrow spaces" },
      { text: "Two spacious drawers for storing small items" },
      { text: "Lower shelf provides additional display or storage space" },
      { text: "Intricate carved details add visual interest" },
      { text: "Sturdy construction ensures stability" },
      { text: "Versatile design complements various interior styles" },
    ],
    specifications: {
      dimensions: "Length: 120 cm, Depth: 35 cm, Height: 80 cm",
      material: "Solid Sheesham Wood",
      finish: "Hand-polished with Natural Wood Oil",
      weight: "25 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Console Table, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=wooden console table with drawers",
        alt: "Elegant Console Table - Front View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=console table carved detail",
        alt: "Elegant Console Table - Carving Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=console table drawer detail",
        alt: "Elegant Console Table - Drawer Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=console table in entryway with decor",
        alt: "Elegant Console Table - Styled in Entryway",
      },
    ],
    colors: ["Natural", "Walnut", "Mahogany", "Distressed White"],
    sizes: ["Small (90 cm)", "Medium (120 cm)", "Large (150 cm)"],
    reviews: [
      {
        id: "rev-111",
        name: "Rahul Kapoor",
        date: "2 months ago",
        rating: 5,
        comment:
          "This console table is a beautiful addition to our entryway! The craftsmanship is exceptional, especially the carved details. The drawers are perfect for storing keys and mail, and the lower shelf displays our favorite decorative pieces. Highly recommend!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-112",
        name: "Ananya Desai",
        date: "1 month ago",
        rating: 4,
        comment:
          "Lovely console table with excellent build quality. The wood grain is gorgeous, and the size is perfect for our hallway. Assembly was straightforward but took about an hour. The only minor issue is that the drawers could slide a bit more smoothly.",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Side Table",
        price: 5999,
        image: "/placeholder.svg?height=400&width=600&query=wooden side table",
        rating: 4.6,
        reviewCount: 74,
        href: "/product/side-table",
      },
      {
        name: "Wall Mirror",
        price: 7999,
        image: "/placeholder.svg?height=400&width=600&query=decorative wall mirror",
        rating: 4.7,
        reviewCount: 58,
        href: "/product/wall-mirror",
      },
      {
        name: "Table Lamp Set",
        price: 4999,
        image: "/placeholder.svg?height=400&width=600&query=decorative table lamps pair",
        rating: 4.5,
        reviewCount: 46,
        href: "/product/table-lamp-set",
      },
      {
        name: "Entryway Bench",
        price: 9999,
        image: "/placeholder.svg?height=400&width=600&query=entryway bench with storage",
        rating: 4.6,
        reviewCount: 52,
        href: "/product/entryway-bench",
      },
    ],
  },


  "modular-kitchen": {
    id: "kitchen-001",
    slug: "modular-kitchen",
    name: "Complete Modular Kitchen System",
    price: 149999,
    description:
      "Transform your cooking space with our Complete Modular Kitchen System, designed to combine functionality, durability, and aesthetic appeal. This comprehensive kitchen solution includes cabinetry, countertops, hardware, and organization systems that work together seamlessly to create an efficient and beautiful kitchen tailored to your needs and space.",
    rating: 4.9,
    reviewCount: 48,
    category: "kitchen",
    features: [
      { text: "Customizable modular design adapts to your kitchen layout" },
      { text: "High-quality water-resistant and termite-proof materials" },
      { text: "Soft-close drawers and cabinets for quiet operation" },
      { text: "Specialized storage solutions for utensils, cutlery, and pantry items" },
      { text: "Premium countertops resistant to heat, scratches, and stains" },
      { text: "Integrated lighting system illuminates work areas" },
      { text: "Ergonomic design optimizes workflow and reduces strain" },
      { text: "Ventilated compartments for appliances" },
      { text: "Includes professional design consultation and installation" },
    ],
    specifications: {
      dimensions: "Customizable to kitchen dimensions (Standard modules available)",
      material: "Marine-grade Plywood with Laminate/Acrylic Finish, Quartz/Granite Countertops",
      finish: "Multiple finish options available (Matte, Glossy, Textured)",
      weight: "Varies based on configuration",
      warranty: "10 Years on Cabinetry, 5 Years on Hardware, 15 Years on Countertops",
      boxContents: "Kitchen Modules as per Design, Hardware, Installation, User Manual",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=modern modular kitchen with island",
        alt: "Complete Modular Kitchen System - Full View",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=kitchen cabinet organization systems",
        alt: "Complete Modular Kitchen System - Storage Solutions",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=kitchen countertop and backsplash detail",
        alt: "Complete Modular Kitchen System - Countertop Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=modular kitchen with appliances",
        alt: "Complete Modular Kitchen System - With Appliances",
      },
    ],
    colors: ["White & Wood", "Grey & White", "All White", "Blue & White", "Custom Colors Available"],
    sizes: ["Small (Up to 80 sq ft)", "Medium (80-120 sq ft)", "Large (120+ sq ft)"],
    reviews: [
      {
        id: "rev-115",
        name: "Rajesh Kumar",
        date: "4 months ago",
        rating: 5,
        comment:
          "Our new modular kitchen has completely transformed our home! The design consultation was thorough, and the team worked with us to create a kitchen that maximizes our space while incorporating all our requirements. The quality of materials is exceptional, and the installation was professional and efficient. Worth every rupee!",
        userImage: "/indian-man-portrait.png",
      },
      {
        id: "rev-116",
        name: "Sunita Sharma",
        date: "2 months ago",
        rating: 5,
        comment:
          "After researching many options, we chose GKP Furniture for our modular kitchen, and we couldn't be happier! The attention to detail is impressive - from the perfectly aligned cabinets to the seamless countertop installation. The storage solutions have made cooking and organization so much easier. The kitchen has become the heart of our home!",
        userImage: "/indian-woman-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Kitchen Island",
        price: 29999,
        image: "/placeholder.svg?height=400&width=600&query=kitchen island with seating",
        rating: 4.7,
        reviewCount: 36,
        href: "/product/kitchen-island",
      },
      {
        name: "Dining Set (6 Seater)",
        price: 28999,
        image: "/wooden-6-seater-dining-set.png",
        rating: 4.9,
        reviewCount: 75,
        href: "/product/classic-dining-set",
      },
      {
        name: "Refrigerator Cabinet",
        price: 18999,
        image: "/placeholder.svg?height=400&width=600&query=tall kitchen cabinet for refrigerator",
        rating: 4.6,
        reviewCount: 32,
        href: "/product/refrigerator-cabinet",
      },
      {
        name: "Kitchen Organizer Set",
        price: 4999,
        image: "/placeholder.svg?height=400&width=600&query=kitchen drawer organizers set",
        rating: 4.8,
        reviewCount: 58,
        href: "/product/kitchen-organizer-set",
      },
    ],
  },

  

  "dressing-table": {
    id: "furniture-002",
    slug: "dressing-table",
    name: "Luxury Dressing Table with Mirror",
    price: 16999,
    description:
      "Elevate your daily routine with our Luxury Dressing Table, a perfect blend of functionality and elegance. This sophisticated vanity features a large mirror, ample storage for cosmetics and accessories, and a comfortable seating area, creating a dedicated space for self-care and preparation that adds a touch of luxury to your bedroom.",
    rating: 4.8,
    reviewCount: 64,
    category: "furniture",
    features: [
      { text: "Crafted from premium Sheesham wood for exceptional durability" },
      { text: "Large adjustable mirror with elegant frame" },
      { text: "Multiple drawers with soft-close mechanism" },
      { text: "Specialized compartments for jewelry and cosmetics" },
      { text: "Built-in LED lighting around mirror for optimal makeup application" },
      { text: "Matching upholstered stool included" },
      { text: "Cable management hole for hairdryers and styling tools" },
      { text: "Anti-tip safety feature for peace of mind" },
    ],
    specifications: {
      dimensions: "Width: 100 cm, Depth: 45 cm, Height: 140 cm (including mirror)",
      material: "Solid Sheesham Wood with Premium Upholstered Stool",
      finish: "Hand-polished with Protective Coating",
      weight: "45 kg",
      warranty: "3 Years on Manufacturing Defects",
      boxContents: "1 Dressing Table, 1 Mirror, 1 Upholstered Stool, Assembly Instructions, Hardware Kit",
    },
    images: [
      {
        src: "/placeholder.svg?height=600&width=800&query=wooden dressing table with mirror and stool",
        alt: "Luxury Dressing Table - Full Set",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=dressing table drawer organization",
        alt: "Luxury Dressing Table - Drawer Detail",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=dressing table mirror with led lights",
        alt: "Luxury Dressing Table - Mirror with Lighting",
      },
      {
        src: "/placeholder.svg?height=600&width=800&query=dressing table in bedroom setting",
        alt: "Luxury Dressing Table - Styled in Bedroom",
      },
    ],
    colors: ["White", "Walnut", "Mahogany", "Ivory"],
    sizes: ["Standard", "Large (120 cm)"],
    reviews: [
      {
        id: "rev-119",
        name: "Meera Patel",
        date: "2 months ago",
        rating: 5,
        comment:
          "This dressing table is absolutely beautiful! The quality of the wood is exceptional, and the design is both functional and elegant. The LED lighting around the mirror is perfect for makeup application, and the drawers provide ample storage for all my cosmetics and jewelry. The matching stool is comfortable and sturdy.",
        userImage: "/indian-woman-portrait.png",
      },
      {
        id: "rev-120",
        name: "Ravi Sharma",
        date: "1 month ago",
        rating: 5,
        comment:
          "Purchased this dressing table for my wife's birthday, and she loves it! The craftsmanship is excellent, and the mirror can be adjusted to different angles. The drawers slide smoothly, and the specialized compartments keep everything organized. It was delivered on time and assembly was professional and efficient.",
        userImage: "/indian-man-portrait.png",
      },
    ],
    relatedProducts: [
      {
        name: "Premium Wardrobe",
        price: 18999,
        image: "/products/premium-wardrobe-full.png",
        rating: 4.6,
        reviewCount: 112,
        href: "/product/premium-wardrobe",
      },
      {
        name: "Bedside Table (Set of 2)",
        price: 7999,
        image: "/placeholder.svg?key=bedside-table",
        rating: 4.5,
        reviewCount: 89,
        href: "/product/bedside-table-set",
      },
      {
        name: "Comfort Plus Queen Bed",
        price: 24999,
        image: "/minimalist-wood-bed.png",
        rating: 4.8,
        reviewCount: 124,
        href: "/product/comfort-plus-bed",
      },
      {
        name: "Vanity Stool",
        price: 4999,
        image: "/placeholder.svg?height=400&width=600&query=upholstered vanity stool",
        rating: 4.6,
        reviewCount: 52,
        href: "/product/vanity-stool",
      },
    ],
  },
}

// Function to get product by slug
export function getProductBySlug(slug: string): Product | undefined {
  return products[slug]
}

// Function to get related products
export function getRelatedProducts(productId: string): RelatedProduct[] {
  const product = Object.values(products).find((p) => p.id === productId)
  return product?.relatedProducts || []
}

// Function to get products by category
export function getProductsByCategory(category: string): Product[] {
  const categoryProducts = Object.values(products).filter((product) => product.category === category)
  console.log(`Found ${categoryProducts.length} products in category '${category}'`)
  return categoryProducts
}

// Function to get featured products
export function getFeaturedProducts(limit = 4): Product[] {
  return Object.values(products).slice(0, limit)
}

// Function to get premium products
export function getPremiumProducts(limit = 4): Product[] {
  return Object.values(products)
    .filter((product) => product.isPremium)
    .slice(0, limit)
}
