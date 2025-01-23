import { useTranslation } from "react-i18next";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const { t } = useTranslation();

  const faqs = [
    {
      question: t('faq.questions.digital_transformation'),
      answer: t('faq.answers.digital_transformation'),
    },
    {
      question: t('faq.questions.api_access'),
      answer: t('faq.answers.api_access'),
    },
    {
      question: t('faq.questions.data_types'),
      answer: t('faq.answers.data_types'),
    },
  ];

  return (
    <section className="py-20 bg-secondary dark:bg-primary/10">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          {t('faq.title')}
        </h2>
        <div className="max-w-2xl mx-auto">
          <Accordion type="single" collapsible>
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left no-underline hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;