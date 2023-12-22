import React from 'react';

const Registry = () => {
  const sampleGifts = [
    { id: 1, name: 'Cookware Set', price: '$150.00', link: '#' },
    { id: 2, name: 'Bedding Collection', price: '$100.00', link: '#' },
    { id: 3, name: 'Smart Home Devices', price: '$200.00', link: '#' },
    { id: 4, name: 'Dinnerware Set', price: '$80.00', link: '#' },
    { id: 5, name: 'Coffee Maker', price: '$50.00', link: '#' },
    { id: 6, name: 'Outdoor Grill', price: '$250.00', link: '#' },
    { id: 7, name: 'Robotic Vacuum Cleaner', price: '$180.00', link: '#' },
  ];

  return (
    <div className="mt-10">
      <h1 className="text-4xl font-bold mb-6">Registry</h1>
      <p className="mb-4">
        Your presence at our wedding is the greatest gift of all. However, if you wish to give a gift,
        we have created a registry to make it convenient for you. Browse our selection of thoughtful gifts
        below, and thank you for celebrating this special day with us!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sampleGifts.map((gift) => (
          <div key={gift.id} className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-lg font-bold">{gift.name}</h2>
            <p className="text-gray-600">{gift.price}</p>
            <a href={gift.link} target="_blank" rel="noopener noreferrer" className="mt-2 block px-4 py-2 bg-blue-500 text-white text-center">
              Open Link
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Registry;