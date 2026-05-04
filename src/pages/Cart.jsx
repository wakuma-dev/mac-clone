import React, { useContext } from "react";
import { CartContext } from "../context/CartProvider";
import { Button } from "../components/ui/Button";

const Cart = () => {
  // Assuming your context also has a 'decrementQuantity' function
  const { cart, removeFromCart, addToCart, decrementQuantity } =
    useContext(CartContext);

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * (item.quantity || 1),
    0,
  );

  if (cart.length === 0) {
    return (
      <main className="px-4 sm:px-8 md:px-12 lg:px-16 py-10 min-h-[60vh] flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold mb-4 text-black">Your Cart</h1>
        <p className="text-gray-500">Your cart is currently empty.</p>
      </main>
    );
  }

  return (
    <main className="px-4 sm:px-8 md:px-12 lg:px-16 py-10">
      <h1 className="text-3xl font-semibold mb-8">Your Cart</h1>

      <div className="flex flex-col gap-6">
        {cart.map((item) => (
          <div
            key={item.id}
            className="flex flex-col sm:flex-row items-center justify-between border p-4 rounded-lg bg-white shadow-sm"
          >
            {/* Left: Image and Info */}
            <div className="flex items-center gap-6 w-full sm:w-auto">
              <img
                src={item.image}
                alt={`Product ${item.id}`}
                className="w-24 h-24 object-contain bg-[#f9f9f9] rounded-md border"
              />

              <div>
                <h2 className="text-lg font-bold">Product {item.id}</h2>
                <p className="text-gray-600 font-medium">
                  ${item.price.toFixed(2)}
                </p>
                <div className="flex items-center gap-2 mt-2">
                  {/* Optional: Add - and + buttons for better UX */}
                  <button
                    onClick={() => decrementQuantity(item.id)}
                    className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                  >
                    -
                  </button>
                  <span className="font-semibold">{item.quantity || 1}</span>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-8 h-8 flex items-center justify-center border rounded-full hover:bg-gray-100"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>

            {/* Right: Actions */}
            <div className="flex items-center gap-4 mt-4 sm:mt-0">
              <div className="text-right mr-4 hidden sm:block">
                <p className="text-sm text-gray-400">Subtotal</p>
                <p className="font-bold">
                  ${(item.price * (item.quantity || 1)).toFixed(2)}
                </p>
              </div>
              <Button
                variant="destructive"
                onClick={() => removeFromCart(item.id)}
                className="bg-red-50 text-red-600 hover:bg-red-100 border-none"
              >
                Remove
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer: Total and Checkout */}
      <div className="mt-10 pt-6 border-t border-gray-100 flex flex-col items-end gap-4">
        <div className="flex gap-10 items-center">
          <span className="text-gray-500 text-lg">Total Amount:</span>
          <h2 className="text-3xl font-bold text-black">
            ${totalPrice.toFixed(2)}
          </h2>
        </div>
        <Button className="px-10 py-6 text-lg uppercase tracking-widest">
          Checkout
        </Button>
      </div>
    </main>
  );
};

export default Cart;
