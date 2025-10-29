import { Calendar, Clock, Video, FileText, Play } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const BlogSection = () => {
  const articles = [
    {
      id: 1,
      title: "Understanding Heart Health: Prevention is Key",
      excerpt:
        "Learn about the most effective strategies to maintain cardiovascular health and prevent heart disease through lifestyle modifications.",
      date: "2024-03-15",
      readTime: "5 min",
      category: "Prevention",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=400&fit=crop",
    },
    {
      id: 2,
      title: "Advances in Coronary Angioplasty Techniques",
      excerpt:
        "Exploring the latest innovations in minimally invasive cardiac procedures and their benefits for patients.",
      date: "2024-03-10",
      readTime: "7 min",
      category: "Treatment",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&h=400&fit=crop",
    },
    {
      id: 3,
      title: "Managing Hypertension: A Comprehensive Guide",
      excerpt:
        "Expert advice on controlling blood pressure through medication, diet, and lifestyle changes for better heart health.",
      date: "2024-03-05",
      readTime: "6 min",
      category: "Management",
      image: "https://images.unsplash.com/photo-1584515933487-779824d29309?w=800&h=400&fit=crop",
    },
    {
      id: 4,
      title: "Recognizing Heart Attack Symptoms",
      excerpt:
        "Critical information about identifying early warning signs and when to seek immediate medical attention.",
      date: "2024-02-28",
      readTime: "4 min",
      category: "Awareness",
      image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=800&h=400&fit=crop",
    },
  ];

  const videos = [
    {
      id: 1,
      title: "Heart Health Basics: What Everyone Should Know",
      duration: "12:45",
      category: "Education",
      thumbnail: "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=400&fit=crop",
      views: "2.5K",
    },
    {
      id: 2,
      title: "Post-Angioplasty Care and Recovery",
      duration: "8:30",
      category: "Recovery",
      thumbnail: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&h=400&fit=crop",
      views: "1.8K",
    },
    {
      id: 3,
      title: "Cardiac Rehabilitation Exercise Program",
      duration: "15:20",
      category: "Rehabilitation",
      thumbnail: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=800&h=400&fit=crop",
      views: "3.2K",
    },
    {
      id: 4,
      title: "Understanding Your Cardiac Test Results",
      duration: "10:15",
      category: "Diagnosis",
      thumbnail: "https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&h=400&fit=crop",
      views: "1.5K",
    },
  ];

  return (
    <section id="resources" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Educational Resources
          </h2>
          <p className="text-muted-foreground text-lg">
            Stay informed with our latest articles and video content on cardiac health and treatments
          </p>
        </div>

        <Tabs defaultValue="articles" className="w-full">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
            <TabsTrigger value="articles" className="flex items-center gap-2">
              <FileText className="h-4 w-4" />
              Articles
            </TabsTrigger>
            <TabsTrigger value="videos" className="flex items-center gap-2">
              <Video className="h-4 w-4" />
              Videos
            </TabsTrigger>
          </TabsList>

          <TabsContent value="articles" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {articles.map((article) => (
                <Card
                  key={article.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4">
                      {article.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {article.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-4 text-sm">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(article.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          year: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4">
                      {article.excerpt}
                    </p>
                    <Button variant="outline" className="w-full">
                      Read Article
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <Card
                  key={video.id}
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
                      <div className="w-16 h-16 rounded-full bg-primary/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Play className="h-8 w-8 text-primary-foreground ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute top-4 left-4">
                      {video.category}
                    </Badge>
                    <div className="absolute bottom-4 right-4 bg-black/75 text-white px-2 py-1 rounded text-xs font-medium">
                      {video.duration}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {video.title}
                    </CardTitle>
                    <CardDescription className="text-sm">
                      {video.views} views
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full">
                      Watch Video
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default BlogSection;
