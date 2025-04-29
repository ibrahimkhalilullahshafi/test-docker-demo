
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ContainerCardProps {
  id: string;
  name: string;
  image: string;
  status: 'running' | 'stopped' | 'paused';
  ports: string;
  createdAt: string;
}

const ContainerCard: React.FC<ContainerCardProps> = ({
  id,
  name,
  image,
  status,
  ports,
  createdAt,
}) => {
  const getStatusColor = () => {
    switch (status) {
      case 'running':
        return 'bg-green-500';
      case 'stopped':
        return 'bg-red-500';
      case 'paused':
        return 'bg-yellow-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <Card className="border-2 border-gray-200 hover:border-docker-blue transition-all duration-300">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-lg font-bold truncate">{name}</CardTitle>
          <Badge className={cn("capitalize", getStatusColor())}>
            {status}
          </Badge>
        </div>
        <CardDescription className="text-xs font-mono truncate">{id}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2">
        <div className="space-y-1.5 text-sm">
          <div className="flex justify-between">
            <span className="font-semibold">Image:</span>
            <span className="font-mono">{image}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Ports:</span>
            <span className="font-mono">{ports}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Created:</span>
            <span>{createdAt}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="pt-2 flex gap-2">
        <Button variant="outline" size="sm" className="flex-1">
          {status === 'running' ? 'Stop' : 'Start'}
        </Button>
        <Button variant="destructive" size="sm" className="flex-1">
          Remove
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ContainerCard;
