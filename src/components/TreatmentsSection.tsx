import { Heart, Stethoscope, Pill, Check } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import "./TreatmentSection.css";

const TreatmentsSection = () => {
  const treatments = [
    {
      id: "coronary-angioplasty",
      title: "Coronary Angioplasty & Stenting",
      icon: <Heart className="h-5 w-5 text-medical-500" />,
      description:
        "Minimally invasive procedure to open blocked or narrowed coronary arteries, improving blood flow to the heart muscle.",
      details: [
        "Uses a tiny balloon catheter to open blocked arteries",
        "Often combined with stent placement to keep arteries open",
        "Usually performed under local anesthesia",
        "Typically requires 1 day hospital stay",
      ],
    },
    {
      id: "cardiac-diagnostics",
      title: "Comprehensive Cardiac Diagnostics",
      icon: <Stethoscope className="h-5 w-5 text-medical-500" />,
      description:
        "State-of-the-art cardiac testing to diagnose heart conditions with precision.",
      details: [
        "Echocardiography for heart structure and function assessment",
        "Stress testing to evaluate heart function during exercise",
        "Cardiac CT and MRI for detailed imaging",
        "Holter monitoring for rhythm abnormalities",
      ],
    },
    {
      id: "medical-therapy",
      title: "Medical Therapy for Heart Conditions",
      icon: <Pill className="h-5 w-5 text-medical-500" />,
      description:
        "Evidence-based medication management for various cardiac conditions.",
      details: [
        "Personalized medication regimens for heart failure",
        "Antiplatelet and anticoagulant therapy",
        "Cholesterol management and statins",
        "Blood pressure control with appropriate medications",
      ],
    },
    {
      id: "preventive-cardiology",
      title: "Preventive Cardiology Services",
      icon: <Heart className="h-5 w-5 text-medical-500" />,
      description:
        "Comprehensive risk assessment and preventive strategies to reduce cardiovascular risk.",
      details: [
        "Advanced lipid management",
        "Cardiac rehabilitation programs",
        "Lifestyle modification counseling",
        "Genetic risk assessment for heart disease",
      ],
    },
  ];

  return (
    <section id="treatments" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Treatments & Services
          </h2>
        </div>

        <div className="grid grid-cols-1 treatment-container">
          <Accordion type="single" collapsible className="w-full">
            {treatments.map((treatment) => (
              <AccordionItem key={treatment.id} value={treatment.id}>
                <AccordionTrigger className="text-left">
                  <div className="flex items-center">
                    <div className="bg-medical-100 p-2 rounded-full mr-3">
                      {treatment.icon}
                    </div>
                    <span>{treatment.title}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pl-12 pt-2 pb-4">
                    <p className="text-gray-600 mb-4">
                      {treatment.description}
                    </p>
                    <ul className="space-y-2">
                      {treatment.details.map((detail, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-4 w-4 text-medical-500 mr-2 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default TreatmentsSection;
