import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SpecialtySection from "@/components/SpecialtySection";
import AwardsSection from "@/components/AwardsSection";
import TreatmentsSection from "@/components/TreatmentsSection";
import GallerySection from "@/components/GallerySection";
import LocationsSection from "@/components/LocationsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useEffect } from "react";

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
        includedLanguages: "en,bn,hi", // include this for selected languages
        layout: google.translate.TranslateElement.FloatPosition.TOP_LEFT,
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
        <GallerySection />
        <LocationsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
};

export default Index;
