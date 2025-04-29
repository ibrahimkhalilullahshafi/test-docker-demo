
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

const CreateContainerForm: React.FC<{
  onCreateContainer: (containerData: {
    name: string;
    image: string;
    ports: string;
  }) => void;
}> = ({ onCreateContainer }) => {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [ports, setPorts] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!name || !image) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      onCreateContainer({ name, image, ports });
      toast.success('Container created successfully!');
      
      // Reset form
      setName('');
      setImage('');
      setPorts('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-docker-blue">Create New Container</CardTitle>
        <CardDescription>Deploy a new Docker container</CardDescription>
      </CardHeader>
      <form onSubmit={handleSubmit}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Container Name</Label>
            <Input 
              id="name" 
              placeholder="my-container"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input 
              id="image" 
              placeholder="nginx:latest"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="ports">Ports (optional)</Label>
            <Input 
              id="ports" 
              placeholder="8080:80"
              value={ports}
              onChange={(e) => setPorts(e.target.value)}
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button 
            type="submit" 
            className="w-full bg-docker-blue hover:bg-docker-lightBlue"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Creating...' : 'Create Container'}
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default CreateContainerForm;
