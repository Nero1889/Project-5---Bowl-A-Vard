import {StrictMode} from "react"
import {createRoot} from "react-dom/client"
import "./style.css"
import "./utils.css"
import "./header.css"
import Header from "./Header.jsx"

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <Header/>
    </StrictMode>
)

/* Project Started May 13th, 2025 */