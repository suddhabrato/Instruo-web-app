import React from "react"
import ReactDOM from "react-dom/client"
import { ContextProvider } from "./Contexts/ContextProvider"
import { BrowserRouter } from "react-router-dom"
import axios from "axios"

import App from "./App"
import "./index.css"

axios.defaults.baseURL = "https://instruo-webapp-server.onrender.com"

ReactDOM.createRoot(document.getElementById("root")).render(
	<ContextProvider>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</ContextProvider>
)
