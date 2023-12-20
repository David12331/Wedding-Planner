import { useState } from 'react';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('ourStory');

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <>
      <header>
        <h1>Wedding Planner</h1>
      </header>

      <nav>
        <ul>
          <li
            className={activeSection === 'ourStory' ? 'active' : ''}
            onClick={() => handleSectionChange('ourStory')}
          >
            Our Story
          </li>
          <li
            className={activeSection === 'location' ? 'active' : ''}
            onClick={() => handleSectionChange('location')}
          >
            Location
          </li>
          <li
            className={activeSection === 'weather' ? 'active' : ''}
            onClick={() => handleSectionChange('weather')}
          >
            Weather
          </li>
        </ul>
      </nav>

      <main>
        {/* Content for each section goes here */}
        {activeSection === 'ourStory' && <p>Our love story...</p>}
        {activeSection === 'location' && <p>Details about the location...</p>}
        {activeSection === 'weather' && <p>Weather information...</p>}
      </main>
    </>
  );
}

export default App;