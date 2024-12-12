import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Quote, Hash, MapPin } from "lucide-react";

interface ProfileCardProps {
  name: string;
  title: string;
  institution: string;
  location: string;
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
  location, 
  interests, 
  imageUrl,
  scholarMetrics 
}: ProfileCardProps) => {
  return (
    <Card className="w-full max-w-md mx-auto hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 border-2">
      <CardHeader className="flex flex-row items-center gap-4 pb-6">
        <Avatar className="h-20 w-20 ring-2 ring-primary/20 ring-offset-2">
          <AvatarImage src={imageUrl} alt={name} />
          <AvatarFallback className="bg-primary/5 text-lg">{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/80">
            {name}
          </CardTitle>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-sm text-muted-foreground/80">{institution}</p>
          <p className="text-sm text-muted-foreground/70 flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
          </p>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2">
            {interests.map((interest, index) => (
              <Badge 
                key={index} 
                variant="secondary"
                className="bg-primary/10 hover:bg-primary/20 text-primary transition-colors duration-200"
              >
                {interest}
              </Badge>
            ))}
          </div>
          
          {scholarMetrics && (
            <div className="grid grid-cols-3 gap-4 pt-4 mt-4 border-t border-primary/10">
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <Quote className="h-4 w-4 text-primary/70" />
                <span className="text-sm font-semibold">{scholarMetrics.citations}</span>
                <span className="text-xs text-muted-foreground">Citations</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <Hash className="h-4 w-4 text-primary/70" />
                <span className="text-sm font-semibold">h-{scholarMetrics.hIndex}</span>
                <span className="text-xs text-muted-foreground">h-index</span>
              </div>
              <div className="flex flex-col items-center gap-1 p-2 rounded-lg bg-primary/5 hover:bg-primary/10 transition-colors">
                <BookOpen className="h-4 w-4 text-primary/70" />
                <span className="text-sm font-semibold">i10-{scholarMetrics.i10Index}</span>
                <span className="text-xs text-muted-foreground">i10-index</span>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;