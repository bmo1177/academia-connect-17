import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

interface ProfileDialogProps {
  open: boolean;
  onClose: () => void;
}

const ProfileDialog = ({ open, onClose }: ProfileDialogProps) => {
  const userProfile = {
    name: "John Doe",
    title: "Associate Professor",
    institution: "Stanford University",
    email: "john.doe@stanford.edu",
    department: "Computer Science",
    researchInterests: ["Artificial Intelligence", "Machine Learning", "Computer Vision"],
    bio: "Leading researcher in AI and machine learning with over 10 years of experience in academic research.",
    imageUrl: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Profile</DialogTitle>
        </DialogHeader>
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src={userProfile.imageUrl} alt={userProfile.name} />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="text-xl font-semibold">{userProfile.name}</h3>
              <p className="text-muted-foreground">{userProfile.title}</p>
              <p className="text-muted-foreground">{userProfile.institution}</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Contact Information</h4>
              <p className="text-muted-foreground">{userProfile.email}</p>
              <p className="text-muted-foreground">Department of {userProfile.department}</p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Research Interests</h4>
              <div className="flex flex-wrap gap-2">
                {userProfile.researchInterests.map((interest, index) => (
                  <span key={index} className="bg-secondary px-2 py-1 rounded-md text-sm">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2">Biography</h4>
              <p className="text-muted-foreground">{userProfile.bio}</p>
            </div>
          </div>

          <div className="flex justify-end">
            <Button onClick={onClose}>Close</Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileDialog;