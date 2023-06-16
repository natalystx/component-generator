import React from "react";
import Button from "./components/Button";
import Chip from "./components/Chip";

const App = () => {
  return (
    <div>
      <p className="text-red-500">Te</p>
      <Button onClick={() => alert("mom")}>test</Button>
      <Chip variant="outlined" size="small" color="info">
        hi mom
      </Chip>
    </div>
  );
};

export default App;
