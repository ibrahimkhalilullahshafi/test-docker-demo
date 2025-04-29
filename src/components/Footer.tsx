
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 py-6 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm text-gray-600">
              © {new Date().getFullYear()} Docker Test App - Built with React
            </p>
          </div>
          <div className="flex space-x-4">
            <a 
              href="https://docs.docker.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-docker-blue hover:text-docker-lightBlue"
            >
              Docker Docs
            </a>
            <a 
              href="https://hub.docker.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-docker-blue hover:text-docker-lightBlue"
            >
              Docker Hub
            </a>
            <a 
              href="https://www.docker.com/products/docker-desktop/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-docker-blue hover:text-docker-lightBlue"
            >
              Docker Desktop
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
