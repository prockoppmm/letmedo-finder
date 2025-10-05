import {
  Card,
  CardContent,
  CardActions,
  Chip,
  Button,
  Typography,
  Box,
} from "@mui/material";
import {
  LocationOn as MapPinIcon,
  CalendarToday as CalendarIcon,
  AttachMoney as DollarSignIcon,
  Warning as AlertCircleIcon,
} from "@mui/icons-material";
import { Task } from "@/data/mockTasks";

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
        return "success";
      case "assigned":
        return "warning";
      case "completed":
        return "default";
    }
  };

  return (
    <Card
      onClick={onSelect}
      sx={{
        cursor: "pointer",
        border: isSelected ? 2 : 0,
        borderColor: isSelected ? "primary.main" : "transparent",
        transition: "all 0.3s",
        "&:hover": {
          boxShadow: 3,
        },
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="flex-start" justifyContent="space-between" mb={2}>
          <Box flex={1}>
            <Box display="flex" alignItems="flex-start" gap={1} mb={1}>
              <Typography variant="h6" component="h3" sx={{ flex: 1, lineHeight: 1.3 }}>
                {task.title}
              </Typography>
              {task.isUrgent && (
                <AlertCircleIcon color="error" sx={{ flexShrink: 0, mt: 0.5 }} />
              )}
            </Box>
            <Chip
              label={task.status.toUpperCase()}
              color={getStatusColor(task.status) as any}
              size="small"
            />
          </Box>
        </Box>

        <Box display="flex" flexDirection="column" gap={1} mb={2}>
          <Box display="flex" alignItems="center" color="text.secondary">
            <MapPinIcon sx={{ fontSize: 18, mr: 1 }} />
            <Typography variant="body2" noWrap>
              {task.location}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center" color="text.secondary">
            <CalendarIcon sx={{ fontSize: 18, mr: 1 }} />
            <Typography variant="body2">
              {new Date(task.date).toLocaleDateString()}
            </Typography>
          </Box>
          <Box display="flex" alignItems="center">
            <DollarSignIcon sx={{ fontSize: 18, mr: 1 }} />
            <Typography variant="body2" fontWeight={600}>
              {task.budget} {task.currency}
            </Typography>
          </Box>
        </Box>
      </CardContent>

      <CardActions>
        <Button
          fullWidth
          variant={isApplied ? "outlined" : "contained"}
          disabled={isApplied || task.status !== "open"}
          onClick={(e) => {
            e.stopPropagation();
            onApply();
          }}
        >
          {isApplied ? "Applied" : "Apply Now"}
        </Button>
      </CardActions>
    </Card>
  );
}
