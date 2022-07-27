import React from "react";
import Escena from "./components/escena/Escena";
import Stories from "./components/escena/Stories";
import Box from "./components/escena/Styled";

function App() {

  const Story = Stories.map(param => {
    return(
        <Box>
          <Escena param={param}
          /> 
        </Box>
    )
  })
  return (
    <div>
      {Story}
    </div>
 );
}
export default App;