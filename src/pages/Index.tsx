import { useState } from "react";
import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { ChevronRight, Award } from "lucide-react";

const Index = () => {
  const awards = [
    { year: "2015", award: "Sony World Photography Awards" },
    { year: "2017", award: "Travel Photographer Of The Year" },
    { year: "2022", award: "Magnum Photography Awards" },
    { year: "2023", award: "International Photography Awards" },
  ];

  const portfolioItems = [
    {
      title: "Majestic Creatures of the African Savanna",
      category: "Wildlife",
      image: "https://images.unsplash.com/photo-1498936178812-4b2e558d2937",
    },
    {
      title: "A Temple's Serene Silhouette",
      category: "Architecture",
      image: "https://images.unsplash.com/photo-1472396961693-142e6e269027",
    },
    {
      title: "Moments Framed in Portraits",
      category: "Portrait",
      image: "https://images.unsplash.com/photo-1485833077593-4278bba3f11f",
    },
  ];

  return (
    <div className="min-h-screen bg-primary text-white">
      <Navigation />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(https://images.unsplash.com/photo-1472396961693-142e6e269027)",
          }}
        >
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="container relative z-10 pt-20">
          <h1 className="text-5xl md:text-7xl font-bold max-w-3xl mb-8 animate-fadeIn">
            Capturing beautiful moment inside lens and shutterspeed
          </h1>
          <div className="flex flex-wrap gap-4 mb-8">
            {["Landscape", "Wildlife", "Portrait", "Street"].map((category) => (
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

      {/* About Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Photography{" "}
              <span className="text-secondary-foreground">
                is driven by a deep passion for capturing life's most precious
                moments with artistry and a touch of magic
              </span>
            </h2>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Learn More
              <ChevronRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Explore the artistry and precision behind our{" "}
            <span className="text-accent">portfolio</span> of timeless photography
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden rounded-lg aspect-[4/3]"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 p-6">
                    <div className="text-sm text-accent mb-2">{item.category}</div>
                    <h3 className="text-xl font-bold">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20 bg-secondary">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Award is a pixel that{" "}
            <span className="text-accent">reflecting our ongoing dedication</span>{" "}
            to innovation and excellence
          </h2>
          <div className="max-w-2xl mx-auto">
            {awards.map((item, index) => (
              <div
                key={item.year}
                className="flex items-center gap-6 mb-8 animate-slideUp"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-2xl font-bold text-accent">
                  {item.year}
                </div>
                <div className="flex-1 p-6 bg-primary rounded-lg">
                  <div className="flex items-center gap-4">
                    <Award className="text-accent" />
                    <span>{item.award}</span>
                  </div>
                </div>
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
              Let's{" "}
              <span className="text-accent">discuss</span> your vision with us
            </h2>
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
              Let's Talk
              <ChevronRight className="ml-2" size={16} />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-secondary">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold mb-4 md:mb-0">CREACY</div>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors">
                About Us
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Project
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Services
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                Terms
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-secondary-foreground">
            ©2023 All Rights Reserved
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;