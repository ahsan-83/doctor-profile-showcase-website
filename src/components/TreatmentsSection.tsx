import { Heart, Stethoscope, Activity, AlertCircle, CheckCircle2 } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

import "./TreatmentSection.css";

const TreatmentsSection = () => {
  const diseaseCategories = [
    {
      id: "coronary-artery-disease",
      title: "Coronary Artery Disease (CAD)",
      icon: <Heart className="h-6 w-6 text-medical-500" />,
      diseases: ["Angina", "Myocardial Infarction", "Chronic Stable Angina"],
      description:
        "Comprehensive treatment for blocked or narrowed coronary arteries affecting heart blood flow.",
      procedures: [
        {
          name: "Coronary Angioplasty & Stenting",
          steps: [
            "Initial assessment with ECG and blood tests",
            "Cardiac catheterization to visualize blockages",
            "Balloon angioplasty to open narrowed arteries",
            "Stent placement to maintain artery openness",
            "Post-procedure monitoring and medications",
          ],
        },
        {
          name: "Medical Management",
          steps: [
            "Antiplatelet therapy (Aspirin, Clopidogrel)",
            "Cholesterol-lowering medications (Statins)",
            "Blood pressure control medications",
            "Cardiac rehabilitation program enrollment",
            "Regular follow-up consultations",
          ],
        },
      ],
    },
    {
      id: "arrhythmias",
      title: "Cardiac Arrhythmias",
      icon: <Activity className="h-6 w-6 text-medical-500" />,
      diseases: [
        "Atrial Fibrillation",
        "Ventricular Tachycardia",
        "Bradycardia",
        "Supraventricular Tachycardia",
      ],
      description:
        "Advanced treatment for irregular heart rhythms affecting cardiac function and quality of life.",
      procedures: [
        {
          name: "Electrophysiology Study & Ablation",
          steps: [
            "Holter monitoring to record heart rhythm",
            "Electrophysiology study to map electrical pathways",
            "Radiofrequency or cryoablation of abnormal tissue",
            "Post-ablation rhythm monitoring",
            "Long-term anticoagulation if needed",
          ],
        },
        {
          name: "Device Implantation",
          steps: [
            "Assessment for pacemaker or ICD indication",
            "Pre-operative cardiac imaging",
            "Device implantation under local anesthesia",
            "Programming and optimization of device",
            "Regular device check-ups and adjustments",
          ],
        },
      ],
    },
    {
      id: "heart-failure",
      title: "Heart Failure",
      icon: <AlertCircle className="h-6 w-6 text-medical-500" />,
      diseases: [
        "Systolic Heart Failure",
        "Diastolic Heart Failure",
        "Congestive Heart Failure",
      ],
      description:
        "Comprehensive management of heart's inability to pump blood effectively to meet body's needs.",
      procedures: [
        {
          name: "Medical Optimization",
          steps: [
            "Detailed echocardiographic assessment",
            "Initiation of guideline-directed medical therapy",
            "Diuretic management for fluid balance",
            "ACE inhibitors or ARB therapy",
            "Beta-blocker titration to target dose",
          ],
        },
        {
          name: "Advanced Heart Failure Care",
          steps: [
            "Cardiac resynchronization therapy evaluation",
            "Implantable cardioverter-defibrillator assessment",
            "Referral for mechanical support if indicated",
            "Cardiac rehabilitation program",
            "Nutritional and lifestyle counseling",
          ],
        },
      ],
    },
    {
      id: "valvular-disease",
      title: "Valvular Heart Disease",
      icon: <Stethoscope className="h-6 w-6 text-medical-500" />,
      diseases: [
        "Aortic Stenosis",
        "Mitral Regurgitation",
        "Aortic Regurgitation",
        "Mitral Stenosis",
      ],
      description:
        "Treatment for heart valve disorders affecting proper blood flow through the heart.",
      procedures: [
        {
          name: "Non-Invasive Assessment",
          steps: [
            "Comprehensive transthoracic echocardiography",
            "Transesophageal echo if needed",
            "Cardiac MRI for detailed valve assessment",
            "Stress testing to evaluate functional capacity",
            "Risk stratification for intervention",
          ],
        },
        {
          name: "Interventional Management",
          steps: [
            "TAVR (Transcatheter Aortic Valve Replacement) evaluation",
            "MitraClip assessment for mitral regurgitation",
            "Balloon valvuloplasty for stenotic valves",
            "Pre-procedure cardiac catheterization",
            "Post-intervention monitoring and follow-up",
          ],
        },
      ],
    },
    {
      id: "preventive-cardiology",
      title: "Preventive Cardiology",
      icon: <CheckCircle2 className="h-6 w-6 text-medical-500" />,
      diseases: [
        "Hypertension",
        "Hyperlipidemia",
        "Metabolic Syndrome",
        "Diabetes with Cardiac Risk",
      ],
      description:
        "Proactive strategies to prevent cardiovascular disease and reduce risk factors.",
      procedures: [
        {
          name: "Risk Assessment & Stratification",
          steps: [
            "Comprehensive cardiovascular risk scoring",
            "Advanced lipid panel and biomarker testing",
            "Coronary calcium scoring with CT",
            "Genetic testing for familial conditions",
            "Lifestyle and dietary assessment",
          ],
        },
        {
          name: "Prevention Program",
          steps: [
            "Personalized medication regimen",
            "Supervised exercise prescription",
            "Nutritional counseling and meal planning",
            "Stress management techniques",
            "Regular monitoring and adjustment",
          ],
        },
      ],
    },
  ];

  return (
    <section id="treatments" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Disease Treatments & Medical Procedures
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive cardiac care with advanced treatment protocols for various heart conditions
          </p>
        </div>

        <div className="treatment-container">
          <Accordion type="single" collapsible className="space-y-4">
            {diseaseCategories.map((category) => (
              <AccordionItem
                key={category.id}
                value={category.id}
                className="border rounded-lg bg-card shadow-sm overflow-hidden"
              >
                <AccordionTrigger className="text-left px-6 hover:no-underline hover:bg-accent/50 transition-colors">
                  <div className="flex items-start gap-4 w-full">
                    <div className="bg-primary/10 p-3 rounded-full mt-1">
                      {category.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2 text-card-foreground">
                        {category.title}
                      </h3>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {category.diseases.map((disease, idx) => (
                          <Badge
                            key={idx}
                            variant="secondary"
                            className="text-xs"
                          >
                            {disease}
                          </Badge>
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-6">
                  <div className="space-y-6 pt-4">
                    {category.procedures.map((procedure, procIdx) => (
                      <Card key={procIdx} className="border-l-4 border-l-primary">
                        <CardHeader>
                          <CardTitle className="text-lg text-primary">
                            {procedure.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <ol className="space-y-3">
                            {procedure.steps.map((step, stepIdx) => (
                              <li key={stepIdx} className="flex gap-3">
                                <span className="flex-shrink-0 w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center font-medium">
                                  {stepIdx + 1}
                                </span>
                                <span className="text-card-foreground flex-1">
                                  {step}
                                </span>
                              </li>
                            ))}
                          </ol>
                        </CardContent>
                      </Card>
                    ))}
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
