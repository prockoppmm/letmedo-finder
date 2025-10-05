import {
  Card,
  CardContent,
  Chip,
  Button,
  Typography,
  Box,
  Avatar,
  Paper,
} from "@mui/material";
import {
  LocationOn as MapPinIcon,
  CalendarToday as CalendarIcon,
  AttachMoney as DollarSignIcon,
  Warning as AlertCircleIcon,
  Person as UserIcon,
} from "@mui/icons-material";
import { Task } from "@/data/mockTasks";

interface TaskDetailPanelProps {
  task: Task | null;
  onApply: () => void;
  isApplied?: boolean;
}

export function TaskDetailPanel({ task, onApply, isApplied }: TaskDetailPanelProps) {
  if (!task) {
    return (
      <Card sx={{ height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <CardContent>
          <Box textAlign="center" color="text.secondary">
            <MapPinIcon sx={{ fontSize: 48, mb: 2, opacity: 0.5 }} />
            <Typography>Select a task to view details</Typography>
          </Box>
        </CardContent>
      </Card>
    );
  }

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
    <Card sx={{ height: "100%", overflow: "auto" }}>
      <CardContent sx={{ p: 3 }}>
        <Box display="flex" flexDirection="column" gap={3}>
          {/* Header */}
          <Box>
            <Box display="flex" alignItems="flex-start" justifyContent="space-between" mb={2}>
              <Typography variant="h4" component="h2" sx={{ pr: 2 }}>
                {task.title}
              </Typography>
              {task.isUrgent && (
                <Chip
                  icon={<AlertCircleIcon />}
                  label="Urgent"
                  color="error"
                  size="small"
                  sx={{ flexShrink: 0 }}
                />
              )}
            </Box>
            <Chip
              label={task.status.toUpperCase()}
              color={getStatusColor(task.status) as any}
              size="small"
            />
          </Box>

          {/* Task Info */}
          <Box display="flex" flexDirection="column" gap={2}>
            <Box display="flex" alignItems="center">
              <MapPinIcon color="primary" sx={{ mr: 2 }} />
              <Box>
                <Typography fontWeight={500}>{task.location}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {task.city}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" alignItems="center">
              <CalendarIcon color="primary" sx={{ mr: 2 }} />
              <Typography>
                {new Date(task.date).toLocaleDateString('en-US', {
                  weekday: 'long',
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </Typography>
            </Box>
            <Box display="flex" alignItems="center">
              <DollarSignIcon color="primary" sx={{ mr: 2 }} />
              <Typography variant="h5" fontWeight={700}>
                {task.budget} {task.currency}
              </Typography>
            </Box>
          </Box>

          {/* Description */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Description
            </Typography>
            <Typography color="text.secondary" sx={{ lineHeight: 1.7 }}>
              {task.description}
            </Typography>
          </Box>

          {/* Map Placeholder */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Location
            </Typography>
            <Paper
              variant="outlined"
              sx={{
                height: 192,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                bgcolor: "action.hover",
              }}
            >
              <Box textAlign="center" color="text.secondary">
                <MapPinIcon color="primary" sx={{ fontSize: 48, mb: 1 }} />
                <Typography variant="body2">Map View</Typography>
                <Typography variant="caption">
                  {task.coordinates.lat.toFixed(4)}, {task.coordinates.lng.toFixed(4)}
                </Typography>
              </Box>
            </Paper>
          </Box>

          {/* Poster Info */}
          <Box>
            <Typography variant="h6" gutterBottom fontWeight={600}>
              Posted By
            </Typography>
            <Paper variant="outlined" sx={{ p: 2, bgcolor: "action.hover" }}>
              <Box display="flex" alignItems="center" gap={2}>
                <Avatar sx={{ bgcolor: "primary.main", width: 48, height: 48 }}>
                  {task.posterInitials}
                </Avatar>
                <Box>
                  <Typography fontWeight={500}>{task.posterName}</Typography>
                  <Box display="flex" alignItems="center" gap={0.5}>
                    <UserIcon sx={{ fontSize: 14 }} />
                    <Typography variant="body2" color="text.secondary">
                      Task Poster
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
          </Box>

          {/* Apply Button */}
          <Button
            fullWidth
            size="large"
            variant={isApplied ? "outlined" : "contained"}
            disabled={isApplied || task.status !== "open"}
            onClick={onApply}
          >
            {isApplied ? "Applied" : task.status !== "open" ? "Not Available" : "Apply for This Task"}
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
