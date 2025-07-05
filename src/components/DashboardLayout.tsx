import React, { useState } from 'react';
import DashboardNavbar from './DashboardNavbar';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      {/* Single Navbar */}
      <DashboardNavbar onMenuToggle={() => setSidebarOpen(!sidebarOpen)} />
      
      {/* Main Layout */}
      <div className="flex h-[calc(100vh-64px)]">
        {/* Desktop Sidebar - Fixed width, always visible on lg+ */}
        <div className="hidden lg:block lg:w-64 lg:flex-shrink-0">
          <div className="h-full">
            <Sidebar isOpen={true} onClose={() => {}} />
          </div>
        </div>
        
        {/* Mobile Sidebar - Overlay */}
        <div className="lg:hidden">
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
        </div>

        {/* Main Content Area */}
        <div className="flex-1 min-w-0 overflow-auto">
          <div className="h-full p-4 sm:p-6 lg:p-8">
            <div className="max-w-none">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;