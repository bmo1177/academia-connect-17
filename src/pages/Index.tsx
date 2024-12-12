import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { UserPlus, Search, MessageSquare, BookOpen } from "lucide-react";
import ProfileCard from "@/components/ProfileCard";
import ExploreSection from "@/components/ExploreSection";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-6 min-h-screen">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-center mb-4">Academia Connect</h1>
        <p className="text-center text-muted-foreground">
          Connect with researchers worldwide and build your academic network
        </p>
      </header>

      <Tabs defaultValue="explore" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="explore" className="flex gap-2 items-center">
            <Search className="h-4 w-4" />
            Explore
          </TabsTrigger>
          <TabsTrigger value="connections" className="flex gap-2 items-center">
            <UserPlus className="h-4 w-4" />
            Connect
          </TabsTrigger>
          <TabsTrigger value="messages" className="flex gap-2 items-center">
            <MessageSquare className="h-4 w-4" />
            Messages
          </TabsTrigger>
          <TabsTrigger value="projects" className="flex gap-2 items-center">
            <BookOpen className="h-4 w-4" />
            Projects
          </TabsTrigger>
        </TabsList>

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
    </div>
  );
};

export default Index;