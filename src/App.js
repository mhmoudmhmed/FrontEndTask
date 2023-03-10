import React, { Suspense } from "react";
import "./variables.scss";

const Product = React.lazy(() => import("./pages/singleProduct"));

function App() {
  return (
    <Suspense>
      <Product />
    </Suspense>
  );
}

export default App;
