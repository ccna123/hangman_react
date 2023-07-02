import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Playground } from "./components/Playground";
import { Home } from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <div className="App overflow-auto font-mono flex justify-center items-center bg-gradient-to-r min-w-max min-h-max from-cyan-300 to-blue-300 w-full h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
