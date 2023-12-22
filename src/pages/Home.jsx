import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div className="flex flex-col items-center mt-10">
      <h1 className="mb-8 text-3xl font-bold">Our Story</h1>
      <img
        src="/path-to-your-image.jpg"
        alt="David and Sara"
        className="w-4/5 h-auto mb-8"
      />
      <div className="w-4/5">
        <h2 className="text-xl font-bold">DAVID AND SARA</h2>
        <p>
          On Friday, November 3rd, hanging out with mutual friends David and Sara met for the first time.
          They instantly connected over their love for New York City and its vibrant culture.
          The journey of love began, and now they invite you to join them on their special day.
        </p>
        <div className="flex justify-between mt-6">
          <Link to="/location" className="px-4 py-2 bg-blue-500 text-white">Location</Link>
          <Link to="/registry" className="px-4 py-2 bg-blue-500 text-white">Registry</Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;