'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

import { sections } from '../../data/data';

export default function Component() {
  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const [mounted, setMounted] = useState(false);

  // Fix: Changed useState to useEffect for mounting
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1
          data-testid="terms-title"
          className="text-primary mb-8 text-3xl font-bold"
        >
          Terms and Conditions for VogueStyle AI
        </h1>
        <div data-testid="last-modified" className="text-primary mb-6 text-sm">
          <span>Last modified: </span>
          {mounted && <span>5/11/2024</span>}
        </div>

        <div
          data-testid="terms-sections"
          className="overflow-hidden shadow sm:rounded-lg"
        >
          {sections.map((section, index) => (
            <div key={index} className="border-t border-gray-200">
              <button
                data-testid={`section-toggle-${index}`}
                onClick={() => toggleSection(index)}
                className="flex w-full items-center justify-between px-4 py-5 text-left sm:px-6"
              >
                <h3
                  data-testid={`section-title-${index}`}
                  className="text-primary text-lg leading-6 font-medium"
                >
                  {section.title}
                </h3>
                {expandedSections.includes(index) ? (
                  <ChevronUpIcon className="text-primary h-5 w-5" />
                ) : (
                  <ChevronDownIcon className="text-primary h-5 w-5" />
                )}
              </button>
              {expandedSections.includes(index) && (
                <div
                  data-testid={`section-content-${index}`}
                  className="px-4 py-5 sm:px-6"
                >
                  <p className="text-primary text-sm whitespace-pre-wrap">
                    {section.content}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div data-testid="last-updated" className="text-primary mt-8 text-sm">
          <span>Last Updated: </span>
          {mounted && <span>5/11/2024</span>}
        </div>
      </div>
    </main>
  );
}
