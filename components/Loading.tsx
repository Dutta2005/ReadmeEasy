import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Loader2, FileText, Sparkles } from 'lucide-react';

const LoadingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <div className="mb-6">
            <div className="relative">
              <FileText className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <Sparkles className="h-6 w-6 text-yellow-500 absolute -top-2 -right-2 animate-pulse" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              Generating README
            </h2>
            <p className="text-gray-600">
              AI is crafting your professional README file...
            </p>
          </div>
          
          <div className="flex items-center justify-center mb-4">
            <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          </div>
          
          <div className="space-y-2 text-sm text-gray-500">
            <p>✨ Analyzing your project details</p>
            <p>🔍 Detecting environment requirements</p>
            <p>📝 Creating comprehensive documentation</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default LoadingPage;