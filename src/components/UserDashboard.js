import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserDashboard() {
  const [activeSection, setActiveSection] = useState('upload');
  const navigate = useNavigate();

  const handleUpload = (e) => {
    e.preventDefault();
    alert('Product uploaded successfully!');
    e.target.reset();
  };

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-5">
        <h2 className="text-xl font-bold">User Panel</h2>
        <ul className="mt-4 space-y-2">
          <li><button onClick={() => setActiveSection('upload')} className="w-full text-left p-2 hover:text-green-500">Upload Product</button></li>
          <li><button onClick={() => setActiveSection('orders')} className="w-full text-left p-2 hover:text-green-500">View Orders</button></li>
          <li><button onClick={() => navigate('/')} className="w-full text-left p-2 hover:text-red-500">Logout</button></li>
        </ul>
      </aside>
      <main className="flex-grow p-5">
        {activeSection === 'upload' && (
          <section className="bg-white p-5 rounded-lg shadow">
            <h2 className="text-lg font-semibold">Upload Product</h2>
            <form onSubmit={handleUpload} className="space-y-3">
              <input type="text" placeholder="Product Name" required className="w-full p-2 border rounded" />
              <input type="number" placeholder="Price" required className="w-full p-2 border rounded" />
              <textarea placeholder="Description" required className="w-full p-2 border rounded"></textarea>
              <input type="file" accept="image/*" required className="w-full p-2 border rounded" />
              <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">Upload</button>
            </form>
          </section>
        )}
      </main>
    </div>
  );
}

export default UserDashboard;
