import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Heart, Stethoscope, Hospital, Building, Users } from "lucide-react";

const SpecialtySection = () => {
  const specialties = [
    {
      title: "Interventional Cardiology",
      icon: <Heart className="h-12 w-12 text-medical-500" />,
      description:
        "Specialized in catheter-based procedures for treating heart conditions, including coronary angioplasty and stent placement.",
    },
    {
      title: "Non-Invasive Cardiology",
      icon: <Stethoscope className="h-12 w-12 text-medical-500" />,
      description:
        "Expert in diagnostic techniques including echocardiography, stress testing, and cardiac CT to evaluate heart function.",
    },
    {
      title: "Preventive Cardiology",
      icon: <Heart className="h-12 w-12 text-medical-500" />,
      description:
        "Focus on risk assessment, lifestyle modifications, and medical therapies to prevent cardiovascular disease.",
    },
  ];

  return (
    <section id="specialties" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Specialty & Department
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {specialties.map((specialty, index) => (
            <Card
              key={index}
              className="text-center transition-all hover:shadow-lg hover:-translate-y-1"
            >
              <CardHeader>
                <div className="mx-auto mb-4">{specialty.icon}</div>
                <CardTitle className="text-xl">{specialty.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{specialty.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">
              Department & Affiliations
            </h3>
            <p className="text-gray-600 mb-6">
              Dr. Miller serves as the Chief of Cardiology at San Francisco
              Medical Center, where he leads a team of specialists dedicated to
              excellence in cardiovascular care.
            </p>

            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-4 bg-medical-100 p-2 rounded-full">
                  <Hospital className="h-5 w-5 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-medium">San Francisco Medical Center</h4>
                  <p className="text-sm text-gray-600">
                    Chief of Cardiology Department
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-medical-100 p-2 rounded-full">
                  <Building className="h-5 w-5 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-medium">Bay Area Heart Institute</h4>
                  <p className="text-sm text-gray-600">Research Affiliate</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="mr-4 bg-medical-100 p-2 rounded-full">
                  <Users className="h-5 w-5 text-medical-600" />
                </div>
                <div>
                  <h4 className="font-medium">
                    University of California Medical School
                  </h4>
                  <p className="text-sm text-gray-600">
                    Clinical Professor of Medicine
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-medical-50 rounded-2xl p-6">
            <div className="flex items-center mb-4">
              <div className="bg-medical-100 p-3 rounded-full">
                <Stethoscope className="h-6 w-6 text-medical-600" />
              </div>
              <h3 className="ml-4 text-xl font-semibold">
                Cardiac Care Focus Areas
              </h3>
            </div>

            <ul className="space-y-3">
              <li className="flex items-center">
                <div className="h-2 w-2 bg-medical-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Coronary Artery Disease</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-medical-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Heart Failure Management</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-medical-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Cardiac Arrhythmias</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-medical-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Structural Heart Disease</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-medical-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Preventive Cardiology</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-medical-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Hypertension Management</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-medical-500 rounded-full mr-2"></div>
                <span className="text-gray-700">Lipid Disorders</span>
              </li>
              <li className="flex items-center">
                <div className="h-2 w-2 bg-medical-500 rounded-full mr-2"></div>
                <span className="text-gray-700">
                  Cardiovascular Risk Assessment
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecialtySection;
