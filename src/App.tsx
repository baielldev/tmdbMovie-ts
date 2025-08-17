import { RouterProvider } from "react-router";
import { router } from "./routes/MainRoutes";
import AntdProviders from "./providers/AntdProviders";
import ReactQueryProviders from "./providers/ReactQueryProviders";

const App = () => {
  return (
    <AntdProviders>
      <ReactQueryProviders>
        <RouterProvider router={router} />
      </ReactQueryProviders>
    </AntdProviders>
  );
};

export default App;
