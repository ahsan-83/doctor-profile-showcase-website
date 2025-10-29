import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GraduationCap, Award, Badge } from "lucide-react";
import { FaGraduationCap } from "react-icons/fa6";
import { PiCertificateBold } from "react-icons/pi";
import { FaIdBadge } from "react-icons/fa6";

const EducationSection = () => {
  const education = [
    {
      degree: "Medical Doctorate (M.D.)",
      institution: "Johns Hopkins University School of Medicine",
      years: "2005-2009",
      icon: <GraduationCap className="h-5 w-5 text-medical-600" />,
      description:
        "Graduated with honors, specialized in Cardiovascular Medicine",
    },
    {
      degree: "Residency in Internal Medicine",
      institution: "Massachusetts General Hospital",
      years: "2009-2012",
      icon: <Badge className="h-5 w-5 text-medical-600" />,
      description:
        "Completed comprehensive training in internal medicine with focus on cardiac care",
    },
    {
      degree: "Fellowship in Cardiology",
      institution: "Stanford University Medical Center",
      years: "2012-2015",
      icon: <Award className="h-5 w-5 text-medical-600" />,
      description: "Advanced specialized training in interventional cardiology",
    },
  ];

  const certifications = [
    {
      title: "Board Certification in Cardiovascular Disease",
      organization: "American Board of Internal Medicine",
      year: "2015",
    },
    {
      title: "Certification in Advanced Cardiac Life Support (ACLS)",
      organization: "American Heart Association",
      year: "2021 (renewed)",
    },
    {
      title: "Certification in Cardiac CT Angiography",
      organization: "Society of Cardiovascular Computed Tomography",
      year: "2016",
    },
  ];

  const memberships = [
    {
      organization: "American College of Cardiology",
      position: "Fellow",
      since: "2016",
    },
    {
      organization: "American Heart Association",
      position: "Member",
      since: "2009",
    },
    {
      organization: "Society for Cardiovascular Angiography and Interventions",
      position: "Member",
      since: "2015",
    },
  ];

  return (
    <section id="education" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Education & Credentials
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <FaGraduationCap className="h-6 w-6 mr-2 text-medical-600" />
              Educational Background
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-medical-500 transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{item.degree}</CardTitle>
                    </div>
                    <CardDescription className="text-sm">
                      {item.years}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 font-medium">
                      {item.institution}
                    </p>
                    <p className="text-gray-600 text-sm mt-2">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <PiCertificateBold className="h-6 w-6 mr-2 text-medical-600" />
                Certifications
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {certifications.map((cert, index) => (
                      <li
                        key={index}
                        className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
                      >
                        <div className="flex justify-between">
                          <h4 className="font-medium text-primary">
                            {cert.title}
                          </h4>
                          <span className="text-sm text-gray-500">
                            {cert.year}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {cert.organization}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <FaIdBadge className="h-6 w-6 mr-2 text-medical-600" />
                Professional Memberships
              </h3>
              <Card>
                <CardContent className="pt-6">
                  <ul className="space-y-4">
                    {memberships.map((membership, index) => (
                      <li
                        key={index}
                        className="p-4 bg-white border border-gray-100 rounded-lg shadow-sm"
                      >
                        <div className="flex justify-between">
                          <h4 className="font-medium text-primary">
                            {membership.organization}
                          </h4>
                          <span className="text-sm text-gray-500">
                            Since {membership.since}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mt-1">
                          {membership.position}
                        </p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
