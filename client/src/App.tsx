import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { I18nProvider, useI18n } from "@/contexts/i18n-context";
import Home from "@/pages/home";
import NotFound from "@/pages/not-found";
import LoadingScreen from "@/components/loading-screen";

function Router() {
  const { isLoading, isInitialized } = useI18n();

  // Show loading screen while translations are being loaded
  if (isLoading || !isInitialized) {
    return <LoadingScreen />;
  }

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <I18nProvider>
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </I18nProvider>
    </QueryClientProvider>
  );
}

export default App;