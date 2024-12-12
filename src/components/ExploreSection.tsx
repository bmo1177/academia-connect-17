import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ProfileCard from "./ProfileCard";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ExploreFilters from "./explore/ExploreFilters";
import { mockProfiles } from "@/data/mockProfiles";

const ExploreSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState<any>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [metricFilter, setMetricFilter] = useState<string>("citations");
  const [selectedFaculties, setSelectedFaculties] = useState<string[]>([]);

  const faculties = [
    "Creative Arts",
    "Arts",
    "Business",
    "Law",
    "Education",
    "Science",
    "Technology",
    "Engineering",
    "Mathematics"
  ];

  const handleConnect = (profile: any) => {
    setSelectedProfile(profile);
    setIsDialogOpen(true);
  };

  const filteredProfiles = mockProfiles
    .filter(profile => {
      const matchesSearch = profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.institution.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.interests.some(interest => interest.toLowerCase().includes(searchQuery.toLowerCase()));

      const matchesFaculty = selectedFaculties.length === 0 || 
        profile.interests.some(interest => selectedFaculties.includes(interest));

      return matchesSearch && matchesFaculty;
    })
    .sort((a, b) => {
      if (metricFilter === "citations") {
        return b.scholarMetrics.citations - a.scholarMetrics.citations;
      } else if (metricFilter === "hIndex") {
        return b.scholarMetrics.hIndex - a.scholarMetrics.hIndex;
      } else {
        return b.scholarMetrics.i10Index - a.scholarMetrics.i10Index;
      }
    });

  return (
    <div className="space-y-6">
      <ExploreFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        metricFilter={metricFilter}
        setMetricFilter={setMetricFilter}
        selectedFaculties={selectedFaculties}
        setSelectedFaculties={setSelectedFaculties}
        faculties={faculties}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProfiles.map((profile, index) => (
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