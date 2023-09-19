import { useState } from "react";

import "./App.css";
import { List } from "./List";
import { Form } from "./Form";

const App = () => {
  const [userArg, setUserArg] = useState(["Suneeta", "Nick"]);

  const addUser = (user) => {
    setUserArg([...userArg, user]);
  };
  return (
    <div>
      <Form addUse={addUser} />
      <List userArg={userArg} />
    </div>
  );
};

export default App;
