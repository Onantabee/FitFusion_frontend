import React, { useState } from "react";
import "./index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import FormContainer from "./components/FormContainer";
import OverlayPanel from "./components/OverlayPanel";

const App = () => {
  const [isRightPanelActive, setIsRightPanelActive] = useState(false);

  return (
    <div
      className={`container ${isRightPanelActive ? "right-panel-active" : ""}`}
      id="container"
    >
      <FormContainer
        type="register"
        setIsRightPanelActive={setIsRightPanelActive}
      />
      <FormContainer
        type="login"
        setIsRightPanelActive={setIsRightPanelActive}
      />
      <OverlayPanel
        isRightPanelActive={isRightPanelActive}
        onLoginClick={() => setIsRightPanelActive(false)}
        onRegisterClick={() => setIsRightPanelActive(true)}
      />
    </div>
  );
};

export default App;
