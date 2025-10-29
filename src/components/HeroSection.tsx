import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center pt-16 pb-8 overflow-hidden"
    >
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')",
          opacity: 0.15,
        }}
      />

      <div className="absolute inset-0 bg-gradient-to-r from-medical-900/30 to-transparent z-0" />

      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={`${isLoaded ? "animate-fade-in" : "opacity-0"}`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Dr. James Miller (Template 2)
            </h1>
            <h2 className="text-2xl md:text-3xl text-gray-700 mb-6">
              Cardiology Specialist
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              With over 15 years of experience, Dr. Miller provides exceptional
              care using the latest medical advances and a patient-centered
              approach to heart health and cardiovascular wellness.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                className="bg-medical-600 hover:bg-medical-700 text-white px-8 py-6 text-lg"
                style={{ padding: "30px 35px" }}
              >
                <a href="#contact">Book Appointment</a>
              </Button>
            </div>
          </div>

          <div
            className={`${
              isLoaded ? "animate-fade-in delay-200" : "opacity-0"
            } relative`}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              className="bg-white rounded-2xl shadow-xl overflow-hidden"
              style={{ width: "400px", height: "500px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Dr. James Miller"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
