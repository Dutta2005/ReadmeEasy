import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, FileText } from 'lucide-react';

interface FormData {
  title: string;
  description: string;
  usage: string;
  author: string;
  technologies: string;
  contact: string;
}

interface ReadmeFormProps {
  onBack: () => void;
  onGenerate: (data: FormData) => void;
}

const ReadmeForm: React.FC<ReadmeFormProps> = ({ onBack, onGenerate }) => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    description: '',
    usage: '',
    author: '',
    technologies: '',
    contact: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onGenerate(formData);
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Home
        </Button>

        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="h-6 w-6 mr-2" />
              Generate README
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title">Project Title *</Label>
                <Input
                  id="title"
                  value={formData.title}
                  onChange={(e) => handleInputChange('title', e.target.value)}
                  placeholder="My Awesome Project"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Project Description *</Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  placeholder="A brief description of what your project does and its purpose..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="usage">Usage Steps *</Label>
                <Textarea
                  id="usage"
                  value={formData.usage}
                  onChange={(e) => handleInputChange('usage', e.target.value)}
                  placeholder="1. Clone the repository&#10;2. Install dependencies&#10;3. Run the application..."
                  rows={4}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="author">Author Name *</Label>
                <Input
                  id="author"
                  value={formData.author}
                  onChange={(e) => handleInputChange('author', e.target.value)}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="technologies">Technologies Used *</Label>
                <Input
                  id="technologies"
                  value={formData.technologies}
                  onChange={(e) => handleInputChange('technologies', e.target.value)}
                  placeholder="React, Node.js, TypeScript, MongoDB"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact">Contact Information</Label>
                <Input
                  id="contact"
                  value={formData.contact}
                  onChange={(e) => handleInputChange('contact', e.target.value)}
                  placeholder="LinkedIn: https://linkedin.com/in/username, Email: john@example.com"
                />
              </div>

              <Button type="submit" className="w-full">
                Generate README
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ReadmeForm;