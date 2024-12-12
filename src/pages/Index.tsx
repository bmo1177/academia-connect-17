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
            <CardContent>
              <p className="text-muted-foreground">
                Connect to Supabase to enable connections feature
              </p>
              <Button className="mt-4">Connect to Supabase</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="messages">
          <Card>
            <CardHeader>
              <CardTitle>Messages</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect to Supabase to enable messaging feature
              </p>
              <Button className="mt-4">Connect to Supabase</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects">
          <Card>
            <CardHeader>
              <CardTitle>Research Projects</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Connect to Supabase to enable projects feature
              </p>
              <Button className="mt-4">Connect to Supabase</Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

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
    </div>
  );
};

export default Index;