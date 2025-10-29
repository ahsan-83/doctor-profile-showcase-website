import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="border-t border-white-700 mt-10 pt-6 text-center text-white">
          <p>&copy; {currentYear} Dr. Miller | All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
