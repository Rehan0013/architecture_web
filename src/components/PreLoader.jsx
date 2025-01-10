import React, { useEffect } from "react";

const PreLoader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="preloader-container">
    </div>
  );
};

export default PreLoader;
