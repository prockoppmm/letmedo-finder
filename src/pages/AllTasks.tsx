import { useState, useMemo } from "react";
import { TaskCard } from "@/components/TaskCard";
import { TaskDetailPanel } from "@/components/TaskDetailPanel";
import { TopFilters } from "@/components/TopFilters";
import { CategoryFilters } from "@/components/CategoryFilters";
import { mockTasks, Task } from "@/data/mockTasks";
import { toast } from "sonner";

export default function AllTasks() {
  const [selectedTask, setSelectedTask] = useState<Task | null>(null);
  const [appliedTasks, setAppliedTasks] = useState<Set<string>>(new Set());
  
  // Filter states
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCity, setSelectedCity] = useState("All Cities");
  const [priceSort, setPriceSort] = useState("none");
  const [urgentOnly, setUrgentOnly] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

  const handleApply = (taskId: string) => {
    setAppliedTasks(prev => new Set(prev).add(taskId));
    toast.success("Application submitted successfully!");
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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl font-bold text-foreground">Browse Available Tasks</h1>
          <p className="text-sm text-muted-foreground mt-1">
            {filteredTasks.length} {filteredTasks.length === 1 ? 'task' : 'tasks'} available
          </p>
        </div>
      </header>

      {/* Top Filters Panel */}
      <div className="sticky top-0 z-10">
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
      </div>

      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Panel - Category Filters */}
          <aside className="lg:col-span-3">
            <CategoryFilters
              selectedCategories={selectedCategories}
              onCategoryToggle={handleCategoryToggle}
            />
          </aside>

          {/* Center Panel - Task Cards */}
          <main className="lg:col-span-5">
            {filteredTasks.length === 0 ? (
              <div className="bg-card p-12 rounded-lg border border-border text-center">
                <p className="text-muted-foreground">No tasks found matching your criteria.</p>
                <p className="text-sm text-muted-foreground mt-2">Try adjusting your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4">
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
              </div>
            )}
          </main>

          {/* Right Panel - Task Detail */}
          <aside className="lg:col-span-4 lg:sticky lg:top-24 lg:h-[calc(100vh-120px)]">
            <TaskDetailPanel
              task={selectedTask}
              onApply={() => selectedTask && handleApply(selectedTask.id)}
              isApplied={selectedTask ? appliedTasks.has(selectedTask.id) : false}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
