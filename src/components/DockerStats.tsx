
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface DockerStatsProps {
  runningContainers: number;
  totalContainers: number;
  cpuUsage: number;
  memoryUsage: number;
}

const DockerStats: React.FC<DockerStatsProps> = ({
  runningContainers,
  totalContainers,
  cpuUsage,
  memoryUsage,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      <Card className="border-l-4 border-l-docker-blue">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Running Containers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{runningContainers} / {totalContainers}</div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-green-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">CPU Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{cpuUsage}%</div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div 
              className="h-full bg-green-500 rounded-full" 
              style={{ width: `${cpuUsage}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-blue-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Memory Usage</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{memoryUsage}%</div>
          <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
            <div 
              className="h-full bg-blue-500 rounded-full" 
              style={{ width: `${memoryUsage}%` }}
            ></div>
          </div>
        </CardContent>
      </Card>
      
      <Card className="border-l-4 border-l-purple-500">
        <CardHeader className="pb-2">
          <CardTitle className="text-sm font-medium text-gray-500">Docker Version</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">24.0.5</div>
        </CardContent>
      </Card>
    </div>
  );
};

export default DockerStats;
