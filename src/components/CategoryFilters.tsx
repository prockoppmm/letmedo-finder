import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { X } from "lucide-react";
import { categories } from "@/data/mockTasks";

interface CategoryFiltersProps {
  selectedCategories: string[];
  onCategoryToggle: (category: string) => void;
}

export function CategoryFilters({
  selectedCategories,
  onCategoryToggle,
}: CategoryFiltersProps) {
  return (
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

      <ScrollArea className="h-[calc(100vh-280px)] pr-4">
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
  );
}
