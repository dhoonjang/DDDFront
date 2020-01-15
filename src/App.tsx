import React from "react";
import MRouther from "./router/MRouter";
import NMRouther from "./router/NMRouter";
import { useAuthData } from "./store/storeFuncs";

const getRouter = (authenticated: boolean) => {
  if (authenticated) {
    return <MRouther />;
  } else {
    return <NMRouther />;
  }
};

const App: React.FC = () => {
  const { authenticated } = useAuthData();
  const router = getRouter(authenticated);

  return <div className="App">{router}</div>;
};

export default App;
