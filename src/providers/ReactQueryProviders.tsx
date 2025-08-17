import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { type FC, type ReactNode } from "react";

interface IReactQueryProviderProps {
  children: ReactNode;
}

const queryClient = new QueryClient();
const ReactQueryProviders: FC<IReactQueryProviderProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
export default ReactQueryProviders;
