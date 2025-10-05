import { useState, useMemo } from "react";
import {
  Box,
  Container,
  Typography,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { TaskCard } from "@/components/TaskCard";
import { TaskDetailPanel } from "@/components/TaskDetailPanel";
import { TopFilters } from "@/components/TopFilters";
import { CategoryFilters } from "@/components/CategoryFilters";
import { mockTasks, Task } from "@/data/mockTasks";

export default function AllTasks() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [appliedTasks, setAppliedTasks] = useState<Set<string>>(new Set());
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [priceSort, setPriceSort] = useState("none");
  const [urgentOnly, setUrgentOnly] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleApply = (taskId: string) => {
    setAppliedTasks(prev => new Set(prev).add(taskId));
    setSnackbarOpen(true);
  };

  const handleCategoryToggle = (category: string) => {
    setSelectedCategories(prev =>
      prev.includes(category)
        ? prev.filter(c => c !== category)
        : [...prev, category]
    );
  };

  const filteredTasks = useMemo(() => {
    let tasks = [...mockTasks];

    // Search filter
    if (searchQuery) {
      tasks = tasks.filter(task =>
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // City filter
    if (selectedCity !== "All Cities") {
      tasks = tasks.filter(task => task.city === selectedCity);
    }

    // Urgent filter
    if (urgentOnly) {
      tasks = tasks.filter(task => task.isUrgent);
    }

    // Category filter
    if (selectedCategories.length > 0) {
      tasks = tasks.filter(task =>
        selectedCategories.includes(task.category)
      );
    }

    // Price sorting
    if (priceSort === "asc") {
      tasks.sort((a, b) => a.budget - b.budget);
    } else if (priceSort === "desc") {
      tasks.sort((a, b) => b.budget - a.budget);
    }

    return tasks;
  }, [searchQuery, selectedCity, urgentOnly, selectedCategories, priceSort]);

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      {/* Header */}
      <Paper elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Container maxWidth="xl" sx={{ py: 2 }}>
          <Typography variant="h4" fontWeight={700}>
            Browse Available Tasks
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
            {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} available
          </Typography>
        </Container>
      </Paper>

      {/* Top Filters Panel */}
      <Box sx={{ position: "sticky", top: 0, zIndex: 10 }}>
        <TopFilters
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCity={selectedCity}
          onCityChange={setSelectedCity}
          priceSort={priceSort}
          onPriceSortChange={setPriceSort}
          urgentOnly={urgentOnly}
          onUrgentToggle={() => setUrgentOnly(!urgentOnly)}
        />
      </Box>

      <Container maxWidth="xl" sx={{ py: 3 }}>
        <Box sx={{ display: "flex", gap: 3 }}>
          {/* Left Panel - Category Filters */}
          <Box sx={{ width: { xs: "100%", lg: "25%" }, display: { xs: "none", lg: "block" } }}>
            <CategoryFilters
              selectedCategories={selectedCategories}
              onCategoryToggle={handleCategoryToggle}
            />
          </Box>

          {/* Center Panel - Task Cards */}
          <Box sx={{ width: { xs: "100%", lg: "41.666%" }, flexGrow: 1 }}>
            {filteredTasks.length === 0 ? (
              <Paper sx={{ p: 6, textAlign: "center" }}>
                <Typography color="text.secondary">
                  No tasks found matching your criteria.
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                  Try adjusting your filters.
                </Typography>
              </Paper>
            ) : (
              <Box display="flex" flexDirection="column" gap={2}>
                {filteredTasks.map(task => (
                  <TaskCard
                    key={task.id}
                    task={task}
                    isSelected={selectedTask?.id === task.id}
                    onSelect={() => setSelectedTask(task)}
                    onApply={() => handleApply(task.id)}
                    isApplied={appliedTasks.has(task.id)}
                  />
                ))}
              </Box>
            )}
          </Box>

          {/* Right Panel - Task Detail */}
          <Box sx={{ width: { xs: "100%", lg: "33.333%" }, display: { xs: "none", lg: "block" } }}>
            <Box
              sx={{
                position: { lg: "sticky" },
                top: { lg: 96 },
                height: { lg: "calc(100vh - 120px)" },
              }}
            >
              <TaskDetailPanel
                task={selectedTask}
                onApply={() => selectedTask && handleApply(selectedTask.id)}
                isApplied={selectedTask ? appliedTasks.has(selectedTask.id) : false}
              />
            </Box>
          </Box>
        </Box>
      </Container>

      {/* Snackbar for success message */}
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: "100%" }}>
          Application submitted successfully!
        </Alert>
      </Snackbar>
    </Box>
  );
}
