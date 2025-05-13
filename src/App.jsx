import "./App.css";
import { router } from "./routes/routes";
import { RouterProvider } from "react-router-dom";
import { SidebarToggleContextProvider } from "./context/SidebarToggleContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import { store } from "./store";
import { InputSearchContextProvider } from "./context/InputSearchContext";

const Queryclient = new QueryClient();
function App() {
  return (
    <Provider store={store}>
      <QueryClientProvider client={Queryclient}>
        <SidebarToggleContextProvider>
        <InputSearchContextProvider>
          <RouterProvider router={router}></RouterProvider>
        </InputSearchContextProvider>
        </SidebarToggleContextProvider>
      </QueryClientProvider>
    </Provider>
  );
}

export default App;
