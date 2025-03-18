import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function AdminDashboard() {
  const [activeSection, setActiveSection] = useState('products');
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (itemName) => {
    setCart([...cart, itemName]);
  };

  const placeOrder = () => {
    alert('Order placed successfully!');
    setCart([]);
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold">Admin Panel</h2>
        <ul className="mt-4 space-y-2">
          <li><button onClick={() => setActiveSection('products')} className="w-full text-left p-2 hover:text-green-500">View Products</button></li>
          <li><button onClick={() => setActiveSection('cart')} className="w-full text-left p-2 hover:text-green-500">Cart</button></li>
          <li><button onClick={() => setActiveSection('orders')} className="w-full text-left p-2 hover:text-green-500">My Orders</button></li>
          <li><button onClick={() => setActiveSection('profile')} className="w-full text-left p-2 hover:text-green-500">My Profile</button></li>
          <li><button onClick={() => navigate('/')} className="w-full text-left p-2 hover:text-red-500">Logout</button></li>
        </ul>
      </aside>
      <main className="flex-grow p-5">
        {activeSection === 'products' && (
          <section className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Products</h2>
            <div className="grid gap-4 mt-4">
              <div className="border p-4 rounded">
                <h3>Item Name</h3>
                <p>Price: $10</p>
                <button onClick={() => addToCart('Item Name')} className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Add to Cart</button>
              </div>
            </div>
          </section>
        )}
        {activeSection === 'cart' && (
          <section className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">My Cart</h2>
            <div className="mt-4">
              {cart.map((item, index) => (
                <div key={index}>{item} - Added to Cart</div>
              ))}
            </div>
            <button onClick={placeOrder} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Place Order</button>
          </section>
        )}
      </main>
    </div>
  );
}

export default AdminDashboard;