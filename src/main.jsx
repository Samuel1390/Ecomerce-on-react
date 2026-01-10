import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./App";
import { OrderProvider } from "./components/context/OrderContext";
import { GlobalProvider } from "./components/context/GlobalContext";
import { FilterProvider } from "./components/context/FilterContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GlobalProvider>
      <FilterProvider>
        <OrderProvider>
          <App />
        </OrderProvider>
      </FilterProvider>
    </GlobalProvider>
  </StrictMode>
);
