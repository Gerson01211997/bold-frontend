import Header from "@/components/Header";
import { TranslationProvider } from "@/contexts/TranslationContext";

function AppProvider({ children }: { children: React.ReactNode }) {
  return (
    <TranslationProvider>
      <Header />
      {children}
    </TranslationProvider>
  );
}

export default AppProvider;
