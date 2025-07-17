'use client';

import React, { useState } from 'react';
import LandingPage from '@/components/LandingPage';
import ReadmeForm from '@/components/ReadmeForm';
import LoadingPage from '@/components/Loading';
import Footer from '@/components/Footer';
import ReadmeContainer from '@/components/ReadmeContainer';

type Page = 'landing' | 'form' | 'loading' | 'preview';

interface FormData {
  title: string;
  description: string;
  usage: string;
  author: string;
  technologies: string;
  contact: string;
}

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState<Page>('landing');
  const [generatedReadme, setGeneratedReadme] = useState<string>('');

  const handleGenerateReadme = async (formData: FormData) => {
    setCurrentPage('loading');

    try {
      const response = await fetch('/api/generate-readme', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to generate README');
      }

      const data = await response.json();
      setGeneratedReadme(data.readme);
      setCurrentPage('preview');
    } catch (error) {
      console.error('Error generating README:', error);
      setCurrentPage('form');
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'landing':
        return <LandingPage onGetStarted={() => setCurrentPage('form')} />;
      case 'form':
        return (
          <ReadmeForm
            onBack={() => setCurrentPage('landing')}
            onGenerate={handleGenerateReadme}
          />
        );
      case 'loading':
        return <LoadingPage />;
      case 'preview':
        return (
          <ReadmeContainer 
            onBack={() => setCurrentPage('form')}
            readme={generatedReadme}
            setReadme={setGeneratedReadme}
          />
        );
      default:
        return <LandingPage onGetStarted={() => setCurrentPage('form')} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">{renderCurrentPage()}</main>
      <Footer />
    </div>
  );
}
