import React, { useContext } from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/best sellers/1.png";
import img2 from "../../assets/best sellers/2.png";
import img3 from "../../assets/best sellers/3.png";
import img4 from "../../assets/best sellers/4.png";
import img5 from "../../assets/best sellers/5.png";
import img6 from "../../assets/best sellers/6.png";
import img7 from "../../assets/best sellers/7.png";
import img8 from "../../assets/best sellers/8.png";
import img9 from "../../assets/best sellers/9.png";
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
  { id: 7, image: img7, price: 95.45 },
  { id: 8, image: img8, price: 95.45 },
  { id: 9, image: img9, price: 95.45 },
];
const BestSellers = () => {
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();
  const handleAdd = (product) => {
    addToCart(product);
    navigate("/cart");
  };
  return (
    <main className="px-4 sm:px-8 md:px-12 lg:px-16 w-full">
      <div className="-mt-[500px] flex flex-col items-center justify-center gap-3">
        <h1 className="text-[54px] leading-[65px] font-normal font-sans">
          BEST-SELLERS
        </h1>
        <p className="text-[16px] leading-[24px]">Meet the icons.</p>
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
      <div className="py-8 flex flex-col items-center justify-center gap-2 w-full">
        <h3 className="text-center text-[36px] leading-[48px] font-sans font-bold">
          BEST-SELLERS
        </h3>
        <p className="text-[15px] leading-[15px] font-semibold">Learn More</p>
        <hr />
        <div className="max-w-6xl flex flex-col items-start gap-6">
          <h4 className="uppercase text-[20px] leading-[22px]">
            what are favorite m.a.c makeup seller
          </h4>
          <p className="text-[14px] leading-[18px] font-light">
            Explore the best-selling M∙A∙C makeup products that made us famous,
            like the M∙A∙C foundation you made #1 – in powder and liquid
            formulas. Studio Fix Fluid SPF 15 is the ultimate multitasking
            liquid foundation, with medium-to-full buildable coverage that lasts
            24 hours, SPF 15 protection and an oil-controlling matte finish in
            63 all-inclusive shades. Our best-selling, one-step powder and
            foundation, Studio Fix Powder Plus Foundation, wears for up to 12
            hours and creates a smooth, ultra-matte finish.
          </p>
          <p className="text-[14px] leading-[18px] font-light">
            Other eye-catching M∙A∙C makeup best-sellers include Pro Longwear
            Paint Pot and Technakohl Liner that help create countless standout
            looks. And one of the best M∙A∙C makeup products is our iconic Matte
            Lipstick in an array of flattering colours, from subtle neutrals to
            vivid shades. Apply it directly from the tube, dab it on with your
            fingertips or layer it on with a lip brush.
          </p>
        </div>
        <div className="mt-4 flex flex-col max-w-6xl items-start gap-6">
          <h4 className="text-[20px] leading-[22px] uppercase">What are the bes selling M.a.c products</h4>
          <p className="text-[14px] leading-[18px] font-light">
            Fill your beauty bag with basic makeup essentials. Begin with a
            primer makeup – use alone or apply before your foundation for
            smooth, long-lasting coverage. Then find your foundation match from
            our wide range of all-inclusive shades in liquid, powder or stick
            formulas. Blush in a versatile neutral tone can be swirled onto
            cheeks for a natural glow, and you can also use it on your eyes for
            a monochromatic look. Choose the blush hue for you from pretty pinks
            to subtle neutrals. Neutral eye shadows are essential, too. Apply a
            neutral tone for lids, a darker shade in the creases and a lighter,
            brighter shade to highlight your brow bones. Lastly, a M∙A∙C
            Lipstick is always a makeup must-have. Swipe on an everyday nude or
            a more dramatic but always on-trend red.
          </p>
        </div>
      </div>
    </main>
  );
};

export default BestSellers;
