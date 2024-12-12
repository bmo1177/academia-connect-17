import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Search, MessageSquare, BookOpen } from "lucide-react";
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
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Start building your academic network by connecting with researchers in your field.
              </p>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="p-4">
                  <p className="text-center text-muted-foreground">No connections yet</p>
                  <Button className="w-full mt-4">Find Researchers</Button>
                </Card>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Connect with researchers and start conversations about potential collaborations.
              </p>
              <div className="rounded-lg border p-8 text-center">
                <MessageSquare className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold">No messages yet</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Connect with researchers to start conversations
                </p>
                <Button className="mt-4">Find Researchers</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Research Projects</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Create or join research projects and collaborate with other researchers.
              </p>
              <div className="rounded-lg border p-8 text-center">
                <BookOpen className="mx-auto h-12 w-12 text-muted-foreground/50" />
                <h3 className="mt-4 text-lg font-semibold">No active projects</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Start a new project or join existing ones
                </p>
                <Button className="mt-4">Create Project</Button>
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