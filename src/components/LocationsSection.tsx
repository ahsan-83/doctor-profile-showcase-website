import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MapPin, Clock, Phone } from "lucide-react";

const LocationsSection = () => {
  const locations = [
    {
      name: "San Francisco Medical Center",
      address: "123 Medical Plaza Dr, Suite 456, San Francisco, CA 94107",
      phone: "(555) 123-4567",
      hours: [
        "Monday - Friday: 8:00 AM - 5:00 PM",
        "Saturday: 9:00 AM - 1:00 PM",
        "Sunday: Closed",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.94154312429!2d-122.45214333320101!3d37.77398983472043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b3e4ddcf%3A0xf063299343ab45eb!2sSan%20Francisco%20Medical%20Center!5e0!3m2!1sen!2sus!4v1684269867934!5m2!1sen!2sus",
    },
    {
      name: "Bay Area Heart Institute",
      address: "456 Cardiology Ave, Oakland, CA 94612",
      phone: "(555) 987-6543",
      hours: [
        "Tuesday & Thursday: 9:00 AM - 4:00 PM",
        "Other days: By appointment only",
      ],
      mapUrl:
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d50470.94154312429!2d-122.25214333320101!3d37.80398983472043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b3e4ddcf%3A0xf063299343ab45eb!2sOakland%20Medical%20Center!5e0!3m2!1sen!2sus!4v1684269867934!5m2!1sen!2sus",
    },
  ];

  return (
    <section id="locations" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Consultation Locations
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {locations.map((location, index) => (
            <Card key={index} className="overflow-hidden">
              <div className="w-full h-64">
                <iframe
                  src={location.mapUrl}
                  title={`Map of ${location.name}`}
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
              <CardHeader>
                <CardTitle className="flex items-center text-xl text-primary">
                  <MapPin className="h-5 w-5 text-medical-600 mr-2" />
                  {location.name}
                </CardTitle>
                <CardDescription className="pl-7">
                  {location.address}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-medical-600 mr-2 mt-0.5" />
                    <div>
                      <h4 className="font-medium mb-1">Hours</h4>
                      <ul className="space-y-1 text-gray-600 text-sm">
                        {location.hours.map((hour, idx) => (
                          <li key={idx}>{hour}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-medical-600 mr-2" />
                    <div>
                      <h4 className="font-medium mb-1">Contact</h4>
                      <p className="text-gray-600 text-sm">{location.phone}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
