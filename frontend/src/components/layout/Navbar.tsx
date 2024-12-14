// Navigation bar component with responsive design
import { Link } from 'react-router-dom';

// Navigation item type definition
interface NavItem {
  label: string;
  href: string;
}

// Navigation menu items configuration
const navItems: NavItem[] = [
  { label: 'OVERVIEW', href: '/' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'PRODUCT', href: '/product' },
];

// Navbar component with hover effects and responsive design
export const Navbar = () => {
  return (
    // Fixed header with blur effect and dark background
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-sm">
      {/* Navigation container with responsive padding */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo link */}
        <Link to="/" className="nav-link text-white text-2xl font-bold">
          WAVLE
        </Link>

        {/* Navigation links container */}
        <div className="flex items-center space-x-8">
          {/* Map through navigation items */}
          {navItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
              className="nav-link text-white text-lg font-medium"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};
