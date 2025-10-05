import { Task } from "@/data/mockTasks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { MapPin, Calendar, DollarSign, AlertCircle, User } from "lucide-react";
import { cn } from "@/lib/utils";

interface TaskDetailPanelProps {
  task: Task | null;
  onApply: () => void;
  isApplied?: boolean;
}

export function TaskDetailPanel({ task, onApply, isApplied }: TaskDetailPanelProps) {
  if (!task) {
    return (
      <Card className="h-full p-8 flex items-center justify-center">
        <div className="text-center text-muted-foreground">
          <MapPin className="h-12 w-12 mx-auto mb-3 opacity-50" />
          <p>Select a task to view details</p>
        </div>
      </Card>
    );
  }

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "open":
        return "bg-success text-success-foreground";
      case "assigned":
        return "bg-warning text-warning-foreground";
      case "completed":
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <Card className="h-full overflow-auto">
      <div className="p-6 space-y-6">
        {/* Header */}
        <div>
          <div className="flex items-start justify-between mb-3">
            <h2 className="text-2xl font-bold text-foreground pr-4">{task.title}</h2>
            {task.isUrgent && (
              <Badge variant="destructive" className="flex items-center gap-1 flex-shrink-0">
                <AlertCircle className="h-3 w-3" />
                Urgent
              </Badge>
            )}
          </div>
          <Badge className={cn("text-xs", getStatusColor(task.status))}>
            {task.status.toUpperCase()}
          </Badge>
        </div>

        {/* Task Info */}
        <div className="space-y-3">
          <div className="flex items-center text-foreground">
            <MapPin className="h-5 w-5 mr-3 text-primary" />
            <div>
              <p className="font-medium">{task.location}</p>
              <p className="text-sm text-muted-foreground">{task.city}</p>
            </div>
          </div>
          <div className="flex items-center text-foreground">
            <Calendar className="h-5 w-5 mr-3 text-primary" />
            <span>{new Date(task.date).toLocaleDateString('en-US', { 
              weekday: 'long', 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</span>
          </div>
          <div className="flex items-center text-foreground">
            <DollarSign className="h-5 w-5 mr-3 text-primary" />
            <span className="text-xl font-bold">{task.budget} {task.currency}</span>
          </div>
        </div>

        {/* Description */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">Description</h3>
          <p className="text-muted-foreground leading-relaxed">{task.description}</p>
        </div>

        {/* Map Placeholder */}
        <div>
          <h3 className="font-semibold text-foreground mb-2">Location</h3>
          <div className="bg-accent rounded-lg overflow-hidden h-48 flex items-center justify-center border border-border">
            <div className="text-center text-muted-foreground">
              <MapPin className="h-12 w-12 mx-auto mb-2 text-primary" />
              <p className="text-sm">Map View</p>
              <p className="text-xs">{task.coordinates.lat.toFixed(4)}, {task.coordinates.lng.toFixed(4)}</p>
            </div>
          </div>
        </div>

        {/* Poster Info */}
        <div>
          <h3 className="font-semibold text-foreground mb-3">Posted By</h3>
          <div className="flex items-center gap-3 p-3 bg-accent rounded-lg">
            <Avatar className="h-12 w-12">
              <AvatarFallback className="bg-primary text-primary-foreground">
                {task.posterInitials}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium text-foreground">{task.posterName}</p>
              <p className="text-sm text-muted-foreground flex items-center gap-1">
                <User className="h-3 w-3" />
                Task Poster
              </p>
            </div>
          </div>
        </div>

        {/* Apply Button */}
        <Button
          className="w-full"
          size="lg"
          variant={isApplied ? "outline" : "default"}
          disabled={isApplied || task.status !== "open"}
          onClick={onApply}
        >
          {isApplied ? "Applied" : task.status !== "open" ? "Not Available" : "Apply for This Task"}
        </Button>
      </div>
    </Card>
  );
}
