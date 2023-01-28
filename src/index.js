import React from "react";
import { createRoot } from "react-dom/client";

import Modal from "./Modal";

const Root = () => {
  return (
    <React.StrictMode>
      <Modal />
    </React.StrictMode>
  );
};

createRoot(document.getElementById("root")).render(<Root />);
