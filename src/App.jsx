import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import PageTitle from "./components/PageTitle";
import ImageSlider from "./components/ImageSlider";
import PreLoader from "./components/PreLoader";

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading ? (
        <PreLoader setLoading={setLoading} />
      ) : (
        <>
          <PageTitle title="Company Name" />
          <Header />
          <ImageSlider />
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
