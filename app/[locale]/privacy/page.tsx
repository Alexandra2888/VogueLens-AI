'use client';

import { useTranslations } from 'next-intl';
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
  const t = useTranslations('privacy');

  return (
    <div className="screen container mx-auto flex flex-col items-center justify-center px-4 py-24">
      <Card>
        <CardHeader>
          <CardTitle className="text-primary text-3xl font-bold">
            {t('title')}
          </CardTitle>
          <CardDescription>{t('version')}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-primary mb-4">{t('intro')}</p>
          <p className="text-primary mb-4">{t('scope')}</p>

          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="personal-data">
              <AccordionTrigger className="text-primary">
                {t('sections.personalData.trigger')}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-primary">{t('sections.personalData.p1')}</p>
                <p className="text-primary">{t('sections.personalData.p2')}</p>
                <p className="text-primary">{t('sections.personalData.p3')}</p>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="service-data">
              <AccordionTrigger className="text-primary">
                {t('sections.serviceData.trigger')}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-primary">{t('sections.serviceData.p1')}</p>
                <ul className="text-primary mt-2 list-disc pl-6">
                  <li>{t('sections.serviceData.li1')}</li>
                </ul>
                <p className="text-primary mt-2">
                  {t('sections.serviceData.format')}
                </p>
                <p>{t('sections.serviceData.example')}</p>
                <pre className="text-primary mt-2 rounded p-2">
                  {`{
  uuid: "fca341b8-b7bf-4374-8294-99e86d9930f9",
  clients: 123
}`}
                </pre>
                <ul className="text-primary mt-2 list-disc pl-6">
                  <li>{t('sections.serviceData.li2')}</li>
                  <li>{t('sections.serviceData.li3')}</li>
                </ul>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="user-auth">
              <AccordionTrigger className="text-primary">
                {t('sections.userAuth.trigger')}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-primary">{t('sections.userAuth.p1')}</p>
                <p className="text-primary">{t('sections.userAuth.p2')}</p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="text-primary mt-6">{t('contact')}</p>
        </CardContent>
      </Card>
    </div>
  );
}
