"use client";

import React from "react";
import MarkdownEditor from "./MarkdownEditor";
import ReadmePreview from "./ReadmePreview";
import { ReadmeProps } from "@/types/props";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const ReadmeContainer: React.FC<ReadmeProps> = ({ onBack, readme, setReadme }) => {
  return (
    <div className="min-h-screen px-4 py-8 md:px-10 bg-muted">
      <Button
          variant="ghost"
          onClick={onBack}
          className="mb-6"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Readme form
        </Button>
      <Card className="p-4 shadow-xl">
        <CardHeader className="pb-2">
          <CardTitle className="text-2xl text-center">README Editor & Preview</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="pt-6">
          <div className="grid lg:grid-cols-2 gap-6">
            <MarkdownEditor readme={readme} setReadme={setReadme} />
            <ReadmePreview readme={readme} />
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReadmeContainer;
