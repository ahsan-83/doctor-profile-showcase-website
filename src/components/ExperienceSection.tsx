import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const ExperienceSection = () => {
  const education = [
    {
      position: "Attending Physician, Internal Medicine",
      institution: "NewYork-Presbyterian Hospital",
      years: "2015 - Present",
      description:
        "Providing comprehensive outpatient and inpatient care. Leading quality improvement initiatives and mentoring resident physicians.",
    },
    {
      position: "Associate Physician",
      institution: "Mount Sinai Medical Center",
      years: "2010 - 2015",
      description:
        "Specialized in chronic disease management and preventive medicine. Developed patient education programs.",
    },
    {
      position: "Clinical Fellow",
      institution: "Massachusetts General Hospital",
      years: "2008 - 2010",
      description:
        "Advanced clinical training in internal medicine with focus on cardiovascular health and metabolic disorders.",
    },
  ];

  return (
    <section id="experience" className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Professional Experience
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {education.map((item, index) => (
                <Card
                  key={index}
                  className="border-l-4 border-l-medical-500 transition-all hover:shadow-md"
                >
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl">{item.position}</CardTitle>
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
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
