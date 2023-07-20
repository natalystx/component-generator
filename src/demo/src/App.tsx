import React from "react";
import Button from "./components/Button";
import Chip from "./components/Chip";
import Avatar from "./components/Avatar";

const App = () => {
  return (
    <div>
      <p className="text-red-500">Te</p>
      <Button onClick={() => alert("mom")} icon="mom" disabled>
        hi
      </Button>
      <Chip>hi mom</Chip>
      <Avatar
        size="medium"
        image="https://images.pexels.com/photos/15767257/pexels-photo-15767257/free-photo-of-a-woman-standing-by-a-wall.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
      />
    </div>
  );
};

export default App;
