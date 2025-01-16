import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Award, Code, Database, Globe, Users, Plus, Minus } from "lucide-react";

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1590846083693-f23fdede3a7e)",
          }}
        >
          <div className="absolute inset-0 bg-primary/50 dark:bg-primary/70" />
        </div>
        <div className="container relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold max-w-3xl mb-8 animate-fadeIn text-white">
            Building a Digital Future for Algeria
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            {["Innovation", "Transparency", "Accessibility", "Development"].map((category) => (
              <span
                key={category}
                className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full"
              >
                {category}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-secondary dark:bg-primary/10">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Empowering Algeria's{" "}
            <span className="text-primary dark:text-accent">Digital Future</span>
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <Card key={service.title} className="border-2 hover:border-accent transition-colors duration-300">
                <CardHeader>
                  <div className="mb-4 text-primary dark:text-accent">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

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
                <div className="flex-1 p-6 bg-secondary dark:bg-primary/10 rounded-lg">
                  <div className="flex items-center gap-4">
                    <Award className="text-primary dark:text-accent" />
                    <span>{item.award}</span>
                  </div>
                </div>
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
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-2 rounded-lg overflow-hidden transition-all duration-200 hover:border-accent"
              >
                <button
                  className="w-full p-4 text-left flex justify-between items-center"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openFaq === index ? (
                    <Minus className="w-5 h-5 text-primary dark:text-accent" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary dark:text-accent" />
                  )}
                </button>
                {openFaq === index && (
                  <div className="p-4 pt-0 text-muted-foreground">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
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
              <Button className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
                Developer Portal
                <Code className="ml-2" size={16} />
              </Button>
              <Button className="bg-primary hover:bg-primary/90 dark:bg-accent dark:hover:bg-accent/90">
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