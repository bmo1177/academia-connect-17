import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, UserPlus, MessageSquare, BookOpen, ArrowRight, Users, Clock } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import UserMenu from "@/components/UserMenu";
import ExploreSection from "@/components/ExploreSection";
import MessagesTab from "@/components/messages/MessagesTab";
import ProjectsGrid from "@/components/ProjectsGrid";
import { useState } from "react";
import CreateProjectDialog from "@/components/dialogs/CreateProjectDialog";

const Index = () => {
  const [activeTab, setActiveTab] = useState("projects");
  const [showCreateProjectDialog, setShowCreateProjectDialog] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6 min-h-screen pb-20">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">Département Informatique</h1>
          <p className="text-center text-muted-foreground">
            Liste des PFE - Année Universitaire 2024/2025
          </p>
        </div>
        <UserMenu />
      </header>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsContent value="explore">
          <ExploreSection />
        </TabsContent>

        <TabsContent value="connections">
          <Card>
            <CardHeader>
              <CardTitle>Your Connections</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Recent Connections</h4>
                    <p className="text-sm text-muted-foreground">Connect with researchers in your field</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View All <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <Card className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <Users className="h-12 w-12 text-muted-foreground/50" />
                      <h3 className="text-lg font-semibold">Suggested Connections</h3>
                      <p className="text-sm text-center text-muted-foreground">
                        Discover researchers based on your research interests
                      </p>
                      <Button className="w-full">Find Researchers</Button>
                    </div>
                  </Card>
                  
                  <Card className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <Clock className="h-12 w-12 text-muted-foreground/50" />
                      <h3 className="text-lg font-semibold">Recent Activity</h3>
                      <p className="text-sm text-center text-muted-foreground">
                        Stay updated with your network's activities
                      </p>
                      <Button variant="outline" className="w-full">View Activity</Button>
                    </div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <MessagesTab />
        </TabsContent>

        <TabsContent value="projects">
          <ProjectsGrid />
        </TabsContent>

        {/* Floating Navigation Footer */}
        <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-2 shadow-lg">
          <TabsList className="grid w-full grid-cols-4 max-w-md mx-auto">
            <TabsTrigger value="explore" className="flex flex-col gap-1 items-center py-2">
              <Search className="h-5 w-5" />
              <span className="text-xs">Explore</span>
            </TabsTrigger>
            <TabsTrigger value="connections" className="flex flex-col gap-1 items-center py-2">
              <UserPlus className="h-5 w-5" />
              <span className="text-xs">Connect</span>
            </TabsTrigger>
            <TabsTrigger value="messages" className="flex flex-col gap-1 items-center py-2">
              <MessageSquare className="h-5 w-5" />
              <span className="text-xs">Messages</span>
            </TabsTrigger>
            <TabsTrigger value="projects" className="flex flex-col gap-1 items-center py-2">
              <BookOpen className="h-5 w-5" />
              <span className="text-xs">Projects</span>
            </TabsTrigger>
          </TabsList>
        </div>
      </Tabs>

      <CreateProjectDialog 
        open={showCreateProjectDialog} 
        onOpenChange={setShowCreateProjectDialog}
      />
    </div>
  );
};

export default Index;