import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.sheetbest.com/sheets/c19b987a-ee67-406e-965b-3d976b78d481")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <main className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6">🛍️ உங்கள் கடை</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((item, index) => (
            <div key={index} className="bg-white rounded-xl p-4 shadow hover:shadow-lg transition">
              <img
                src={item.ImageURL}
                alt={item.ProductName}
                className="w-full h-48 object-cover rounded-md mb-3"
              />
              <h2 className="text-lg font-bold text-gray-800">{item.ProductName}</h2>
              <p className="text-sm text-gray-600 mb-1">{item.Description}</p>
              <p className="text-green-600 font-semibold text-base mb-2">
                விலை: ₹{item.OurSellingPrice}
              </p>
              <a
                href={`https://wa.me/919600210429?text=${encodeURIComponent(
                  `வணக்கம், நான் '${item.ProductName}' வாங்க விரும்புகிறேன்.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                🛒 WhatsApp-ல வாங்குறேன்
              </a>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
