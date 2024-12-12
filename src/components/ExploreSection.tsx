import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import ProfileCard from "./ProfileCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Temporary mock data - will be replaced with Supabase data
  const mockProfiles = [
    {
      name: "Dr. Sarah Johnson",
      title: "Associate Professor of Computer Science",
      institution: "Stanford University",
      interests: ["Machine Learning", "AI Ethics", "Computer Vision"],
      imageUrl: "/placeholder.svg",
      biography: "Ph.D. in Computer Science from MIT (2015). Over 10 years of experience in machine learning research with a focus on ethical AI development. Led multiple NSF-funded projects and published 30+ papers in top-tier conferences.",
      qualifications: ["Ph.D. Computer Science, MIT", "M.S. Computer Science, Stanford University", "B.S. Mathematics, Harvard University"],
      experience: ["Associate Professor at Stanford (2018-present)", "Assistant Professor at UC Berkeley (2015-2018)", "Research Scientist at Google AI (2013-2015)"]
    },
    {
      name: "Prof. Michael Chen",
      title: "Research Director",
      institution: "MIT",
      interests: ["Quantum Computing", "Algorithms", "Data Science"],
      imageUrl: "/placeholder.svg",
      biography: "Pioneer in quantum computing algorithms with 15+ years of research experience. Founded the Quantum Computing Initiative at MIT and secured $10M in research grants.",
      qualifications: ["Ph.D. Physics, Caltech", "M.S. Computer Science, MIT", "B.S. Physics, Princeton"],
      experience: ["Research Director at MIT (2016-present)", "Senior Researcher at IBM Quantum (2012-2016)", "Visiting Professor at ETH Zurich (2010-2012)"]
    },
    {
      name: "Dr. Elena Rodriguez",
      title: "Assistant Professor of Neuroscience",
      institution: "Harvard Medical School",
      interests: ["Brain-Computer Interfaces", "Neural Networks", "Cognitive Science"],
      imageUrl: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7",
      biography: "Leading researcher in brain-computer interfaces with expertise in neural network modeling. Published groundbreaking work on cognitive enhancement through BCI.",
      qualifications: ["Ph.D. Neuroscience, Johns Hopkins", "M.D. Harvard Medical School", "B.S. Biomedical Engineering, Duke"],
      experience: ["Assistant Professor at Harvard (2019-present)", "Clinical Researcher at Mayo Clinic (2016-2019)", "Postdoctoral Fellow at Stanford (2014-2016)"]
    },
    {
      name: "Prof. David Kim",
      title: "Senior Researcher",
      institution: "Seoul National University",
      interests: ["Robotics", "Computer Vision", "Human-Computer Interaction"],
      imageUrl: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952",
      biography: "20+ years of experience in robotics and computer vision. Led development of award-winning humanoid robots and pioneered new approaches in HCI.",
      qualifications: ["Ph.D. Robotics, Carnegie Mellon", "M.S. Mechanical Engineering, Tokyo University", "B.S. Electronics, KAIST"],
      experience: ["Senior Researcher at SNU (2010-present)", "Lead Engineer at Samsung Robotics (2005-2010)", "Research Scientist at KIST (2000-2005)"]
    },
    {
      name: "Dr. Maya Patel",
      title: "Lead Research Scientist",
      institution: "University of Cambridge",
      interests: ["Sustainable Energy", "Materials Science", "Green Technology"],
      imageUrl: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
      biography: "Expert in sustainable energy technologies and advanced materials. Holds multiple patents in solar cell technology and authored two books on green energy solutions.",
      qualifications: ["Ph.D. Materials Science, Oxford", "M.Phil. Chemistry, Cambridge", "B.Eng. Chemical Engineering, Imperial College"],
      experience: ["Lead Scientist at Cambridge (2017-present)", "Senior Researcher at Shell Research (2013-2017)", "Research Fellow at Max Planck Institute (2010-2013)"]
    },
    {
      name: "Prof. James Wilson",
      title: "Department Chair",
      institution: "University of Toronto",
      interests: ["Bioinformatics", "Genomics", "Systems Biology"],
      imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      biography: "Distinguished researcher in genomics and bioinformatics. Pioneered several computational methods for gene expression analysis widely used in cancer research.",
      qualifications: ["Ph.D. Bioinformatics, Stanford", "M.S. Computer Science, UBC", "B.S. Biology, McGill"],
      experience: ["Department Chair at UofT (2020-present)", "Professor at McGill (2015-2020)", "Senior Scientist at Ontario Institute for Cancer Research (2010-2015)"]
    }
  ];

  const handleConnect = (profile: any) => {
    setSelectedProfile(profile);
    setIsDialogOpen(true);
  };

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
                <Button onClick={() => handleConnect(profile)}>Connect</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedProfile?.name}</DialogTitle>
            <DialogDescription className="text-lg font-medium text-foreground">
              {selectedProfile?.title} at {selectedProfile?.institution}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2">Professional Biography</h3>
              <p className="text-muted-foreground">{selectedProfile?.biography}</p>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Qualifications</h3>
              <ul className="list-disc pl-5 text-muted-foreground">
                {selectedProfile?.qualifications.map((qual: string, index: number) => (
                  <li key={index}>{qual}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Experience</h3>
              <ul className="list-disc pl-5 text-muted-foreground">
                {selectedProfile?.experience.map((exp: string, index: number) => (
                  <li key={index}>{exp}</li>
                ))}
              </ul>
            </div>
            <div className="flex justify-end space-x-2 pt-4">
              <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                Close
              </Button>
              <Button onClick={() => {
                console.log("Sending connection request to:", selectedProfile?.name);
                setIsDialogOpen(false);
              }}>
                Send Connection Request
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ExploreSection;