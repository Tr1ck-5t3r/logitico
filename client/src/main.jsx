import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/AppContext.jsx";

import { ClerkProvider } from "@clerk/clerk-react";
// Import your publishable key
const PUBLISHABLE_KEY = "pk_test_dGVuZGVyLXRhcGlyLTI3LmNsZXJrLmFjY291bnRzLmRldiQ"


if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}

import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById("root")).render(
		<ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
			<BrowserRouter>
				<AppProvider>
					<App />
				</AppProvider>
			</BrowserRouter>
		</ClerkProvider>
);
