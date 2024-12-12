import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";

interface NotificationsDialogProps {
  open: boolean;
  onClose: () => void;
}

const NotificationsDialog = ({ open, onClose }: NotificationsDialogProps) => {
  const notifications = [
    {
      id: 1,
      type: "connection",
      message: "Dr. Sarah Johnson sent you a connection request",
      timestamp: "2 hours ago",
      read: false
    },
    {
      id: 2,
      type: "publication",
      message: "Your paper 'Advanced Machine Learning Techniques' has been cited 5 new times",
      timestamp: "1 day ago",
      read: true
    },
    {
      id: 3,
      type: "message",
      message: "Prof. Michael Chen sent you a message about collaboration",
      timestamp: "2 days ago",
      read: true
    }
  ];

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Notifications</DialogTitle>
        </DialogHeader>
        <ScrollArea className="h-[400px] pr-4">
          <div className="space-y-4">
            {notifications.map((notification) => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg border ${
                  !notification.read ? "bg-secondary" : ""
                }`}
              >
                <p className="font-medium">{notification.message}</p>
                <p className="text-sm text-muted-foreground mt-1">
                  {notification.timestamp}
                </p>
              </div>
            ))}
          </div>
        </ScrollArea>
        <div className="flex justify-between pt-4">
          <Button variant="outline">Mark all as read</Button>
          <Button onClick={onClose}>Close</Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default NotificationsDialog;