import React from 'react';
import Footer from './components/Footer'; // Make sure the path is correct based on your folder structure

const App: React.FC = () => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Other Components or Content */}
      <Footer />
    </div>
  );
};

export default App;
