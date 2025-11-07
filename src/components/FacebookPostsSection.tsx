import { Facebook } from "lucide-react";
import { Card } from "@/components/ui/card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const FacebookPostsSection = () => {
  const posts = [
    {
      id: 1,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D123456789&width=500",
    },
    {
      id: 2,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D123456790&width=500",
    },
    {
      id: 3,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D123456791&width=500",
    },
    {
      id: 4,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D123456792&width=500",
    },
    {
      id: 5,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D123456793&width=500",
    },
    {
      id: 6,
      embedUrl: "https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Fpermalink.php%3Fstory_fbid%3D123456794&width=500",
    },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Facebook className="w-8 h-8 text-primary" />
            <h2 className="text-4xl font-bold">Latest Updates</h2>
          </div>
          <p className="text-muted-foreground text-lg">
            Follow our Facebook page for the latest health tips and updates
          </p>
        </div>

        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex gap-6 pb-4">
            {posts.map((post) => (
              <Card
                key={post.id}
                className="inline-block overflow-hidden flex-shrink-0"
              >
                <iframe
                  src={post.embedUrl}
                  width="500"
                  height="600"
                  style={{ border: "none", overflow: "hidden" }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  className="w-full"
                />
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};

export default FacebookPostsSection;
