import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Playground } from "./components/Playground";

function App() {
  return (
    <BrowserRouter>
      <div className="App overflow-auto font-mono bg-gradient-to-r min-w-max min-h-max from-cyan-300 to-blue-300 w-full h-screen">
        <Routes>
          <Route path="/" element={<Playground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
