'use client'

import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const Cart = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (product: Product) => {
    const existingItemIndex = cartItems.findIndex((item) => item.product.id === product.id);

    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      const newCartItem: CartItem = {
        product,
        quantity: 1,
      };
      setCartItems([...cartItems, newCartItem]);
    }
  };

  const removeFromCart = (productId: number) => {
    const updatedCartItems = cartItems.filter((item) => item.product.id !== productId);
    setCartItems(updatedCartItems);
  };

  const totalItems = cartItems.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Корзина</h2>
      <div className="grid grid-cols-1 gap-4">
        {/* Додайте тут товари у корзину */}
        {/* Наприклад, мапіть cartItems і рендеріть карточки товарів у корзині */}
        {cartItems.map((item) => (
          <div key={item.product.id} className="border rounded p-2 flex justify-between items-center">
            <div>
              <p className="font-bold">{item.product.name}</p>
              <p>Ціна: ${item.product.price}</p>
              <p>Кількість: {item.quantity}</p>
            </div>
            <button
              className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
              onClick={() => removeFromCart(item.product.id)}
            >
              Видалити
            </button>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <p className="font-bold">Загальна кількість товарів: {totalItems}</p>
        <p className="font-bold">Загальна вартість: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;
