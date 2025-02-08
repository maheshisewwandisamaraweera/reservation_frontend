import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import ProfilePage from './components/ProfilePage'; // Your ProfilePage component
import { Button } from '@mui/material';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <Button component={Link} to="/profile" variant="outlined">
            Go to Profile
          </Button>
        </nav>

        <Routes>
          <Route path="/profile" element={<ProfilePage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

