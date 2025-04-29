
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="bg-docker-blue text-white shadow-md">
      <div className="container mx-auto py-4 px-6 flex items-center justify-between">
        <div className="flex items-center">
          <div className="mr-4">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13 5.5H11V7.5H13V5.5Z" fill="white" />
              <path d="M13 8.5H11V10.5H13V8.5Z" fill="white" />
              <path d="M10 8.5H8V10.5H10V8.5Z" fill="white" />
              <path d="M7 8.5H5V10.5H7V8.5Z" fill="white" />
              <path d="M10 5.5H8V7.5H10V5.5Z" fill="white" />
              <path d="M7 5.5H5V7.5H7V5.5Z" fill="white" />
              <path d="M16 5.5H14V7.5H16V5.5Z" fill="white" />
              <path d="M16 8.5H14V10.5H16V8.5Z" fill="white" />
              <path d="M19 8.5H17V10.5H19V8.5Z" fill="white" />
              <path d="M13.1 11.5H10.9C10.4 11.5 10 11.9 10 12.4C10 12.8 10.1 13.1 10.3 13.4C10.8 14 11.6 14.5 12.1 14.6C12.2 14.7 12.3 14.7 12.3 14.7C12.5 14.7 12.7 14.7 12.9 14.6C13.4 14.5 14.1 14 14.6 13.4C14.8 13.1 14.9 12.8 14.9 12.4C14.9 11.9 14.5 11.5 14 11.5H13.9H13.1Z" fill="white" />
              <path d="M19.9 10.9C19.7 10.7 19.4 10.6 19.1 10.6H19V10.5C19 9.7 18.3 9 17.5 9H17V8.9C17 8.1 16.3 7.4 15.5 7.4C15.4 7.4 15.4 7.4 15.3 7.4C15.1 6.7 14.5 6.2 13.8 6.1C13.6 6.1 13.5 6.1 13.3 6.1C12.9 6.1 12.5 6.2 12.2 6.5L12 6.7L11.8 6.5C11.5 6.2 11.1 6.1 10.7 6.1C10.5 6.1 10.4 6.1 10.2 6.1C9.49999 6.2 8.89999 6.7 8.69999 7.4C8.59999 7.4 8.59999 7.4 8.49999 7.4C7.69999 7.4 6.99999 8.1 6.99999 8.9V9H6.49999C5.69999 9 4.99999 9.7 4.99999 10.5V10.6H4.89999C4.49999 10.6 4.09999 10.8 3.89999 11.2C3.69999 11.5 3.59999 11.8 3.69999 12.2C3.79999 13.3 4.49999 14.5 5.29999 15.2C6.09999 16 7.09999 16.4 8.09999 16.4C11.3 16.4 14.1 14.2 15.4 13C15.5 12.9 15.7 12.8 15.8 12.7H19.1C19.4 12.7 19.7 12.6 19.9 12.4C20.1 12.2 20.2 11.9 20.2 11.6C20.2 11.4 20.1 11.1 19.9 10.9Z" fill="white" />
            </svg>
          </div>
          <h1 className="text-2xl font-bold">Docker Tester</h1>
        </div>
        <Button variant="outline" className="bg-transparent border-white hover:bg-white/10">
          <Menu className="h-5 w-5" />
          <span className="ml-2">Menu</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
