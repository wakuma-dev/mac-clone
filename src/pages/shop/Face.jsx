import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
import { CartContext } from "../../context/CartProvider";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/ui/Button";
const products = [
  { id: 1, image: img1, price: 25.98 },
  { id: 2, image: img2, price: 45.88 },
  { id: 3, image: img3, price: 75.25 },
  { id: 4, image: img4, price: 55.35 },
  { id: 5, image: img5, price: 65.99 },
  { id: 6, image: img6, price: 95.45 },
];
const Face = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleAdd = (product) => {
    addToCart(product);
    navigate("/cart");
  };
  return (
    <main className="px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <div className="mt-10 flex flex-col items-center justify-center gap-3">
        <h1 className="text-[54px] leading-[65px] font-normal font-sans">
          FACE MAKEUP
        </h1>
        <p className="text-[16px] leading-[24px]">
          {" "}
          Discover our Face products to create the perfect makeup look in one
          place!
        </p>
      </div>
      <Link to="/" className="text-left text-[14px] uppercase leading-[20px]">
        Home <span className="text-gray-500">- Best Sellers</span>
      </Link>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
        {products.map((prod) => (
          <div
            key={prod.id}
            className="flex flex-col items-center justify-between p-4 bg-[#f9f9f9] rounded-lg shadow-sm"
          >
            <div className="w-full h-72 flex items-center justify-center overflow-hidden">
              <img
                src={prod.image}
                alt={`Product ${prod.id}`}
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="mt-4 flex flex-col items-center gap-2">
              <span className="font-bold text-lg">${prod.price}</span>
              <Button onClick={() => handleAdd(prod)}>Add To Cart</Button>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Face;
