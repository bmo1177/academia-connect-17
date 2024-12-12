import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Quote, Hash } from "lucide-react";

interface ProfileCardProps {
  name: string;
  title: string;
  institution: string;
  interests: string[];
  imageUrl?: string;
  scholarMetrics?: {
    citations: number;
    hIndex: number;
    i10Index: number;
  };
}

const ProfileCard = ({ 
  name, 
  title, 
  institution, 
  interests, 
  imageUrl,
  scholarMetrics 
}: ProfileCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader className="flex flex-row items-center gap-4">
        <Avatar className="h-16 w-16">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div>
          <CardTitle>{name}</CardTitle>
          <p className="text-sm text-muted-foreground">{title}</p>
          <p className="text-sm text-muted-foreground">{institution}</p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <Badge key={index} variant="secondary">
                {interest}
              </Badge>
            ))}
          </div>
          
          {scholarMetrics && (
            <div className="grid grid-cols-3 gap-2 pt-2 border-t">
              <div className="flex items-center gap-1">
                <Quote className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">{scholarMetrics.citations}</span>
              </div>
              <div className="flex items-center gap-1">
                <Hash className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">h-{scholarMetrics.hIndex}</span>
              </div>
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm font-medium">i10-{scholarMetrics.i10Index}</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;