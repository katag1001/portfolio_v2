import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

import SideNav from './components/SideNav';

import Home from './pages/Home';

function App() {
  return (
    <Router>
      <SideNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
