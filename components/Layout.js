import Head from 'next/head';
import Header from './Header';
import LeftSidebar from './LeftSidebar';
import RightSidebar from './RightSidebar';
import UniversesCard from './UniversesCard';
import { useState } from 'react';

export default function Layout({ children }) {
  const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(true);
  const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col min-h-screen bg-black text-white">
      <Head>
        <title>Boo - Connect with like-minded people</title>
        <meta name="description" content="Boo - Connect with like-minded people" />
        <link rel="icon" href="https://boo.world/icon.png" />
      </Head>

      <Header onMenuToggle={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)} />
      
      {/* Main layout - responsive to sidebar state */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Left Sidebar - responsive width */}
        <div className={`transition-all duration-300 overflow-hidden flex-shrink-0 ${isLeftSidebarOpen ? 'w-64' : 'w-20'}`}>
          <LeftSidebar isOpen={isLeftSidebarOpen} />
        </div>
        
        {/* Content area - responsive to sidebar width */}
        <div className="flex-1 overflow-hidden">
          {/* Scrollable content area */}
          <div className="h-full overflow-y-auto flex bg-black gap-0 justify-center">
            {/* Universes Card - left of main content */}
            <div className="hidden md:flex w-80 p-4 md:p-6 flex-shrink-0 bg-black border-r border-gray-800 overflow-y-auto">
              <UniversesCard />
            </div>

            {/* Main Content - centered with fixed width */}
            <main className="w-full max-w-2xl p-4 md:p-6 overflow-y-auto">
              {children}
            </main>

            {/* Right Sidebar */}
            <div className="hidden xl:flex w-96 flex-shrink-0 overflow-y-auto border-l border-gray-800">
              <RightSidebar isOpen={isRightSidebarOpen} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
