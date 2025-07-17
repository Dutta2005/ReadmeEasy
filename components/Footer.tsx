import React from 'react';
import { Github, Heart } from 'lucide-react';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <span className="text-sm">
              Created with <Heart className="h-4 w-4 text-red-500 inline mx-1 animate-pulse fill-current" /> by{' '}
              <Link href="https://rajdutta.vercel.app" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Raj Dutta</Link>
            </span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-400">
              README Generator © {new Date().getFullYear()}
            </span>
            <Link href="https://github.com/raj-dutta" target="_blank" rel="noopener noreferrer">
              <Github className="h-6 w-6 text-gray-400 hover:text-gray-300 transition-colors duration-300" />
            </Link>
          </div>
        </div>
        
        <div className="mt-4 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>Generate professional README files for your projects - No registration required</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;