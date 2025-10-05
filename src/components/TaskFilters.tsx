import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, AlertCircle, X } from "lucide-react";
import { categories } from "@/data/mockTasks";

interface TaskFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCity: string;
  onCityChange: (value: string) => void;
  priceSort: string;
  onPriceSortChange: (value: string) => void;
  urgentOnly: boolean;
  onUrgentToggle: () => void;
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

export function TaskFilters({
  searchQuery,
  onSearchChange,
  selectedCity,
  onCityChange,
  priceSort,
  onPriceSortChange,
  urgentOnly,
  onUrgentToggle,
  selectedCategories,
  onCategoryToggle,
}: TaskFiltersProps) {
  const cities = ["All Cities", "New York", "Los Angeles", "Chicago", "Houston"];

  return (
    <div className="space-y-6">
      {/* Top Filters */}
      <div className="bg-card p-4 rounded-lg border border-border space-y-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search tasks by title or keywords..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="pl-10"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          <Select value={selectedCity} onValueChange={onCityChange}>
            <SelectTrigger>
              <SelectValue placeholder="Select location" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={priceSort} onValueChange={onPriceSortChange}>
            <SelectTrigger>
              <SelectValue placeholder="Sort by price" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="none">No sorting</SelectItem>
              <SelectItem value="asc">Price: Low to High</SelectItem>
              <SelectItem value="desc">Price: High to Low</SelectItem>
            </SelectContent>
          </Select>

          <Button
            variant={urgentOnly ? "default" : "outline"}
            onClick={onUrgentToggle}
            className="w-full"
          >
            <AlertCircle className="h-4 w-4 mr-2" />
            {urgentOnly ? "Showing Urgent" : "All Tasks"}
          </Button>
        </div>
      </div>

      {/* Category Filters */}
      <div className="bg-card p-4 rounded-lg border border-border">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold text-foreground">Categories</h3>
          {selectedCategories.length > 0 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => selectedCategories.forEach(onCategoryToggle)}
              className="h-8 text-xs"
            >
              <X className="h-3 w-3 mr-1" />
              Clear
            </Button>
          )}
        </div>

        <ScrollArea className="h-[500px] pr-4">
          <div className="space-y-4">
            {categories.map((group) => (
              <div key={group.group}>
                <h4 className="font-medium text-sm text-foreground mb-2">
                  {group.group}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((category) => {
                    const isSelected = selectedCategories.includes(category);
                    return (
                      <Badge
                        key={category}
                        variant={isSelected ? "default" : "outline"}
                        className="cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => onCategoryToggle(category)}
                      >
                        {category}
                      </Badge>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
}
