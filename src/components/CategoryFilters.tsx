import { Button, Chip, Box, Paper, Typography } from "@mui/material";
import { Close as XIcon } from "@mui/icons-material";
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
    <Paper sx={{ p: 2 }}>
      <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
        <Typography variant="h6" fontWeight={600}>
          Categories
        </Typography>
        {selectedCategories.length > 0 && (
          <Button
            size="small"
            startIcon={<XIcon />}
            onClick={() => selectedCategories.forEach(onCategoryToggle)}
          >
            Clear
          </Button>
        )}
      </Box>

      <Box sx={{ maxHeight: "calc(100vh - 280px)", overflowY: "auto", pr: 1 }}>
        <Box display="flex" flexDirection="column" gap={3}>
          {categories.map((group) => (
            <Box key={group.group}>
              <Typography variant="subtitle2" fontWeight={500} mb={1}>
                {group.group}
              </Typography>
              <Box display="flex" flexWrap="wrap" gap={1}>
                {group.items.map((category) => {
                  const isSelected = selectedCategories.includes(category);
                  return (
                    <Chip
                      key={category}
                      label={category}
                      variant={isSelected ? "filled" : "outlined"}
                      color={isSelected ? "primary" : "default"}
                      onClick={() => onCategoryToggle(category)}
                      sx={{ cursor: "pointer" }}
                    />
                  );
                })}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Paper>
  );
}
