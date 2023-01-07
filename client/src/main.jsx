import React from "react"
import ReactDOM from "react-dom/client"
import { ContextProvider } from "./Contexts/ContextProvider"
import axios from "axios"

import App from "./App"
import "./index.css"

// axios.defaults.baseURL = ""

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<App />
	</ContextProvider>
)
