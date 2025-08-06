'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const DroneEngineeringPage = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Drone Engineering Course</h1>
        <p className="text-gray-600 text-lg mb-8">
          Learn drone design, programming, and autonomous flight systems. 
          Build and program your own drones with expert guidance and hands-on experience.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Design & Build</h3>
            <p className="text-gray-600">Learn drone mechanics and assembly</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Flight Programming</h3>
            <p className="text-gray-600">Program autonomous flight systems</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Advanced Controls</h3>
            <p className="text-gray-600">Master advanced flight control algorithms</p>
          </div>
        </div>
        <button 
          onClick={() => router.back()} 
          className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors mt-8 mx-auto"
        >
          <span className="mr-2">←</span>
          Go Back
        </button>
      </div>
    </div>
  );
}

export default DroneEngineeringPage;