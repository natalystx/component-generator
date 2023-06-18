import React from "react";
import Button from "./components/Button";
import Chip from "./components/Chip";

const App = () => {
  return (
    <div>
      <p className="text-red-500">Te</p>
      <Button onClick={() => alert("mom")} icon="icon">
        test
      </Button>
      <Chip>hi mom</Chip>
    </div>
  );
};

export default App;
