import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { store, persistor } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

const queryClient = new QueryClient();
ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <PersistGate loading="null" persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById("root")
);
