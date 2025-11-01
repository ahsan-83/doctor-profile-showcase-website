import { Video } from "lucide-react";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const [showAll, setShowAll] = useState(false);

  const videos = [
    {
      id: 1,
      title: "Heart Health Basics: What Everyone Should Know",
      category: "Education",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 2,
      title: "Post-Angioplasty Care and Recovery",
      category: "Recovery",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 3,
      title: "Cardiac Rehabilitation Exercise Program",
      category: "Rehabilitation",
      type: "facebook",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=false",
    },
    {
      id: 4,
      title: "Understanding Your Cardiac Test Results",
      category: "Diagnosis",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 5,
      title: "Managing High Blood Pressure",
      category: "Prevention",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 6,
      title: "Diet and Nutrition for Heart Health",
      category: "Lifestyle",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 7,
      title: "Signs and Symptoms of Heart Attack",
      category: "Emergency",
      type: "facebook",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=false",
    },
    {
      id: 8,
      title: "Stress Management for Cardiac Patients",
      category: "Wellness",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 9,
      title: "Understanding Cholesterol Levels",
      category: "Education",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 10,
      title: "Exercise Guidelines After Heart Surgery",
      category: "Recovery",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
    {
      id: 11,
      title: "Preventing Heart Disease: Lifestyle Changes",
      category: "Prevention",
      type: "facebook",
      embedUrl: "https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Ffacebook%2Fvideos%2F10153231379946729%2F&width=500&show_text=false",
    },
    {
      id: 12,
      title: "Medication Management for Heart Conditions",
      category: "Treatment",
      type: "youtube",
      embedUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
    },
  ];

  const displayedVideos = showAll ? videos : videos.slice(0, 4);

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Video className="h-5 w-5" />
            <span className="font-semibold">Educational Videos</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Learn About Cardiac Health
          </h2>
          <p className="text-muted-foreground text-lg">
            Watch our collection of educational videos on cardiac health, treatments, and recovery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {displayedVideos.map((video) => (
            <Card
              key={video.id}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-video">
                <iframe
                  src={video.embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={video.title}
                />
                <Badge className="absolute top-4 left-4 bg-background/90 backdrop-blur-sm">
                  {video.category}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">
                  {video.title}
                </CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>

        {videos.length > 4 && (
          <div className="text-center mt-8">
            <Button
              onClick={() => setShowAll(!showAll)}
              size="lg"
              variant="outline"
            >
              {showAll ? "Show Less" : "View More Videos"}
            </Button>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogSection;
