import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Search, MessageSquare, BookOpen, Clock, Users, ArrowRight } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import ExploreSection from "@/components/ExploreSection";
import UserMenu from "@/components/UserMenu";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-6 min-h-screen pb-20">
      <header className="mb-8 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-bold text-center mb-4">Academia Connect</h1>
          <p className="text-center text-muted-foreground">
            Connect with researchers worldwide and build your academic network
          </p>
        </div>
        <UserMenu />
      </header>

      <Tabs defaultValue="explore" className="w-full">
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
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h4 className="text-sm font-medium leading-none">Recent Messages</h4>
                    <p className="text-sm text-muted-foreground">Start conversations with your connections</p>
                  </div>
                  <Button variant="outline" size="sm">
                    New Message <MessageSquare className="ml-2 h-4 w-4" />
                  </Button>
                </div>

                <div className="rounded-lg border">
                  <div className="p-6 text-center">
                    <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/50" />
                    <h3 className="mt-4 text-lg font-semibold">Start a Conversation</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Connect with researchers to discuss collaborations and share ideas
                    </p>
                    <div className="mt-4 space-x-4">
                      <Button>Find Researchers</Button>
                      <Button variant="outline">View Connections</Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
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
                  <Button variant="outline" size="sm">
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
                      <Button className="w-full">Create Project</Button>
                    </div>
                  </Card>

                  <Card className="p-6">
                    <div className="flex flex-col items-center space-y-4">
                      <Users className="h-12 w-12 text-muted-foreground/50" />
                      <h3 className="text-lg font-semibold">Join Projects</h3>
                      <p className="text-sm text-center text-muted-foreground">
                        Discover and join ongoing research projects
                      </p>
                      <Button variant="outline" className="w-full">Browse Projects</Button>
                    </div>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Floating Navigation Footer */}
      <div className="fixed bottom-0 left-0 right-0 bg-background/80 backdrop-blur-sm border-t p-2 shadow-lg">
        <Tabs defaultValue="explore">
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
        </Tabs>
      </div>
    </div>
  );
};

export default Index;