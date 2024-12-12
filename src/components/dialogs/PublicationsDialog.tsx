import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface PublicationsDialogProps {
  open: boolean;
  onClose: () => void;
}

const PublicationsDialog = ({ open, onClose }: PublicationsDialogProps) => {
  const publications = [
    {
      title: "Advanced Machine Learning Techniques in Modern Computing",
      journal: "Journal of Artificial Intelligence",
      year: 2023,
      citations: 45,
      coAuthors: ["Jane Smith", "Robert Johnson"],
      doi: "10.1234/ai.2023.1234"
    },
    {
      title: "Neural Networks in Computer Vision: A Comprehensive Survey",
      journal: "Computer Vision Review",
      year: 2022,
      citations: 128,
      coAuthors: ["Alice Brown", "Michael Chen"],
      doi: "10.1234/cv.2022.5678"
    },
    {
      title: "Deep Learning Applications in Healthcare",
      journal: "Medical AI Journal",
      year: 2022,
      citations: 89,
      coAuthors: ["Sarah Wilson", "David Lee"],
      doi: "10.1234/med.2022.9012"
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Publications</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <div key={index} className="border-b pb-4 last:border-0">
                <h3 className="font-semibold text-lg mb-2">{pub.title}</h3>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Published in {pub.journal}, {pub.year}</p>
                  <p>Citations: {pub.citations}</p>
                  <p>Co-authors: {pub.coAuthors.join(", ")}</p>
                  <p>DOI: {pub.doi}</p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex justify-end pt-4">
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default PublicationsDialog;