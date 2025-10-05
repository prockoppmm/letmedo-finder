import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Search, MapPin, DollarSign } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-5xl font-bold text-foreground mb-4">
            Welcome to <span className="text-primary">LetMeDo</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Connect with skilled taskers in your area. Get things done, or earn money by helping others.
          </p>
          <Link to="/all-tasks">
            <Button size="lg" className="text-lg px-8">
              Browse Available Tasks
            </Button>
          </Link>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-16">
          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Find Tasks</h3>
            <p className="text-muted-foreground">
              Browse hundreds of available tasks in various categories
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="h-8 w-8 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Local & Convenient</h3>
            <p className="text-muted-foreground">
              Find tasks near you with our location-based filtering
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg border border-border text-center">
            <div className="bg-success/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="h-8 w-8 text-success" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Earn Money</h3>
            <p className="text-muted-foreground">
              Apply for tasks and get paid for your skills and time
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
