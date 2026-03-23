'use client';

import { useState, useSyncExternalStore } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

const emptySubscribe = () => () => {};

export default function TermsPage() {
  const t = useTranslations('terms');
  const sections = t.raw('sections') as { title: string; content: string }[];

  const [expandedSections, setExpandedSections] = useState<number[]>([]);
  const mounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );

  const toggleSection = (index: number) => {
    setExpandedSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-primary mb-8 text-3xl font-bold">{t('title')}</h1>
        <div className="text-primary mb-6 text-sm">
          <span>{t('lastModified')} </span>
          {mounted && <span>5/11/2024</span>}
        </div>

        <div className="overflow-hidden shadow sm:rounded-lg">
          {sections.map((section, index) => (
            <div key={index} className="border-t border-gray-200">
              <button
                data-testid={`section-toggle-${index}`}
                onClick={() => toggleSection(index)}
                aria-expanded={expandedSections.includes(index)}
                aria-controls={`section-panel-${index}`}
                id={`section-toggle-${index}`}
                className="flex w-full items-center justify-between px-4 py-5 text-left sm:px-6"
              >
                <h3 className="text-primary text-lg leading-6 font-medium">
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
                  id={`section-panel-${index}`}
                  role="region"
                  aria-labelledby={`section-toggle-${index}`}
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

        <div className="text-primary mt-8 text-sm">
          <span>{t('lastUpdated')} </span>
          {mounted && <span>5/11/2024</span>}
        </div>
      </div>
    </main>
  );
}
