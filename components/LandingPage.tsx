import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Zap, Users, Github } from 'lucide-react';

interface LandingPageProps {
  onGetStarted: () => void;
}

const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Readme<span className="text-blue-600">Easy</span>
          </h1>
          <p className="text-xl text-gray-600 mb-2">
            No login, no signup - create professional README files totally free for your projects
          </p>
          <p className="text-lg text-gray-500 mb-8">
            Generate comprehensive documentation in seconds with AI-powered assistance
          </p>
          <Button 
            onClick={onGetStarted}
            size="lg"
            className="px-8 py-3 text-lg"
          >
            Get Started <FileText className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-blue-600" />
              </div>
              <CardTitle>Lightning Fast</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generate professional README files in seconds with AI-powered content generation
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <CardTitle>No Registration</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Start creating immediately without any signup or login requirements
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
                <Github className="h-6 w-6 text-purple-600" />
              </div>
              <CardTitle>GitHub Ready</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Generated README files are optimized for GitHub and other platforms
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Features Included
          </h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Comprehensive Structure</h3>
              <p className="text-gray-600">Project title, description, tech stack, features, and getting started guide</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Smart Environment Detection</h3>
              <p className="text-gray-600">Automatically detects if .env configuration is needed based on your tech stack</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Contributors Guide</h3>
              <p className="text-gray-600">Includes contribution guidelines and MIT license template</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="font-semibold text-lg mb-2">Live Preview</h3>
              <p className="text-gray-600">See your README in real-time as it&apos;s generated</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;