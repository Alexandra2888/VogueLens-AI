'use client';

import { useState, useEffect } from 'react';
import { ChevronDownIcon, ChevronUpIcon } from 'lucide-react';

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

  const sections = [
    {
      title: '1. Contracting Parties',
      content:
        'VogueStyle AI (hereinafter "Service Provider", "we", "us", or "our") and the User of the VogueStyle AI application (hereinafter "User", "you", or "your").',
    },
    {
      title: '2. Agreement to Terms',
      content:
        'By accessing or using the VogueStyle AI application, you agree to be bound by these Terms and Conditions. If you disagree with any part of these terms, you may not access the service.',
    },
    {
      title: '3. Service Description',
      content:
        'VogueStyle AI is an artificial intelligence-powered fashion application that provides [brief description of your main services].',
    },
    {
      title: '4. User Rights and Obligations',
      content: `4.1. Users must provide accurate and complete information when using the service.
4.2. Users are responsible for maintaining the confidentiality of their account credentials.
4.3. Users must not use the service for any illegal or unauthorized purpose.
4.4. Users retain ownership of their content but grant us a license to use it for service improvement.`,
    },
    {
      title: '5. Service Provider Rights and Obligations',
      content: `5.1. We strive to maintain service availability but cannot guarantee uninterrupted access.
5.2. We reserve the right to modify or discontinue the service with reasonable notice.
5.3. We will protect user privacy according to our Privacy Policy.
5.4. We may collect anonymous usage data to improve our services.`,
    },
    {
      title: '6. Data Protection and Privacy',
      content: `6.1. We process personal data in accordance with applicable privacy laws.
6.2. For detailed information about data processing, please refer to our Privacy Policy.`,
    },
    {
      title: '7. Intellectual Property',
      content: `7.1. The VogueStyle AI application, including its original content and features, is owned by us and protected by copyright laws.
7.2. Users may not copy, modify, or reverse engineer any part of the service.`,
    },
    {
      title: '8. Limitation of Liability',
      content: `8.1. The service is provided "as is" without any warranties.
8.2. We shall not be liable for any indirect, incidental, or consequential damages.
8.3. We are not responsible for user-generated content or third-party links.`,
    },
    {
      title: '9. Modifications to Terms',
      content: `9.1. We reserve the right to modify these terms at any time.
9.2. Users will be notified of significant changes via email or app notification.
9.3. Continued use of the service after changes constitutes acceptance.`,
    },
    {
      title: '10. Termination',
      content: `10.1. Users may terminate their account at any time.
10.2. We may terminate or suspend access to the service immediately without notice for violations of these terms.`,
    },
    {
      title: '11. Governing Law',
      content:
        'These terms shall be governed by and construed in accordance with the laws of [Your Country], without regard to its conflict of law provisions.',
    },
    {
      title: '12. Contact Information',
      content: `For any questions about these Terms and Conditions, please contact us at:
Email: [moldovan.alexandra28@gmail.com]`,
    },
  ];

  return (
      <main className="flex min-h-screen items-center justify-center px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h1
            data-testid="terms-title"
            className="mb-8 text-3xl font-bold text-primary"
          >
            Terms and Conditions for VogueStyle AI
          </h1>
          <div
            data-testid="last-modified"
            className="mb-6 text-sm text-primary"
          >
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
                    className="text-lg font-medium leading-6 text-primary"
                  >
                    {section.title}
                  </h3>
                  {expandedSections.includes(index) ? (
                    <ChevronUpIcon className="h-5 w-5 text-primary" />
                  ) : (
                    <ChevronDownIcon className="h-5 w-5 text-primary" />
                  )}
                </button>
                {expandedSections.includes(index) && (
                  <div
                    data-testid={`section-content-${index}`}
                    className="px-4 py-5 sm:px-6"
                  >
                    <p className="whitespace-pre-wrap text-sm text-primary">
                      {section.content}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div data-testid="last-updated" className="mt-8 text-sm text-primary">
            <span>Last Updated: </span>
            {mounted && <span>5/11/2024</span>}
          </div>
        </div>
      </main>
  );
}
