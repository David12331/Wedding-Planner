import React from 'react';

const HomePage = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
      <h1 style={{ marginBottom: '20px' }}>Our Story</h1>
      <img 
        src="/path-to-your-image.jpg" 
        alt="David and Sara" 
        style={{ width: '80%', height: 'auto', marginBottom: '20px' }} 
      />
      <div style={{ width: '80%' }}>
        <h2>DAVID AND SARA</h2>
        <p>
          On Friday, November 3rd, hanging out with mutual friends David and Sara met for the first time...
         
        </p>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
          <button style={{ padding: '10px 20px' }}>Previous</button>
          <button style={{ padding: '10px 20px' }}>Next</button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;