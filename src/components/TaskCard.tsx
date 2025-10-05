import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Calendar, DollarSign, AlertCircle } from "lucide-react";
import { Task } from "@/data/mockTasks";
import { cn } from "@/lib/utils";

interface TaskCardProps {
  task: Task;
  isSelected?: boolean;
  onSelect: () => void;
  onApply: () => void;
  isApplied?: boolean;
}

export function TaskCard({ task, isSelected, onSelect, onApply, isApplied }: TaskCardProps) {
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
    <Card
      className={cn(
        "p-4 cursor-pointer transition-all hover:shadow-md",
        isSelected && "ring-2 ring-primary shadow-lg"
      )}
      onClick={onSelect}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <div className="flex items-start gap-2 mb-2">
            <h3 className="font-semibold text-foreground line-clamp-2 flex-1">
              {task.title}
            </h3>
            {task.isUrgent && (
              <AlertCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
            )}
          </div>
          <Badge className={cn("text-xs", getStatusColor(task.status))}>
            {task.status.toUpperCase()}
          </Badge>
        </div>
      </div>

      <div className="space-y-2 mb-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
          <span className="truncate">{task.location}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{new Date(task.date).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center text-sm font-semibold text-foreground">
          <DollarSign className="h-4 w-4 mr-2 flex-shrink-0" />
          <span>{task.budget} {task.currency}</span>
        </div>
      </div>

      <Button
        className="w-full"
        variant={isApplied ? "outline" : "default"}
        disabled={isApplied || task.status !== "open"}
        onClick={(e) => {
          e.stopPropagation();
          onApply();
        }}
      >
        {isApplied ? "Applied" : "Apply Now"}
      </Button>
    </Card>
  );
}
