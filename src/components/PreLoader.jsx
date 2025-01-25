import React, { useEffect } from "react";
import { grid } from "ldrs";

grid.register();
const PreLoader = ({ setLoading }) => {
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, [setLoading]);

  return (
    <div className="preloader-container">
      <l-grid size="120" speed="1.3" color="white"></l-grid>
    </div>
  );
};

export default PreLoader;
