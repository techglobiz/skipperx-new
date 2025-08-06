'use client';
import React from "react";

const RobotEngineering = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-6">Robot Engineering Program</h1>
        <p className="text-gray-600 text-lg mb-8">
          Master robotics engineering from basics to advanced autonomous systems. 
          Build intelligent robots and understand AI integration in real-world applications.
        </p>
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Fundamentals</h3>
            <p className="text-gray-600">Learn robotics basics, sensors, and actuators</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">Programming</h3>
            <p className="text-gray-600">Master robot programming and control systems</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-3">AI Integration</h3>
            <p className="text-gray-600">Implement artificial intelligence in robotics</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobotEngineering;
