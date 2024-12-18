import { useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Building2, Users } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from 'embla-carousel-react';

const featuredProjects = [
  {
    id: 1,
    title: "Quantum Machine Learning Applications",
    institution: "MIT",
    shortDescription: "Exploring the intersection of quantum computing and machine learning algorithms",
    fullDescription: "This research project aims to develop novel quantum algorithms for machine learning applications, focusing on optimization problems and pattern recognition in large datasets.",
    requirements: [
      "PhD in Physics, Computer Science, or related field",
      "Strong background in quantum mechanics",
      "Programming experience in Python and quantum computing frameworks"
    ],
    positions: 2,
    duration: "2 years",
    funding: "Fully funded",
    deadline: "December 31, 2024"
  },
  {
    id: 2,
    title: "Sustainable Urban Development",
    institution: "ETH Zürich",
    shortDescription: "Developing smart city solutions for sustainable urban growth",
    fullDescription: "Research project focused on creating innovative solutions for sustainable urban development, incorporating IoT sensors, renewable energy systems, and smart infrastructure.",
    requirements: [
      "Master's in Urban Planning, Environmental Engineering, or related field",
      "Experience with sustainability metrics and urban planning tools",
      "Strong analytical and project management skills"
    ],
    positions: 3,
    duration: "18 months",
    funding: "Partially funded",
    deadline: "November 15, 2024"
  },
  {
    id: 3,
    title: "AI in Healthcare Diagnostics",
    institution: "Stanford Medicine",
    shortDescription: "Advancing medical diagnosis through artificial intelligence",
    fullDescription: "Pioneering research in applying advanced AI algorithms to medical imaging and diagnostic procedures, with the goal of improving early disease detection and treatment planning.",
    requirements: [
      "PhD in Computer Science, Biomedical Engineering, or related field",
      "Experience with medical imaging and deep learning",
      "Publication record in healthcare AI applications"
    ],
    positions: 4,
    duration: "3 years",
    funding: "Fully funded",
    deadline: "October 1, 2024"
  },
  {
    id: 4,
    title: "Climate Change Impact on Marine Ecosystems",
    institution: "Woods Hole Oceanographic Institution",
    shortDescription: "Studying the effects of global warming on ocean biodiversity",
    fullDescription: "Comprehensive research project investigating the impact of climate change on marine ecosystems, focusing on coral reef resilience and adaptation strategies for marine species.",
    requirements: [
      "PhD in Marine Biology, Environmental Science, or related field",
      "Experience with marine ecosystem modeling",
      "Proficiency in data analysis and statistical methods",
      "Background in climate science"
    ],
    positions: 3,
    duration: "4 years",
    funding: "Fully funded",
    deadline: "March 15, 2025"
  },
  {
    id: 5,
    title: "Next-Generation Battery Technology",
    institution: "Max Planck Institute for Energy Research",
    shortDescription: "Developing advanced energy storage solutions",
    fullDescription: "Innovative research project focused on developing high-capacity, sustainable battery technologies using novel materials and advanced manufacturing processes.",
    requirements: [
      "PhD in Materials Science, Chemical Engineering, or related field",
      "Experience with battery technology and electrochemistry",
      "Strong background in materials characterization",
      "Knowledge of sustainable manufacturing processes"
    ],
    positions: 2,
    duration: "3 years",
    funding: "Fully funded",
    deadline: "January 31, 2025"
  }
];

const FeaturedProjects = () => {
  const [selectedProject, setSelectedProject] = useState<typeof featuredProjects[0] | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();
  
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true,
      align: "start",
      skipSnaps: false,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: true })]
  );

  const handleApply = (projectId: number) => {
    console.log("Applying for project:", projectId);
    toast({
      title: "Application Submitted",
      description: "Your application has been successfully submitted. We'll be in touch soon!",
    });
    setIsDialogOpen(false);
  };

  return (
    <div className="space-y-6 py-8">
      <h2 className="text-2xl font-bold">Featured Research Projects</h2>
      <div className="relative">
        <div className="overflow-hidden" ref={emblaRef}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-5xl mx-auto"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {featuredProjects.map((project, index) => (
                <CarouselItem 
                  key={project.id} 
                  className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3"
                >
                  <div className="h-full">
                    <Card className="h-full">
                      <CardContent className="p-6 space-y-4">
                        <h3 className="font-semibold text-lg line-clamp-2">
                          {project.title}
                        </h3>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Building2 className="mr-2 h-4 w-4 flex-shrink-0" />
                          <span className="line-clamp-1">{project.institution}</span>
                        </div>
                        <p className="text-sm text-muted-foreground line-clamp-3">
                          {project.shortDescription}
                        </p>
                        <Button
                          variant="outline"
                          className="w-full mt-auto"
                          onClick={() => {
                            setSelectedProject(project);
                            setIsDialogOpen(true);
                          }}
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          More Information
                        </Button>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="hidden md:block">
              <CarouselPrevious className="absolute -left-12 top-1/2 transform -translate-y-1/2" />
              <CarouselNext className="absolute -right-12 top-1/2 transform -translate-y-1/2" />
            </div>
          </Carousel>
        </div>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl">{selectedProject.title}</DialogTitle>
                <DialogDescription className="text-lg font-medium text-foreground">
                  {selectedProject.institution}
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Project Description</h3>
                  <p className="text-muted-foreground">{selectedProject.fullDescription}</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Requirements</h3>
                  <ul className="list-disc pl-5 text-muted-foreground">
                    {selectedProject.requirements.map((req, index) => (
                      <li key={index}>{req}</li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold mb-2">Project Details</h3>
                    <div className="space-y-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4" />
                        Positions: {selectedProject.positions}
                      </div>
                      <div>Duration: {selectedProject.duration}</div>
                      <div>Funding: {selectedProject.funding}</div>
                      <div>Application Deadline: {selectedProject.deadline}</div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end space-x-2 pt-4">
                  <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
                    Close
                  </Button>
                  <Button onClick={() => handleApply(selectedProject.id)}>
                    Apply Now
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default FeaturedProjects;