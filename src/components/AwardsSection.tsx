import { Trophy, Check, Award } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GiAchievement } from "react-icons/gi";
import { FaStethoscope } from "react-icons/fa";
import { GrAchievement } from "react-icons/gr";

const AwardsSection = () => {
  const awards = [
    {
      title: "Excellence in Cardiology",
      organization: "American Heart Association",
      year: "2022",
      description:
        "Recognized for outstanding contributions to cardiovascular research and patient care.",
    },
    {
      title: "Top Doctor Award",
      organization: "San Francisco Magazine",
      year: "2020-2023",
      description:
        "Voted by peers as one of the top cardiologists in the San Francisco Bay Area for four consecutive years.",
    },
    {
      title: "Medical Innovation Prize",
      organization: "Healthcare Technology Association",
      year: "2021",
      description:
        "Awarded for pioneering work in minimally invasive cardiac procedures.",
    },
  ];

  const accomplishments = [
    "Published over 30 peer-reviewed articles in leading medical journals",
    "Principal investigator on 5 major clinical trials evaluating new cardiac treatments",
    "Developed novel approach for treating complex coronary artery disease",
    "Featured expert on national media for heart health awareness",
    "Mentor to over 20 cardiology fellows",
    "Presented research at international cardiology conferences",
    "Member of national guidelines committee for heart failure management",
  ];

  const residencyInfo = {
    institution: "Massachusetts General Hospital",
    period: "2009-2012",
    department: "Internal Medicine",
    achievements: [
      "Chief Resident, 2011-2012",
      "Excellence in Teaching Award, 2011",
      "Research Fellowship Grant Recipient",
      "Perfect patient satisfaction scores throughout residency",
    ],
  };

  return (
    <section
      id="awards"
      className="py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Awards & Accomplishments
          </h2>
          <p className="text-lg text-gray-600">
            Recognition of Dr. Miller's contributions to cardiovascular medicine
            and patient care
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {awards.map((award, index) => (
            <Card
              key={index}
              className="border-t-4 border-t-medical-500 hover:shadow-lg transition-shadow"
            >
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-xl">{award.title}</CardTitle>
                  <GrAchievement className="h-5 w-5 text-medical-500" />
                </div>
                <CardDescription>
                  {award.organization} • {award.year}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{award.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="flex items-center mb-6">
              <GiAchievement className="h-6 w-6 mr-2 text-medical-600" />
              <h3 className="text-2xl font-semibold">Key Accomplishments</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <ul className="space-y-3">
                {accomplishments.map((item, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mt-1">
                      <Check className="h-4 w-4 text-medical-500 mr-2" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="flex items-center mb-6">
              <FaStethoscope className="h-6 w-6 mr-2 text-medical-600" />
              <h3 className="text-2xl font-semibold">Residency Highlights</h3>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6">
              <h4 className="text-xl font-medium text-primary mb-2">
                {residencyInfo.institution}
              </h4>
              <p className="text-gray-600 mb-4">
                {residencyInfo.department} • {residencyInfo.period}
              </p>
              <div className="mt-4">
                <h5 className="font-medium text-gray-800 mb-3">
                  Key Achievements
                </h5>
                <ul className="space-y-3">
                  {residencyInfo.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start">
                      <div className="mt-1">
                        <div className="h-2 w-2 bg-medical-500 rounded-full mr-3 mt-1"></div>
                      </div>
                      <span className="text-gray-700">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AwardsSection;
