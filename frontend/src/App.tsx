import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';

// Root application component that provides routing and layout structure
function App() {
  return (
    // Router wrapper for navigation functionality
    <Router>
      {/* Layout component provides consistent structure across pages */}
      <Layout>
        {/* Home page component contains all main sections */}
        <Home />
      </Layout>
    </Router>
  );
}

export default App;
