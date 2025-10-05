import { Box, Container, Typography, Button, Paper } from "@mui/material";
import { Link } from "react-router-dom";
import {
  Search as SearchIcon,
  LocationOn as MapPinIcon,
  AttachMoney as DollarSignIcon,
} from "@mui/icons-material";

const Index = () => {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "background.default" }}>
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box textAlign="center" maxWidth={768} mx="auto" mb={6}>
          <Typography variant="h2" fontWeight={700} gutterBottom>
            Welcome to <Box component="span" color="primary.main">LetMeDo</Box>
          </Typography>
          <Typography variant="h5" color="text.secondary" paragraph>
            Connect with skilled taskers in your area. Get things done, or earn money by helping others.
          </Typography>
          <Button
            component={Link}
            to="/all-tasks"
            variant="contained"
            size="large"
            sx={{ mt: 2, px: 4 }}
          >
            Browse Available Tasks
          </Button>
        </Box>

        <Box 
          sx={{ 
            display: "grid", 
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 4,
            maxWidth: 960,
            mx: "auto",
            mt: 8
          }}
        >
          <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
            <Box
              sx={{
                bgcolor: "primary.light",
                opacity: 0.2,
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <SearchIcon sx={{ fontSize: 32, color: "primary.main", opacity: 5 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Find Tasks
            </Typography>
            <Typography color="text.secondary">
              Browse hundreds of available tasks in various categories
            </Typography>
          </Paper>

          <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
            <Box
              sx={{
                bgcolor: "secondary.light",
                opacity: 0.2,
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <MapPinIcon sx={{ fontSize: 32, color: "secondary.main", opacity: 5 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Local & Convenient
            </Typography>
            <Typography color="text.secondary">
              Find tasks near you with our location-based filtering
            </Typography>
          </Paper>

          <Paper sx={{ p: 3, textAlign: "center", height: "100%" }}>
            <Box
              sx={{
                bgcolor: "success.light",
                opacity: 0.2,
                width: 64,
                height: 64,
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: "auto",
                mb: 2,
              }}
            >
              <DollarSignIcon sx={{ fontSize: 32, color: "success.main", opacity: 5 }} />
            </Box>
            <Typography variant="h5" fontWeight={600} gutterBottom>
              Earn Money
            </Typography>
            <Typography color="text.secondary">
              Apply for tasks and get paid for your skills and time
            </Typography>
          </Paper>
        </Box>
      </Container>
    </Box>
  );
};

export default Index;
