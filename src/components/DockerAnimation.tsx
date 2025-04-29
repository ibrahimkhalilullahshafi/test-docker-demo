
import React from 'react';

const DockerAnimation: React.FC = () => {
  return (
    <div className="flex justify-center items-center py-8">
      <div className="relative">
        {/* Docker Logo Animation */}
        <div className="w-32 h-24 relative">
          {/* Container stacks - animated */}
          <div className="absolute bottom-0 left-0 w-8 h-8 bg-docker-blue rounded-sm animate-float" style={{animationDelay: '0.1s'}}></div>
          <div className="absolute bottom-0 left-10 w-8 h-8 bg-docker-blue rounded-sm animate-float" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute bottom-0 left-20 w-8 h-8 bg-docker-blue rounded-sm animate-float" style={{animationDelay: '0.5s'}}></div>
          
          <div className="absolute bottom-10 left-0 w-8 h-8 bg-docker-blue rounded-sm animate-float" style={{animationDelay: '0.2s'}}></div>
          <div className="absolute bottom-10 left-10 w-8 h-8 bg-docker-blue rounded-sm animate-float" style={{animationDelay: '0.4s'}}></div>
          <div className="absolute bottom-10 left-20 w-8 h-8 bg-docker-blue rounded-sm animate-float" style={{animationDelay: '0.6s'}}></div>
          
          <div className="absolute bottom-20 left-10 w-8 h-8 bg-docker-blue rounded-sm animate-float" style={{animationDelay: '0.7s'}}></div>
        </div>

        {/* Whale outline */}
        <div className="absolute -bottom-1 -right-2">
          <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="opacity-30">
            <path d="M58 20C58 13 50 0 30 0C10 0 2 13 2 20C2 27 10 40 30 40C50 40 58 27 58 20Z" stroke="#2496ED" strokeWidth="2" fill="none" />
          </svg>
        </div>
      </div>
      
      <div className="ml-6">
        <h2 className="text-2xl font-bold text-docker-blue">Ready to Build, Ship and Run</h2>
        <p className="text-gray-600">Start testing your Docker applications</p>
      </div>
    </div>
  );
};

export default DockerAnimation;
