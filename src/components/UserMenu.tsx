import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { User, Settings, BookOpen, Bell, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useState } from "react";
import ProfileDialog from "./dialogs/ProfileDialog";
import SettingsDialog from "./dialogs/SettingsDialog";
import PublicationsDialog from "./dialogs/PublicationsDialog";
import NotificationsDialog from "./dialogs/NotificationsDialog";

const UserMenu = () => {
  const [activeDialog, setActiveDialog] = useState<string | null>(null);

  const closeDialog = () => setActiveDialog(null);

  const handleLogoutClick = () => {
    console.log("Logout user");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="relative h-10 w-10 rounded-full">
            <Avatar>
              <AvatarImage src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" alt="User avatar" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" align="end">
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setActiveDialog("profile")}>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveDialog("settings")}>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveDialog("publications")}>
            <BookOpen className="mr-2 h-4 w-4" />
            <span>Publications</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setActiveDialog("notifications")}>
            <Bell className="mr-2 h-4 w-4" />
            <span>Notifications</span>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={handleLogoutClick}>
            <LogOut className="mr-2 h-4 w-4" />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <ProfileDialog open={activeDialog === "profile"} onClose={closeDialog} />
      <SettingsDialog open={activeDialog === "settings"} onClose={closeDialog} />
      <PublicationsDialog open={activeDialog === "publications"} onClose={closeDialog} />
      <NotificationsDialog open={activeDialog === "notifications"} onClose={closeDialog} />
    </>
  );
};

export default UserMenu;