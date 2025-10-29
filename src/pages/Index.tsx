import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SpecialtySection from "@/components/SpecialtySection";
import AwardsSection from "@/components/AwardsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import BlogSection from "@/components/BlogSection";
import GallerySection from "@/components/GallerySection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: {
      translate: {
        TranslateElement: {
          new (options: any, id: string): void;
          FloatPosition: {
            TOP_LEFT: string;
          };
        };
      };
    };
  }
}

const Index = () => {
  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "en,bn,hi",
        layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT,
      },
      "google_translate_element"
    );
  };

  return (
    <>
      <div id="google_translate_element"></div>
      <div className="min-h-screen bg-background">
        <Navbar />
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <SpecialtySection />
        <AwardsSection />
        <TreatmentsSection />
        <BlogSection />
        <GallerySection />
        <LocationsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
