import React from "react";
import MRouter from "./router/MRouter";
import NMRouter from "./router/NMRouter";
import { useAuthData } from "./store/storeFuncs";

const getRouter = (authenticated: boolean) => {
  if (authenticated) {
    return <MRouter />;
  } else {
    return <NMRouter />;
  }
};

const App: React.FC = () => {
  const { authenticated } = useAuthData();
  const router = getRouter(authenticated);

  return <div className="App">{router}</div>;
};

export default App;
