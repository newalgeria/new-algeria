import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Award, Code, Database, Globe, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const awards = [
    { year: "2023", award: "Digital Transformation Excellence Award" },
    { year: "2022", award: "National Innovation in Technology" },
    { year: "2021", award: "Best Digital Service Platform" },
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Digital Services",
      description: "Streamlined government services accessible to all citizens",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Open Data",
      description: "Transparent access to public data for research and development",
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Developer Tools",
      description: "APIs and tools for building the next generation of applications",
    },
  ];

  const faqs = [
    {
      question: "What is Algeria's digital transformation initiative?",
      answer: "It's a comprehensive program aimed at modernizing public services, providing digital access to government resources, and fostering innovation in the technology sector.",
    },
    {
      question: "How can developers access the APIs?",
      answer: "Developers can register through our developer portal to get API keys and access comprehensive documentation for all available services.",
    },
    {
      question: "What kind of data is available through the platform?",
      answer: "We provide access to various types of public data including demographic statistics, economic indicators, and geographical information, all while ensuring privacy and security.",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1590846083693-f23fdede3a7e)",
          }}
        >
          <div className="absolute inset-0 bg-primary/50 dark:bg-primary/70" />
        </div>
        <div className="container relative z-10 pt-20">
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-7xl font-bold max-w-3xl mb-8 text-white"
          >
            Building a Digital Future for Algeria
          </motion.h1>
          <motion.div 
            variants={containerVariants}
            className="flex flex-wrap gap-4 mb-8"
          >
            {["Innovation", "Transparency", "Accessibility", "Development"].map((category) => (
              <motion.span
                key={category}
                variants={itemVariants}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                {category}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="py-20 bg-secondary dark:bg-primary/10"
      >
        <div className="container">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold mb-12 text-center"
          >
            Empowering Algeria's{" "}
            <span className="text-primary dark:text-accent">Digital Future</span>
          </motion.h2>
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={itemVariants}
              >
                <Card className="border-2 hover:border-accent transition-colors duration-300">
                  <CardHeader>
                    <div className="mb-4 text-primary dark:text-accent">{service.icon}</div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Recognition for{" "}
            <span className="text-primary dark:text-accent">Digital Excellence</span>
          </h2>
          <div className="max-w-2xl mx-auto">
            {awards.map((item, index) => (
              <div
                key={item.year}
                className="flex items-center gap-6 mb-8 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-primary dark:text-accent">
                  {item.year}
                </div>
                <Card className="flex-1">
                  <CardContent className="flex items-center gap-4 p-6">
                    <Award className="text-primary dark:text-accent" />
                    <span>{item.award}</span>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary dark:bg-primary/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
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

      {/* Contact Section */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Let's Build the{" "}
              <span className="text-primary dark:text-accent">Digital Future</span>{" "}
              Together
            </h2>
            <p className="mb-8 text-muted-foreground">
              Join us in transforming Algeria's digital landscape. Whether you're a developer,
              business owner, or citizen, we're here to support your digital journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
                Developer Portal
                <Code className="ml-2" size={16} />
              </Button>
              <Button size="lg" className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
                Contact Us
                <ChevronRight className="ml-2" size={16} />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary dark:bg-primary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">Digital Algeria</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">
                About
              </a>
              <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">
                Developers
              </a>
              <a href="#" className="hover:text-primary dark:hover:text-accent transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-primary/10 text-center text-muted-foreground">
            ©2024 Digital Algeria. All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;