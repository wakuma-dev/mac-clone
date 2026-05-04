import React, { useState, useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import img from "../../assets/1841de863acadd1375c36f646318933f.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import img1 from "../../assets/1.png";
import img2 from "../../assets/2.png";
import img3 from "../../assets/3.png";
import img4 from "../../assets/4.png";
import img5 from "../../assets/5.png";
import img6 from "../../assets/6.png";
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

const Chappell = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate("/cart");
  };

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    const maxLimit = products.length - 2;
    if (currentIndex < maxLimit) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <main className="px-4 sm:px-8 md:px-12 lg:px-16 w-full bg-black">
      <div className="flex flex-col items-center justify-center text-center gap-3 min-h-[50vh] text-white">
        <h1 className="text-[36px] md:text-[54px] leading-[40px] md:leading-[64px] font-sans font-medium">
          CHAPPELL ROAN ONLY WEARS M·A·C
        </h1>
        <p className="text-[16px] leading-[19px] font-normal">
          Never miss a beat from our Global Brand Ambassador. Stay up to date on
          Chappell Roan’s latest looks and most viral M·A·C moments.
        </p>
      </div>
      <div className="-mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 py-6 flex flex-col items-center justify-center text-center md:text-left bg-white text-black">
        <h2 className="text-[28px] md:text-[36px] leading-[32px] md:leading-[40px] font-sans font-normal">
          HOW TO GET CHAPPELL ROAN’S RED-CARPET LOOK
        </h2>
        <p className="max-w-4xl text-[13px] md:text-[16px] leading-[22px] md:leading-[30px] font-sans">
          Our M·A·C Global Brand Ambassador serves ‘medieval Mugler fantasy’ on
          the red carpet of Music’s Biggest Night with a soft smoky eye look,
          shimmering liner and a nude red lip combo by Makeup Artist Andrew
          Dahling. “We wanted the look to be sultry, smoky and give a little 90s
          to honour the era this custom look was inspired by. The taupe smoky
          eye with a touch of shimmering liner and a lip combo I’m calling a
          nude red lip,” shares Dahling.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 -mx-4 sm:-mx-8 md:-mx-12 lg:-mx-16 bg-white py-6">
        <img
          src={img}
          alt="images"
          className="px-2 md:pl-4 w-full h-96 object-cover"
        />
        <div className="flex flex-col items-start gap-2 bg-white px-2 md:pr-4">
          <div className="w-full flex items-center justify-between py-4 md:py-0">
            <h3 className="text-[24px] leading-[28px] font-sans font-medium">
              GET CHAPPELL’S RED-CARPET LOOK
            </h3>
            <div className="flex items-center gap-3">
              <FaArrowLeft
                size={24}
                onClick={prevSlide}
                className="cursor-pointer"
              />
              <FaArrowRight
                size={24}
                onClick={nextSlide}
                className="cursor-pointer"
              />
            </div>
          </div>
          <div className="flex gap-2 overflow-x-hidden">
            {products.slice(currentIndex, currentIndex + 2).map((prod) => {
              return (
                <div
                  key={prod.id}
                  className="flex w-full md:w-[370px] h-auto flex-col items-center gap-3 bg-[#f9f9f9] p-4"
                >
                  <img
                    src={prod.image}
                    alt="product"
                    className="max-w-full max-h-40 object-contain"
                  />
                  <span className="text-[18px] font-bold">${prod.price}</span>
                  {/* Fixed button logic below */}
                  <Button onClick={() => handleAddToCart(prod)}>
                    Add To Cart
                  </Button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};

export default Chappell;
