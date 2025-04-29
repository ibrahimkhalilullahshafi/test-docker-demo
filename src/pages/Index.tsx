
import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import DockerStats from '@/components/DockerStats';
import ContainerCard from '@/components/ContainerCard';
import CreateContainerForm from '@/components/CreateContainerForm';
import DockerAnimation from '@/components/DockerAnimation';
import { Separator } from '@/components/ui/separator';

interface Container {
  id: string;
  name: string;
  image: string;
  status: 'running' | 'stopped' | 'paused';
  ports: string;
  createdAt: string;
}

const Index = () => {
  const [containers, setContainers] = useState<Container[]>([
    {
      id: 'd3493fa293ef',
      name: 'nginx-web',
      image: 'nginx:latest',
      status: 'running',
      ports: '80:80',
      createdAt: '2 hours ago'
    },
    {
      id: 'a783dc4e9278',
      name: 'mongodb',
      image: 'mongo:4.4',
      status: 'running',
      ports: '27017:27017',
      createdAt: '3 days ago'
    },
    {
      id: 'f92c1e4b67d1',
      name: 'redis-cache',
      image: 'redis:alpine',
      status: 'stopped',
      ports: '6379:6379',
      createdAt: '5 days ago'
    },
    {
      id: 'b21a98c7d54f',
      name: 'postgres-db',
      image: 'postgres:13',
      status: 'paused',
      ports: '5432:5432',
      createdAt: '1 week ago'
    }
  ]);

  const handleCreateContainer = (containerData: { name: string; image: string; ports: string; }) => {
    const newContainer: Container = {
      id: generateRandomId(),
      name: containerData.name,
      image: containerData.image,
      status: 'running',
      ports: containerData.ports || 'none',
      createdAt: 'Just now'
    };

    setContainers([newContainer, ...containers]);
  };

  const generateRandomId = () => {
    return Math.random().toString(16).substring(2, 12);
  };

  // Calculate stats
  const runningContainers = containers.filter(c => c.status === 'running').length;
  const totalContainers = containers.length;
  const cpuUsage = Math.floor(Math.random() * 30) + 10; // Random between 10-40%
  const memoryUsage = Math.floor(Math.random() * 50) + 20; // Random between 20-70%

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-6 py-8">
          <DockerAnimation />
          
          <Separator className="my-8" />
          
          <h2 className="text-2xl font-bold mb-6">Docker Dashboard</h2>
          <DockerStats 
            runningContainers={runningContainers} 
            totalContainers={totalContainers}
            cpuUsage={cpuUsage}
            memoryUsage={memoryUsage}
          />
          
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h3 className="text-xl font-bold mb-4">Containers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {containers.map((container) => (
                  <ContainerCard
                    key={container.id}
                    id={container.id}
                    name={container.name}
                    image={container.image}
                    status={container.status}
                    ports={container.ports}
                    createdAt={container.createdAt}
                  />
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Actions</h3>
              <CreateContainerForm onCreateContainer={handleCreateContainer} />
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
