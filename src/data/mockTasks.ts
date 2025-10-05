export interface Task {
  id: string;
  title: string;
  description: string;
  location: string;
  city: string;
  date: string;
  status: "open" | "assigned" | "completed";
  budget: number;
  currency: string;
  isUrgent: boolean;
  category: string;
  images?: string[];
  posterName: string;
  posterInitials: string;
  coordinates: { lat: number; lng: number };
}

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Plumbing Repair - Leaking Kitchen Sink",
    description: "Kitchen sink has been leaking for the past few days. Need a professional plumber to fix it as soon as possible. The leak is coming from under the sink and has started to damage the cabinet.",
    location: "Downtown, Manhattan",
    city: "New York",
    date: "2025-10-06",
    status: "open",
    budget: 150,
    currency: "USD",
    isUrgent: true,
    category: "Plumber",
    posterName: "Sarah Johnson",
    posterInitials: "SJ",
    coordinates: { lat: 40.7580, lng: -73.9855 }
  },
  {
    id: "2",
    title: "Furniture Assembly - IKEA Wardrobe",
    description: "Need help assembling a large IKEA wardrobe. All parts are available. Should take around 2-3 hours for someone experienced.",
    location: "Brooklyn Heights",
    city: "New York",
    date: "2025-10-08",
    status: "open",
    budget: 80,
    currency: "USD",
    isUrgent: false,
    category: "Furniture Assembly",
    posterName: "Michael Chen",
    posterInitials: "MC",
    coordinates: { lat: 40.6958, lng: -73.9960 }
  },
  {
    id: "3",
    title: "Electrical Work - Install Ceiling Fan",
    description: "Looking for a licensed electrician to install a ceiling fan in the living room. Fan is already purchased. Need someone who can do it this weekend.",
    location: "Queens Village",
    city: "New York",
    date: "2025-10-07",
    status: "assigned",
    budget: 200,
    currency: "USD",
    isUrgent: false,
    category: "Electrician",
    posterName: "David Martinez",
    posterInitials: "DM",
    coordinates: { lat: 40.7282, lng: -73.7949 }
  },
  {
    id: "4",
    title: "Home Cleaning Service Needed",
    description: "Need a thorough cleaning of a 2-bedroom apartment before moving in. Should include kitchen, bathrooms, floors, and windows.",
    location: "Upper West Side",
    city: "New York",
    date: "2025-10-05",
    status: "open",
    budget: 120,
    currency: "USD",
    isUrgent: true,
    category: "Home Cleaning",
    posterName: "Emily Rodriguez",
    posterInitials: "ER",
    coordinates: { lat: 40.7870, lng: -73.9754 }
  },
  {
    id: "5",
    title: "Moving Help - Studio Apartment",
    description: "Need 2 people to help move from a studio apartment to another building nearby. Not much furniture, mostly boxes. Truck not needed.",
    location: "East Village",
    city: "New York",
    date: "2025-10-10",
    status: "open",
    budget: 100,
    currency: "USD",
    isUrgent: false,
    category: "Moving",
    posterName: "Alex Thompson",
    posterInitials: "AT",
    coordinates: { lat: 40.7264, lng: -73.9818 }
  },
  {
    id: "6",
    title: "Landscaping - Garden Cleanup",
    description: "Backyard needs cleaning and basic landscaping. Overgrown grass, weeds, and fallen leaves need to be cleared. Small yard approximately 500 sq ft.",
    location: "Staten Island",
    city: "New York",
    date: "2025-10-12",
    status: "completed",
    budget: 180,
    currency: "USD",
    isUrgent: false,
    category: "Landscape Design",
    posterName: "Patricia Williams",
    posterInitials: "PW",
    coordinates: { lat: 40.5795, lng: -74.1502 }
  },
  {
    id: "7",
    title: "Painting Interior Walls",
    description: "Need experienced painter to paint 2 bedrooms. Walls are already prepared. Paint is provided. Looking for clean, professional work.",
    location: "Bronx",
    city: "New York",
    date: "2025-10-09",
    status: "open",
    budget: 300,
    currency: "USD",
    isUrgent: false,
    category: "Building Works",
    posterName: "Robert Lee",
    posterInitials: "RL",
    coordinates: { lat: 40.8448, lng: -73.8648 }
  },
  {
    id: "8",
    title: "Dog Walking Service",
    description: "Need someone to walk my golden retriever twice a day for the next week while I'm recovering from surgery. Very friendly dog, good with leash.",
    location: "Chelsea",
    city: "New York",
    date: "2025-10-06",
    status: "open",
    budget: 25,
    currency: "USD",
    isUrgent: true,
    category: "Pet Care",
    posterName: "Jennifer Brown",
    posterInitials: "JB",
    coordinates: { lat: 40.7465, lng: -74.0014 }
  }
];

export const categories = [
  {
    group: "Repair and Maintenance",
    items: [
      "Home Master",
      "Plumber",
      "Electrician",
      "Minor Repairs",
      "Appliance Installation",
      "Security Systems"
    ]
  },
  {
    group: "Construction and Renovation",
    items: [
      "Building Works",
      "Repair Works",
      "Demolition",
      "Facade Works",
      "Fence Construction",
      "Ceiling Work",
      "Flooring",
      "Window/Door Installation",
      "Ventilation Systems"
    ]
  },
  {
    group: "Landscaping and Furniture",
    items: [
      "Landscape Design",
      "Furniture Repair",
      "Furniture Assembly",
      "Furniture Cleaning",
      "Home Cleaning",
      "Office Cleaning",
      "Window Cleaning"
    ]
  },
  {
    group: "Moving and Delivery",
    items: [
      "Moving",
      "Cargo Transportation",
      "Loading Services",
      "Waste Disposal",
      "Courier Delivery"
    ]
  },
  {
    group: "Miscellaneous Services",
    items: [
      "Pet Care",
      "Curtain Installation",
      "Photo/Video Services",
      "Event Planning",
      "Clothing Repair",
      "Bicycle Repair"
    ]
  },
  {
    group: "Business Services",
    items: [
      "Office Cleaning",
      "Office Repair",
      "Equipment Repair",
      "Video Surveillance",
      "Outdoor Advertising",
      "Marketing Services"
    ]
  }
];
