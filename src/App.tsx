import {BrowserRouter, Route, Routes} from "react-router-dom";
import {TerminalPage} from "./TerminalPage/components/TerminalPage.tsx";
import {XPPage} from "./XPPage/XPPage.tsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<TerminalPage />} />
        <Route path={"xp"} element={<XPPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
