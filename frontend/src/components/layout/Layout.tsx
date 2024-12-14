// Main layout component that provides consistent structure across pages
import { ReactNode } from 'react';
import { Navbar } from './Navbar';

// Props interface for Layout component
interface LayoutProps {
  children: ReactNode;
}

// Layout component wraps all pages with consistent header and structure
export const Layout = ({ children }: LayoutProps) => {
  return (
    // Main container with dark theme and full height
    <div className="min-h-screen bg-black text-white">
      {/* Navigation bar fixed at the top */}
      <Navbar />
      {/* Main content area with padding for fixed navbar */}
      <main className="pt-16">
        {children}
      </main>
    </div>
  );
};
