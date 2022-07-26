import { BrowserRouter } from "react-router-dom";
import MainRouter from "./routes";

export default function App() {
    return (
        <BrowserRouter>
            <MainRouter />
        </BrowserRouter>
    );
}
