import {
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Paper,
  Container,
  InputAdornment,
} from "@mui/material";
import { Search as SearchIcon, Warning as AlertCircleIcon } from "@mui/icons-material";

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
    <Paper elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
      <Container maxWidth="xl" sx={{ py: 2 }}>
        <Box display="flex" flexDirection="column" gap={2}>
          <Box maxWidth={768} mx="auto" width="100%">
            <TextField
              fullWidth
              placeholder="Search tasks by title or keywords..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              size="medium"
            />
          </Box>

          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "repeat(3, 1fr)" }}
            gap={2}
            maxWidth={896}
            mx="auto"
            width="100%"
          >
            <FormControl fullWidth size="small">
              <InputLabel>Location</InputLabel>
              <Select
                value={selectedCity}
                label="Location"
                onChange={(e) => onCityChange(e.target.value)}
              >
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <FormControl fullWidth size="small">
              <InputLabel>Sort by Price</InputLabel>
              <Select
                value={priceSort}
                label="Sort by Price"
                onChange={(e) => onPriceSortChange(e.target.value)}
              >
                <MenuItem value="none">No sorting</MenuItem>
                <MenuItem value="asc">Price: Low to High</MenuItem>
                <MenuItem value="desc">Price: High to Low</MenuItem>
              </Select>
            </FormControl>

            <Button
              fullWidth
              variant={urgentOnly ? "contained" : "outlined"}
              onClick={onUrgentToggle}
              startIcon={<AlertCircleIcon />}
            >
              {urgentOnly ? "Showing Urgent" : "All Tasks"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Paper>
  );
}
