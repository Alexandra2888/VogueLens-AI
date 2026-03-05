'use client';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export default function PrivacyPolicy() {
  return (
    <div
      className="screen container mx-auto flex flex-col items-center justify-center px-4 py-24"
      data-testid="privacy-policy-container"
    >
      <Card>
        <CardHeader>
          <CardTitle
            className="text-primary text-3xl font-bold"
            data-testid="privacy-policy-title"
          >
            Privacy Policy
          </CardTitle>
          <CardDescription data-testid="privacy-policy-version">
            Version 1.0 - Last modified on November 5, 2024
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-primary mb-4" data-testid="privacy-policy-intro">
            This document explains how VogueLens AI collects and processes data.
            This policy applies to all data collection and processing activities
            carried out by VogueLens AI.
          </p>
          <p className="text-primary mb-4" data-testid="privacy-policy-scope">
            This document is relevant to you regardless of your position:
            client, partner - individual, representative of a partner - legal
            entity, applicant for an offer, or person contacting us for other
            purposes (e.g., in connection with requests or complaints, internal,
            visitor to our website, etc.)
          </p>

          <Accordion
            type="single"
            collapsible
            className="w-full"
            data-testid="privacy-policy-accordion"
          >
            <AccordionItem
              value="personal-data"
              data-testid="personal-data-section"
            >
              <AccordionTrigger className="text-primary">
                Personal Data Collection
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-primary">
                  VogueLens AI confirms that it does NOT collect personal data
                  through the Service.
                </p>
                <p className="text-primary">
                  As VogueLens AI does not collect personal data through the
                  Service, it has no obligation to ensure data protection, as
                  this data is stored on the equipment used by the User to
                  interact with the Service.
                </p>
                <p className="text-primary">
                  Since VogueLens AI does not collect personal data through the
                  Service, personal data protection legislation does not apply.
                </p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem
              value="service-data"
              data-testid="service-data-section"
            >
              <AccordionTrigger className="text-primary">
                Service Data Collection
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-primary">
                  VogueLens AI collects and processes data through the Service
                  each time the User:
                </p>
                <ul className="text-primary mt-2 list-disc pl-6">
                  <li>
                    Adds a Client to the system, the Service collects the number
                    of existing clients in the system;
                  </li>
                </ul>
                <p className="text-primary mt-2">Data format collected: JSON</p>
                <p>Example of collected data:</p>
                <pre
                  className="text-primary mt-2 rounded p-2"
                  data-testid="json-example"
                >
                  {`{
  uuid: "fca341b8-b7bf-4374-8294-99e86d9930f9",
  clients: 123
}`}
                </pre>
                <ul className="text-primary mt-2 list-disc pl-6">
                  <li>
                    uuid represents a randomly generated string used to group
                    and aggregate collected data;
                  </li>
                  <li>
                    clients represents the number of existing clients in the
                    system;
                  </li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="user-auth" data-testid="user-auth-section">
              <AccordionTrigger className="text-primary">
                User Authentication and Image Storage
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-primary">
                  VogueLens AI uses Clerk for user authentication.
                </p>
                <p className="text-primary">
                  We store a maximum of 3 images per user, which are stored in
                  our web API for only 24 hours.
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="text-primary mt-6" data-testid="contact-info">
            For any questions or concerns regarding this privacy policy, please
            contact us at moldovan.alexandra28@gmail.com.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
