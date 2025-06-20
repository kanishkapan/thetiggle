import React from "react";

const products = [
  {
    id: 1,
    title: "Mint Dark Iced Chocolate Mix Sachets",
    price: "₹299 – ₹409",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/mintdarkiced.webp?v=1685016500",
  },
  {
    id: 2,
    title: "Iced Chocolate Combo Box — Dark and Mint",
    price: "₹299 – ₹409",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/combo.webp?v=1685016500",
  },
  {
    id: 3,
    title: "Hot Chocolate Flavours Bundle",
    price: "₹999",
    originalPrice: "₹1200",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/hotbundle.webp?v=1685016500",
  },
  {
    id: 4,
    title: "Mint Dark Iced Chocolate Limited Edition",
    price: "₹349 – ₹459",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/mintdarkiced.webp?v=1685016500",
  },
  {
    id: 5,
    title: "Iced Chocolate Box of 10",
    price: "₹599",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/combo.webp?v=1685016500",
  },
  {
    id: 6,
    title: "Winter Hot Chocolate Pack",
    price: "₹899",
    originalPrice: "₹1100",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/hotbundle.webp?v=1685016500",
  },
  {
    id: 7,
    title: "Mint Choco Sachets – 6 Pack",
    price: "₹249",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/mintdarkiced.webp?v=1685016500",
  },
  {
    id: 8,
    title: "Combo Box with Free Mug",
    price: "₹699",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/combo.webp?v=1685016500",
  },
  {
    id: 9,
    title: "Hot Chocolate Classic Flavours",
    price: "₹999",
    originalPrice: "₹1199",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/hotbundle.webp?v=1685016500",
  },
  {
    id: 10,
    title: "Mint Chocolate Ice Cream Mix",
    price: "₹329 – ₹399",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/mintdarkiced.webp?v=1685016500",
  },
  {
    id: 11,
    title: "Deluxe Iced Chocolate Combo",
    price: "₹899",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/combo.webp?v=1685016500",
  },
  {
    id: 12,
    title: "Hot Chocolate Variety Pack",
    price: "₹949",
    originalPrice: "₹1050",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/hotbundle.webp?v=1685016500",
  },
  {
    id: 13,
    title: "Mint Chocolate Chiller",
    price: "₹199 – ₹329",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/mintdarkiced.webp?v=1685016500",
  },
  {
    id: 14,
    title: "Mega Iced Chocolate Combo Box",
    price: "₹799",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/combo.webp?v=1685016500",
  },
  {
    id: 15,
    title: "Hot Chocolate Gift Set",
    price: "₹1099",
    originalPrice: "₹1299",
    image: "https://cdn.shopify.com/s/files/1/0571/9193/4261/files/hotbundle.webp?v=1685016500",
  },
];


const ProductCards = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-500 transform hover:-translate-y-2 group"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-gray-800 font-medium text-base mb-2">
                {product.title}
              </h3>
              <p className="text-pink-600 text-lg font-semibold">
                {product.price}
                {product.originalPrice && (
                  <span className="text-gray-400 text-sm font-normal line-through ml-2">
                    {product.originalPrice}
                  </span>
                )}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCards;
