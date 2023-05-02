import React from "react";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom.min";
import AppContent from "components/AppContent";

const App = () => {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>

  );
}

export default App;
