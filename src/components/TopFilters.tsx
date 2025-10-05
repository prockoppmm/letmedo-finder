import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, AlertCircle } from "lucide-react";

interface TopFiltersProps {
  searchQuery: string;
  onSearchChange: (value: string) => void;
  selectedCity: string;
  onCityChange: (value: string) => void;
  priceSort: string;
  onPriceSortChange: (value: string) => void;
  urgentOnly: boolean;
  onUrgentToggle: () => void;
}

export function TopFilters({
  searchQuery,
  onSearchChange,
  selectedCity,
  onCityChange,
  priceSort,
  onPriceSortChange,
  urgentOnly,
  onUrgentToggle,
}: TopFiltersProps) {
  const cities = ["All Cities", "New York", "Los Angeles", "Chicago", "Houston"];

  return (
    <div className="bg-card border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="space-y-4">
          <div className="relative max-w-3xl mx-auto">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Search tasks by title or keywords..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-12 h-12 text-base"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 max-w-4xl mx-auto">
            <Select value={selectedCity} onValueChange={onCityChange}>
              <SelectTrigger className="h-10">
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
              <SelectTrigger className="h-10">
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
              className="w-full h-10"
            >
              <AlertCircle className="h-4 w-4 mr-2" />
              {urgentOnly ? "Showing Urgent" : "All Tasks"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
