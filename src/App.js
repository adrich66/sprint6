import React from "react";
import Escena from "./components/escena/Escena";
import Stories from "./Stories";

function App() {

  const Story = Stories.map(param => {
    return(
      <Escena param={param}
      />
    )
  })
  return (
    <div>
      {Story}
    </div>
 );
}
export default App;