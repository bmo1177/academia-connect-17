import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Search, MessageSquare, BookOpen } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import ProfileCard from "@/components/ProfileCard";
import ExploreSection from "@/components/ExploreSection";
import UserMenu from "@/components/UserMenu";
import CreateProjectDialog from "@/components/dialogs/CreateProjectDialog";
import MessagesTab from "@/components/messages/MessagesTab";
import { useState } from "react";

const Index = () => {
  const [activeTab, setActiveTab] = useState("explore");
  const [showCreateProjectDialog, setShowCreateProjectDialog] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6 min-h-screen pb-20">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">Consortio</h1>
          <p className="text-center text-muted-foreground">
            Global teams for global solutions
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
          <Card>
            <CardHeader>
              <CardTitle>Research Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Your Projects</h4>
                    <p className="text-sm text-muted-foreground">Manage your research projects and collaborations</p>
                  </div>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => setShowCreateProjectDialog(true)}
                  >
                    Create Project <BookOpen className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <Card className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <BookOpen className="h-12 w-12 text-muted-foreground/50" />
                      <h3 className="text-lg font-semibold">Start a New Project</h3>
                      <p className="text-sm text-center text-muted-foreground">
                        Create a research project and invite collaborators
                      </p>
                      <Button 
                        className="w-full"
                        onClick={() => setShowCreateProjectDialog(true)}
                      >
                        Create Project
                      </Button>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <Users className="h-12 w-12 text-muted-foreground/50" />
                      <h3 className="text-lg font-semibold">Join Projects</h3>
                      <p className="text-sm text-center text-muted-foreground">
                        Discover and join ongoing research projects
                      </p>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline" className="w-full">Browse Projects</Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-3xl max-h-[80vh] overflow-y-auto">
                          <DialogHeader>
                            <DialogTitle>Available Research Projects</DialogTitle>
                            <DialogDescription>
                              Explore ongoing research projects and find opportunities to collaborate
                            </DialogDescription>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            {projects.map((project, index) => (
                              <Card key={index} className="p-4">
                                <div className="flex items-start gap-4">
                                  <div className="p-2 bg-primary/10 rounded-lg">
                                    <project.icon className="h-8 w-8 text-primary" />
                                  </div>
                                  <div className="flex-1 space-y-2">
                                    <h3 className="font-semibold">{project.title}</h3>
                                    <p className="text-sm text-muted-foreground">{project.description}</p>
                                    <div className="flex items-center gap-2 text-sm">
                                      <span className="font-medium">Lead:</span>
                                      <span>{project.lead}</span>
                                      <span className="font-medium ml-4">Institution:</span>
                                      <span>{project.institution}</span>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {project.tags.map((tag, tagIndex) => (
                                        <span
                                          key={tagIndex}
                                          className="px-2 py-1 bg-secondary text-secondary-foreground text-xs rounded-full"
                                        >
                                          {tag}
                                        </span>
                                      ))}
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                      <span className="text-sm text-muted-foreground">
                                        {project.openings} positions available
                                      </span>
                                      <Button size="sm">Apply Now</Button>
                                    </div>
                                  </div>
                                </div>
                              </Card>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
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
