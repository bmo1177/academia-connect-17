import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProfileCard from "./ProfileCard";

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Temporary mock data - will be replaced with Supabase data
  const mockProfiles = [
    {
      name: "Dr. Sarah Johnson",
      title: "Associate Professor of Computer Science",
      institution: "Stanford University",
      interests: ["Machine Learning", "AI Ethics", "Computer Vision"],
      imageUrl: "/placeholder.svg"
    },
    {
      name: "Prof. Michael Chen",
      title: "Research Director",
      institution: "MIT",
      interests: ["Quantum Computing", "Algorithms", "Data Science"],
      imageUrl: "/placeholder.svg"
    },
    {
      name: "Dr. Elena Rodriguez",
      title: "Assistant Professor of Neuroscience",
      institution: "Harvard Medical School",
      interests: ["Brain-Computer Interfaces", "Neural Networks", "Cognitive Science"],
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
    },
    {
      name: "Prof. David Kim",
      title: "Senior Researcher",
      institution: "Seoul National University",
      interests: ["Robotics", "Computer Vision", "Human-Computer Interaction"],
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952"
    },
    {
      name: "Dr. Maya Patel",
      title: "Lead Research Scientist",
      institution: "University of Cambridge",
      interests: ["Sustainable Energy", "Materials Science", "Green Technology"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158"
    },
    {
      name: "Prof. James Wilson",
      title: "Department Chair",
      institution: "University of Toronto",
      interests: ["Bioinformatics", "Genomics", "Systems Biology"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    }
  ];

  return (
    <div className="space-y-6">
      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search by name, institution, or research interest..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {mockProfiles.map((profile, index) => (
          <Card key={index} className="overflow-hidden">
            <CardContent className="p-0">
              <ProfileCard {...profile} />
              <div className="flex justify-between p-4 bg-muted/50">
                <Button variant="outline">Not Now</Button>
                <Button>Connect</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ExploreSection;