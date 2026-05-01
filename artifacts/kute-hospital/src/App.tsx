import { Switch, Route, Router as WouterRouter, useLocation } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Layout } from "@/components/layout/Layout";
import NotFound from "@/pages/not-found";
import { AnimatePresence, motion } from "framer-motion";

// Page Imports
import Home from "@/pages/Home";
import About from "@/pages/About";
import Services from "@/pages/Services";
import Doctors from "@/pages/Doctors";
import Patients from "@/pages/Patients";
import Contact from "@/pages/Contact";

// Service Pages
import LaparoscopyPage from "@/pages/services/LaparoscopyPage";
import OrthopaedicPage from "@/pages/services/OrthopaedicPage";
import OncologyPage from "@/pages/services/OncologyPage";
import SuperSpecialityPage from "@/pages/services/SuperSpecialityPage";
import IcuPage from "@/pages/services/IcuPage";
import PathologyPage from "@/pages/services/PathologyPage";

const queryClient = new QueryClient();

function Router() {
  const [location] = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/services" component={Services} />
          
          <Route path="/services/laparoscopy" component={LaparoscopyPage} />
          <Route path="/services/orthopaedic" component={OrthopaedicPage} />
          <Route path="/services/oncology" component={OncologyPage} />
          <Route path="/services/super-speciality" component={SuperSpecialityPage} />
          <Route path="/services/icu" component={IcuPage} />
          <Route path="/services/pathology" component={PathologyPage} />
          
          <Route path="/doctors" component={Doctors} />
          <Route path="/patients" component={Patients} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Layout>
            <Router />
          </Layout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;